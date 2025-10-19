import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Gauge, Settings, Monitor, Zap, BarChart3, Calculator } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

const Tomojit_Ghosh = () => {
  // Services offered
  const services = [
    {
      id: 1,
      title: "Tank Calibration",
      description: "Comprehensive calibration services for storage and marine tanks",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Tank Inspection",
      description: "Detailed inspection services with mathematical precision",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Surveying Services",
      description: "Professional surveying underpinned by deep mathematical expertise",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 4,
      title: "3D Modeling & Analysis",
      description: "Advanced 3D models for accurate analysis and monitoring",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  // Key advantages
  const advantages = [
    {
      id: 1,
      title: "High Accuracy and Precision",
      description: "Accurate volume measurements with mathematical precision",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Efficiency and Speed",
      description: "Fast calibration, no need for de-gassing, environmental friendliness",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Enhanced Operational Efficiency",
      description: "Data driven decisions, reduced operational costs",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Detailed Analysis",
      description: "Comprehensive 3D models and detailed analysis capabilities",
      icon: <Calculator className="w-6 h-6" />
    }
  ];

  // Detailed analysis capabilities
  const analysisCapabilities = [
    "Accurate strapping tables",
    "Verticality analysis",
    "Peaking and banding analysis",
    "Tank integrity monitoring",
    "Design and fabrication assistance"
  ];

  // Key benefits
  const benefits = [
    "Independent company expertise",
    "Mathematical precision",
    "Storage tank specialization",
    "Marine tank expertise",
    "Environmental friendliness",
    "No de-gassing required",
    "Data-driven decisions",
    "Reduced operational costs"
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
                  About Tomojit Ghosh Calibration (TGC)
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Tomojit Ghosh Calibration (TGC) is an independent company that offers a comprehensive range 
                  of calibration, inspection, and surveying services for storage and marine tanks, underpinned 
                  by deep expertise in mathematics.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mathematical foundation ensures the highest levels of accuracy and precision in all our 
                  services, providing clients with reliable data for informed decision-making and optimal 
                  operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for storage and marine tank calibration, inspection, and surveying
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
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
              Key Advantages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The benefits that set TGC apart in calibration and inspection services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg border border-gray-200 p-6 text-center"
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

      {/* Detailed Analysis Capabilities */}
      <section className="py-16 lg:py-20 bg-gray-50">
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
                Detailed 3D Models and Analysis
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our advanced 3D modeling capabilities provide comprehensive analysis and monitoring 
                solutions for tank integrity and performance optimization.
              </p>
              <div className="space-y-3">
                {analysisCapabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 p-8 text-center"
            >
              <BarChart3 className="w-24 h-24 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced 3D Analysis</h4>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive 3D models providing accurate strapping tables, verticality analysis, 
                and tank integrity monitoring for optimal performance.
              </p>
            </motion.div>
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
              Why Choose TGC
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The key benefits that make TGC the preferred choice for calibration and inspection services
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

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Precision Calibration Services
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to benefit from mathematical precision in tank calibration and inspection? 
              Contact TGC for comprehensive services backed by deep expertise in mathematics.
            </p>
            <Link
              to="/contact"
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

export default Tomojit_Ghosh;
