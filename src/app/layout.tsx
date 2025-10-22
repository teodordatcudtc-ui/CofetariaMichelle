import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cofetaria Michelle - Prăjituri și Torturi Artizanale',
    template: '%s | Cofetaria Michelle'
  },
  description: 'Descoperă gusturile autentice ale Cofetăriei Michelle. Prăjituri, torturi și dulciuri artizanale preparate cu pasiune în București.',
  keywords: ['cofetărie', 'prăjituri', 'torturi', 'deserturi', 'artizanale', 'București', 'Michelle'],
  authors: [{ name: 'Cofetaria Michelle' }],
  creator: 'Cofetaria Michelle',
  publisher: 'Cofetaria Michelle',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cofetaria-michelle.ro'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://cofetaria-michelle.ro',
    siteName: 'Cofetaria Michelle',
    title: 'Cofetaria Michelle - Prăjituri și Torturi Artizanale',
    description: 'Descoperă gusturile autentice ale Cofetăriei Michelle. Prăjituri, torturi și dulciuri artizanale preparate cu pasiune în București.',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Cofetaria Michelle - Prăjituri și Torturi Artizanale',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cofetaria Michelle - Prăjituri și Torturi Artizanale',
    description: 'Descoperă gusturile autentice ale Cofetăriei Michelle. Prăjituri, torturi și dulciuri artizanale preparate cu pasiune în București.',
    images: ['/images/og-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ef7f3a" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              "name": "Cofetaria Michelle",
              "description": "Cofetărie artizanală cu prăjituri și torturi delicioase, preparate cu ingrediente de calitate superioară în București.",
              "url": "https://cofetaria-michelle.ro",
              "telephone": "0723384312",
              "email": "contact@cofetaria-michelle.ro",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Șoseaua Berceni 35",
                "addressLocality": "București",
                "postalCode": "077160",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.4268",
                "longitude": "26.1025"
              },
              "openingHours": [
                "Mo-Fr 08:00-20:00",
                "Sa 08:00-18:00",
                "Su 09:00-16:00"
              ],
              "servesCuisine": "Romanian",
              "priceRange": "$$",
              "paymentAccepted": "Cash, Card",
              "currenciesAccepted": "RON",
              "sameAs": [
                "https://www.facebook.com/cofetaria.michelle.9/"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Deserturi Artizanale",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Torturi de nuntă"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Prăjituri artizanale"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Brioșe și croissante"
                    }
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  )
}