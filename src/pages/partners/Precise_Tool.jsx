import React from 'react';
import { motion } from 'framer-motion';

const Precise_Tool = () => {
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
              Precise Tool
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Innovation and problem-solving in downhole instrumentation worldwide
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Image Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 lg:py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src="/src/assets/precisetool/precise_tool.jpg"
              alt="Precise Tool"
              className="max-w-2xl w-full h-auto rounded-lg shadow-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div className="max-w-2xl w-full h-64 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
              <p>Precise Tool Image</p>
            </div>
          </motion.div>
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
              Introduction
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto space-y-6">
              <p>
                Precise Downhole Solutions would like to bring its innovation and problem-solving mentality around downhole instrumentation to the far reaches of the world. With many years' experience in their portfolio with many different types of completions within the oil and gas market, there is a plethora of information and success to share. Improving efficiencies in downhole instrumentation and helping producing companies become more globally competitive in today's market is just the beginning.
              </p>
              <p>
                Precise Downhole Solutions has completed many successful projects for many major operators worldwide. Our focus on safety from project inception to completion contributes to our high standard of workmanship, attention to detail and commitment to exceeding our customers' needs and expectations. We are continuously diversifying our markets/industries served and we are focused on developing new technologies that help our customers utilize data to capitalize on their investments, while maintaining a high standard of ESG performance.
              </p>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Services
            </h3>
            <div className="max-w-4xl mx-auto">
              <motion.ul 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-gray-700"
              >
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Engineering and Design</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Sensor Manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Instrumentation Encapsulation / Protection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Instrumentation Deployment Techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Pump-Downs (Fluid Deployed)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Spool-in's (Gravity Feeds)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Drag-In's</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Clamping & Banding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Coiled Tubing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Clamp Management and Refurbishment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>ESP Spooling Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Chemical Injection Services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Regulatory Inspections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>DTS/DAS Fiber Optic Surveys</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Fiber Optic</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Pipeline Monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Fire Detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Infrastructure Monitoring & more</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">•</span>
                  <span>Wireline Services</span>
                </li>
              </motion.ul>
            </div>
          </motion.div>

          {/* Real-Time Systems Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Real-Time Drop Spool Systems
            </h3>
            <div className="max-w-4xl mx-auto">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Provide bottom hole pressure and temperature data in real time directly to your desktop</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Monitor, record, and build models immediately with no time wasted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Capability to run multiple gauges as downhole recorders, pressure/temperature surveys, short-and long-term flow and build-up tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Ability to execute accurate and efficient pressure gradient tests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-bold mt-1">•</span>
                  <span>Additional services available upon request</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Precise_Tool;
