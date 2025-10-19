import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Settings, Monitor, Target, Shield, Wrench, BarChart3 } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

const Quantum_Downhole = () => {
  // Key systems and technologies
  const systems = [
    {
      id: 1,
      title: "JetVa System",
      description: "Efficiently removes wellbore obstructions with advanced technology",
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Q-Vak System",
      description: "Gathers continuous inflow data and enhances production",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Concentric Coiled Tubing",
      description: "Patented technology for under-pressured horizontal wells",
      icon: <Settings className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Production Evaluation",
      description: "Comprehensive evaluation solutions for optimal performance",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  // Key capabilities
  const capabilities = [
    "Wellbore cleanout solutions",
    "Production evaluation",
    "Under-pressured horizontal wells",
    "Patented concentric coiled tubing technology",
    "Continuous inflow data gathering",
    "Low-risk operations",
    "Effective cleanout solutions",
    "Reduced future interventions"
  ];

  // Benefits and features
  const benefits = [
    {
      id: 1,
      title: "Innovative Solutions",
      description: "Cutting-edge technology for wellbore cleanout and production evaluation",
      icon: <Target className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Low-Risk Operations",
      description: "Focus on low-risk, effective cleanout solutions",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Reduced Interventions",
      description: "Solutions that reduce the need for future interventions",
      icon: <Wrench className="w-6 h-6" />
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
              Quantum Downhole Systems
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Innovative Wellbore Cleanout and Production Evaluation Solutions
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
                  About Quantum Downhole Systems
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Quantum Downhole Systems provides innovative solutions for wellbore cleanout and production 
                  evaluation in under-pressured horizontal wells using patented concentric coiled tubing technology.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Their systems, like JetVa and Q-Vak, efficiently remove wellbore obstructions, gather 
                  continuous inflow data, and enhance production.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  They focus on low-risk, effective cleanout solutions that reduce the need for future interventions, 
                  providing long-term value and operational efficiency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Systems and Technologies */}
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
              Systems and Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Advanced systems designed for efficient wellbore cleanout and production optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {system.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {system.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {system.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Focus */}
      <section className="py-16 lg:py-20 bg-white">
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
                Patented Concentric Coiled Tubing Technology
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our patented concentric coiled tubing technology is specifically designed for under-pressured 
                horizontal wells, providing innovative solutions that address the unique challenges of these environments.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">JetVa System</h4>
                  <p className="text-gray-600">
                    Efficiently removes wellbore obstructions using advanced technology designed for 
                    challenging downhole conditions.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg border border-green-200 p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Q-Vak System</h4>
                  <p className="text-gray-600">
                    Gathers continuous inflow data and enhances production through real-time monitoring 
                    and optimization capabilities.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-lg p-8 text-center"
            >
              <Settings className="w-24 h-24 text-blue-600 mx-auto mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h4>
              <p className="text-gray-600 leading-relaxed">
                Patented concentric coiled tubing technology specifically engineered for under-pressured 
                horizontal wells and challenging downhole environments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
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
              Key Benefits
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The advantages that make Quantum Downhole Systems the preferred choice for wellbore solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 p-6 text-center"
              >
                <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{capability}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Focus Areas */}
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
              Our Focus
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Commitment to delivering effective, low-risk solutions that provide long-term value
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg border border-gray-200 p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Low-Risk Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We focus on developing and implementing low-risk, effective cleanout solutions that 
                    minimize operational hazards while maximizing efficiency and performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Reduced Future Interventions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our solutions are designed to reduce the need for future interventions, providing 
                    long-term operational benefits and cost savings for our clients.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Innovative Downhole Solutions
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ready to implement cutting-edge wellbore cleanout and production evaluation solutions? 
              Contact Quantum Downhole Systems for patented technology that delivers results.
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

export default Quantum_Downhole;
