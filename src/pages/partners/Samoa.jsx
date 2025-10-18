import React from "react";
import { motion } from "framer-motion";
import { Building, Wrench, Shield, CheckCircle, Target, TrendingUp, Settings, Globe, Users, Award } from "lucide-react";
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

// Import Samoa logo
import logoSamoa from "../../assets/product_partners/samoa.png";

const Samoa = () => {

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
              Samoa LTD
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Industrial Equipment and Services
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
                  src={logoSamoa}
                  alt="Samoa LTD Logo"
                  className="h-32 w-95 sm:h-36 lg:h-55 rounded-2xl"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="flex-1 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  SAMOA LTD (UK) was established in 1987 as a distribution and marketing company for the United Kingdom and Republic of Ireland.
                </p>
                <p>
                  SAMOA SA were initially a manufacturer of grease nipples and lever grease guns. Now SAMOA has evolved to become one of the world's leading manufacturers of lubrication equipment.
                </p>
                <p>
                  Samoa Industrial Group designs and manufactures Air Operated Double Diaphragm Pumps, Pneumatic Piston Pumps, and Volume flow meters, and control valves, electrical components for fluid management systems, hose reels, hand-operated guns, and other products and accessories for fluid management.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-500">
                  <p className="font-semibold text-gray-800">
                    With over <span className="text-blue-600 font-bold text-xl">35 years</span> of experience since 1987, SAMOA has established itself as a world-leading manufacturer of lubrication equipment and fluid management solutions.
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
            <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lubrication Equipment</h3>
              <p className="text-gray-600 leading-relaxed">
                World-leading manufacturer of lubrication equipment including grease nipples, lever grease guns, and advanced lubrication systems.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fluid Management Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Air Operated Double Diaphragm Pumps, Pneumatic Piston Pumps, Volume flow meters, control valves, and electrical components.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">UK & Ireland Distribution</h3>
              <p className="text-gray-600 leading-relaxed">
                Established distribution and marketing company serving the United Kingdom and Republic of Ireland since 1987.
              </p>
            </div>
          </motion.div>


        </div>
      </section>

    </div>
  );
};

export default Samoa;
