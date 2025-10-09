import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

// Import 12S logo
import logo12S from "../../assets/product_partners/i2S.jpg";
import orphieLogo from "../../assets/12S/i2s_orphie_logo.jpeg";
import beforeImage from "../../assets/12S/before_image.png";
import afterImage from "../../assets/12S/after_image.png";

/**
 * TwelveS Component - Engineering and Technical Services
 * Features consistent gallery structure with enhanced modal functionality
 */
const TwelveS = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            >
              12S
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Image Capturing and Processing Technology
            </motion.p>
          </div>
        </div>
      </header>

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
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Introduction
            </h2>
          </motion.div>

          {/* Content and Logo Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-lg mb-6">
                  I2S is a company specializing in image capturing and processing technology. We work 
                  with international clients across a wide range of markets including health and wellbeing, 
                  sports, multimedia, document digitalization, food processing and agriculture, aviation 
                  and aerospace, robotics and industrial control systems, and more generally, wherever 
                  image capturing is required.
                </p>
                
                <p className="text-lg mb-6">
                  I2S designs, manufactures and distributes camera and optronic systems. Our expertise 
                  in advanced imaging technology enables us to deliver innovative solutions for complex 
                  visual challenges across diverse industries and applications.
                </p>
                
                <p className="text-lg mb-8">
                  Through our partnership with Calaya Engineering Services, we bring cutting-edge image 
                  capturing and processing capabilities to projects in the oil and gas industry, 
                  particularly in underwater inspection and monitoring applications where advanced 
                  imaging technology is essential for operational success.
                </p>
              </div>

              {/* Services of I2S */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Our Technology Solutions
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Camera Systems:</strong> Design, manufacture and distribution 
                      of advanced camera and optronic systems for diverse applications
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Image Processing:</strong> Advanced image capturing and processing 
                      technology for complex visual challenges
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Underwater Imaging:</strong> Specialized underwater camera systems 
                      for ROV/AUV and professional divers with enhanced visibility in turbid conditions
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-lg text-gray-700">
                      <strong>Multi-Industry Applications:</strong> Solutions for health, sports, 
                      multimedia, agriculture, aerospace, robotics, and industrial control systems
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end -mt-8"
            >
              <div className="bg-gray-50 rounded-2xl p-6 max-w-md w-full">
                <img
                  src={logo12S}
                  alt="12S Logo - Engineering and Technical Services"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>


      {/* I2S Orphie Section */}
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
              I2S Orphie
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Revolutionizing underwater imagery and inspection technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-10 lg:p-14 text-white shadow-xl">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <img
                    src={orphieLogo}
                    alt="I2S Orphie Logo - Underwater Imagery Innovation"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                  Underwater Imagery Innovation
                </h3>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-8">
                  I2S Orphie is concerned about the prospects for innovations in the world of 
                  underwater imagery, especially in turbid observation conditions. We want to 
                  change the underwater inspection sector by offering a camera for underwater 
                  robots (ROV/AUV) and/or professional divers.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">Enhanced Visibility Technology</h4>
                    <p className="text-gray-200 leading-relaxed">
                      Our advanced camera systems can significantly improve the visibility 
                      distance in turbid underwater conditions, enabling higher quality 
                      inspections that were previously impossible.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">ROV/AUV Integration</h4>
                    <p className="text-gray-200 leading-relaxed">
                      Specialized cameras designed for underwater robots (ROV/AUV) that 
                      provide enhanced imaging capabilities for autonomous underwater 
                      inspection operations.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">Professional Diver Solutions</h4>
                    <p className="text-gray-200 leading-relaxed">
                      Camera systems optimized for professional divers, enabling them 
                      to capture high-quality images and videos in challenging underwater 
                      environments with limited visibility.
                    </p>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-xl font-bold mb-4">Turbid Condition Expertise</h4>
                    <p className="text-blue-100 leading-relaxed">
                      Advanced image processing technology specifically designed to handle 
                      turbid observation conditions, making underwater inspections more 
                      reliable and comprehensive.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 max-w-3xl mx-auto">
                  <p className="text-lg font-semibold text-white">
                    "The latter can significantly improve the visibility distance and thus 
                    perform inspections of a higher quality."
                  </p>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </motion.section>

    {/* Before/After Comparison Section */}
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
            I2S Expertise in Underwater Imaging
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            See the dramatic improvement in underwater visibility with I2S Orphie's advanced imaging technology
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Before Image */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Before</h3>
                <div className="relative">
                  <img
                    src={beforeImage}
                    alt="Underwater imaging before I2S technology - limited visibility in turbid conditions"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  Standard underwater imaging in turbid conditions
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="flex justify-center items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full p-4 shadow-lg"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* After Image */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">After</h3>
                <div className="relative">
                  <img
                    src={afterImage}
                    alt="Underwater imaging after I2S technology - enhanced visibility and clarity"
                    className="w-full h-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <p className="text-gray-600 mt-4 text-sm">
                  I2S Orphie enhanced underwater imaging
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </motion.section>


    </div>
  );
};

export default TwelveS;
