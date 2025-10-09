import React from 'react';
import { motion } from 'framer-motion';
import { Gauge, TrendingUp, Shield, Globe, Settings, Target } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';
import gmFlowLogo from '../../assets/product_partners/gm_flow.jpg';

const GM_Flow = () => {

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
              GM Flow Measurement
            </h1>
            <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto">
              Global Gas Flow Meter Manufacturing & Well Testing Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Introduction
            </h2>
          </motion.div>
          
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
                  src={gmFlowLogo}
                  alt="GM Flow Measurement Logo"
                  className="h-48 w-auto sm:h-56 lg:h-64 rounded-2xl"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Global Manufacturer of Advanced Gas Flow Meters
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  GM Flow manufactures gas flow meters for applications around the globe across many industry sectors, 
                  with specialized expertise in well testing applications. Our flow meters provide accurate information 
                  on gas flow rates, ensuring precise measurement and control in critical industrial processes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  GM Flow designs flow meters from the ground up, utilizing state-of-the-art cloud computing methods 
                  to analyze stress and fluid dynamics during the design stages. This advanced approach ensures optimal 
                  performance, reliability, and accuracy in our flow measurement solutions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accurate & Precise Readings</h3>
              <p className="text-gray-600 leading-relaxed">
                Provides accurate and precise readings on crude flow, ensuring reliable data for critical decision-making in industrial processes.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Reduction</h3>
              <p className="text-gray-600 leading-relaxed">
                Significant cost reduction through improved efficiency and reduced operational expenses in flow measurement applications.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Response</h3>
              <p className="text-gray-600 leading-relaxed">
                Starts to read as soon as natural gas starts passing through the meter, providing immediate and continuous flow monitoring.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Benefits</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduction in CO2 footprint through optimized flow measurement and improved operational efficiency.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduced Personnel Requirements</h3>
              <p className="text-gray-600 leading-relaxed">
                Less personnel needed for operation and maintenance, reducing labor costs and improving operational efficiency.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advanced Design Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                State-of-the-art cloud computing methods for analyzing stress and fluid dynamics during design stages.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default GM_Flow;
