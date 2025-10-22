// Image configuration for Cofetaria Michelle
export const imageConfig = {
  // Placeholder service for development
  placeholder: 'https://via.placeholder.com',
  
  // Image dimensions
  dimensions: {
    hero: { width: 1200, height: 800 },
    product: { width: 400, height: 400 },
    gallery: { width: 600, height: 600 },
    team: { width: 300, height: 300 },
    blog: { width: 800, height: 400 },
    og: { width: 1200, height: 630 }
  },
  
  // Image quality settings
  quality: {
    hero: 90,
    product: 85,
    gallery: 80,
    team: 85,
    blog: 80,
    og: 90
  },
  
  // Image formats to use
  formats: ['image/webp', 'image/avif', 'image/jpeg'],
  
  // Fallback images
  fallbacks: {
    hero: '/images/hero-cake.jpg',
    product: '/images/products/placeholder.jpg',
    gallery: '/images/gallery/placeholder.jpg',
    team: '/images/team/placeholder.jpg',
    blog: '/images/blog/placeholder.jpg',
    og: '/images/og-home.jpg'
  }
}

// Helper function to generate placeholder URLs
export const getPlaceholderImage = (width, height, text = '') => {
  const baseUrl = imageConfig.placeholder
  const encodedText = encodeURIComponent(text)
  return `${baseUrl}/${width}x${height}?text=${encodedText}`
}

// Helper function to get optimized image props
export const getImageProps = (src, alt, type = 'product') => {
  const dimensions = imageConfig.dimensions[type] || imageConfig.dimensions.product
  const quality = imageConfig.quality[type] || imageConfig.quality.product
  
  return {
    src,
    alt,
    width: dimensions.width,
    height: dimensions.height,
    quality,
    placeholder: 'blur',
    blurDataURL: getPlaceholderImage(dimensions.width, dimensions.height, alt)
  }
}
