'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

// Certification images from public folder
const certification1 = "/assets/certifications/certification1.jpg";
const certification2 = "/assets/certifications/certification2.jpg";
const certification3 = "/assets/certifications/certification3.jpg";
const certification4 = "/assets/certifications/certification4.jpg";
const certification5 = "/assets/certifications/certification5.jpg";
const certification6 = "/assets/certifications/certification6.jpg";
const certification7 = "/assets/certifications/certification7.jpg";
const certification8 = "/assets/certifications/certification8.jpg";
const certification9 = "/assets/certifications/certification9.jpg";
const certification10 = "/assets/certifications/certification10.jpg";
const certification11 = "/assets/certifications/certification11.jpg";

export default function CertificationsPage() {
  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Certification images data
  const certificationImages = [
    { id: 1, src: certification1, alt: "Certification 1", title: "Quality Management Certification" },
    { id: 2, src: certification2, alt: "Certification 2", title: "Safety Management Certification" },
    { id: 3, src: certification3, alt: "Certification 3", title: "Environmental Management Certification" },
    { id: 4, src: certification4, alt: "Certification 4", title: "Industry Standards Certification" },
    { id: 5, src: certification5, alt: "Certification 5", title: "Technical Excellence Certification" },
    { id: 6, src: certification6, alt: "Certification 6", title: "Professional Standards Certification" },
    { id: 7, src: certification7, alt: "Certification 7", title: "Compliance Certification" },
    { id: 8, src: certification8, alt: "Certification 8", title: "Quality Assurance Certification" },
    { id: 9, src: certification9, alt: "Certification 9", title: "Industry Compliance Certification" },
    { id: 10, src: certification10, alt: "Certification 10", title: "Professional Certification" },
    { id: 11, src: certification11, alt: "Certification 11", title: "Standards Compliance Certification" }
  ];

  // Modal functions
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const goToPrevious = () => {
    const newIndex = currentImageIndex === 0 ? certificationImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(certificationImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentImageIndex === certificationImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(certificationImages[newIndex]);
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowLeft') goToPrevious();
        if (e.key === 'ArrowRight') goToNext();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

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
              Our Certifications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Recognized standards and certifications that demonstrate our commitment to quality, safety, and excellence
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
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Certification Portfolio
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Calaya Engineering Services maintains a comprehensive portfolio of international certifications and standards, 
              ensuring we meet the highest industry requirements for quality, safety, environmental responsibility, and technical excellence.
            </p>
          </motion.div>

          {/* Certifications Gallery */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {certificationImages.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer bg-white rounded-xl  overflow-hidden hover: transition-all duration-300 border border-gray-200"
                onClick={() => openModal(cert, index)}
              >
                <div className="relative overflow-hidden group-hover:bg-red-50 transition-colors duration-300">
                  <img
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3 ">
                        <ExternalLink className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600">Click to view full certification</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 p-8 lg:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-red-600">{certificationImages.length}</div>
                <div className="text-red-600">Active Certifications</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2 text-red-600">100%</div>
                <div className="text-red-600">Compliance Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50">
            {/* Modal Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Image */}
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Description Below Modal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4"
            >
              <div className="bg-white rounded-lg p-4 ">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{selectedImage.title}</h3>
                <p className="text-sm text-gray-600">
                  {currentImageIndex + 1} of {certificationImages.length}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
