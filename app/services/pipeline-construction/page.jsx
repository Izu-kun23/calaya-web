'use client';
import React, { useState, useEffect, Suspense, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ZoomIn, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ClientSection from "../../../src/components/section/client_section";

function PipelineConstructionContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const searchParams = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 2) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const pipelineCategories = [
    {
      title: "Pipeline Laying/Construction",
      description: "Comprehensive pipeline laying, construction, and fabrication services for onshore and offshore oil and gas infrastructure projects.",
      features: [
        "Pipeline Design & Engineering",
        "Onshore Pipeline Construction",
        "bunkering point removal",
        "Offshore Pipeline Installation",
        "Pipeline Fabrication Services",
        "Quality Control & Testing",
        "Project Management",
        "Safety Compliance",
        "Environmental Protection",
      ],
      detailedContent: {
        overview: "Our pipeline laying, construction, and fabrication services provide comprehensive solutions for onshore and offshore oil and gas infrastructure projects. We deliver end-to-end pipeline construction services from design and engineering through fabrication, installation, and commissioning, ensuring optimal performance, safety, and regulatory compliance.",
        services: [
          { title: "Pipeline Design & Engineering", description: "Professional pipeline design and engineering services including route selection, stress analysis, material selection, and construction planning for optimal pipeline performance." },
          { title: "Onshore Pipeline Construction", description: "Complete onshore pipeline construction services including excavation, welding, coating, backfilling, and testing with full project management and quality assurance." },
          { title: "Offshore Pipeline Installation", description: "Specialized offshore pipeline installation services including subsea laying, riser installation, and tie-in operations using advanced marine construction techniques." },
          { title: "Pipeline Fabrication", description: "Professional pipeline fabrication services including spool piece manufacturing, fitting preparation, and pre-construction assembly with quality control and testing." },
        ],
        benefits: [
          "End-to-end pipeline construction solutions",
          "Professional project management",
          "Quality assurance and testing",
          "Safety and environmental compliance",
          "Advanced construction techniques",
          "Comprehensive engineering support",
        ],
      }
    },
    {
      title: "Hot Tapping Services",
      description: "Specialized hot tapping services for live pipeline connections and modifications without interrupting operations, ensuring minimal downtime and maximum safety.",
      features: [
        "Live Pipeline Connections",
        "Pipeline Modifications",
        "Bypass Operations",
        "Pressure Control",
        "Safety Protocols",
        "Emergency Services",
        "Quality Assurance",
        "Documentation & Reporting",
      ],
      detailedContent: {
        overview: "Our hot tapping services provide specialized solutions for live pipeline connections and modifications without interrupting operations. We utilize advanced hot tapping technology, comprehensive safety protocols, and experienced personnel to ensure safe, efficient, and reliable pipeline modifications with minimal downtime and maximum safety.",
        services: [
          { title: "Live Pipeline Connections", description: "Professional hot tapping services for live pipeline connections including branch connections, tie-ins, and lateral connections without service interruption." },
          { title: "Pipeline Modifications", description: "Specialized pipeline modification services including valve installations, meter connections, and system upgrades performed on live pipelines with advanced hot tapping techniques." },
          { title: "Bypass Operations", description: "Comprehensive bypass operations and temporary pipeline installations to facilitate hot tapping operations while maintaining continuous service to customers." },
          { title: "Pressure Control Services", description: "Advanced pressure control services during hot tapping operations including isolation, pressure monitoring, and system protection to ensure safe and reliable operations." },
        ],
        benefits: [
          "Minimal operational downtime",
          "Safe live pipeline operations",
          "Advanced hot tapping technology",
          "Comprehensive safety protocols",
          "Emergency response capabilities",
          "Professional project execution",
        ],
      }
    }
  ];

  const hotTappingImages = [
    {
      id: 1,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.06.32.png",
      alt: "Technicians preparing hot tapping equipment on a live pipeline",
      title: "Hot Tap Preparation",
      category: "Preparation",
      description: "Field crew assembles the tapping head and containment shell ahead of the live line penetration."
    },
    {
      id: 2,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.06.59.png",
      alt: "Hot tapping machine aligned on pressurised pipeline",
      title: "Machine Alignment",
      category: "Execution",
      description: "Hot tapping machine aligned and torqued in place to keep full-pressure containment during the cut."
    },
    {
      id: 3,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.07.09.png",
      alt: "Technicians monitoring pressure gauges during hot tapping",
      title: "Live Monitoring",
      category: "Control",
      description: "Pressure gauges and bleed ports monitored throughout the cut to maintain safe operating parameters."
    },
    {
      id: 4,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.07.27.png",
      alt: "Completed hot tap branch connection with isolation valves installed",
      title: "Branch Commissioning",
      category: "Completion",
      description: "Completed branch connection showing isolation valves ready for tie-in and commissioning."
    },
    {
      id: 5,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.07.43.png",
      alt: "Technicians inspecting a mounted hot tap assembly",
      title: "Assembly Inspection",
      category: "Quality",
      description: "Inspection of the mounted hot tap assembly and reinforcement fittings before opening the valve."
    },
    {
      id: 6,
      src: "/assets/hottapping/Screenshot 2025-11-11 at 23.06.45.png",
      alt: "Hot tapping team setting up containment and support structures",
      title: "Containment Setup",
      category: "Support",
      description: "Support structures and containment installed to stabilise the hot tapping operation on the live line."
    }
  ];

  const hotTappingCount = hotTappingImages.length;
  const isHotTapModalOpen = selectedImageIndex !== null;
  const currentHotTapImage = isHotTapModalOpen && selectedImageIndex !== null
    ? hotTappingImages[selectedImageIndex]
    : null;

  const openHotTapModal = useCallback((index) => {
    setSelectedImageIndex(index);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, []);

  const closeHotTapModal = useCallback(() => {
    setSelectedImageIndex(null);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  }, []);

  const nextHotTapImage = useCallback(() => {
    if (!hotTappingCount) return;

    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % hotTappingCount;
    });
  }, [hotTappingCount]);

  const prevHotTapImage = useCallback(() => {
    if (!hotTappingCount) return;

    setSelectedImageIndex((prevIndex) => {
      if (prevIndex === null) return hotTappingCount - 1;
      return (prevIndex - 1 + hotTappingCount) % hotTappingCount;
    });
  }, [hotTappingCount]);

  useEffect(() => {
    if (activeTab !== 1 && isHotTapModalOpen) {
      closeHotTapModal();
    }
  }, [activeTab, isHotTapModalOpen, closeHotTapModal]);

  useEffect(() => {
    if (!isHotTapModalOpen || typeof document === "undefined") return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeHotTapModal();
          break;
        case "ArrowRight":
          nextHotTapImage();
          break;
        case "ArrowLeft":
          prevHotTapImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isHotTapModalOpen, closeHotTapModal, nextHotTapImage, prevHotTapImage]);

  useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "unset";
      }
    };
  }, []);

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
              Pipeline Construction
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive pipeline construction and hot tapping services for oil and gas infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {pipelineCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === index
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-600 hover:border-red-300"
                }`}
              >
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
                  <h2 className="text-xl font-bold text-gray-900">
                    {pipelineCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {pipelineCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {pipelineCategories[activeTab].features.map((feature, index) => (
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
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Service Overview</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pipelineCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Our Services</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pipelineCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover: transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pipelineCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {activeTab === 1 && (
                  <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg p-6 lg:p-8"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Hot Tapping Operations Gallery</h3>
                    <p className="text-gray-600 mb-6">
                      Visual highlights from our recent hot tapping and live pipeline modification projects, showcasing line preparation,
                      pressure management, and post-connection validation.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                      {hotTappingImages.map((image, index) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group cursor-pointer focus:outline-none"
                          role="button"
                          tabIndex={0}
                          onClick={() => openHotTapModal(index)}
                          onKeyDown={(event) => {
                            if (event.key === "Enter" || event.key === " ") {
                              event.preventDefault();
                              openHotTapModal(index);
                            }
                          }}
                          aria-label={`View ${image.title} in full size`}
                        >
                          <article className="relative overflow-hidden rounded-xl transition-all duration-300 transform bg-white hover:-translate-y-1">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                              <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-3">
                                {image.category}
                              </span>
                              <h4 className="text-lg font-semibold mb-2">{image.title}</h4>
                              <p className="text-sm text-gray-200 leading-relaxed line-clamp-2">
                                {image.description}
                              </p>
                              <div className="flex items-center gap-2 text-sm font-medium text-gray-100 mt-4">
                                <ZoomIn className="w-4 h-4" />
                              </div>
                            </div>
                          </article>
                        </motion.div>
                      ))}
                    </div>

                    <AnimatePresence>
                       {isHotTapModalOpen && currentHotTapImage && (
                         <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
                           onClick={closeHotTapModal}
                           role="dialog"
                           aria-modal="true"
                           aria-label="Expanded hot tapping image"
                         >
                           <motion.div
                             initial={{ scale: 0.8, opacity: 0 }}
                             animate={{ scale: 1, opacity: 1 }}
                             exit={{ scale: 0.8, opacity: 0 }}
                             transition={{ duration: 0.3 }}
                             className="relative w-full h-full flex items-center justify-center p-4"
                             onClick={(event) => event.stopPropagation()}
                           >
                             <button
                               onClick={closeHotTapModal}
                               className="absolute top-6 right-6 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                               aria-label="Close image viewer"
                             >
                               <X className="w-6 h-6" />
                             </button>
 
                             {hotTappingCount > 1 && (
                               <>
                                 <button
                                   onClick={prevHotTapImage}
                                   className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                                   aria-label="View previous image"
                                 >
                                   <ChevronLeft className="w-6 h-6" />
                                 </button>
                                 <button
                                   onClick={nextHotTapImage}
                                   className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                                   aria-label="View next image"
                                 >
                                   <ChevronRight className="w-6 h-6" />
                                 </button>
                               </>
                             )}
 
                            <div className="w-full max-w-6xl">
                              <img
                                src={currentHotTapImage.src}
                                alt={currentHotTapImage.alt}
                                className="max-w-none max-h-none w-auto h-auto object-contain mx-auto"
                                style={{ width: '530px', height: '630px' }}
                                loading="lazy"
                              />
                              <div className="mt-4 text-center">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                  {currentHotTapImage.title}
                                </h3>
                                <p className="text-gray-300">
                                  {currentHotTapImage.description}
                                </p>
                              </div>
                            </div>
                           </motion.div>
                         </motion.div>
                       )}
                     </AnimatePresence>
                  </motion.section>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />
    </div>
  );
}

export default function PipelineConstructionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PipelineConstructionContent />
    </Suspense>
  );
}
