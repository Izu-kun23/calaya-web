'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function QuantumDownholePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-blue-700"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Quantum Downhole Systems
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Innovative Wellbore Cleanout and Production Evaluation Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Logo and Description */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Logo */}
              <div className="lg:col-span-2 flex justify-center lg:justify-start">
                <img
                  src="/assets/quantum_downhole/quantum_logo.png"
                  alt="Quantum Downhole Systems Logo"
                  className="w-64 h-auto"
                />
              </div>

              {/* Description */}
              <div className="lg:col-span-3">
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                  Quantum Downhole Systems provides innovative solutions for wellbore cleanout and production 
                  evaluation in under-pressured horizontal wells using patented concentric coiled tubing 
                  technology. Their systems, like JetVa and Q-Vak, efficiently remove wellbore obstructions, gather 
                  continuous inflow data, and enhance production. They focus on low-risk, effective cleanout 
                  solutions that reduce the need for future interventions.
                </p>
              </div>
            </div>

            {/* Key Features Grid */}
            <div className="pt-8">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-10 text-center">
                Key Technologies & Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Wellbore Cleanout",
                    description: "Innovative solutions for efficient wellbore cleaning operations"
                  },
                  {
                    title: "Production Evaluation",
                    description: "Comprehensive evaluation of production performance"
                  },
                  {
                    title: "Concentric Coiled Tubing",
                    description: "Patented technology for under-pressured horizontal wells"
                  },
                  {
                    title: "JetVa System",
                    description: "Efficiently removes wellbore obstructions"
                  },
                  {
                    title: "Q-Vak System",
                    description: "Gathers continuous inflow data and enhances production"
                  },
                  {
                    title: "Low-Risk Solutions",
                    description: "Effective cleanout solutions that reduce future interventions"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Content Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <div className="max-w-4xl mx-auto">
                <img
                  src="/assets/quantum_downhole/content.png"
                  alt="Quantum Downhole Systems"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Innovative Downhole Solutions
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Ready to implement cutting-edge wellbore cleanout and production evaluation solutions? 
              Contact Quantum Downhole Systems for patented technology that delivers results.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}