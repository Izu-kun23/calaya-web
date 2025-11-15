'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Play } from 'lucide-react';

/**
 * News Detail Page - VENUS Pipeline Inspection
 * Full page view for the VENUS pipeline inspection innovation news article
 */
export default function VenusPipelineInspectionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Video */}
      <section className="relative bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          {/* Title and Date */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Redefining Pipeline Inspection Through Innovation
            </h1>
          </motion.div>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black"
          >
            <video
              src="/assets/news/latest_news3.mp4"
              controls
              className="w-full h-auto"
              playsInline
              poster=""
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-8 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl">
                At Calaya Engineering Services Limited, we are proud to partner with ARIX Technologies, pioneers of advanced robotic inspection systems that are transforming how pipeline integrity is managed across the Oil & Gas industry. ARIX Technologies is fueled by a profound commitment to addressing critical pipe corrosion challenges encountered by industries worldwide.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                The VENUS™️ system, developed by ARIX Technologies, is an AI-driven robotic crawler designed to perform non-intrusive, precise, and efficient inspection of pipelines — even in the most challenging environments.
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                By integrating this innovative technology into our operations, Calaya Engineering Services delivers:
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Real-time data and diagnostics</h3>
                    <p className="text-gray-700">Accurate decision-making capabilities through advanced data collection and analysis.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Enhanced safety</h3>
                    <p className="text-gray-700">Remote inspection capabilities that minimize personnel exposure to hazardous environments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Reduced downtime and improved cost efficiency</h3>
                    <p className="text-gray-700">Streamlined inspection processes that minimize operational disruptions and optimize resource utilization.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-lg">Prolonged asset life</h3>
                    <p className="text-gray-700">Predictive maintenance strategies that extend the operational lifespan of critical infrastructure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-8 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                Together, Calaya Engineering Services and ARIX Technologies are driving the future of pipeline integrity and asset management across Africa's energy sector.
              </p>

              <div className="bg-gray-100 rounded-lg p-6 sm:p-8 border-l-4 border-red-500">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
                  Watch the VENUS™️ system in action above — technology that delivers reliability, precision, and innovation.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors font-semibold text-sm sm:text-base"
                >
                  Get in Touch
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors font-semibold text-sm sm:text-base"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

