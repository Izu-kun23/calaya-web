'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Drill, Settings, Zap, Shield, Wrench, ZoomIn, X } from 'lucide-react';

export default function NorthernEnergyPage() {
  // Gallery state management
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "/assets/northern_energy/Northernenergy_1.png",
      alt: "Northern Energy Equipment 1",
      title: "Drilling Technology",
      description: "Advanced drilling and well construction tools for precision operations",
      category: "Drilling"
    },
    {
      id: 2,
      src: "/assets/northern_energy/Northernenergy_2.png",
      alt: "Northern Energy Equipment 2", 
      title: "Completion Systems",
      description: "Cutting-edge completion and artificial lift solutions for enhanced productivity",
      category: "Completion"
    },
    {
      id: 3,
      src: "/assets/northern_energy/Northernenergy_3.png",
      alt: "Northern Energy Equipment 3", 
      title: "Artificial Lift",
      description: "Innovative artificial lift technology for optimized well performance",
      category: "Lift Systems"
    }
  ];

  // Gallery functions
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
    // Lock body scroll (only on client)
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
  }, [galleryImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll (only on client)
    if (typeof window !== 'undefined') {
      document.body.style.overflow = 'unset';
    }
  }, []);

  // Products and services
  const services = [
    {
      id: 1,
      title: "Drilling & Well Construction Tools",
      description: "Precision-engineered tools for safe, efficient drilling and reliable well construction",
      icon: <Drill className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Well Completions",
      description: "High-performance tools to seal and optimize wells, ensuring efficiency and integrity",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Artificial Lift Solutions",
      description: "Advanced lift systems to boost production when natural pressure is low",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Sand Control Tools",
      description: "Solutions to prevent sand-related damage and maintain steady flow rates",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Plug & Abandonment",
      description: "Safe, compliant well decommissioning that protects the environment",
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  // Company values
  const values = [
    "Forward-thinking approach",
    "UK-based company",
    "Cutting-edge solutions",
    "Oil and gas industry focus",
    "Safety-first methodology",
    "Environmental compliance",
    "Precision engineering",
    "Reliable performance"
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
              Northern Energy Innovations
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Cutting-Edge Drilling, Completion and Artificial Lift Solutions
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
                  About Northern Energy Innovations Ltd
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Northern Energy Innovations Ltd is a forward-thinking UK-based company dedicated to 
                  supporting the oil and gas industry with cutting-edge solutions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in providing precision-engineered tools and advanced systems that ensure 
                  safe, efficient operations while maintaining the highest standards of environmental 
                  compliance and operational integrity.
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
                src="/assets/northern_energy/Northernenergy_logo.png"
                alt="Northern Energy Innovations Logo"
                className="w-full max-w-sm h-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-sm h-48 bg-gray-200 rounded-lg shadow-lg hidden items-center justify-center text-gray-500">
                <p>Northern Energy Logo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products and Services */}
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
              Products and Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions covering the entire lifecycle of oil and gas operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Breakdown */}
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
              Service Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed breakdown of our specialized capabilities and expertise
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Drilling & Construction */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drilling & Well Construction</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our precision-engineered tools are designed for safe, efficient drilling operations and 
                  reliable well construction. We focus on delivering solutions that minimize risk while 
                  maximizing operational efficiency.
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Precision-engineered tools</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Safe and efficient operations</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <Drill className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Advanced drilling technology for reliable well construction</p>
              </div>
            </motion.div>

            {/* Artificial Lift */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-6">
                <Zap className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Advanced lift systems for enhanced production</p>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Artificial Lift Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When natural pressure is insufficient, our advanced lift systems provide the boost needed 
                  to maintain optimal production levels. Our solutions are designed for reliability and 
                  long-term performance.
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Production optimization</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Long-term reliability</span>
                </div>
              </div>
            </motion.div>

            {/* Environmental Focus */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Compliance</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our Plug & Abandonment solutions ensure safe, compliant well decommissioning that protects 
                  the environment. We prioritize environmental stewardship in all our operations.
                </p>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Environmental protection</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Regulatory compliance</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Safe and compliant environmental solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our approach to innovation and service delivery
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{value}</span>
                </motion.div>
              ))}
            </div>
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
              Cutting-edge drilling, completion and artificial lift solutions for enhanced oil and gas operations
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

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Partner with Innovation
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to benefit from cutting-edge solutions for your oil and gas operations? 
              Contact Northern Energy Innovations for precision-engineered tools and advanced systems.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

