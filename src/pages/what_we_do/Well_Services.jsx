import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Wrench, Settings, Shield, Droplets, CheckCircle, Target, TrendingUp, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocation, useSearchParams } from 'react-router-dom'
import ClientSection from '../../components/section/client_section'
import wellheadMaintenance1 from '../../assets/wellhead_maintenance/wellhead_maintenance1.jpeg'
import wellheadMaintenance2 from '../../assets/wellhead_maintenance/wellhead_maintenance2.jpeg'
import leakSealing1 from '../../assets/wellhead_leak_sealing/wellhead_sealing1.jpeg'
import leakSealing2 from '../../assets/wellhead_leak_sealing/wellhead_sealing2.jpeg'
import leakSealing3 from '../../assets/wellhead_leak_sealing/wellhead_sealing7.jpeg'
import wellCompletion1 from '../../assets/well_services/Well_completion1.jpeg'
import wellCompletion2 from '../../assets/well_services/well_completion2.jpeg'
import wellIntervention1 from '../../assets/well_services/well_intervention1.jpeg'
import wellIntervention2 from '../../assets/well_services/well_intervention2.jpeg'
import wellIntervention3 from '../../assets/well_services/well_intervention3.jpeg'
import wellIntervention4 from '../../assets/well_services/well_intervention4.jpeg'
import wellIntervention5 from '../../assets/well_services/well_intervention5.jpeg'

const Well_Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
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

  // Gallery data arrays for different tabs
  const wellCompletionImages = [
    {
      id: 1,
      src: wellCompletion1,
      alt: "Well Completion Operations - Industrial Platform",
      title: "Professional Well Completion Operations",
      description: "Advanced completion services with specialized equipment and safety protocols",
      category: "Completion"
    },
    {
      id: 2,
      src: wellCompletion2,
      alt: "Well Completion Services - Equipment Installation",
      title: "Advanced Completion Equipment",
      description: "State-of-the-art equipment for casing, cementing, and production installation",
      category: "Equipment"
    }
  ]

  const wellInterventionImages = [
    {
      id: 1,
      src: wellIntervention1,
      alt: "Well Intervention Operations - Night Operations",
      title: "Night Operations Excellence",
      description: "24/7 well intervention capabilities with advanced lighting and safety protocols",
      category: "Operations"
    },
    {
      id: 2,
      src: wellIntervention2,
      alt: "Well Intervention - Heavy Equipment Operations",
      title: "Heavy Equipment Operations",
      description: "Advanced intervention rigs and specialized equipment for complex operations",
      category: "Equipment"
    },
    {
      id: 3,
      src: wellIntervention3,
      alt: "Well Intervention - Specialized Tools",
      title: "Specialized Intervention Tools",
      description: "Professional tools and techniques for precise well intervention operations",
      category: "Tools"
    },
    {
      id: 4,
      src: wellIntervention4,
      alt: "Well Intervention - Production Enhancement",
      title: "Production Enhancement",
      description: "Advanced techniques to maximize well productivity and operational efficiency",
      category: "Enhancement"
    },
    {
      id: 5,
      src: wellIntervention5,
      alt: "Well Intervention - Comprehensive Operations",
      title: "Comprehensive Well Intervention",
      description: "Complete intervention services from stimulation to integrity solutions",
      category: "Services"
    }
  ]

  const wellHeadMaintenanceImages = [
    {
      id: 1,
      src: wellheadMaintenance1,
      alt: "Well Head Maintenance Service 1",
      title: "Professional Well Head Maintenance",
      description: "Expert maintenance services ensuring optimal performance",
      category: "Maintenance"
    },
    {
      id: 2,
      src: wellheadMaintenance2,
      alt: "Well Head Maintenance Service 2",
      title: "Safety & Compliance Focus",
      description: "Meeting highest safety and regulatory standards",
      category: "Safety"
    }
  ]

  const leakSealingImages = [
    {
      id: 1,
      src: leakSealing1,
      alt: "Leak Sealing Service 1",
      title: "RS Clare Advanced Lubricants",
      description: "High-performance greases for superior sealing",
      category: "Lubricants"
    },
    {
      id: 2,
      src: leakSealing2,
      alt: "Leak Sealing Service 2",
      title: "Professional Application",
      description: "State-of-the-art equipment for precise operations",
      category: "Application"
    },
    {
      id: 3,
      src: leakSealing3,
      alt: "Leak Sealing Service 3",
      title: "Multi-Industry Expertise",
      description: "Versatile solutions across various markets",
      category: "Expertise"
    }
  ]

  // Get current gallery based on active tab
  const getCurrentGallery = () => {
    switch (activeTab) {
      case 0: return wellCompletionImages
      case 1: return wellInterventionImages
      case 2: return wellHeadMaintenanceImages
      case 3: return leakSealingImages
      default: return []
    }
  }

  // Gallery functions
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index)
    setSelectedImage(getCurrentGallery()[index])
    document.body.style.overflow = 'hidden'
  }, [activeTab])

  const closeModal = useCallback(() => {
    setSelectedImage(null)
    document.body.style.overflow = 'unset'
  }, [])

  const nextImage = useCallback(() => {
    const gallery = getCurrentGallery()
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % gallery.length)
    setSelectedImage(gallery[(currentImageIndex + 1) % gallery.length])
  }, [activeTab, currentImageIndex])

  const prevImage = useCallback(() => {
    const gallery = getCurrentGallery()
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + gallery.length) % gallery.length)
    setSelectedImage(gallery[(currentImageIndex - 1 + gallery.length) % gallery.length])
  }, [activeTab, currentImageIndex])

  // Keyboard navigation and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return
      
      switch (e.key) {
        case 'Escape':
          closeModal()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, closeModal, nextImage, prevImage])

  // Reset modal when tab changes
  useEffect(() => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = 'unset'
  }, [activeTab])

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

                {/* Well Completion Gallery - Only for Well Completion tab */}
                {activeTab === 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-16 lg:py-20 bg-white rounded-lg shadow-lg"
                  >
                    <div className="px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                      >
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <Settings className="w-8 h-8 text-red-600" />
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                            Well Completion Gallery
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our comprehensive well completion operations and advanced equipment installations
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className={`grid gap-6 lg:gap-8 ${wellCompletionImages.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
                        {wellCompletionImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openModal(index);
                              }
                            }}
                            aria-label={`View ${image.title} in full size`}
                          >
                            <article className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${wellCompletionImages.length === 1 ? 'h-80 lg:h-96' : 'h-72'}`}
                                loading="lazy"
                                onLoad={() => setIsLoading(false)}
                              />

                              {/* Loading State */}
                              {isLoading && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                              {/* Content */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-2">
                                    {image.category}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                                <div className="flex items-center text-sm font-medium">
                                  <ZoomIn className="w-4 h-4 mr-2" />
                                  <span>Click to view full size</span>
                                </div>
                              </div>

                              {/* Zoom Icon */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <ZoomIn className="w-6 h-6 text-gray-800" />
                              </div>
                            </article>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* Well Intervention Gallery - Only for Well Intervention tab */}
                {activeTab === 1 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-16 lg:py-20 bg-white rounded-lg shadow-lg"
                  >
                    <div className="px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                      >
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <Wrench className="w-8 h-8 text-red-600" />
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                            Well Intervention Gallery
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our advanced well intervention operations and specialized equipment capabilities
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {wellInterventionImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openModal(index);
                              }
                            }}
                            aria-label={`View ${image.title} in full size`}
                          >
                            <article className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                onLoad={() => setIsLoading(false)}
                              />

                              {/* Loading State */}
                              {isLoading && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                              {/* Content */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-2">
                                    {image.category}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                                <div className="flex items-center text-sm font-medium">
                                  <ZoomIn className="w-4 h-4 mr-2" />
                                  <span>Click to view full size</span>
                                </div>
                              </div>

                              {/* Zoom Icon */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <ZoomIn className="w-6 h-6 text-gray-800" />
                              </div>
                            </article>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* Well Head Maintenance Gallery - Only for Well Head Maintenance tab */}
                {activeTab === 2 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-16 lg:py-20 bg-white rounded-lg shadow-lg"
                  >
                    <div className="px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                      >
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <Shield className="w-8 h-8 text-red-600" />
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                            Well Head Maintenance Gallery
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our professional wellhead maintenance operations and safety compliance standards
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className={`grid gap-6 lg:gap-8 ${wellHeadMaintenanceImages.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
                        {wellHeadMaintenanceImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openModal(index);
                              }
                            }}
                            aria-label={`View ${image.title} in full size`}
                          >
                            <article className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${wellHeadMaintenanceImages.length === 1 ? 'h-80 lg:h-96' : 'h-72'}`}
                                loading="lazy"
                                onLoad={() => setIsLoading(false)}
                              />

                              {/* Loading State */}
                              {isLoading && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                              {/* Content */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-2">
                                    {image.category}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                                <div className="flex items-center text-sm font-medium">
                                  <ZoomIn className="w-4 h-4 mr-2" />
                                  <span>Click to view full size</span>
                                </div>
                              </div>

                              {/* Zoom Icon */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <ZoomIn className="w-6 h-6 text-gray-800" />
                              </div>
                            </article>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* Leak Sealing Gallery - Only for Leak Sealing tab */}
                {activeTab === 3 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="py-16 lg:py-20 bg-white rounded-lg shadow-lg"
                  >
                    <div className="px-6 lg:px-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                      >
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <Droplets className="w-8 h-8 text-red-600" />
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                            Leak Sealing & Valve Greasing Gallery
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our specialized leak sealing operations and RS Clare advanced lubricant applications
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {leakSealingImages.map((image, index) => (
                          <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                            onClick={() => openModal(index)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openModal(index);
                              }
                            }}
                            aria-label={`View ${image.title} in full size`}
                          >
                            <article className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                                loading="lazy"
                                onLoad={() => setIsLoading(false)}
                              />

                              {/* Loading State */}
                              {isLoading && (
                                <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                                  <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                </div>
                              )}

                              {/* Overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                              {/* Content */}
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="mb-2">
                                  <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-2">
                                    {image.category}
                                  </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                                <div className="flex items-center text-sm font-medium">
                                  <ZoomIn className="w-4 h-4 mr-2" />
                                  <span>Click to view full size</span>
                                </div>
                              </div>

                              {/* Zoom Icon */}
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                <ZoomIn className="w-6 h-6 text-gray-800" />
                              </div>
                            </article>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
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

      {/* Enhanced Gallery Modal - No Size Constraints */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              {getCurrentGallery().length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Modal Content */}
              <div className="w-full max-w-6xl">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-none max-h-none w-auto h-auto object-contain mx-auto"
                  style={{
                    width: '530px',
                    height: '630px'
                  }}
                />
                <div className="mt-4 text-center">
                  <h3 id="modal-title" className="text-xl font-semibold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p id="modal-description" className="text-gray-300">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Well_Services
