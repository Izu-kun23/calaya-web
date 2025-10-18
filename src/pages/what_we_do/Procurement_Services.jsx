import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, Building, Wrench, Search, Users, TrendingUp, CheckCircle, Target, ZoomIn, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import ClientSection from "../../components/section/client_section";
import procurementDiagram from "../../assets/images/Useable_Images/procurement.png";

const Procurement_Services = () => {
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
      if (tabIndex >= 0 && tabIndex < 1) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const procurementCategories = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Procurement Services",
      description: "Strategic procurement outsourcing services to reduce costs and enhance focus on core competencies through effective supply chain management.",
      features: [
        "Strategic Procurement Planning",
        "Supplier Identification & Selection",
        "Negotiation & Contracting",
        "Supply Market Research",
        "Supplier Measurement & Development",
        "Cost Reduction Programs",
        "ERP Integration",
        "Strategic Partnership Building",
      ],
      detailedContent: {
        overview: "We offer procurement services that provide the equipment and material that meets the ever increasing standards of our clients. The two main objectives of Calaya procurement outsourcing is reduction in cost and tightening of focus on core competencies. Calaya engages in strategic practice of planning for and acquiring the organization's current and future materials and service needs through effectively managing the supply base, utilizing ERP to achieve the organizational mission.",
        services: [
          { title: "Supplier Identification & Selection", description: "Comprehensive supplier identification, selection, and development services to ensure reliable and high-quality supply chain partners." },
          { title: "Negotiation & Contracting", description: "Expert negotiation and contracting services to secure optimal terms, pricing, and conditions for all procurement activities." },
          { title: "Supply Market Research", description: "In-depth supply market research to identify trends, opportunities, and potential risks in the procurement landscape." },
          { title: "Supplier Measurement", description: "Robust supplier measurement and evaluation systems to ensure consistent quality, delivery, and performance standards." },
          { title: "Purchasing Systems Development", description: "Development and implementation of efficient purchasing systems and processes to streamline procurement operations." },
          { title: "Joint Cost Reduction", description: "Collaborative cost reduction programs conducted jointly with suppliers to achieve mutual benefits and operational efficiency." },
        ],
        benefits: [
          "Reduction in procurement costs",
          "Enhanced focus on core competencies",
          "Improved supplier relationships",
          "Strategic procurement partnerships",
          "ERP-integrated procurement processes",
          "Competitive advantage through supply chain optimization",
        ],
      }
    }
  ];

  // Gallery data array for Procurement Services
  const procurementImages = [
    {
      id: 1,
      src: procurementDiagram,
      alt: "Procurement Service Process Diagram",
      title: "Procurement Process Overview",
      description: "Our comprehensive procurement process ensures efficient material management, supplier qualification, contract management, and logistics coordination for optimal results",
      category: "Process"
    }
  ];

  // Get current gallery based on active tab
  const getCurrentGallery = () => {
    switch (activeTab) {
      case 0: return procurementImages
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
              Procurement Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Strategic procurement outsourcing services for cost reduction and enhanced focus on core competencies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {procurementCategories.map((category, index) => (
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
                className="bg-white rounded-lg  p-6 h-fit sticky top-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {procurementCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {procurementCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {procurementCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {procurementCategories[activeTab].features.map((feature, index) => (
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
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Service Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {procurementCategories[activeTab].detailedContent.overview}
                  </p>
                  
                  {/* Procurement Process Diagram */}
                  <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Our Procurement Process</h4>
                    <div className="flex justify-center cursor-pointer group" onClick={() => openModal(0)}>
                      <img 
                        src={procurementDiagram} 
                        alt="Procurement Service Process Diagram" 
                        className="w-full max-w-lg h-auto group-hover:scale-105 transition-transform duration-300 rounded-lg "
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4 text-center">
                      Our comprehensive procurement process ensures efficient material management, supplier qualification, 
                      contract management, and logistics coordination for optimal results.
                    </p>
                  </div>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {procurementCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover: transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {procurementCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
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

export default Procurement_Services;
