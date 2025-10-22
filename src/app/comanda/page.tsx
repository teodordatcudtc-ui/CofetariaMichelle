'use client'

import { useSearchParams } from 'next/navigation'
import { Metadata } from 'next'
import { ShoppingCart, Clock, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/config/site'
import OrderForm from '@/components/OrderForm'
import MotionWrapper from '@/components/MotionWrapper'

// Note: Metadata should be in a separate file for client components
const metadata: Metadata = {
  title: 'Comandă - Cofetaria Michelle',
  description: 'Plasează comanda ta la Cofetaria Michelle. Torturi, prăjituri și brioșe artizanale preparate cu ingrediente de calitate superioară.',
  openGraph: {
    title: 'Comandă - Cofetaria Michelle',
    description: 'Plasează comanda ta la Cofetaria Michelle. Torturi, prăjituri și brioșe artizanale.',
    images: ['/images/og-order.jpg'],
  },
}

const ComandaPage = () => {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get('product')

  const orderSteps = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'Selectează produsul',
      description: 'Alege din meniul nostru variat de torturi, prăjituri și brioșe'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Programează data',
      description: 'Alege data și ora când vrei să ridici comanda'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Confirmă comanda',
      description: 'Te vom contacta pentru a confirma detaliile comenzii'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Ridică comanda',
      description: 'Vino la cofetărie sau alegi livrarea la domiciliu'
    }
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
              Plasează comanda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comandă deserturile tale preferate în doar câțiva pași simpli. 
              Te vom contacta pentru a confirma comanda și a discuta detaliile.
            </p>
          </MotionWrapper>
        </div>
      </section>

      {/* Order Steps */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cum funcționează
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Procesul de comandă este simplu și rapid. Iată pașii pe care îi vei urma:
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderSteps.map((step, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    {step.icon}
                  </div>
                  {index < orderSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-8" />
                  )}
                </div>
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
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
              Ai întrebări?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dacă ai întrebări despre produsele noastre sau procesul de comandă, 
              nu ezita să ne contactezi.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Phone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Sună-ne
              </h3>
              <p className="text-gray-600 mb-4">
                Pentru comenzi rapide sau întrebări
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary flex-1 flex items-center justify-center whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Sună acum
                </a>
                <a
                  href={`https://wa.me/40${siteConfig.phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex-1 flex items-center justify-center whitespace-nowrap"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <MapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Vizitează-ne
              </h3>
              <p className="text-gray-600 mb-4">
                Cofetăria noastră din București
              </p>
              <p className="text-gray-700 font-medium">
                {siteConfig.address}
              </p>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <Clock className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                Program
              </h3>
              <p className="text-gray-600 mb-2">
                Luni - Sâmbătă: 08:00 - 20:00
              </p>
              <p className="text-gray-600">
                Duminică: 09:00 - 18:00
              </p>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <OrderForm preselectedProduct={preselectedProduct ? parseInt(preselectedProduct) : undefined} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Întrebări frecvente
            </h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la cele mai comune întrebări despre comenzile noastre.
            </p>
          </MotionWrapper>

          <div className="space-y-6">
            {[
              {
                question: 'Cât timp înainte trebuie să comand?',
                answer: 'Recomandăm să plasezi comanda cu cel puțin 24 de ore înainte, dar pentru torturi personalizate complexe, te rugăm să ne contactezi cu cel puțin 3-5 zile înainte.'
              },
              {
                question: 'Livrați la domiciliu?',
                answer: 'Da, oferim serviciu de livrare la domiciliu în București. Costul livrării este de 15 RON și se aplică pentru comenzi de peste 50 RON.'
              },
              {
                question: 'Pot anula comanda?',
                answer: 'Da, poți anula comanda cu cel puțin 4 ore înainte de ora programată. Pentru anulări de ultim moment, te rugăm să ne contactezi telefonic.'
              },
              {
                question: 'Ce metode de plată acceptați?',
                answer: 'Acceptăm plata în numerar la ridicarea comenzii sau prin transfer bancar înainte de livrare. Pentru comenzi mari, discutăm metodele de plată individual.'
              }
            ].map((faq, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComandaPage
