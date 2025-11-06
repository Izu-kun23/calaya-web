'use client';
import React, { useEffect, useRef, useState } from 'react'

const ClientSection = () => {
  const [translateX, setTranslateX] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    let animationId
    const speed = 0.5 // Adjust speed as needed
    
    // Calculate responsive item width
    const getItemWidth = () => {
      const width = window.innerWidth
      if (width < 640) { // Mobile
        return 192 + 24 // w-48 (192px) + mx-3 (24px)
      } else { // Desktop
        return 224 + 48 // w-56 (224px) + mx-6 (48px)
      }
    }
    
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkMobile()
    
    const itemWidth = getItemWidth()
    const totalWidth = itemWidth * clients.length

    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - speed
        const currentItemWidth = getItemWidth()
        const currentTotalWidth = currentItemWidth * clients.length
        return newValue <= -currentTotalWidth ? 0 : newValue
      })
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Handle window resize
    const handleResize = () => {
      checkMobile()
      setTranslateX(0) // Reset position on resize
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Client data with actual logos - using public folder paths
  const clients = [
    { name: "Addax Petroleum", logo: "/assets/clients/addax_logo.jpg" },
    { name: "Afren", logo: "/assets/clients/afren_logo.jpg" },
    { name: "Amni International", logo: "/assets/clients/amni_logo.jpg" },
    { name: "Belema Oil", logo: "/assets/clients/belemaoil_logo.jpg" },
    { name: "Chevron", logo: "/assets/clients/chevron_logo.jpg" },
    { name: "EGBIN Power", logo: "/assets/clients/egbin_logo.jpg" },
    { name: "EG LNG", logo: "/assets/clients/eglng_logo.jpg" },
    { name: "ENAGEED", logo: "/assets/clients/enageed_logo.jpg" },
    { name: "Energia", logo: "/assets/clients/energia_logo.jpg" },
    { name: "Eroton", logo: "/assets/clients/eroton_logo.jpg" },
    { name: "ExxonMobil", logo: "/assets/clients/exxon_logo.jpg" },
    { name: "Fort Oil", logo: "/assets/clients/forteoil_logo.jpg" },
    { name: "HEOSL", logo: "/assets/clients/heosl_logo.jpg" },
    { name: "Julius Berger", logo: "/assets/clients/julius-berger_logo.jpg" },
    { name: "Marathon Oil", logo: "/assets/clients/marathon-oil_logo.jpg" },
    { name: "Moni Pulo", logo: "/assets/clients/moni_pulo_logo.jpg" },
    { name: "NAOC", logo: "/assets/clients/naoc_logo.jpg" },
    { name: "Nestoil", logo: "/assets/clients/nestoil_logo.jpg" },
    { name: "Niger Delta", logo: "/assets/clients/niger-delta_logo.jpg" },
    { name: "NDDC", logo: "/assets/clients/nddc_logo.jpg" },
    { name: "Nigerian Gas", logo: "/assets/clients/nigerian-gas_logo.jpg" },
    { name: "Oilserv", logo: "/assets/clients/oilserv_logo.png" },
    { name: "OES", logo: "/assets/clients/oes_logo.jpg" },
    { name: "Oriental Energy", logo: "/assets/clients/orientalenergy_logo.png" },
    { name: "Platform Petroleum", logo: "/assets/clients/platform_logo.png" },
    { name: "Saipem", logo: "/assets/clients/saipem.png" },
    { name: "SEEPCO", logo: "/assets/clients/seepco_logo.png" },
    { name: "Seplat", logo: "/assets/clients/seplat_logo.png" },
    { name: "Tenaris", logo: "/assets/clients/Tenaris_Logo.png" },
    { name: "Total", logo: "/assets/clients/total_logo.png" },
    { name: "Xwave", logo: "/assets/clients/xwave_logo.png" },
  ]

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We work with leading companies across the oil and gas industry
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex items-center"
            style={{ 
              transform: `translateX(${translateX}px)`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              perspective: '1000px'
            }}
          >
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 sm:w-56 sm:h-28 p-2 sm:p-4 mx-3 sm:mx-6"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-48 h-24 sm:w-56 sm:h-28 p-2 sm:p-4 mx-3 sm:mx-6"
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'translateZ(0)'
                }}
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-16 sm:max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientSection
