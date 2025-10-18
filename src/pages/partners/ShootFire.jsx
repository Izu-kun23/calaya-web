import React from "react";
import { motion } from "framer-motion";
import { Shield, Flame, Target, CheckCircle, AlertTriangle, Zap } from "lucide-react";

// Import Shoot Fire logo
import logoShootFire from "../../assets/product_partners/shootfire.jpg";

const ShootFire = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Shoot Fire by Vimal Fire
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-red-100 max-w-3xl mx-auto">
              Advanced Fire Safety and Suppression Systems
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
                  src={logoShootFire}
                  alt="Shoot Fire by Vimal Fire Logo"
                  className="h-32 w-auto sm:h-36 lg:h-50 rounded-2xl"
                />
              </div>
              
              {/* Content - Right Side */}
              <div className="flex-1 space-y-6 text-lg text-gray-600 leading-relaxed">
                <p className="text-xl font-medium text-gray-800">
                  Shoot Fire by Vimal Fire is engaged in the manufacturing of sophisticated products ranging from specialized fire extinguishers and advanced firefighting systems to many more.
                </p>
                <p>
                  It is likely a fire suppression system designed to rapidly detect and extinguish fires. It incorporates advanced technology for rapid response, utilizing agents like foam or gas to effectively suppress fire.
                </p>
                <p>
                  Shootfire by Vimal Fire is crucial for ensuring safety of people and property by swiftly containing and extinguishing fire before it escalates.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-l-4 border-red-500">
                  <p className="font-semibold text-gray-800">
                    Our advanced fire suppression systems provide <span className="text-red-600 font-bold text-xl">rapid response</span> and effective fire containment to protect lives and property.
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
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Flame className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fire Suppression Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced fire suppression systems designed to rapidly detect and extinguish fires using sophisticated technology and effective agents.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                Cutting-edge technology for rapid fire detection and response, utilizing advanced agents like foam or gas for effective fire suppression.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 hover: transition-all duration-300 transform hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Crucial safety systems for protecting lives and property by swiftly containing and extinguishing fires before they escalate.
              </p>
            </div>
          </motion.div>


        </div>
      </section>

    </div>
  );
};

export default ShootFire;
