import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Shield, Search, CheckCircle, Target, TrendingUp, Settings, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import ClientSection from "../../components/section/client_section";
import cathodicImage from "../../assets/corrosion management/cathodic_image.jpg";
import dcvgImage1 from "../../assets/corrosion management/dvcg1.jpg";
import dcvgImage2 from "../../assets/corrosion management/dcvg2.jpg";

const Corrosion_Management = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 3) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const corrosionCategories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Internal Corrosion Monitoring",
      description: "Advanced internal corrosion monitoring systems and services to detect, assess, and prevent corrosion in pipelines, vessels, and equipment.",
      features: [
        "Real-time Corrosion Monitoring",
        "Advanced Detection Systems",
        "Data Analysis & Reporting",
        "Predictive Maintenance",
        "Risk Assessment",
        "Compliance Monitoring",
        "Custom Monitoring Solutions",
        "24/7 System Support",
      ],
      detailedContent: {
        overview: "Our internal corrosion monitoring services provide comprehensive solutions for detecting, assessing, and preventing corrosion in pipelines, vessels, and equipment. We utilize advanced monitoring systems, real-time data analysis, and predictive maintenance techniques to ensure optimal asset protection and regulatory compliance.",
        services: [
          { title: "Real-time Monitoring Systems", description: "Advanced real-time corrosion monitoring systems with continuous data collection and analysis for immediate corrosion detection and assessment." },
          { title: "Corrosion Detection Technology", description: "State-of-the-art corrosion detection technology including electrical resistance probes, linear polarization resistance, and ultrasonic monitoring systems." },
          { title: "Data Analysis & Reporting", description: "Comprehensive data analysis and reporting services with detailed corrosion rate calculations, trend analysis, and predictive maintenance recommendations." },
          { title: "Risk Assessment & Mitigation", description: "Professional risk assessment services to identify corrosion risks and implement effective mitigation strategies for optimal asset protection." },
        ],
        benefits: [
          "Early corrosion detection and prevention",
          "Real-time monitoring and data analysis",
          "Reduced maintenance costs",
          "Enhanced asset lifespan",
          "Regulatory compliance assurance",
          "Predictive maintenance capabilities",
        ],
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cathodic Protection Services",
      description: "Comprehensive cathodic protection systems and services for pipelines, tanks, and structures to prevent corrosion and ensure long-term asset integrity.",
      features: [
        "Impressed Current Systems",
        "Galvanic Anode Systems",
        "System Design & Installation",
        "Performance Monitoring",
        "Maintenance & Testing",
        "System Optimization",
        "Emergency Repairs",
        "Compliance Certification",
      ],
      detailedContent: {
        overview: "CALAYA has been providing successful cathodic protection solutions to the Oil, Gas, Petrochemical, Water and Power Industries over the last 15 years. Our cathodic protection services provide comprehensive corrosion prevention solutions for pipelines, tanks, and structures. We design, install, monitor, and maintain both impressed current and galvanic anode systems to ensure optimal corrosion protection and long-term asset integrity.",
        applications: [
          "Pipelines - oil, gas, product, water etc.",
          "Above ground storage tanks",
          "Underground storage tanks", 
          "Well casings",
          "Sheet and cylindrical piling - land & marine",
          "In plant pipe work",
          "Compressor stations",
          "Concrete Structures - Pipelines, Bridges etc.",
          "Marine Structures - Jetties, Wharves etc.",
          "Cooling water pipe work for Power Station"
        ],
        services: [
          { title: "System Design & Installation", description: "Professional design and installation of cathodic protection systems including impressed current and galvanic anode systems for various applications." },
          { title: "Performance Monitoring", description: "Continuous monitoring of cathodic protection system performance with regular testing, data collection, and system optimization recommendations." },
          { title: "Maintenance & Testing", description: "Comprehensive maintenance and testing services including annual surveys, rectifier maintenance, and system performance evaluations." },
          { title: "Emergency Repairs", description: "Rapid response emergency repair services for cathodic protection systems to ensure continuous corrosion protection and system reliability." },
        ],
        benefits: [
          "15 years of successful industry experience",
          "Multi-industry expertise (Oil, Gas, Petrochemical, Water, Power)",
          "Comprehensive corrosion prevention",
          "Long-term asset protection",
          "Regulatory compliance",
          "Reduced maintenance requirements",
          "System optimization and efficiency",
          "Emergency response capabilities",
        ],
      }
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "DCVG (Coating Defect Survey & Repair)",
      description: "Advanced DCVG (Direct Current Voltage Gradient) surveys and coating defect repair services for pipeline integrity assessment and maintenance.",
      features: [
        "DCVG Survey Services",
        "Coating Defect Detection",
        "Pipeline Integrity Assessment",
        "Repair Recommendations",
        "Coating Repair Services",
        "Quality Assurance",
        "Documentation & Reporting",
        "Follow-up Monitoring",
      ],
      detailedContent: {
        overview: "Our DCVG (Direct Current Voltage Gradient) survey and coating defect repair services provide comprehensive pipeline integrity assessment and maintenance solutions. We utilize advanced survey techniques to detect coating defects, assess pipeline integrity, and provide professional repair services to ensure optimal pipeline performance and safety.",
        services: [
          { title: "DCVG Survey Services", description: "Professional DCVG survey services for pipeline coating defect detection and integrity assessment using advanced survey equipment and techniques." },
          { title: "Coating Defect Assessment", description: "Comprehensive coating defect assessment and analysis with detailed reporting on defect severity, location, and recommended repair actions." },
          { title: "Coating Repair Services", description: "Professional coating repair services including surface preparation, coating application, and quality assurance to restore pipeline integrity." },
          { title: "Pipeline Integrity Analysis", description: "Detailed pipeline integrity analysis with risk assessment, repair prioritization, and maintenance planning for optimal pipeline performance." },
        ],
        benefits: [
          "Accurate coating defect detection",
          "Comprehensive pipeline integrity assessment",
          "Professional repair services",
          "Enhanced pipeline safety",
          "Optimized maintenance planning",
          "Regulatory compliance assurance",
        ],
      }
    }
  ];

  // Gallery data array for Internal Corrosion Monitoring
  const internalCorrosionImages = [
    {
      id: 1,
      src: "/src/assets/internal_corrosion_monitering/access fitting (hottapped on a pipeline by calaya engineering services).jpg",
      alt: "Access Fitting Hot-tapped on Pipeline",
      title: "Access Fitting Installation",
      description: "Hot-tapped access fitting on pipeline for monitoring",
      category: "Installation"
    },
    {
      id: 2,
      src: "/src/assets/internal_corrosion_monitering/IMG_20230806_113504_236.jpg",
      alt: "Corrosion Monitoring Equipment",
      title: "Monitoring Equipment Setup",
      description: "Advanced corrosion monitoring systems in operation",
      category: "Equipment"
    },
    {
      id: 3,
      src: "/src/assets/internal_corrosion_monitering/IMG_20230806_152149_381.jpg",
      alt: "Corrosion Detection Analysis",
      title: "Corrosion Detection Analysis",
      description: "Advanced analysis for effective corrosion management",
      category: "Analysis"
    }
  ];

  // Gallery data array for Cathodic Protection Services
  const cathodicProtectionImages = [
    {
      id: 1,
      src: cathodicImage,
      alt: "Cathodic Protection Field Operations",
      title: "Cathodic Protection Field Operations",
      description: "Professional field workers performing cathodic protection system installation and testing in challenging outdoor environments",
      category: "Field Operations"
    }
  ];

  // Gallery data array for DCVG Services
  const dcvgImages = [
    {
      id: 1,
      src: dcvgImage1,
      alt: "DCVG Survey Operations",
      title: "DCVG Survey in Progress",
      description: "Professional DCVG survey operations for pipeline coating defect detection and integrity assessment",
      category: "Survey"
    },
    {
      id: 2,
      src: dcvgImage2,
      alt: "DCVG Equipment and Field Work",
      title: "DCVG Field Operations",
      description: "Advanced DCVG survey equipment and field operations for comprehensive pipeline integrity assessment",
      category: "Field Work"
    }
  ];

  // Get current gallery based on active tab
  const getCurrentGallery = () => {
    switch (activeTab) {
      case 0: return internalCorrosionImages
      case 1: return cathodicProtectionImages
      case 2: return dcvgImages
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
              Corrosion Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Advanced corrosion prevention and management solutions for optimal asset protection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {corrosionCategories.map((category, index) => (
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
                    {corrosionCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {corrosionCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {corrosionCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {corrosionCategories[activeTab].features.map((feature, index) => (
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
                    {corrosionCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {corrosionCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specific Applications - Only for Cathodic Protection Services tab */}
                {activeTab === 1 && corrosionCategories[activeTab].detailedContent.applications && (
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">Specific Applications</h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      CALAYA has been providing successful cathodic protection solutions to the Oil, Gas, Petrochemical, Water and Power Industries over the last 15 years.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {corrosionCategories[activeTab].detailedContent.applications.map((application, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cathodic Protection Services in Action - Only for Cathodic Protection Services tab */}
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
                          <Shield className="w-8 h-8 text-red-600" />
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Cathodic Protection Services in Action
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our professional cathodic protection field operations and specialized equipment installations across diverse environments
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className={`grid gap-6 lg:gap-8 ${cathodicProtectionImages.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                        {cathodicProtectionImages.map((image, index) => (
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
                                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${cathodicProtectionImages.length === 1 ? 'h-80 lg:h-96' : 'h-72'}`}
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

                {/* DCVG Services in Action - Only for DCVG tab */}
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
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                      >
                        <div className="inline-flex items-center gap-2 mb-4">
                          <Search className="w-8 h-8 text-blue-600" />
                          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                            DCVG Services in Action
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our professional DCVG survey operations and advanced coating defect detection services for comprehensive pipeline integrity assessment
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className={`grid gap-6 lg:gap-8 ${dcvgImages.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2'}`}>
                        {dcvgImages.map((image, index) => (
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
                                className={`w-full object-cover group-hover:scale-110 transition-transform duration-500 ${dcvgImages.length === 1 ? 'h-80 lg:h-96' : 'h-72'}`}
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

                {/* Internal Corrosion Monitoring in Action - Only for Internal Corrosion Monitoring tab */}
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
                          <Monitor className="w-8 h-8 text-red-600" />
                          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                            Internal Corrosion Monitoring in Action
                          </h2>
                        </div>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                          Explore our advanced internal corrosion monitoring operations and specialized equipment installations
                        </p>
                      </motion.div>

                      {/* Gallery Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {internalCorrosionImages.map((image, index) => (
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
                    {corrosionCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
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
  );
};

export default Corrosion_Management;
