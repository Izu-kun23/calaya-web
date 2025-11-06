'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Monitor, Shield, Zap, Settings, Eye, Clock, AlertTriangle } from 'lucide-react';

export default function TCKWRopePage() {
  // Key features of the rope monitor system
  const features = [
    {
      id: 1,
      title: "Real-Time Monitoring",
      description: "Continuous online wire rope inspection during operation",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Automatic Inspection",
      description: "Revolutionizes periodic human visual inspection",
      icon: <Eye className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Process Safety Monitoring",
      description: "Brings process safety monitoring to its highest state",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Continuous Operation",
      description: "Inspection during operation without downtime",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  // Benefits of the system
  const benefits = [
    "Real-time online inspection",
    "Eliminates periodic manual inspection",
    "Continuous operation monitoring",
    "Enhanced process safety",
    "Automatic detection capabilities",
    "Reduced inspection downtime",
    "Improved safety standards",
    "Revolutionary inspection technology"
  ];

  // System capabilities
  const capabilities = [
    {
      id: 1,
      title: "Wire Rope Inspection",
      description: "Comprehensive inspection of wire rope systems",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Continuous Monitoring",
      description: "24/7 monitoring during operational periods",
      icon: <Clock className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Safety Enhancement",
      description: "Highest state of process safety monitoring",
      icon: <AlertTriangle className="w-6 h-6" />
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
              TCK.W Rope Monitor
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Real-Time Online Wire Rope Inspection Systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  About TCK.W Rope Monitor
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  TCK.W. Automatic is a real-time online wire rope inspection system that revolutionizes 
                  periodic human visual inspection and brings process safety monitoring to its highest state 
                  through continuous inspection during operation.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This innovative system transforms traditional inspection methods by providing continuous, 
                  automated monitoring that enhances safety standards while eliminating the need for 
                  periodic manual inspections that can interrupt operations.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
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
              Key Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionary inspection technology that transforms wire rope monitoring and safety standards
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary Technology */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Revolutionary Inspection Technology
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                The TCK.W Rope Monitor system represents a paradigm shift in wire rope inspection methodology. 
                By providing real-time, continuous monitoring during operation, it eliminates the limitations 
                and risks associated with traditional periodic visual inspections.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Continuous Monitoring</h4>
                    <p className="text-gray-600 text-sm">24/7 inspection during operational periods</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Automated Detection</h4>
                    <p className="text-gray-600 text-sm">Advanced automatic detection capabilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Enhanced Safety</h4>
                    <p className="text-gray-600 text-sm">Highest state of process safety monitoring</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8 text-center"
            >
              <Monitor className="w-24 h-24 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Real-Time Monitoring</h4>
              <p className="text-gray-600 leading-relaxed">
                Continuous online wire rope inspection system that revolutionizes traditional 
                inspection methods through automated, real-time monitoring capabilities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* System Capabilities */}
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
              System Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive capabilities that set new standards in wire rope inspection and monitoring
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center"
              >
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              System Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The advantages that make TCK.W Rope Monitor the preferred choice for wire rope inspection
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

      {/* Innovation Highlight */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Innovation in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transforming wire rope inspection through revolutionary technology
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8"
            >
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Process Safety Excellence</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                The TCK.W Rope Monitor system brings process safety monitoring to its highest state through 
                continuous inspection during operation. By revolutionizing periodic human visual inspection, 
                it sets new standards for safety, efficiency, and operational excellence in wire rope monitoring.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
              Revolutionary Rope Monitoring
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to transform your wire rope inspection with real-time monitoring technology? 
              Contact us to learn more about the TCK.W Rope Monitor system and its revolutionary capabilities.
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

