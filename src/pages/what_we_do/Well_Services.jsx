import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wrench, Settings, Shield, Droplets, CheckCircle, Target, TrendingUp } from 'lucide-react'
import { useLocation, useSearchParams } from 'react-router-dom'
import ClientSection from '../../components/section/client_section'
import wellheadMaintenance1 from '../../assets/wellhead_maintenance/wellhead_maintenance1.jpeg'
import wellheadMaintenance2 from '../../assets/wellhead_maintenance/wellhead_maintenance2.jpeg'
import leakSealing1 from '../../assets/wellhead_leak_sealing/wellhead_sealing1.jpeg'
import leakSealing2 from '../../assets/wellhead_leak_sealing/wellhead_sealing2.jpeg'
import leakSealing3 from '../../assets/wellhead_leak_sealing/wellhead_sealing7.jpeg'

const Well_Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const location = useLocation()
  const [searchParams] = useSearchParams()
  
  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab')
    if (tabParam) {
      const tabIndex = parseInt(tabParam)
      if (tabIndex >= 0 && tabIndex < 4) {
        setActiveTab(tabIndex)
      }
    }
  }, [searchParams])
  
  const wellCategories = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Well Completion",
      description: "Comprehensive well completion services including casing, cementing, perforation, and production equipment installation to ensure optimal well performance and longevity.",
      features: [
        "Casing and Cementing Operations",
        "Perforation Services",
        "Production Equipment Installation",
        "Completion Design and Planning",
        "Well Testing and Evaluation"
      ],
      detailedContent: {
        overview: "Our well completion capabilities include coiled tubing, slickline, plug setting and milling, fluid pumping, nitrogen transport, flowback equipment, pressure control services, tanks and a wide range of ancillary rental equipment such as cranes, compressors, valves, and gas busters. We provide overall project design, equipment selection, accessory material preparation, project and operation reporting. We have established well completion project teams in each region in the Nigerian upstream oil and gas sector, employing a supply of experienced and qualified completion engineers.",
        services: [
          {
            title: "Coiled Tubing & Slickline Operations",
            description: "Professional coiled tubing and slickline services including plug setting and milling operations for well completion and intervention work."
          },
          {
            title: "Fluid Pumping & Nitrogen Transport",
            description: "Comprehensive fluid pumping services and nitrogen transport for well completion and stimulation operations with advanced equipment."
          },
          {
            title: "Pressure Control & Flowback Equipment",
            description: "Advanced pressure control services and flowback equipment for safe and efficient well completion operations with full safety protocols."
          },
          {
            title: "Project Design & Equipment Selection",
            description: "Complete project design, equipment selection, and accessory material preparation with comprehensive project and operation reporting."
          }
        ],
        benefits: [
          "Experienced and qualified completion engineers",
          "Regional project teams across Nigeria",
          "Comprehensive equipment and rental services",
          "Complete project design and reporting"
        ]
      }
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Well Intervention",
      description: "Advanced well intervention techniques and services to restore, enhance, or maintain well performance through specialized tools and methodologies.",
      features: [
        "Well Stimulation Services",
        "Remedial Operations",
        "Production Enhancement",
        "Well Integrity Solutions"
      ],
      detailedContent: {
        overview: "Our well intervention services encompass a comprehensive range of techniques designed to restore, enhance, or maintain well performance. We utilize specialized tools, advanced methodologies, and experienced personnel to address various well challenges and optimize production efficiency.",
        services: [
          {
            title: "Well Stimulation Services",
            description: "Advanced well stimulation techniques including acidizing, fracturing, and matrix treatments to enhance well productivity and reservoir performance."
          },
          {
            title: "Remedial Operations",
            description: "Specialized remedial operations to address well problems, restore production, and maintain optimal well performance through targeted intervention techniques."
          },
          {
            title: "Production Enhancement",
            description: "Comprehensive production enhancement services utilizing advanced technologies and methodologies to maximize well productivity and operational efficiency."
          },
          {
            title: "Well Integrity Solutions",
            description: "Professional well integrity assessment and restoration services to ensure safe and reliable well operations with comprehensive monitoring and maintenance."
          }
        ],
        benefits: [
          "Advanced intervention techniques",
          "Specialized tools and equipment",
          "Experienced intervention personnel",
          "Comprehensive well performance optimization"
        ]
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Well Head Maintenance",
      description: "Professional wellhead maintenance services to ensure optimal performance, safety, and regulatory compliance for oil and gas production operations.",
      features: [
        "Preventive Maintenance Programs",
        "Emergency Repair Services",
        "Regulatory Compliance",
        "Safety Inspections"
      ],
      detailedContent: {
        overview: "Our wellhead maintenance services provide comprehensive care for wellhead equipment to ensure optimal performance, safety, and regulatory compliance. We implement preventive maintenance programs, emergency repair services, and regular safety inspections to maintain the highest standards of operational excellence.",
        services: [
          {
            title: "Preventive Maintenance Programs",
            description: "Comprehensive preventive maintenance programs designed to extend equipment life, reduce downtime, and ensure optimal wellhead performance through scheduled inspections and servicing."
          },
          {
            title: "Emergency Repair Services",
            description: "Rapid response emergency repair services for critical wellhead issues, ensuring minimal downtime and maintaining safe operations with 24/7 availability."
          },
          {
            title: "Regulatory Compliance",
            description: "Full compliance with industry regulations and standards, including documentation, reporting, and certification services to meet all regulatory requirements."
          },
          {
            title: "Safety Inspections",
            description: "Thorough safety inspections and assessments of wellhead equipment to identify potential issues and ensure compliance with safety standards and best practices."
          }
        ],
        benefits: [
          "Extended equipment life",
          "Reduced operational downtime",
          "Full regulatory compliance",
          "Enhanced safety standards"
        ]
      }
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Leak Sealing & Greasing Valves",
      description: "Specialized leak sealing and valve greasing services using RS Clare's globally recognized advanced lubricants and application equipment.",
      features: [
        "RS Clare Patent Rights",
        "Advanced Lubricants",
        "Global Recognition",
        "Multi-Industry Expertise"
      ],
      detailedContent: {
        overview: "Calaya has a patent right from RS Clare, a globally recognized manufacturer of advanced lubricants, supplying high-performance greases and application equipment to the oil and gas, rail, marine, industrial and thermoplastics markets we serve. Calaya Engineering Services Limited are constantly evolving and adapting to the demands of our customers and the fluctuations of the Oil & Gas industry, demonstrating our flexibility and desire to provide seamless services.",
        services: [
          {
            title: "RS Clare Advanced Lubricants",
            description: "Utilizing RS Clare's globally recognized high-performance greases and advanced lubricant technology for superior valve maintenance and leak sealing."
          },
          {
            title: "Professional Application Equipment",
            description: "State-of-the-art application equipment from RS Clare for precise and efficient valve greasing and leak sealing operations."
          },
          {
            title: "Multi-Industry Expertise",
            description: "Comprehensive experience across oil and gas, rail, marine, industrial and thermoplastics markets, providing versatile solutions."
          },
          {
            title: "Adaptive Service Solutions",
            description: "Constantly evolving and adapting to customer demands and industry fluctuations, demonstrating flexibility and commitment to seamless service delivery."
          }
        ],
        benefits: [
          "RS Clare patent rights and global recognition",
          "High-performance greases and advanced lubricants",
          "Multi-industry market expertise",
          "Flexible and adaptive service approach"
        ]
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Well Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive well services for optimal performance and safety in oil and gas operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {wellCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === index
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-600 hover:border-red-300"
                }`}
              >
                <span className={`${activeTab === index ? "text-red-600" : "text-gray-400"}`}>
                  {category.icon}
                </span>
                <span className="font-medium text-sm sm:text-base">{category.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Service Overview */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {wellCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {wellCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {wellCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {wellCategories[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Detailed Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Overview */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Service Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {wellCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {wellCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Well Head Maintenance Images - Only for Well Head Maintenance tab */}
                {activeTab === 2 && (
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">Well Head Maintenance in Action</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage(wellheadMaintenance1)}
                      >
                        <img
                          src={wellheadMaintenance1}
                          alt="Well Head Maintenance Service 1"
                          className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h4 className="font-bold text-xl mb-2">Professional Well Head Maintenance</h4>
                          <p className="text-base text-white/90">Expert maintenance services ensuring optimal performance</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage(wellheadMaintenance2)}
                      >
                        <img
                          src={wellheadMaintenance2}
                          alt="Well Head Maintenance Service 2"
                          className="w-full h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <h4 className="font-bold text-xl mb-2">Safety & Compliance Focus</h4>
                          <p className="text-base text-white/90">Meeting highest safety and regulatory standards</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Leak Sealing Images - Only for Leak Sealing tab */}
                {activeTab === 3 && (
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Droplets className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">Leak Sealing & Valve Greasing in Action</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage(leakSealing1)}
                      >
                        <img
                          src={leakSealing1}
                          alt="Leak Sealing Service 1"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">RS Clare Advanced Lubricants</h4>
                          <p className="text-sm text-white/90">High-performance greases for superior sealing</p>
                        </div>
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage(leakSealing2)}
                      >
                        <img
                          src={leakSealing2}
                          alt="Leak Sealing Service 2"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">Professional Application</h4>
                          <p className="text-sm text-white/90">State-of-the-art equipment for precise operations</p>
                        </div>
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group lg:col-span-1"
                        onClick={() => setSelectedImage(leakSealing3)}
                      >
                        <img
                          src={leakSealing3}
                          alt="Leak Sealing Service 3"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">Multi-Industry Expertise</h4>
                          <p className="text-sm text-white/90">Versatile solutions across various markets</p>
                        </div>
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Benefits */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wellCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />

      {/* Image Modal/Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Well Head Maintenance - Full View"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full p-3 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Well_Services
