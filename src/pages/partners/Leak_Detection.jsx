import React from 'react';
import { motion } from 'framer-motion';
import { Search, Shield, Target, AlertTriangle, Zap } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';
import leakDetectionLogo from '../../assets/product_partners/leak_detection.jpg';

const Leak_Detection = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Leak Detection and Repair
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              LDAR Services for Oil & Gas Pipelines, Tanks & Industrial Equipment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 lg:p-12 mb-16"
          >
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Logo - Left Side */}
              <div className="flex-shrink-0">
                <img
                  src={leakDetectionLogo}
                  alt="Leak Detection and Repair"
                  className="h-48 w-auto sm:h-56 lg:h-64 rounded-2xl"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="flex-1 text-center lg:text-left">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Leak detection and repair involves identifying and fixing leaks in various 
                  systems such as pipelines and industrial equipment, to prevent waste and damage. 
                  Repairs may involve sealing or replacing damaged components.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Leak detection and repair (LDAR) is a process that maintenance team use to identify 
                  and fix air, water, gas and other types of leaks in oil and gas pipelines, tanks, 
                  and other equipment. The purpose of LDAR is to prevent major accidents, wasted 
                  resources leading to higher costs, and underperforming assets.
                </p>
              </div>
            </div>
          </motion.div>

          {/* LDAR Methods */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                LDAR Methods
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visual Inspections</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprehensive visual inspections to identify and fix air, water, gas and other types of leaks in oil and gas pipelines, tanks, and other equipment.
                </p>
              </div>

              <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Pressure Test</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pressure testing methods to detect leaks in various systems such as pipelines and industrial equipment to prevent waste and damage.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Purpose of LDAR */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="py-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Purpose of LDAR
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 text-center hover: transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <AlertTriangle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prevent Major Accidents</h3>
                <p className="text-gray-600 leading-relaxed">
                  LDAR processes are designed to prevent major accidents and ensure operational safety.
                </p>
              </div>

              <div className="p-6 text-center hover: transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prevent Wasted Resources</h3>
                <p className="text-gray-600 leading-relaxed">
                  Identifying and fixing leaks prevents wasted resources leading to higher costs.
                </p>
              </div>

              <div className="p-6 text-center hover: transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Prevent Underperforming Assets</h3>
                <p className="text-gray-600 leading-relaxed">
                  LDAR ensures assets perform optimally and prevents equipment underperformance.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default Leak_Detection;
