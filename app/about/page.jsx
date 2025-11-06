'use client';
import React from "react";
import { motion } from "framer-motion";
import ClientSection from "../../src/components/section/client_section";
const aboutHeroImage = '/assets/images/Useable_Images/image5.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-75 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={aboutHeroImage}
            alt="Calaya Engineering team"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Calaya Engineering
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Delivering excellence in oil and gas services since 2005.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Company
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p>
                  Calaya Engineering Services Limited is a limited liability
                  company incorporated in 2005 under the laws of the Federal
                  Republic of Nigeria, and also incorporated in the Republic of
                  Equatorial Guinea, Ghana, United Kingdom, Congo, Angola,
                  Spain, and Malaysia.
                </p>
                <p>
                  We are one of the leading oil and gas service provider with a
                  very robust track record for excellence in service delivery.
                </p>
                <p>
                  Our keen knowledge in the Oil & Gas industry and innovation on
                  scheduled delivery has helped us meet the needs of our clients
                  with credible OEMs covering areas of our services with various
                  clients at large.
                </p>
                <p>
                  Since inception, Calaya has strategically partnered with
                  various multinational OEM and ODMs to deploy cutting-edge
                  technologies to execute several projects with advanced
                  technologies that focuses on cost minimization, time
                  efficiency, and long term preservation of assets and increase
                  revenue for our esteemed clients.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-8 text-white"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Our Global Presence</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Federal Republic of Nigeria</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Republic of Equatorial Guinea</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Congo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Malaysia</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Mozambique</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Angola</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Spain</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                  <span>Ghana</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-lg font-semibold mb-3">Established</h4>
                <p className="text-3xl font-bold">2005</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="w-full py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Key Strengths
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              What sets us apart in the oil and gas industry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 text-center hover:-translate-y-2 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2">
                20,000+
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Projects Completed
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Successfully delivered thousands of projects across Africa with
                excellence and precision.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 text-center hover:-translate-y-2 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2">
                47,890
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Happy Customers
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Building lasting relationships with satisfied clients who trust
                our expertise and service quality.
              </p>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl p-6 sm:p-8 text-center hover:-translate-y-2 transition-all duration-300 ease-out"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-500 mb-2">
                450+
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                Team Members
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                A dedicated team of skilled professionals committed to
                delivering exceptional results and innovation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />
    </div>
  );
}

