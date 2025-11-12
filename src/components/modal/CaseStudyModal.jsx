'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle } from 'lucide-react';

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative bg-white rounded-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto flex flex-col border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Engineering Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b border-gray-200 z-10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{caseStudy.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <p className="text-gray-600 text-sm">Technical Case Study Report</p>
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 flex-1 bg-white">
              {/* Client & Project Status */}
              <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm font-semibold text-blue-600 mb-2">
                    Client Organization
                  </div>
                  <p className="text-gray-900 font-medium">{caseStudy.client}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm font-semibold text-green-600 mb-2">
                    Project Status
                  </div>
                  <p className="text-gray-900 font-medium">Successfully Completed</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="text-sm font-semibold text-orange-600 mb-2">
                    Industry
                  </div>
                  <p className="text-gray-900 font-medium">Oil & Gas</p>
                </div>
              </div>

              {/* Project Overview */}
              <div className="mb-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Project Overview</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <div className="text-gray-700 leading-relaxed text-sm mb-4">
                    {caseStudy.description.split("'").map((part, index) => {
                      if (index % 2 === 1) {
                        // This is inside quotes - make it blue
                        return (
                          <span key={index} className="text-blue-800 font-medium italic">
                            "{part}"
                          </span>
                        );
                      }
                      return part;
                    }).map((part, index) => {
                      // Check if this part contains the name and make it red
                      if (typeof part === 'string' && part.includes('Temitope Alalade, SPDC Completion and Well Intervention (CWI) Engineer')) {
                        return (
                          <span key={`name-${index}`} className="text-red-500 font-semibold">
                            {part}
                          </span>
                        );
                      }
                      return part;
                    })}
                  </div>
                  {/* Project Images - Specific to case studies */}
                  {caseStudy.title === "36\" Station Manual Gate Valve Leak Sealing - WAPCo" && (
                    <div className="mt-4">
                      <img 
                        src="/assets/casestudy/casestudy1.png" 
                        alt="WAPCo valve maintenance project" 
                        className="w-full max-w-2xl mx-auto rounded-lg"
                      />
                    </div>
                  )}
                  {caseStudy.title === "Valve Sealant 701 for Slickline Operations - Addax Petroleum" && (
                    <div className="mt-4">
                      <img 
                        src="/assets/casestudy/casestudy2.png" 
                        alt="Addax Petroleum RS Clare pumping operation" 
                        className="w-full max-w-2xl mx-auto rounded-lg"
                      />
                    </div>
                  )}
                  {caseStudy.title === "Greasing and Leak Sealing of GTS-4 - NLNG Bonny Facility" && (
                    <div className="mt-4">
                      <img 
                        src="/assets/casestudy/casestudy3.png" 
                        alt="NLNG GTS pipeline valve maintenance with RS Clare equipment" 
                        className="w-full max-w-2xl mx-auto rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Technical Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Application Scope
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.application}</p>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-3">
                    Equipment & Products
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.products}</p>
                </div>
              </div>

              {/* Results & Performance */}
              <div className="mb-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900">Results & Performance Metrics</h3>
                </div>
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mb-4">
                  <p className="text-gray-700 leading-relaxed text-sm">{caseStudy.result}</p>
                </div>
                
                {caseStudy.specifications && caseStudy.specifications.length > 0 && (
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" /> 
                      <span>Technical Specifications & Key Metrics</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {caseStudy.specifications.map((spec, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-100">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Engineering Contact CTA */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-lg border border-red-500">
                <div className="text-center">
                  <h4 className="font-bold text-white text-lg mb-3">Engineering Consultation Required?</h4>
                  <p className="text-red-100 text-sm mb-4 max-w-2xl mx-auto">
                    Contact our technical engineering team for similar oil & gas solutions, field applications, and equipment specifications.
                  </p>
                  <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    Contact Engineering Team
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;