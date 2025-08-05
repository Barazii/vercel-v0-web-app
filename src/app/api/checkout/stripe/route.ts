import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { z } from 'zod'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-07-30.basil',
})

const checkoutSchema = z.object({
  serviceId: z.string(),
  customerInfo: z.object({
    name: z.string(),
    email: z.string().email(),
    phone: z.string().optional(),
    company: z.string().optional(),
    projectDetails: z.string(),
    timeline: z.string().optional(),
    budget: z.number()
  }),
  priceId: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { serviceId, customerInfo, priceId } = checkoutSchema.parse(body)

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Service: ${serviceId}`,
              description: `${customerInfo.projectDetails.substring(0, 100)}...`,
              metadata: {
                serviceId,
                customerName: customerInfo.name,
                customerEmail: customerInfo.email,
              }
            },
            unit_amount: customerInfo.budget * 100, // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: customerInfo.email,
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${serviceId}`,
      metadata: {
        serviceId,
        customerName: customerInfo.name,
        customerEmail: customerInfo.email,
        customerPhone: customerInfo.phone || '',
        company: customerInfo.company || '',
        projectDetails: customerInfo.projectDetails,
        timeline: customerInfo.timeline || '',
      }
    })

    // Store checkout session in database
    // TODO: Implement database storage for checkout sessions
    console.log('Checkout session created:', {
      sessionId: session.id,
      serviceId,
      customerInfo
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid request data', details: error.issues },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
