'use client'

import Link from 'next/link'
import { ArrowRight, Star, Clock, Award, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import MotionWrapper from '@/components/MotionWrapper'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Tort de nuntă",
      subtitle: "Creații unice pentru momentele speciale",
      icon: <Heart className="w-12 h-12 text-primary-500" />,
      bgColor: "from-primary-200 to-secondary-200"
    },
    {
      title: "Prăjituri artizanale",
      subtitle: "Gusturi autentice preparate cu pasiune",
      icon: <Award className="w-12 h-12 text-warm-600" />,
      bgColor: "from-warm-200 to-warm-300"
    },
    {
      title: "Brioșe proaspete",
      subtitle: "Arome delicate pentru începutul zilei",
      icon: <Star className="w-12 h-12 text-secondary-600" />,
      bgColor: "from-secondary-200 to-accent-200"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-warm-50 to-secondary-50">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ef7f3a' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-sm font-medium text-primary-600">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Cofetărie artizanală din 2019
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Deserturi care{' '}
                <span className="text-gradient bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  îți fac ziua
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Fiecare desert este o poveste de pasiune, creată cu ingrediente premium 
                și multă dragoste. Descoperă gusturile autentice ale Cofetăriei Michelle.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/comanda" className="group relative overflow-hidden bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center">
                  <span className="relative z-10 flex items-center justify-center">
                    Comandă acum
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link href="/produse" className="group border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Vezi produsele
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-sm text-gray-600">Clienți mulțumiți</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">1000+</div>
                  <div className="text-sm text-gray-600">Deserturi create</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">4.9★</div>
                  <div className="text-sm text-gray-600">Rating mediu</div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative">
                {/* Carusel de imagini */}
                <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Slide-uri */}
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor} flex items-center justify-center transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="text-center text-gray-500">
                        <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                          {slide.icon}
                        </div>
                        <p className="text-lg font-medium">{slide.title}</p>
                        <p className="text-sm">{slide.subtitle}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Butoane de navigare */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Slide anterior"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Slide următor"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  </button>
                  
                  {/* Indicatori */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentSlide 
                            ? 'bg-white scale-125' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Mergi la slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cum creăm deserturile noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fiecare desert trece prin un proces atent de selecție a ingredientelor, 
              preparare și finisare, pentru a te bucura de gustul perfect.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Selecția ingredientelor",
                description: "Alegem doar ingrediente de cea mai bună calitate, de la furnizori de încredere",
                icon: <Heart className="w-8 h-8" />
              },
              {
                step: "02", 
                title: "Prepararea artizanală",
                description: "Fiecare desert este preparat manual, cu atenție la detalii și multă pasiune",
                icon: <Award className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Controlul calității",
                description: "Testăm fiecare desert pentru a ne asigura că îndeplinește standardele noastre",
                icon: <Star className="w-8 h-8" />
              },
              {
                step: "04",
                title: "Livrarea cu dragoste",
                description: "Împachetăm cu grijă și livrăm deserturile tale cu multă dragoste",
                icon: <Clock className="w-8 h-8" />
              }
            ].map((item, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary-600 mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produsele noastre populare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Descoperă cele mai apreciate deserturi ale noastre, preparate cu ingrediente de calitate superioară.
            </p>
            <Link href="/produse" className="btn-outline">
              Vezi toate produsele
            </Link>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.featuredProducts.map((product, index) => (
              <MotionWrapper
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProductCard product={product} />
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              De ce să alegi Cofetaria Michelle?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suntem mai mult decât o cofetărie - suntem creatorii momentelor tale speciale.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Pasiune pentru detalii",
                description: "Fiecare desert este creat cu atenție la cele mai mici detalii, pentru a depăși așteptările tale.",
                color: "from-red-500 to-pink-500"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Ingrediente premium",
                description: "Folosim doar ingrediente de cea mai bună calitate, importate direct de la furnizori de încredere.",
                color: "from-yellow-500 to-orange-500"
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Proaspăt zilnic",
                description: "Toate produsele sunt preparate zilnic în cofetăria noastră, garantând prospețimea perfectă.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: <Star className="w-12 h-12" />,
                title: "Experiență de 5 ani",
                description: "Cu peste 5 ani de experiență, știm exact cum să creăm deserturile perfecte pentru orice ocazie.",
                color: "from-purple-500 to-indigo-500"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Personalizare completă",
                description: "Fiecare tort poate fi personalizat după preferințele tale, de la design la ingrediente.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: <Award className="w-12 h-12" />,
                title: "Livrare rapidă",
                description: "Livrăm în toată Bucureștiul în maximum 2 ore, păstrând calitatea și prospețimea produselor.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((item, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center px-4 sm:px-6 lg:px-8">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Pregătit să comanzi?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactează-ne acum pentru a comanda deserturile tale preferate sau pentru a discuta despre tortul perfect pentru ocazia ta specială.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Sună-ne: {siteConfig.phone}
              </a>
              <Link
                href="/comanda"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Comandă online
              </Link>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  )
}
