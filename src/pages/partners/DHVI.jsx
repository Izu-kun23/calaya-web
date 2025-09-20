import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Users, Shield, Zap, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Import DHVI logo
import dhviLogo from '../../assets/product_partners/DHVI.png';

const DHVI = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery images for DHVI
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/dvhi/content1.png",
      alt: "DHVI downhole video inspection technology showing advanced equipment and systems",
      title: "DHVI Downhole Technology",
      description: "Advanced downhole video inspection technology and equipment for wellbore analysis",
      category: "Technology"
    },
    {
      id: 2,
      src: "/src/assets/dvhi/case_study1.png",
      alt: "DHVI case study showing leak detection combining camera and logging sensors",
      title: "Leak Detection Case Study",
      description: "Real-world application of DHVI technology for leak detection and wellbore analysis",
      category: "Case Study"
    }
  ];

  // Enhanced modal functions with keyboard support
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, [galleryImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  }, [currentImageIndex, galleryImages]);

  const prevImage = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  }, [currentImageIndex, galleryImages]);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!selectedImage) return;
      
      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, prevImage, nextImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              DHVI
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Downhole Video & Intervention - Advanced downhole inspection and intervention solutions
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              DOWNHOLE VIDEO AND INTERVENTION (DHVI) is a technology focused on consistently getting you downhole IMAGES and cost-effective results.
            </p>
          </motion.div>
          
          {/* DHVI Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="bg-gray-50 rounded-2xl p-8 max-w-md w-full">
                <img
                  src={dhviLogo}
                  alt="DHVI Logo - Downhole Video & Intervention"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
              >
                <p className="text-sm sm:text-base leading-relaxed font-semibold text-blue-800">
                  DOWNHOLE VIDEO AND INTERVENTION (DHVI) IS A TECHNOLOGY FOCUSED ON CONSISTENTLY GETTING YOU DOWNHOLE IMAGES AND COST-EFFECTIVE RESULTS. OUR INGENUITY AND CUSTOMER SERVICE DRIVE US TO PROVIDE THE MOST RELIABLE SOLUTIONS TO POSITIVELY DIAGNOSE YOUR WELLBORE ISSUES.
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-700"
              >
                Our downhole tools are engineered to be deployed in Horizontal or Vertical wells on Coiled Tubing (Conventional and E-Coil), all Tractors, Wirelines and Slickline in Surface Read Out (SRO) or memory modes.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-700"
              >
                Our partnership with DHVI brings state-of-the-art downhole video inspection capabilities and intervention services to our clients, enabling them to reduce operational costs, minimize downtime, and maintain well integrity throughout the production lifecycle.
              </motion.p>
              
            </motion.div>
          </div>
          
          {/* DHVI Content Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >
            <img
              src="/src/assets/dvhi/content1.png"
              alt="DHVI Downhole Video Inspection Technology and Equipment"
              className="w-full max-w-6xl h-auto rounded-xl"
            />
          </motion.div>
          
          {/* DHVI Services Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-gray-700 mb-6 text-center"
              >
                DHVI deploys downhole video camera services, PLT and multi-finger caliper inspection services for:
              </motion.p>
              
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-700 mb-8 space-y-4 max-w-2xl mx-auto"
              >
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  Leak detection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  REAL-TIME fishing assistance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  Production inflow surveys
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  Mechanical failure diagnosis
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-4 flex-shrink-0"></div>
                  Multi-Finger Caliper Inspections
                </li>
              </motion.ul>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                viewport={{ once: true }}
                className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg"
              >
                <p className="text-base leading-relaxed text-red-800 font-semibold">
                  We Live Stream all data from your work site to any device in the world so individuals or your team can make cost-effective real-time decisions on all your wellbore remediation needs!
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies/Projects
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Real-world applications demonstrating DHVI's advanced downhole inspection capabilities
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Leak Detection Combining Camera and Logging Sensors
              </h3>
            </div>
            
            {/* Case Study Image */}
            <div className="mb-12">
              <img
                src="/src/assets/dvhi/case_study1.png"
                alt="DHVI Case Study - Leak Detection Side View Images"
                className="w-full max-w-5xl mx-auto rounded-xl"
              />
            </div>
            
            <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl mx-auto">
              <p>
                DHVIs Capture E-Line Camera is capable of being deployed in combination with a variety of 
                logging sensors, allowing for extensive investigation options during a single run-in hole. During 
                wireline pump-down operations, customers began experiencing abrupt hang-up depths 
                deploying their perforating BHA. With a full wireline and frac spread waiting on location, DHVI 
                was quickly dispatched to determine the cause.
              </p>
              
              <p>
                With the ability to pump the camera down using the wireline unit already rigged up on the well, 
                no additional equipment was required to mobilize. Based on the well history provided, and 
                understanding of the current operation, DHVIs recommendation was to run a GR, CCL, and 
                Temperature tool in tandem with the camera. The synergy between these tools and the 
                deployment method would lead to an efficient operation. Depth correlation could be provided 
                from the GR and CCL during the initial run in the hole, tying into the marker joint. Tool response 
                on the CCL would ensure movement while pumping down. Using optically clear fresh water for 
                the pump down would flush the wellbore for the camera. Storage of the freshwater into 
                formation would identify a potential leak point using the temperature tool.
              </p>
              
              <p>
                With the hang-up depth from the previous run-in mind, the temperature and CCL response were 
                monitored closely while pumping down. It became immediately clear in the temperature data as 
                the tool passed a severe leak point in the casing. Shortly thereafter as the pump down sub crossed 
                the leak point, all tool movement was lost. It was apparent that all feed rate was exiting this 
                breach and was the root cause of the hang-up. Having a precise depth to inspect, but not yet 
                knowing what caused the breach, the Capture E-Line camera was then logged into position. A 
                longitudinal split was discovered on the Sideview camera, directly on the high side of the hole, 
                with erosion indicating fluid and sand entry. With the tool in position looking directly at the split, 
                continuous high frame rate video was able to observe fluid and particulate entry, further 
                confirming the extent of the leak. High-resolution images were streamed directly from the well 
                site to the office for the client to observe in real-time. Using this data, and having a CCL log from 
                the same pass, the client was able to move forward with the possibility of setting a casing patch.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore DHVI's advanced downhole video inspection technology and real-world applications
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
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
      </section>

      {/* Enhanced Image Modal - No Size Constraints */}
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
              {galleryImages.length > 1 && (
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

              {/* Image Container - No Size Constraints */}
              <div className="relative max-w-none max-h-none w-auto h-auto">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-none max-h-none w-auto h-auto object-contain"
                  style={{
                    width: '530px',
                    height: '630px'
                  }}
                />
              </div>

              {/* Image Info Overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-black/60 text-white p-4 rounded-lg backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 id="modal-title" className="text-xl font-bold mb-1">
                      {selectedImage.title}
                    </h3>
                    <p id="modal-description" className="text-sm text-gray-200 mb-2">
                      {selectedImage.description}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-300">
                      <span className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {selectedImage.category}
                      </span>
                      <span>
                        {currentImageIndex + 1} of {galleryImages.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default DHVI;
