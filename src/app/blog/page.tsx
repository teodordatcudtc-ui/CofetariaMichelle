import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MotionWrapper from '@/components/MotionWrapper'

export const metadata: Metadata = {
  title: 'Blog - Cofetaria Michelle',
  description: 'Descoperă articole despre cofetărie, rețete, sfaturi culinare și noutăți de la Cofetaria Michelle.',
  openGraph: {
    title: 'Blog - Cofetaria Michelle',
    description: 'Descoperă articole despre cofetărie, rețete și sfaturi culinare.',
    images: ['/images/og-blog.jpg'],
  },
}

const BlogPage = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ro-RO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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
              Blogul nostru
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă articole despre cofetărie, rețete tradiționale, sfaturi culinare 
              și noutăți din lumea deserturilor.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Articolul recomandat
            </h2>
            
            <div className="card overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={siteConfig.blogPosts[0].image}
                    alt={siteConfig.blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-primary-100 text-primary-600 text-sm font-medium px-3 py-1 rounded-full">
                      {siteConfig.blogPosts[0].category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(siteConfig.blogPosts[0].date)}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {siteConfig.blogPosts[0].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {siteConfig.blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{siteConfig.blogPosts[0].author}</span>
                    </div>
                    <Link
                      href={`/blog/${siteConfig.blogPosts[0].slug}`}
                      className="btn-primary flex items-center"
                    >
                      Citește mai mult
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Toate articolele
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorează toate articolele noastre despre cofetărie, rețete și sfaturi culinare.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post, index) => (
    <MotionWrapper
      key={post.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card group overflow-hidden"
      as="article"
    >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.date)}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
                    Citește mai mult
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Abonează-te la newsletter
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Primește cele mai noi articole, rețete și oferte speciale direct în inbox-ul tău.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Adresa ta de email"
                  className="flex-1 px-4 py-3 rounded-full border-0 focus:ring-2 focus:ring-white/50 focus:outline-none"
                />
                <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                  Abonează-te
                </button>
              </div>
              <p className="text-white/70 text-sm mt-3">
                Nu vei primi spam. Te poți dezabona oricând.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Categorii
            </h2>
            <p className="text-xl text-gray-600">
              Explorează articolele după categorie
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Despre noi', 'Rețete', 'Calitate', 'Noutăți'].map((category, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                  {category}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {Math.floor(Math.random() * 10) + 1} articole
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
