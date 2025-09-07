import React, { useEffect, useRef, useState } from 'react'

// Import all client logos
import addaxLogo from '../../assets/clients/addax_logo.jpg'
import afrenLogo from '../../assets/clients/afren_logo.jpg'
import amniLogo from '../../assets/clients/amni_logo.jpg'
import belemaoilLogo from '../../assets/clients/belemaoil_logo.jpg'
import chevronLogo from '../../assets/clients/chevron_logo.jpg'
import egbinLogo from '../../assets/clients/egbin_logo.jpg'
import eglngLogo from '../../assets/clients/eglng_logo.jpg'
import enageedLogo from '../../assets/clients/enageed_logo.jpg'
import energiaLogo from '../../assets/clients/energia_logo.jpg'
import erotonLogo from '../../assets/clients/eroton_logo.jpg'
import exxonLogo from '../../assets/clients/exxon_logo.jpg'
import forteoilLogo from '../../assets/clients/forteoil_logo.jpg'
import heoslLogo from '../../assets/clients/heosl_logo.jpg'
import juliusBergerLogo from '../../assets/clients/julius-berger_logo.jpg'
import marathonOilLogo from '../../assets/clients/marathon-oil_logo.jpg'
import moniPuloLogo from '../../assets/clients/moni_pulo_logo.jpg'
import naocLogo from '../../assets/clients/naoc_logo.jpg'
import nestoilLogo from '../../assets/clients/nestoil_logo.jpg'
import nigerDeltaLogo from '../../assets/clients/niger-delta_logo.jpg'
import nddcLogo from '../../assets/clients/nddc_logo.jpg'
import nigerianGasLogo from '../../assets/clients/nigerian-gas_logo.jpg'
import oilservLogo from '../../assets/clients/oilserv_logo.png'
import oesLogo from '../../assets/clients/oes_logo.jpg'
import orientalEnergyLogo from '../../assets/clients/orientalenergy_logo.png'
import platformLogo from '../../assets/clients/platform_logo.png'
import saipemLogo from '../../assets/clients/saipem.png'
import seepcoLogo from '../../assets/clients/seepco_logo.png'
import seplatLogo from '../../assets/clients/seplat_logo.png'
import tenarisLogo from '../../assets/clients/Tenaris_Logo.png'
import totalLogo from '../../assets/clients/total_logo.png'
import xwaveLogo from '../../assets/clients/xwave_logo.png'

const ClientSection = () => {
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    let animationId
    const speed = 0.5 // Adjust speed as needed
    const itemWidth = 224 + 48 // w-56 (224px) + mx-6 (48px)
    const totalWidth = itemWidth * clients.length

    const animate = () => {
      setTranslateX(prev => {
        const newValue = prev - speed
        return newValue <= -totalWidth ? 0 : newValue
      })
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  // Client data with actual logos
  const clients = [
    { name: "Addax Petroleum", logo: addaxLogo },
    { name: "Afren", logo: afrenLogo },
    { name: "Amni International", logo: amniLogo },
    { name: "Belema Oil", logo: belemaoilLogo },
    { name: "Chevron", logo: chevronLogo },
    { name: "EGBIN Power", logo: egbinLogo },
    { name: "EG LNG", logo: eglngLogo },
    { name: "ENAGEED", logo: enageedLogo },
    { name: "Energia", logo: energiaLogo },
    { name: "Eroton", logo: erotonLogo },
    { name: "ExxonMobil", logo: exxonLogo },
    { name: "Fort Oil", logo: forteoilLogo },
    { name: "HEOSL", logo: heoslLogo },
    { name: "Julius Berger", logo: juliusBergerLogo },
    { name: "Marathon Oil", logo: marathonOilLogo },
    { name: "Moni Pulo", logo: moniPuloLogo },
    { name: "NAOC", logo: naocLogo },
    { name: "Nestoil", logo: nestoilLogo },
    { name: "Niger Delta", logo: nigerDeltaLogo },
    { name: "NDDC", logo: nddcLogo },
    { name: "Nigerian Gas", logo: nigerianGasLogo },
    { name: "Oilserv", logo: oilservLogo },
    { name: "OES", logo: oesLogo },
    { name: "Oriental Energy", logo: orientalEnergyLogo },
    { name: "Platform Petroleum", logo: platformLogo },
    { name: "Saipem", logo: saipemLogo },
    { name: "SEEPCO", logo: seepcoLogo },
    { name: "Seplat", logo: seplatLogo },
    { name: "Tenaris", logo: tenarisLogo },
    { name: "Total", logo: totalLogo },
    { name: "Xwave", logo: xwaveLogo },
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
              willChange: 'transform'
            }}
          >
            {/* First set of clients */}
            {clients.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-56 h-28 p-4 mx-6"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-56 h-28 p-4 mx-6"
              >
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="max-h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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
