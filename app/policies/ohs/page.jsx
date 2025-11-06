'use client';
import React from 'react'
import { motion } from 'framer-motion'
import ClientSection from '../../../src/components/section/client_section'

export default function OHSPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Occupational Health & Safety Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to providing a safe and healthy working environment
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-xl  p-6 sm:p-8 md:p-12"
          >
            {/* Company Introduction */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                OHS Policy
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
                Calaya Engineering Services Limited is a Nigerian based organization and a leading provider of Engineering, Procurement and Construction (EPC); Oil and Gas Facilities, Provision of Online Wellhead Maintenance (Leak Sealing & Repairs, Fishing Downhole, SSCSSV), Calibration; (PSV, Flow Meter, Tanks), Asset Integrity/Inspection (LRUT,IP,UT,NDT,HAT). Corrosion Management: (Internal Corrosion, CP, DCVG), Fabrication, Acoustic Emission, Auto Corrosion Mapping, ETC.
              </p>
            </div>

            {/* Policy Statement */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our OH&S Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                <strong>CALAYA ENGINEERING SERVICES LIMITED</strong> is committed to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Develop and annually review the OH&S policy statement and OH&S Objectives to drive the Management System.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Fulfill all legal requirement (national, local or international) and other requirement.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Provide a safe and healthy working condition so as to prevent work-related injury and ill health, as well as practice the engagement/involvement of workers, contractors and interested parties etc, while carrying out their operations.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Eliminate all known hence hidden hazard through our dedicated risk assessment method.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Continual improvement of the OH&S management system through Management review meetings.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Top Management ensuring that the OH&S objectives framework is in line with ISO 45001:2018 Standard.
                  </p>
                </div>
              </div>
            </div>

            {/* Management Responsibility */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Management Responsibility
              </h3>
              <p className="text-gray-700 leading-relaxed">
                it is the responsibility of Top Management to ensure that the OH&S Policy is consistently implemented and maintained, effectively communicated and understood across all levels of the organization, made readily accessible to interested parties upon request, and prominently displayed on the CESL website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />
    </div>
  )
}
