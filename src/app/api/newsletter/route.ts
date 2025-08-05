import { NextRequest, NextResponse } from 'next/server'
import { subscribeToNewsletter } from '@/lib/supabase'
import { z } from 'zod'

const subscriptionSchema = z.object({
  email: z.string().email('Invalid email address'),
  type: z.enum(['journalism', 'ecommerce']),
  source: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = subscriptionSchema.parse(body)
    const { email, type, source } = validatedData

    // Check if email is already subscribed
    const { data: existing, error: checkError } = await subscribeToNewsletter(email, type, source)
    
    if (checkError) {
      // If error is due to duplicate email, return success anyway for privacy
      if (checkError.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { 
            success: true, 
            message: 'Email subscription updated successfully',
            alreadySubscribed: true 
          },
          { status: 200 }
        )
      }
      
      console.error('Newsletter subscription error:', checkError)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to subscribe to newsletter' 
        },
        { status: 500 }
      )
    }

    // TODO: Add email verification logic here
    // TODO: Integrate with Mailchimp/ConvertKit if needed

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter!',
        data: existing 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Newsletter API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid request data',
          details: error.issues 
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { 
        success: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { 
      message: 'Newsletter subscription endpoint',
      methods: ['POST'],
      body: {
        email: 'user@example.com',
        type: 'journalism | ecommerce',
        source: 'website (optional)'
      }
    },
    { status: 200 }
  )
}
