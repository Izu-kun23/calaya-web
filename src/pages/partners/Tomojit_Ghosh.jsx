import React from 'react';
import { motion } from 'framer-motion';
import { Target, Settings, Zap, Calculator } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';
import tgcImage from '../../assets/tomojit_ghosh/TGC_1.png';

const Tomojit_Ghosh = () => {
  // Key advantages
  const advantages = [
    {
      id: 1,
      title: "High Accuracy and Precision",
      description: "High accuracy and precision - accurate volume measurements",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Efficiency and Speed",
      description: "Efficiency and speed - fast calibration, no need for de-gassing, environmental friendliness",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Enhanced Operational Efficiency",
      description: "Enhanced operational efficiency - data driven decisions, reduced operational costs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Detailed 3D Models and Analysis",
      description: "Detailed 3D models and analysis - accurate strapping tables, verticality analysis, peaking and banding analysis, tank integrity monitoring, design and fabrication assistance",
      icon: <Calculator className="w-6 h-6" />
    }
  ];

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tomojit Ghosh Calibration
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Calibration, Inspection and Surveying Services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-gray-50">
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
                  About Tomojit Ghosh Calibration (TGC)
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tomojit Ghosh Calibration (TGC) is an independent company that offers a comprehensive range of 
                  calibration, inspection, and surveying services for storage and marine tanks, underpinned by 
                  deep expertise in mathematics.
                </p>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <img
                src={tgcImage}
                alt="Tomojit Ghosh Calibration"
                className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
              <div className="w-full max-w-md h-64 bg-gray-200 rounded-lg shadow-inner hidden items-center justify-center text-gray-500 text-center p-4">
                <p>Tomojit Ghosh Calibration Image</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
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
              Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center max-w-sm mx-auto"
              >
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Tomojit_Ghosh;
