import { NextRequest, NextResponse } from 'next/server'
import { siteConfig } from '@/config/site'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const requiredFields = ['name', 'phone', 'email', 'product', 'date', 'time']
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

    // Find the selected product
    const selectedProduct = siteConfig.products.find(p => p.id === parseInt(body.product))
    if (!selectedProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 400 }
      )
    }

    // Validate date (should not be in the past)
    const selectedDate = new Date(body.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) {
      return NextResponse.json(
        { error: 'Selected date cannot be in the past' },
        { status: 400 }
      )
    }

    // Create order object
    const order = {
      id: `ORD-${Date.now()}`,
      customer: {
        name: body.name,
        phone: body.phone,
        email: body.email
      },
      product: {
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        category: selectedProduct.category
      },
      delivery: {
        method: body.delivery || 'pickup',
        address: body.delivery === 'delivery' ? body.address : siteConfig.address
      },
      schedule: {
        date: body.date,
        time: body.time
      },
      message: body.message || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      total: body.delivery === 'delivery' ? selectedProduct.price + 15 : selectedProduct.price
    }

    // In a real application, you would save this to a database
    console.log('New order received:', order)

    // Simulate sending email notification
    console.log('Sending email notification to:', siteConfig.email)
    console.log('Order details:', {
      customer: order.customer,
      product: order.product,
      total: order.total,
      schedule: order.schedule
    })

    // Return success response
    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Order submitted successfully. We will contact you soon to confirm the details.',
      order: {
        id: order.id,
        product: order.product.name,
        total: order.total,
        date: order.schedule.date,
        time: order.schedule.time
      }
    })

  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Orders API endpoint',
    methods: ['POST'],
    description: 'Submit new orders to Cofetaria Michelle'
  })
}
