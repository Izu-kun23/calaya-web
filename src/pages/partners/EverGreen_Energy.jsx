'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Shield, Drill, Zap, Settings, Search, Wrench } from 'lucide-react';

export default function EverGreenEnergyPage() {
  // Products and services
  const services = [
    {
      id: 1,
      title: "Well Integrity Management",
      description: "Ensures long-term structural and functional well integrity for safety, reliability and uninterrupted operations",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Drilling, Completion & Cementing",
      description: "Provides end-to-end drilling support, precise well completion, and secure cementing for optimal production",
      icon: <Drill className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Enhanced Oil Recovery (EOR) & Intervention",
      description: "Applies advanced EOR and intervention methods to boost output and extend well life",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Through-Tubing Operations",
      description: "Enables maintenance and intervention without full workovers, reducing downtime and costs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Tracer Testing & Reservoir Evaluation",
      description: "Uses tracer diagnostics to analyze fluid movement, well performance, and reservoir connectivity for optimized recovery",
      icon: <Search className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Plug & Abandonment (P&A)",
      description: "Delivers safe, compliant, and eco-friendly well closure solutions at end-of-life",
      icon: <Wrench className="w-6 h-6" />
    }
  ];

  // Key benefits
  const benefits = [
    "Multidimensional energy solutions",
    "Advanced oilfield technology",
    "Proprietary solutions",
    "Modern energy sector focus",
    "End-to-end service delivery",
    "Cost-effective operations",
    "Environmental compliance",
    "Optimized recovery methods"
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
              EverGreen Energy Savers
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Multidimensional Energy and Oilfield Technology Provider
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
                  About EverGreen Energy Service, LLC
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  EverGreen Energy Service, LLC is a multidimensional energy and oilfield technology provider 
                  delivering a broad suite of advanced services and proprietary solutions for the modern energy sector.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We specialize in comprehensive energy solutions that span the entire lifecycle of oil and gas 
                  operations, from initial drilling and completion through enhanced recovery and final well closure.
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
                src="/assets/evergreen_energy/evergreen.png"
                alt="EverGreen Energy Savers Logo"
                className="w-full max-w-sm h-auto object-contain p-4"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full max-w-sm h-48 bg-gray-100 rounded-lg shadow-lg hidden items-center justify-center text-gray-500">
                <p>EverGreen Energy Logo</p>
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
              Comprehensive solutions covering every aspect of modern energy operations
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
                <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
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

      {/* Service Highlights */}
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
              Detailed overview of our specialized capabilities and advanced technologies
            </p>
          </motion.div>

          <div className="space-y-12">
            {/* Well Integrity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Well Integrity Management</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our comprehensive well integrity management ensures long-term structural and functional 
                  well integrity, providing safety, reliability, and uninterrupted operations throughout 
                  the well's lifecycle.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Long-term structural integrity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Functional reliability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Uninterrupted operations</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Comprehensive well integrity solutions</p>
              </div>
            </motion.div>

            {/* Enhanced Recovery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div className="order-2 lg:order-1 bg-gray-100 rounded-lg p-6">
                <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Advanced EOR and intervention methods</p>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enhanced Oil Recovery & Intervention</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We apply advanced Enhanced Oil Recovery (EOR) and intervention methods to boost output 
                  and extend well life, maximizing the economic value of your assets.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Production optimization</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Extended well life</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Advanced intervention methods</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Through-Tubing Operations */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Through-Tubing Operations</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our through-tubing operations enable maintenance and intervention without full workovers, 
                  significantly reducing downtime and operational costs while maintaining production efficiency.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Reduced downtime</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Lower operational costs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">No full workovers required</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <Settings className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <p className="text-center text-gray-600">Efficient through-tubing solutions</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The advantages that set EverGreen Energy apart in the modern energy sector
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

