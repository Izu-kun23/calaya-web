import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

// Import IP Pipeline images
import ipPipelineImage from '../../assets/product_partners/ip_pipeline.jpg';
import contentImage from '../../assets/ip_pipeline/content_image.png';
import ipPipeline1 from '../../assets/ip_pipeline/ip_pipeline1.jpeg';
import ipPipeline2 from '../../assets/ip_pipeline/ip_pipeline2.png';

const IP_Pipeline = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Enhanced gallery images with metadata
  const galleryImages = [
    {
      id: 1,
      src: ipPipeline1,
      alt: "IP Pipeline inspection operations showing offshore platform with advanced pipeline inspection technology",
      title: "Offshore Pipeline Operations",
      description: "Advanced pipeline inspection operations on offshore platforms using IP Pipeline technology",
      category: "Offshore Operations"
    },
    {
      id: 2,
      src: ipPipeline2,
      alt: "IP Pipeline advanced inspection tools displaying multi-function modules for comprehensive pipeline analysis",
      title: "Multi-Function Inspection Modules",
      description: "State-of-the-art pipeline inspection tools with advanced multi-function capabilities",
      category: "Technology"
    },
    {
      id: 3,
      src: contentImage,
      alt: "IP Pipeline inspection technology showcasing advanced equipment for pipeline integrity assessment",
      title: "Advanced Inspection Equipment",
      description: "Comprehensive pipeline inspection technology for integrity assessment and data analysis",
      category: "Equipment"
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
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              IP Pipeline Technologies
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Efficient & Flexible Solutions for Oil & Gas In-line Inspection Tools
            </motion.p>
          </div>
        </div>
      </section>

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
              IP Pipeline Technologies specializes in efficient and flexible solutions for oil and gas in-line inspection tools.
            </p>
          </motion.div>
          
          {/* Content and Image Side by Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg">
                  IP Pipeline Technology is a reliable company for pipeline inspection and data analysis with rich
                  experience. Its technology is based on Shenyang University of Technology. Since the R&D in 1995,
                  IP Pipeline Technology has provided the international leading technology to pipeline owners and
                  operators. Its world class inspection team provides the entire inspection service spectrum for
                  Onshore and Offshore pipelines worldwide.
                </p>
                
                <p className="text-lg">
                  The full range of services includes cleaning, geometry, and deformation inspection, metal loss and
                  crack inspection, data analysis, and pipeline integrity assessment.
                </p>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
                  <p className="font-semibold text-red-800 mb-2 text-lg">Partnership with Calaya Engineering</p>
                  <p className="text-gray-700 text-lg">
                    Calaya Engineering Services has a signed Memorandum of Understanding to carry out pipeline
                    inspection with the team at IP Pipeline Technologies.
                  </p>
                </div>
              </div>
              
              {/* Content Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <img
                  src={contentImage}
                  alt="IP Pipeline Technology - Advanced Inspection Tools"
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>

            {/* IP Pipeline Image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={ipPipelineImage}
                alt="IP Pipeline Technology - Efficient & Flexible Solutions"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
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
              Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore our advanced pipeline inspection technologies and equipment
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
      </motion.section>

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

export default IP_Pipeline;
