import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

// Import Lex Technology product images
import product1 from '../../assets/lex/product1.jpeg';
import product2 from '../../assets/lex/product2.jpeg';
import product3 from '../../assets/lex/product3.jpeg';


const Lex_Technology = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef(null);

  // Product data with images and content
  const products = [
    {
      id: 1,
      image: product1,
      title: "Ultra-High-Speed ESP (UHS ESP®)",
      description: "We've developed our innovative PMM-driven Ultra-High-Speed ESP (UHS ESP®) with an operating speed between 1,000 and 12,000 rpm. UHS®ESP® provides effective operation in harsh well conditions, with limited power supply, and below perforation range."
    },
    {
      id: 2,
      image: product2,
      title: "LEX Universal ESP (applicable for geothermal wells)",
      description: "We have improved the standard ESP to enhance the efficiency and reliability of Lex pumps in various well environments. Our engineering team thoroughly analyzes the incoming data to select the optimum efficiency and specific power consumption of each system (formation-wellbore-ESP). As a result, our solutions achieve the maximum efficiency and provide 30-40% runlife increase and 20-50% lower OPEX."
    },
    {
      id: 3,
      image: product3,
      title: "Turbo Gaslift Pumps System",
      description: "To solve production problems in wells experiencing depletion of reservoir energy after the gas-lift operation, we have developed the Turbox gas lift pumps. The system creates deep drawdown and avoids electricity use in the well by replacing the electric motor with a gas turbine. This works in combination with the innovative Lex Ultra-High-Speed centrifugal pump operating at speeds up to 15,000 rpm."
    }
  ];

  // Gallery images for the gallery section
  const galleryImages = [
    {
      id: 1,
      src: product1,
      alt: "Lex Technology Ultra-High-Speed ESP system showing advanced artificial lift technology",
      title: "Ultra-High-Speed ESP System",
      description: "Advanced PMM-driven Ultra-High-Speed ESP operating at speeds between 1,000-12,000 rpm",
      category: "Artificial Lift"
    },
    {
      id: 2,
      src: product2,
      alt: "Lex Technology Universal ESP system designed for geothermal well applications",
      title: "Universal ESP for Geothermal",
      description: "Enhanced ESP system optimized for geothermal well environments with improved efficiency",
      category: "Geothermal"
    },
    {
      id: 3,
      src: product3,
      alt: "Lex Technology Turbo Gaslift Pumps System with gas turbine technology",
      title: "Turbo Gaslift System",
      description: "Innovative gas turbine-driven pump system for wells with depleted reservoir energy",
      category: "Gas Lift"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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
              Lex Technology
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Bespoke Integrated Solutions for Artificial Lift Technology
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
                We deliver bespoke integrated solutions, designed to improve the efficiency of artificial lift technology. 
                Using high-specification field equipment we enable clients to manage and reduce the total cost of ownership, 
                whilst also meeting the complex demands of oil production today.
              </p>
              
              <p className="text-lg mb-6">
                Leveraging the latest aerospace innovations, our engineers have developed the world's first Ultra-High-Speed 
                ESP for the oil industry, reinventing traditional artificial lift technology. By replacing standard equipment 
                with Ultra-High-Speed ESP, we are able to offer game-changing improvements in operating speeds of up to 12,000 rpm.
              </p>
              
              <p className="text-lg mb-8">
                More than half of the world's wells currently operate with significant over-consumption of energy. 
                Ultra-High-Speed ESP offers improved gas separator efficiency, increased run life, a reduction in power 
                consumption and much more reliable operation. Increasing reliance on shale oil in hard-to-recover reserves 
                means efficiency and efficacy are at the forefront of our clients' minds.
              </p>

              {/* Solutions List */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Customized Technology Solutions Provide:</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-lg text-gray-700">Reductions in energy consumption</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-lg text-gray-700">An increase in overall production</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-lg text-gray-700">Efficient operation in complex wells</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-lg text-gray-700">Operation on offshore platforms and rigless deployment</p>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2"></div>
                    <p className="text-lg text-gray-700">Automated systems for remote monitoring and control of production processes</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

          {/* Our Products Section - Swipeable Carousel */}
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
                  Our Products
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Advanced artificial lift technology solutions for the oil and gas industry
                </p>
              </motion.div>

              {/* Swipeable Product Carousel */}
              <div className="relative max-w-6xl mx-auto">
                {/* Main Product Display */}
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 p-6">
                    {/* Product Image */}
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex items-center justify-center"
                    >
                      <img
                        src={products[currentSlide].image}
                        alt={products[currentSlide].title}
                        className="w-full h-64 object-contain rounded-lg"
                      />
                    </motion.div>

                    {/* Product Content */}
                    <motion.div
                      key={`content-${currentSlide}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col justify-center"
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                        {products[currentSlide].title}
                      </h3>
                      <p className="text-base text-gray-600 leading-relaxed">
                        {products[currentSlide].description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-3 hover:bg-gray-200 transition-colors duration-300 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-3">
                  {products.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>

                {/* Product Counter */}
                <div className="text-center mt-4">
                  <span className="text-sm text-gray-500">
                    {currentSlide + 1} of {products.length}
                  </span>
                </div>
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
                  Explore our advanced artificial lift technology solutions
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
                    <article className="relative overflow-hidden rounded-xl  hover: transition-all duration-300 transform hover:-translate-y-1">
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

export default Lex_Technology;
