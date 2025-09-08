import React from 'react'
import { motion } from 'framer-motion'
import ClientSection from '../../components/section/client_section'

const Quality_Policy = () => {
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
              Quality Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to excellence and continuous improvement in quality management
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
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12"
          >
            {/* Company Introduction */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                About Calaya Engineering Services Limited
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Calaya Engineering Services Limited is a Nigerian based organization and a leading provider of Engineering, Procurement and Construction (EPC); Oil and Gas Facilities, Provision of Online Wellhead Maintenance (Leak Sealing & Repairs, SSCSSV), Calibration; (PSV, Flow Meter, Tanks), Asset Integrity/Inspection (LRUT,IP,UT,NDT,HAT). Corrosion Management: (Internal Corrosion, CP, DCVG), Fabrication, Acoustic Emission, Auto Corrosion Mapping, ETC.
              </p>
            </div>

            {/* Policy Statement */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Quality Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>CALAYA ENGINEERING SERVICES LIMITED</strong> is committed to:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ensuring the clarification of the quality policy is always available from the Managing Director & Management and is communicated with understanding, to all employees at regular intervals, including all our relevant interested parties and also be posted on the CESL internet website.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Continual improvement and maintenance of the quality management system (QMS), meeting international standard, statutory and regulatory requirements, including Client's requirement.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ensure its provision and operation is in a safe and healthy working condition/environment so as to prevent work-related injury and ill health, practice workers' engagement/involvement, including addressing risk and opportunity in achieving a sustainable Quality Assurance and Quality Control.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">•</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Top Management ensuring that the quality objectives framework is in line with ISO 9001:2015 Standard.
                  </p>
                </div>
              </div>
            </div>

            {/* ISO Certification Highlight */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ISO 9001:2015 Certification
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Our quality management system is aligned with the internationally recognized ISO 9001:2015 standard, ensuring consistent quality delivery and continuous improvement across all our operations.
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

export default Quality_Policy
