'use client'

import { useState, useEffect } from 'react'
import { Calendar, Clock, User, Phone, Mail, MessageSquare, ShoppingCart, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MotionWrapper from './MotionWrapper'

interface OrderFormProps {
  preselectedProduct?: number
}

const OrderForm = ({ preselectedProduct }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: preselectedProduct || '',
    date: '',
    time: '',
    message: '',
    delivery: 'pickup' // 'pickup' or 'delivery'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu'
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Format telefon invalid'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalid'
    }

    if (!formData.product) {
      newErrors.product = 'Selectează un produs'
    }

    if (!formData.date) {
      newErrors.date = 'Data este obligatorie'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Data nu poate fi în trecut'
      }
    }

    if (!formData.time) {
      newErrors.time = 'Ora este obligatorie'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would normally send the data to your API
      console.log('Order submitted:', formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting order:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      product: preselectedProduct || '',
      date: '',
      time: '',
      message: '',
      delivery: 'pickup'
    })
    setErrors({})
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <MotionWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
          Comanda a fost trimisă cu succes!
        </h3>
        <p className="text-gray-600 mb-6">
          Vă vom contacta în cel mai scurt timp pentru a confirma comanda și a discuta detaliile.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={resetForm}
            className="btn-primary"
          >
            Plasează altă comandă
          </button>
          <a
            href={`tel:${siteConfig.phone}`}
            className="btn-outline"
          >
            Sună-ne: {siteConfig.phone}
          </a>
        </div>
      </MotionWrapper>
    )
  }

  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="card p-8"
      as="form"
    >
      <div className="mb-8">
        <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
          Plasează comanda
        </h2>
        <p className="text-gray-600">
          Completează formularul de mai jos și te vom contacta pentru a confirma comanda.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            <User className="w-4 h-4 inline mr-2" />
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Introdu numele tău"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="0723 384 312"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="nume@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Product */}
        <div>
          <label htmlFor="product" className="block text-sm font-medium text-gray-700 mb-2">
            <ShoppingCart className="w-4 h-4 inline mr-2" />
            Produs *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.product ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Selectează un produs</option>
            {siteConfig.products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name} - {product.price} RON
              </option>
            ))}
          </select>
          {errors.product && (
            <p className="text-red-500 text-sm mt-1">{errors.product}</p>
          )}
        </div>

        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            Data dorită *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            min={new Date().toISOString().split('T')[0]}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date}</p>
          )}
        </div>

        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            Ora dorită *
          </label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 ${
              errors.time ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Selectează ora</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          {errors.time && (
            <p className="text-red-500 text-sm mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      {/* Delivery Method */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Metoda de livrare
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <input
              type="radio"
              name="delivery"
              value="pickup"
              checked={formData.delivery === 'pickup'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div>
              <div className="font-medium text-gray-900">Ridicare din cofetărie</div>
              <div className="text-sm text-gray-600">Șoseaua Berceni 35, București</div>
            </div>
          </label>
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors duration-200">
            <input
              type="radio"
              name="delivery"
              value="delivery"
              checked={formData.delivery === 'delivery'}
              onChange={handleInputChange}
              className="mr-3"
            />
            <div>
              <div className="font-medium text-gray-900">Livrare la domiciliu</div>
              <div className="text-sm text-gray-600">Cost suplimentar: 15 RON</div>
            </div>
          </label>
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          <MessageSquare className="w-4 h-4 inline mr-2" />
          Observații (opțional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
          placeholder="Ai vreo cerere specială sau observații pentru comanda ta?"
        />
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Se trimite...
            </div>
          ) : (
            'Trimite comanda'
          )}
        </button>
        
        <p className="text-sm text-gray-500 text-center mt-4">
          Prin trimiterea acestui formular, confirmi că ai citit și ești de acord cu{' '}
          <a href="/termeni-conditii" className="text-primary-600 hover:underline">
            termenii și condițiile
          </a>{' '}
          noastre.
        </p>
      </div>
    </MotionWrapper>
  )
}

export default OrderForm
