import { Metadata } from 'next'
import Image from 'next/image'
import { Heart, Award, Users, Clock, Star, Quote } from 'lucide-react'
import { siteConfig } from '@/config/site'
import MotionWrapper from '@/components/MotionWrapper'

export const metadata: Metadata = {
  title: 'Despre noi - Cofetaria Michelle',
  description: 'Descoperă povestea Cofetăriei Michelle, valorile noastre și echipa pasionată care creează deserturile tale preferate.',
  openGraph: {
    title: 'Despre noi - Cofetaria Michelle',
    description: 'Descoperă povestea Cofetăriei Michelle, valorile noastre și echipa pasionată.',
    images: ['/images/og-about.jpg'],
  },
}

const DesprePage = () => {
  const stats = [
    { number: '500+', label: 'Clienți mulțumiți', icon: <Users className="w-8 h-8" /> },
    { number: '5+', label: 'Ani de experiență', icon: <Award className="w-8 h-8" /> },
    { number: '1000+', label: 'Deserturi create', icon: <Heart className="w-8 h-8" /> },
    { number: '4.9/5', label: 'Rating mediu', icon: <Star className="w-8 h-8" /> }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pasiune',
      description: 'Fiecare desert este creat cu multă dragoste și atenție la detalii. Pasiunea noastră se reflectă în fiecare gust.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Calitate',
      description: 'Folosim doar ingrediente de cea mai bună calitate și urmăm rețete tradiționale îmbunătățite cu tehnici moderne.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunitate',
      description: 'Suntem mândri să facem parte din comunitatea locală și să contribuim la momentele speciale ale clienților noștri.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Tradiție',
      description: 'Respectăm tradițiile culinare românești și le combinăm cu influențe moderne pentru a crea experiențe unice.'
    }
  ]

  const team = [
    {
      name: 'Michelle Popescu',
      role: 'Fondator & Șef Cofetar',
      image: '/images/team/michelle.jpg',
      description: 'Cu peste 10 ani de experiență în cofetărie, Michelle a pornit această afacere din pasiunea pentru deserturi.'
    },
    {
      name: 'Ana Ionescu',
      role: 'Cofetar Senior',
      image: '/images/team/ana.jpg',
      description: 'Ana se specializează în torturi personalizate și are un talent special pentru decoruri complexe.'
    },
    {
      name: 'Maria Dumitrescu',
      role: 'Specialist Prăjituri',
      image: '/images/team/maria.jpg',
      description: 'Maria este expertă în prăjituri tradiționale și înnoiește constant rețetele noastre.'
    }
  ]

  const testimonials = [
    {
      name: 'Elena Vasile',
      role: 'Clientă',
      content: 'Tortul pentru nunta mea a fost perfect! Michelle a înțeles exact ce voiam și a depășit așteptările. Recomand cu încredere!',
      rating: 5
    },
    {
      name: 'Alexandru Popescu',
      role: 'Client',
      content: 'Prăjiturile lor sunt pur și simplu delicioase. Ingredientele de calitate se simt în fiecare gust. Cofetăria mea preferată!',
      rating: 5
    },
    {
      name: 'Cristina Marin',
      role: 'Clientă',
      content: 'Serviciul excelent și deserturile minunate. Am comandat de multe ori și niciodată nu am fost dezamăgită. Mulțumesc!',
      rating: 5
    }
  ]

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="hero-gradient section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Povestea noastră
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Cofetaria Michelle a început ca o visiune simplă: să aducem bucuria deserturilor 
                delicioase în viața oamenilor. Cu pasiune, dedicare și ingrediente de calitate, 
                am crescut și am devenit o parte importantă a comunității noastre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="btn-primary"
                >
                  Contactează-ne
                </a>
                <a
                  href="/galerie"
                  className="btn-outline"
                >
                  Vezi galeria
                </a>
              </div>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Echipa Cofetăriei Michelle"
                  fill
                  className="object-cover"
                />
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </MotionWrapper>
            ))}
          </MotionWrapper>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acestea sunt principiile care ne ghidează în fiecare zi și ne ajută să oferim 
              experiențe culinare de excepție.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mx-auto mb-4 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Echipa noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cunoaște echipa pasionată care creează deserturile tale preferate cu multă 
              dragoste și experiență.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Ce spun clienții noștri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feedback-ul clienților noștri este cel mai important pentru noi. 
              Iată ce spun despre experiența lor cu Cofetaria Michelle.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionWrapper
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <p className="text-gray-600 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* Istoria Cofetăriei - Secțiune Interesantă */}
      <section className="section-padding bg-gradient-to-br from-warm-50 to-primary-50">
        <div className="container-custom">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Povestea noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la o pasiune de copil la o afacere de succes - descoperă cum a început totul.
            </p>
          </MotionWrapper>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionWrapper
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      Începuturile (2019)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Totul a început în bucătăria casei, unde Michelle prepara prăjituri pentru familia și prietenii. 
                      Pasiunea pentru cofetărie a fost moștenită de la bunica sa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      Primul client (2020)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Primul tort comandat a fost pentru o nuntă. Succesul a fost imediat - toți invitații 
                      au întrebat de unde vine tortul atât de delicios.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      Cofetăria (2021)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      În 2021 am deschis prima noastră cofetărie în București. Un spațiu mic, 
                      dar plin de dragoste și pasiune pentru deserturi.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      Astăzi (2024)
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Peste 500 de clienți mulțumiți, mii de deserturi create și o echipă pasionată 
                      care continuă să îmbunătățească rețetele noastre.
                    </p>
                  </div>
                </div>
              </div>
            </MotionWrapper>

            <MotionWrapper
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-12 h-12 text-primary-500" />
                    </div>
                    <p className="text-lg font-medium">Istoria Cofetăriei</p>
                    <p className="text-sm">Placeholder Image</p>
                  </div>
                </div>
                
                {/* Floating Quote */}
                <MotionWrapper
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl max-w-xs"
                >
                  <Quote className="w-8 h-8 text-primary-500 mb-3" />
                  <p className="text-gray-700 italic mb-3">
                    &ldquo;Fiecare desert spune o poveste de pasiune și dedicare.&rdquo;
                  </p>
                  <p className="text-sm text-gray-500 font-medium">- Michelle, Fondator</p>
                </MotionWrapper>
              </div>
            </MotionWrapper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center">
          <MotionWrapper
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Vrei să ne cunoști mai bine?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactează-ne pentru a discuta despre deserturile tale preferate sau pentru a programa o vizită la cofetăria noastră.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Sună-ne: {siteConfig.phone}
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Contactează-ne
              </a>
            </div>
          </MotionWrapper>
        </div>
      </section>
    </div>
  )
}

export default DesprePage
