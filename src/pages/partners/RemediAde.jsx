import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Users, Shield, Zap, ZoomIn, X, ChevronLeft, ChevronRight, Leaf, Recycle, Droplets, Factory, Play } from 'lucide-react';

// Import RemediAde logo and video thumbnail
import remediadeLogo from '../../assets/product_partners/remediade.jpg';
import remediadeVideoThumbnail from '../../assets/remediade/remidiadevid.png';

const RemediAde = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery images for RemediAde
  const galleryImages = [
    {
      id: 1,
      src: "/src/assets/remediade/remediade1.jpg",
      alt: "RemediAde bio-remediation application showing all-natural hydrocarbon cleanup process",
      title: "Bio-Remediation Application",
      description: "All-natural, organic bio-remediation solution for hydrocarbon contamination in soil and water",
      category: "Services"
    },
    {
      id: 2,
      src: "https://www.youtube.com/watch?v=MOeEACnuZf4&t=6s",
      alt: "RemediAde YouTube demonstration video showing bio-remediation process",
      title: "RemediAde Demonstration Video",
      description: "Watch our YouTube video demonstrating the effectiveness of RemediAde bio-remediation technology",
      category: "Video",
      isVideo: true,
      thumbnail: remediadeVideoThumbnail
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
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  }, [currentImageIndex, galleryImages]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
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

  // Simulate loading for better UX
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
              RemediAde
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Bio-Remediation Solutions - Highly-effective, eco-friendly, all natural and organic solution for rapid bio-remediation of hydrocarbons
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
              RemediAde® is a highly-effective and eco-friendly, all natural and organic (non-chemical) solution that rapidly bio-remediates hydrocarbons in soil and water.
            </p>
          </motion.div>
          
          {/* RemediAde Content */}
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
                  src={remediadeLogo}
                  alt="RemediAde Logo - Environmental and Remediation Services"
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
                  REMEDIADE® IS EASILY APPLIED TO CONTAMINATE LAND AND WATER IN THE EVENT OF SPILLS OR LEAKS AND OTHER HYDROCARBONS. IT IS A BLEND OF PLANT EXTRACTS AND OTHER ORGANIC SUBSTANCES DESIGNED TO PROMOTE RAPID INSITU BACTERIA GROWTH FOR BIO-REMEDIATION OF HYDROCARBONS.
                </p>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-700"
              >
                The unique production process of RemediAde® contributes to the rapid growth of bacteria that effectively assists in the bio-remediation of hydrocarbons, making it an ideal solution for environmental cleanup operations.
              </motion.p>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-base leading-relaxed text-gray-700"
              >
                This all-natural, non-chemical approach ensures safe and effective remediation while protecting the environment and promoting sustainable cleanup practices for hydrocarbon contamination.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Services Section */}
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
              Our Bio-Remediation Solutions
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              All-natural, organic bio-remediation solutions for rapid and effective hydrocarbon cleanup in soil and water environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Pipeline Breaks and Spills",
                description: "Successful remediation of pipeline breaks and hydrocarbon spills using all-natural bio-remediation technology."
              },
              {
                icon: <Droplets className="w-8 h-8" />,
                title: "Storage Tank Overflows",
                description: "Effective treatment of storage tank overflows and containment failures with rapid bio-remediation solutions."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Marshlands and Beaches Cleanup",
                description: "Oil contamination cleanup in sensitive marshlands and beach environments using eco-friendly methods."
              },
              {
                icon: <Factory className="w-8 h-8" />,
                title: "Tank Farm Soil Remediation",
                description: "Comprehensive soil remediation at and around tank farms for complete hydrocarbon contamination cleanup."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Wellhead Cleanups",
                description: "Professional wellhead cleanup services for hydrocarbon contamination in oil and gas operations."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Dump Yard Remediation",
                description: "Hydrocarbon dump yard soil remediation using all-natural, organic bio-remediation processes."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Refinery Cleanups",
                description: "Large-scale refinery cleanup operations with proven effectiveness in industrial environments."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Creosote Contamination",
                description: "Specialized creosote contamination remediation using advanced bio-remediation technology."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery Section */}
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
              Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore our successful bio-remediation applications and see the positive impact of our all-natural hydrocarbon cleanup solutions.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(index)}
                >
                  <div className="relative overflow-hidden">
                    {image.isVideo ? (
                      <div className="relative w-full h-64">
                        <img
                          src={`https://img.youtube.com/vi/${image.src.split('v=')[1]?.split('&')[0]}/maxresdefault.jpg`}
                          alt={image.alt}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                          <div className="bg-red-600 rounded-full p-4 shadow-lg">
                            <Play className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      {image.isVideo ? (
                        <Play className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      ) : (
                        <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {image.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {image.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.section>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative max-w-4xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black bg-opacity-50 rounded-full p-2"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Modal Content */}
              <div className="bg-white rounded-lg overflow-hidden">
                {selectedImage.isVideo ? (
                  <div className="w-full">
                    <div className="relative w-full h-0 pb-[56.25%] bg-black">
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${selectedImage.src.split('v=')[1]?.split('&')[0]}?autoplay=1&start=6`}
                        title={selectedImage.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {selectedImage.title}
                      </h3>
                      <p className="text-gray-600">
                        {selectedImage.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-none max-h-none w-auto h-auto object-contain"
                    style={{
                      width: '530px',
                      height: '630px'
                    }}
                  />
                )}
              </div>

              {/* Content Info */}
              {!selectedImage.isVideo && (
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300">
                    {selectedImage.description}
                  </p>
                  {galleryImages.length > 1 && (
                    <p className="text-sm text-gray-400 mt-2">
                      {currentImageIndex + 1} of {galleryImages.length}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

   
    </div>
  );
};

export default RemediAde;
