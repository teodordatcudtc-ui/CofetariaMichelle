'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Download, Share2, Heart } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MotionWrapper from '@/components/MotionWrapper'
import AnimatePresenceWrapper from '@/components/AnimatePresenceWrapper'

const GaleriePage = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentCategory, setCurrentCategory] = useState('all')

  // Sample gallery images - replace with your actual images
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery/tort-1.jpg',
      alt: 'Tort de nuntă elegant',
      category: 'torturi',
      title: 'Tort de nuntă elegant'
    },
    {
      id: 2,
      src: '/images/gallery/tort-2.jpg',
      alt: 'Tort cu fructe proaspete',
      category: 'torturi',
      title: 'Tort cu fructe proaspete'
    },
    {
      id: 3,
      src: '/images/gallery/prajitura-1.jpg',
      alt: 'Ecler cu vanilie',
      category: 'prajituri',
      title: 'Ecler cu vanilie'
    },
    {
      id: 4,
      src: '/images/gallery/prajitura-2.jpg',
      alt: 'Profiterol cu ciocolată',
      category: 'prajituri',
      title: 'Profiterol cu ciocolată'
    },
    {
      id: 5,
      src: '/images/gallery/briosa-1.jpg',
      alt: 'Brioșă cu Nutella',
      category: 'briose',
      title: 'Brioșă cu Nutella'
    },
    {
      id: 6,
      src: '/images/gallery/briosa-2.jpg',
      alt: 'Croissant cu ciocolată',
      category: 'briose',
      title: 'Croissant cu ciocolată'
    },
    {
      id: 7,
      src: '/images/gallery/tort-3.jpg',
      alt: 'Tort Red Velvet',
      category: 'torturi',
      title: 'Tort Red Velvet'
    },
    {
      id: 8,
      src: '/images/gallery/prajitura-3.jpg',
      alt: 'Tiramisu clasic',
      category: 'prajituri',
      title: 'Tiramisu clasic'
    },
    {
      id: 9,
      src: '/images/gallery/briosa-3.jpg',
      alt: 'Brioșă cu căpșuni',
      category: 'briose',
      title: 'Brioșă cu căpșuni'
    },
    {
      id: 10,
      src: '/images/gallery/tort-4.jpg',
      alt: 'Tort Carrot Cake',
      category: 'torturi',
      title: 'Tort Carrot Cake'
    },
    {
      id: 11,
      src: '/images/gallery/prajitura-4.jpg',
      alt: 'Cheesecake cu fructe',
      category: 'prajituri',
      title: 'Cheesecake cu fructe'
    },
    {
      id: 12,
      src: '/images/gallery/briosa-4.jpg',
      alt: 'Brioșă cu migdale',
      category: 'briose',
      title: 'Brioșă cu migdale'
    }
  ]

  const categories = [
    { id: 'all', name: 'Toate', count: galleryImages.length },
    { id: 'torturi', name: 'Torturi', count: galleryImages.filter(img => img.category === 'torturi').length },
    { id: 'prajituri', name: 'Prăjituri', count: galleryImages.filter(img => img.category === 'prajituri').length },
    { id: 'briose', name: 'Brioșe', count: galleryImages.filter(img => img.category === 'briose').length }
  ]

  const filteredImages = currentCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === currentCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1)
    }
  }

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
              Galeria noastră
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Admiră creațiile noastre artizanale și lasă-te inspirat de frumusețea deserturilor noastre.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-30">
        <div className="container-custom py-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <MotionWrapper
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredImages.map((image, index) => (
              <MotionWrapper
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-200 to-secondary-200">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <div className="w-16 h-16 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Heart className="w-8 h-8 text-primary-500" />
                      </div>
                      <p className="text-sm font-medium">{image.title}</p>
                      <p className="text-xs">Placeholder</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <Download className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>
                <h3 className="mt-3 font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  {image.title}
                </h3>
              </MotionWrapper>
            ))}
          </MotionWrapper>

          {filteredImages.length === 0 && (
            <MotionWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
              </div>
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Nu există imagini în această categorie
              </h3>
              <p className="text-gray-600">
                Încearcă să selectezi o altă categorie.
              </p>
            </MotionWrapper>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresenceWrapper>
        {selectedImage !== null && (
          <MotionWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <MotionWrapper
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Închide"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Imaginea anterioară"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200"
                aria-label="Următoarea imagine"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-12 h-12 text-primary-500" />
                    </div>
                    <p className="text-lg font-medium">{filteredImages[selectedImage].title}</p>
                    <p className="text-sm">Placeholder Image</p>
                  </div>
                </div>
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 rounded-b-lg">
                  <h3 className="font-heading text-xl font-semibold mb-2">
                    {filteredImages[selectedImage].title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">
                      {selectedImage + 1} din {filteredImages.length}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => {
                          // Add download functionality
                          const link = document.createElement('a')
                          link.href = filteredImages[selectedImage].src
                          link.download = filteredImages[selectedImage].title
                          link.click()
                        }}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                        aria-label="Descarcă imaginea"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          // Add share functionality
                          if (navigator.share) {
                            navigator.share({
                              title: filteredImages[selectedImage].title,
                              text: `Admiră această creație de la ${siteConfig.name}`,
                              url: window.location.href
                            })
                          }
                        }}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
                        aria-label="Partajează imaginea"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </MotionWrapper>
        )}
      </AnimatePresenceWrapper>
    </div>
  )
}

export default GaleriePage
