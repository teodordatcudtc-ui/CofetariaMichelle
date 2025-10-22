import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message']
    const missingFields = requiredFields.filter(field => !body[field])
    
    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: 'Missing required fields', 
          missingFields 
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate phone format
    const phoneRegex = /^[0-9+\-\s()]+$/
    if (!phoneRegex.test(body.phone)) {
      return NextResponse.json(
        { error: 'Invalid phone format' },
        { status: 400 }
      )
    }

    // Create contact message object
    const contactMessage = {
      id: `MSG-${Date.now()}`,
      customer: {
        name: body.name,
        email: body.email,
        phone: body.phone
      },
      subject: body.subject,
      message: body.message,
      status: 'new',
      createdAt: new Date().toISOString()
    }

    // In a real application, you would save this to a database
    console.log('New contact message received:', contactMessage)

    // Simulate sending email notification
    console.log('Sending email notification to:', siteConfig.email)
    console.log('Contact message details:', {
      from: contactMessage.customer,
      subject: contactMessage.subject,
      message: contactMessage.message
    })

    // Return success response
    return NextResponse.json({
      success: true,
      messageId: contactMessage.id,
      message: 'Message sent successfully. We will get back to you soon!'
    })

  } catch (error) {
    console.error('Error processing contact message:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Contact API endpoint',
    methods: ['POST'],
    description: 'Submit contact messages to Cofetaria Michelle'
  })
}
