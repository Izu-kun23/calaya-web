import React from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Globe, CheckCircle, Award } from "lucide-react";
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

// Import CCube logo
import logoCCube from "../../assets/product_partners/c-cube.jpeg";

const CCube = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              C-Cube International
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              International Engineering Solutions & Global Partnership Development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
                  src={logoCCube}
                  alt="C-Cube International Logo"
                  className="h-32 w-auto sm:h-36 lg:h-50 rounded-2xl"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="flex-1 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  C-CUBE INTERNATIONAL specializes in corrosion and degradation and has developed various patented technologies to measure corrosion very precisely.
                </p>
                <p>
                  C-Cube International operates worldwide in a wide range of industries such as infrastructure, shipping, process industries, insurance companies, research institutes, offshore applications, hydraulics and coating suppliers.
                </p>
                <p>
                  C-cube technologies detect corrosion at an early stage. Based on the measurement results, we quantify the protection values and predict the lifespan of coatings. Predictive maintenance also becomes possible based on these insights.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-800">
                    This method of maintenance prevents failure and downtime by addressing corroded locations early, before corrosion becomes a problem. This method can save up to <span className="text-red-600 font-bold text-xl">40% of maintenance costs!</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {/* Feature 1 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patented Technologies</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced patented technologies for precise corrosion measurement and early-stage detection across diverse industries.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cost Savings</h3>
              <p className="text-gray-600 leading-relaxed">
                Proven to reduce maintenance costs by up to 40% through early corrosion detection and predictive maintenance.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Operations</h3>
              <p className="text-gray-600 leading-relaxed">
                Worldwide operations serving infrastructure, shipping, offshore, and research industries with specialized solutions.
              </p>
            </div>
          </motion.div>

        </div>
      </section>



    </div>
  );
};

export default CCube;
