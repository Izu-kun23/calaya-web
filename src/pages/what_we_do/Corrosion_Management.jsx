import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Shield, Search, CheckCircle, Target, TrendingUp, Settings } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import ClientSection from "../../components/section/client_section";

const Corrosion_Management = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null); // State for image modal
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
        overview: "Our cathodic protection services provide comprehensive corrosion prevention solutions for pipelines, tanks, and structures. We design, install, monitor, and maintain both impressed current and galvanic anode systems to ensure optimal corrosion protection and long-term asset integrity.",
        services: [
          { title: "System Design & Installation", description: "Professional design and installation of cathodic protection systems including impressed current and galvanic anode systems for various applications." },
          { title: "Performance Monitoring", description: "Continuous monitoring of cathodic protection system performance with regular testing, data collection, and system optimization recommendations." },
          { title: "Maintenance & Testing", description: "Comprehensive maintenance and testing services including annual surveys, rectifier maintenance, and system performance evaluations." },
          { title: "Emergency Repairs", description: "Rapid response emergency repair services for cathodic protection systems to ensure continuous corrosion protection and system reliability." },
        ],
        benefits: [
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

                {/* Internal Corrosion Monitoring Images - Only for Internal Corrosion Monitoring tab */}
                {activeTab === 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Monitor className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">Internal Corrosion Monitoring in Action</h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        onClick={() => setSelectedImage("/src/assets/internal_corrosion_monitering/access fitting (hottapped on a pipeline by calaya engineering services).jpg")}
                      >
                        <img
                          src="/src/assets/internal_corrosion_monitering/access fitting (hottapped on a pipeline by calaya engineering services).jpg"
                          alt="Access Fitting Hot-tapped on Pipeline"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">Access Fitting Installation</h4>
                          <p className="text-sm text-white/90">Hot-tapped access fitting on pipeline for monitoring</p>
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
                        onClick={() => setSelectedImage("/src/assets/internal_corrosion_monitering/IMG_20230806_113504_236.jpg")}
                      >
                        <img
                          src="/src/assets/internal_corrosion_monitering/IMG_20230806_113504_236.jpg"
                          alt="Corrosion Monitoring Equipment"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">Monitoring Equipment Setup</h4>
                          <p className="text-sm text-white/90">Advanced corrosion monitoring systems in operation</p>
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
                        onClick={() => setSelectedImage("/src/assets/internal_corrosion_monitering/IMG_20230806_152149_381.jpg")}
                      >
                        <img
                          src="/src/assets/internal_corrosion_monitering/IMG_20230806_152149_381.jpg"
                          alt="Corrosion Detection Analysis"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">Corrosion Detection Analysis</h4>
                          <p className="text-sm text-white/90">Advanced analysis for effective corrosion management</p>
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
              className="relative max-w-4xl max-h-[80vh] mx-4 overflow-y-auto overflow-x-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Internal Corrosion Monitoring - Full View"
                className="rounded-lg shadow-2xl"
                style={{ maxWidth: '100%', width: 'auto', height: 'auto' }}
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
  );
};

export default Corrosion_Management;
