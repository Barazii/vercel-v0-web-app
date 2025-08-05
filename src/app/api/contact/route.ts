import { NextRequest, NextResponse } from 'next/server'
import { submitContactForm } from '@/lib/supabase'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  type: z.string().optional()
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Submit to Supabase
    const { data, error } = await submitContactForm(validatedData)
    
    if (error) {
      console.error('Contact form submission error:', error)
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to submit contact form' 
        },
        { status: 500 }
      )
    }

    // TODO: Send email notification to admin
    // TODO: Send confirmation email to user
    // TODO: Integrate with email service (SendGrid, etc.)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.',
        data: data 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Contact API error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid form data',
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
      message: 'Contact form submission endpoint',
      methods: ['POST'],
      body: {
        name: 'Your Name',
        email: 'user@example.com',
        subject: 'Inquiry about services',
        message: 'Your message here...',
        type: 'general (optional)'
      }
    },
    { status: 200 }
  )
}
