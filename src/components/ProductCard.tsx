'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Heart, Star } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

interface Product {
  id: number
  name: string
  description: string
  price: string | number
  image: string
  category?: string
  ingredients?: string[]
  allergens?: string[]
}

interface ProductCardProps {
  product: Product
  showCategory?: boolean
}

const ProductCard = ({ product, showCategory = false }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const formatPrice = (price: string | number) => {
    return typeof price === 'number' ? `${price} RON` : `${price} RON`
  }

  return (
    <MotionWrapper
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card group overflow-hidden h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-200 to-secondary-200 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-2">
              <Heart className="w-8 h-8 text-primary-500" />
            </div>
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-xs">Placeholder</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        
        {/* Like Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
          aria-label={isLiked ? 'Elimină din favorite' : 'Adaugă la favorite'}
        >
          <Heart 
            className={`w-4 h-4 transition-colors duration-200 ${
              isLiked ? 'text-red-500 fill-red-500' : 'text-gray-600'
            }`} 
          />
        </button>
        
        {/* Category Badge */}
        {showCategory && product.category && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
            {product.name}
          </h3>
          <div className="flex items-center space-x-1 ml-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600">4.9</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {/* Ingredients (if available) */}
        {product.ingredients && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Ingrediente:</p>
            <div className="flex flex-wrap gap-1">
              {product.ingredients.slice(0, 3).map((ingredient, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {ingredient}
                </span>
              ))}
              {product.ingredients.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{product.ingredients.length - 3} mai multe
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Allergens (if available) */}
        {product.allergens && product.allergens.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Alergeni:</p>
            <div className="flex flex-wrap gap-1">
              {product.allergens.slice(0, 2).map((allergen, index) => (
                <span
                  key={index}
                  className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full"
                >
                  {allergen}
                </span>
              ))}
              {product.allergens.length > 2 && (
                <span className="text-xs text-red-500">
                  +{product.allergens.length - 2}
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* Price and CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div className="text-2xl font-bold text-primary-600">
            {formatPrice(product.price)}
          </div>
          <Link
            href={`/comanda?product=${product.id}`}
            className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-all duration-200 transform hover:scale-110"
            aria-label={`Comandă ${product.name}`}
          >
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </MotionWrapper>
  )
}

export default ProductCard
