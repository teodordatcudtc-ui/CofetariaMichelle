'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Metadata } from 'next'
import Image from 'next/image'
import { Search, Filter, Grid, List } from 'lucide-react'
import { siteConfig } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import MotionWrapper from '@/components/MotionWrapper'

// Note: Metadata should be in a separate file for client components
// This is a workaround for the demo
const metadata: Metadata = {
  title: 'Produse - Cofetaria Michelle',
  description: 'Descoperă produsele complete ale Cofetăriei Michelle. Torturi, prăjituri și brioșe artizanale preparate cu ingrediente de calitate superioară.',
  openGraph: {
    title: 'Produse - Cofetaria Michelle',
    description: 'Descoperă produsele complete ale Cofetăriei Michelle. Torturi, prăjituri și brioșe artizanale.',
    images: ['/images/og-menu.jpg'],
  },
}

const ProdusePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [filteredProducts, setFilteredProducts] = useState(siteConfig.products)

  useEffect(() => {
    let filtered = siteConfig.products

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.ingredients?.some(ingredient =>
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, searchTerm])

  const categories = [
    { id: 'all', name: 'Toate produsele', count: siteConfig.products.length },
    ...siteConfig.categories.map(category => ({
      id: category.id,
      name: category.name,
      count: siteConfig.products.filter(p => p.category === category.id).length
    }))
  ]

  return (
    <div className="pt-16 lg:pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Produsele noastre
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descoperă toate produsele noastre artizanale, preparate cu ingrediente de calitate superioară și multă pasiune.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="container-custom py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Caută produse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Vizualizare grilă"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white text-primary-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                aria-label="Vizualizare listă"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {filteredProducts.length === 0 ? (
            <MotionWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Nu am găsit produse
              </h3>
              <p className="text-gray-600 mb-6">
                Încearcă să modifici filtrele sau termenii de căutare.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                }}
                className="btn-primary"
              >
                Resetează filtrele
              </button>
            </MotionWrapper>
          ) : (
            <div className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredProducts.map((product, index) => (
                <MotionWrapper
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {viewMode === 'grid' ? (
                    <ProductCard product={product} showCategory={true} />
                  ) : (
                    <div className="card p-6">
                      <div className="flex gap-6">
                        <div className="relative w-32 h-32 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-heading text-xl font-semibold text-gray-900">
                              {product.name}
                            </h3>
                            <div className="text-2xl font-bold text-primary-600">
                              {typeof product.price === 'number' ? `${product.price} RON` : `${product.price} RON`}
                            </div>
                          </div>
                          <p className="text-gray-600 mb-3">
                            {product.description}
                          </p>
                          {product.ingredients && (
                            <div className="mb-3">
                              <p className="text-sm text-gray-500 mb-1">Ingrediente:</p>
                              <div className="flex flex-wrap gap-1">
                                {product.ingredients.slice(0, 5).map((ingredient, idx) => (
                                  <span
                                    key={idx}
                                    className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                  >
                                    {ingredient}
                                  </span>
                                ))}
                                {product.ingredients.length > 5 && (
                                  <span className="text-xs text-gray-500">
                                    +{product.ingredients.length - 5} mai multe
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <span className="text-sm text-gray-500">Rating:</span>
                                <span className="text-sm font-medium text-gray-900">4.9/5</span>
                              </div>
                              <span className="text-sm bg-primary-100 text-primary-600 px-2 py-1 rounded-full">
                                {siteConfig.categories.find(c => c.id === product.category)?.name}
                              </span>
                            </div>
                            <button className="btn-primary">
                              Comandă
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </MotionWrapper>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Afișez {filteredProducts.length} din {siteConfig.products.length} produse
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProdusePage
