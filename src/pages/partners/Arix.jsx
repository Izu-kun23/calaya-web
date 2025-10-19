import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Shield, TrendingUp } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

// Import ARIX images
// import arixImage from '../../assets/arix/arix_image.png';
import arixImage2 from '../../assets/arix/arix_image2.png';

const Arix = () => {
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
              ARIX Technologies
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Innovative Robotic and Software Solutions for Pipe Corrosion Inspection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
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
                  About ARIX Technologies
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  ARIX Technologies is fueled by a profound commitment to addressing critical pipe corrosion 
                  challenges encountered by industries worldwide. Established in 2017, the company has from day 
                  one, prioritized combining firsthand experiences by those who have lived the problem with 
                  creative innovations by those able to imagine the solution.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Since inception, ARIX has steadfastly pursued a future of safe, cost-effective, reliable inspection 
                  methods. Close collaboration between knowledgeable customer expertise and feedback with the 
                  industry leading technology development is in our DNA, and we believe those partnerships are 
                  essential to delivering transformative solutions and optimal performance.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Established 2017</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Robotic Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Software Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Industry Partnerships</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-start"
            >
              <img
                src={arixImage2}
                alt="ARIX Technologies"
                className="w-full max-w-md h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-md h-72 bg-gray-200 rounded-2xl shadow-lg hidden items-center justify-center text-gray-500">
                <p>ARIX Technologies Image</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our purpose is to revolutionize inspection and maintenance programs through innovative robotic 
                and software solutions. We are on a mission to enhance safety, integrity, and sustainability, 
                creating a future where solutions empower businesses to operate more safely and profitably 
                while safeguarding vital infrastructure for generations to come.
              </p>
            </div>
          </motion.div>

          {/* Mission Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
            >
              <div className="bg-blue-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhancing safety through advanced inspection methods and reliable monitoring systems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
            >
              <div className="bg-green-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Maintaining infrastructure integrity through precise corrosion detection and analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300 text-center"
            >
              <div className="bg-purple-100 p-3 rounded-lg w-fit mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Creating sustainable solutions that protect vital infrastructure for future generations.
              </p>
            </motion.div>
          </div>

       
        </div>
      </section>

    </div>
  );
};

export default Arix;
