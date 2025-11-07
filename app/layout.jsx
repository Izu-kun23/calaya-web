import './globals.css'
import Navbar from '../src/components/navigation/navbar'
import Footer from '../src/components/footer/Footer'
import TopArrow from './components/TopArrowWrapper'

export const metadata = {
  title: 'Calaya Engineering - Premier Oil & Gas Services Since 2005',
  description: 'Leading multinational oil and gas engineering company operating across 7 countries. Expert services in procurement, civil engineering, facilities management, and technical manpower since 2005.',
  keywords: 'oil and gas engineering, procurement services, civil engineering, facilities management, technical manpower, pipeline construction, inspection services, corrosion management, well services, Nigeria, Equatorial Guinea, Congo, Malaysia, Mozambique, Angola, Spain',
  authors: [{ name: 'Calaya Engineering Services' }],
  openGraph: {
    type: 'website',
    url: 'https://calayaengineering.com/',
    title: 'Calaya Engineering - Premier Oil & Gas Services Since 2005',
    description: 'Leading multinational oil and gas engineering company operating across 7 countries. Expert services in procurement, civil engineering, facilities management, and technical manpower since 2005.',
    siteName: 'Calaya Engineering',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calaya Engineering - Premier Oil & Gas Services Since 2005',
    description: 'Leading multinational oil and gas engineering company operating across 7 countries. Expert services in procurement, civil engineering, facilities management, and technical manpower since 2005.',
  },
  themeColor: '#dc2626',
  // Browser tab icons for consistent branding
  icons: {
    icon: [
      { url: '/assets/tab_logo.png', sizes: '32x32' },
      { url: '/assets/tab_logo.png', sizes: '48x48' },
      { url: '/assets/tab_logo.png', sizes: '64x64' },
    ],
    shortcut: [
      { url: '/assets/tab_logo.png', sizes: '32x32' },
      { url: '/assets/tab_logo.png', sizes: '48x48' },
    ],
    apple: [
      { url: '/assets/tab_logo.png', sizes: '152x152' },
      { url: '/assets/tab_logo.png', sizes: '180x180' },
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts - Professional Font Pairings */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <TopArrow />
        </div>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Calaya Engineering Services",
              "alternateName": "Calaya Engineering",
              "url": "https://calayaengineering.com",
              "logo": "https://calayaengineering.com/logo.png",
              "description": "Leading multinational oil and gas engineering company operating across 7 countries since 2005.",
              "foundingDate": "2005",
              "industry": "Oil and Gas Engineering Services",
              "numberOfEmployees": "100+",
              "areaServed": [
                "Nigeria",
                "Equatorial Guinea", 
                "Congo",
                "Malaysia",
                "Mozambique",
                "Angola",
                "Spain"
              ],
              "serviceType": [
                "Procurement Services",
                "Civil Engineering",
                "Facilities Management", 
                "Technical Manpower",
                "Pipeline Construction",
                "Inspection Services",
                "Corrosion Management",
                "Well Services"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Spanish", "Portuguese", "French"]
              },
              "sameAs": [
                "https://linkedin.com/company/calaya-engineering",
                "https://twitter.com/calayaengineering"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}

