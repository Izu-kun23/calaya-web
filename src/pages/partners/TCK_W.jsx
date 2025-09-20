import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from "lucide-react";

// Import TCK.W logo and gallery images
import tckLogo from "../../assets/tck.w/tck.w_logo.png";
import tckGal1 from "../../assets/tck.w/tck_gal1.jpg";
import tckGal2 from "../../assets/tck.w/tck_gal2.jpg";
import tckGal3 from "../../assets/tck.w/tck_gal3.jpg";

/**
 * TCK.W Component - Real-time Online Wire Rope Inspection System
 * Features improved modal functionality, accessibility, and performance optimizations
 */
const TCK_W = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery images with enhanced metadata
  const galleryImages = [
    {
      id: 1,
      src: tckGal1,
      alt: "TCK.W Port Industry Application showing wire rope inspection system in operation",
      title: "Port Industry Application",
      description: "Wire rope inspection in port operations using TCK.W technology",
      category: "Industrial Application"
    },
    {
      id: 2,
      src: tckGal2,
      alt: "TCK.W Advanced Monitoring Device displaying real-time inspection capabilities",
      title: "Advanced Monitoring Device",
      description: "Real-time wire rope inspection technology with AI-powered detection",
      category: "Technology"
    },
    {
      id: 3,
      src: tckGal3,
      alt: "TCK.W Portable Monitor being used by field technician for on-site inspection",
      title: "TCK.W Portable Monitor",
      description: "Field technician using portable inspection system for real-time analysis",
      category: "Field Operations"
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
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              TCK.W
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Real-time Online Wire Rope Inspection System
            </motion.p>
          </div>
        </div>
      </header>

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Introduction
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  TCK.W has invented the world's most advanced "magnetic memory
                  wire rope AI weak magnetic detection technology," holding all
                  intellectual property rights for this groundbreaking innovation.
                  The company's cutting-edge technology earned recognition at the
                  prestigious 2018 Offshore Technology Conference (USA), winning
                  the OTC Spotlight on New Technology Award.
                </p>
                
                <p className="text-lg mb-6">
                  Their automated inspection system represents a paradigm shift from traditional
                  periodic human visual inspections, introducing real-time online
                  monitoring that achieves the highest standards of process safety
                  through continuous operational inspection. This revolutionary
                  technology is positioned to replace existing inspection methods
                  in the wire rope industry and establish the firm as the global
                  market leader.
                </p>
                
                <p className="text-lg mb-8">
                  The system has gained international acceptance,
                  with users across China, the United States, the European Union,
                  Japan, South Korea, Singapore, and other countries successfully
                  implementing these products. This widespread adoption
                  demonstrates the technology's reliability and effectiveness in
                  diverse industrial applications.
                </p>

              {/* Functions of TCK.W.ROPE MONITOR */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Functions of TCK.W.ROPE MONITOR
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Memory Magnetic Field Regulation:</strong> It
                      actively regulates a memory magnetic field with
                      appropriate quantity
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>AI Weak Magnetic Sensing:</strong> Uses wide air
                      gap and non-contact weak magnetic sensing technology and
                      AI technology by collecting magnetic energy potential
                      differential information distributed and memorized in wire
                      rope volume element
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Comprehensive Defect Detection:</strong> Can
                      inspect broken wire, abrasion, corrosion, and fatigue
                      caused by strength loss on wire rope qualitatively and
                      quantitatively and position the defects
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Global Reach Section */}
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
              Global Reach & Applications
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Trusted by users worldwide across diverse industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Global Users */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Global Presence
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Users in China, the United States, the European Union, Japan,
                  South Korea, Singapore, and other countries have accepted
                  TCK.W products.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Industry Applications
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Users spread over ports, oil, mining, ships, construction,
                  steel and metallurgy, national defense, cranes, elevators,
                  ropeways, cable-stayed bridges, and many other fields.
                </p>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={tckLogo}
                alt="TCK.W Logo"
                className="max-w-md w-full h-auto"
              />
            </motion.div>
          </div>
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
              TCK.W technology in action across various industrial applications
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

export default TCK_W;
