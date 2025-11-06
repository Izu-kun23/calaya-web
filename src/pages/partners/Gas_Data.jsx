'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Target, Shield, Award, Zap, Settings, Monitor, Gauge, Wind, Leaf, ZoomIn, X } from 'lucide-react';

export default function GasDataPage() {
  // Gallery state management
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/assets/gas_data/gas_data1.png",
      alt: "GAS DATA Equipment 1",
      title: "Gas Analysis System",
      description: "Advanced monitoring and analysis equipment for comprehensive gas detection and measurement",
      category: "Equipment"
    },
    {
      id: 2,
      src: "/assets/gas_data/gas_data2.png",
      alt: "GAS DATA Equipment 2", 
      title: "Monitoring Technology",
      description: "Precision gas detection and measurement systems for industrial applications",
      category: "Technology"
    }
  ];

  // Gallery functions
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
  }, [galleryImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  // Gas analysis capabilities
  const gasTypes = [
    {
      id: 1,
      name: "Carbon Dioxide",
      icon: <Wind className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Oxygen",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Methane",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,
      name: "Hydrogen Sulphide",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 5,
      name: "Carbon Monoxide",
      icon: <Gauge className="w-6 h-6" />
    }
  ];

  // Certifications and memberships
  const certifications = [
    {
      id: 1,
      name: "ATEX Certified",
      description: "European certification for explosive atmospheres"
    },
    {
      id: 2,
      name: "UKEX Certified", 
      description: "UK certification for hazardous areas"
    },
    {
      id: 3,
      name: "IECEx Certified",
      description: "International certification for explosive atmospheres"
    }
  ];

  const memberships = [
    {
      id: 1,
      name: "ADBA Member",
      description: "Anaerobic Digestion and Bioresources Association"
    },
    {
      id: 2,
      name: "WBA Member",
      description: "World Biogas Association"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/Useable_Images/image12.jpg"
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GAS DATA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Market Leaders in Gas Analysis and Monitoring Systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  About GAS DATA
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Gas Data are market leaders in the gas analysis industry, providing specialist gas 
                  analysis and monitoring systems globally across a wide range of industries. They analyze 
                  carbon dioxide, oxygen, methane, hydrogen sulphide and carbon monoxide.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  They are ATEX, UKEX and IECEx certified manufacturers, as well as proud and active 
                  members of the Anaerobic Digestion and Bioresources Association (ADBA) and the 
                  World Biogas Association (WBA).
                </p>
              </div>
            </motion.div>

            {/* Right Side - Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src="/assets/gas_data/gasdata_logo.png"
                alt="GAS DATA Logo"
                className="w-full max-w-sm h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-sm h-48 bg-gray-200 rounded-lg shadow-lg hidden items-center justify-center text-gray-500">
                <p>GAS DATA Logo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gas Analysis Capabilities */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Gas Analysis Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis and monitoring of critical gas components across various industries
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gasTypes.map((gas, index) => (
              <motion.div
                key={gas.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {gas.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {gas.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Certifications & Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Certified manufacturers meeting the highest international safety and quality standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center"
              >
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Memberships */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Memberships
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {memberships.map((membership, index) => (
              <motion.div
                key={membership.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg border border-blue-200 p-6 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{membership.name}</h3>
                <p className="text-gray-600">{membership.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Gallery */}
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
              Equipment Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Advanced gas analysis and monitoring equipment for comprehensive industrial solutions
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                <article className="bg-white relative overflow-hidden rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  
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

      {/* Image Modal */}
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

              {/* Image */}
              <div className="relative max-w-7xl max-h-full">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full">
                      {selectedImage.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                  <p className="text-gray-200">{selectedImage.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

