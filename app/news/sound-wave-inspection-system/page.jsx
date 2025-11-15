'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, Gauge, Ruler, Target } from 'lucide-react';

/**
 * News Detail Page - Sound Wave Inspection System (SWIS)
 * Full page view for the SWIS news article
 */
export default function SoundWaveInspectionSystemPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Image */}
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
              Sound Wave Inspection System (SWIS)
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl leading-relaxed">
              Next-Generation Solution Designed to Transform Tube Inspections
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black"
          >
            <img
              src="/assets/news/latest_news4.jpeg"
              alt="Sound Wave Inspection System (SWIS)"
              className="w-full h-auto object-cover"
            />
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
            <div className="mb-12 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl">
                We bring you Sound Wave Inspection System (SWIS) — a next-generation solution designed to transform the way tube inspections are done.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                With MachOne's advanced sound-based technology, tube inspections are completed in just 3 seconds per tube, giving you rapid, precise results without interrupting operations.
              </p>
            </div>

            {/* Key Advantages Section */}
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Key Advantages
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Ultra-fast inner diameter inspection</h3>
                    <p className="text-gray-700">Complete inspections for heat exchangers and process tubes in just 3 seconds per tube, enabling full system inspections with minimal downtime.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
                  <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Precise defect detection</h3>
                    <p className="text-gray-700">Detects defects as small as 0.25mm holes, 2% blockage, and 20% wall loss at a pit diameter of 2.5mm — ensuring comprehensive quality assurance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                  <Gauge className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Universal compatibility</h3>
                    <p className="text-gray-700">Works with any material or shape — straight, U-bend, fin-fan, or spiral-wound tubes. Compatible with ferromagnetic and non-ferromagnetic metals, graphite, and plastics.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <Ruler className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">Extended detection range</h3>
                    <p className="text-gray-700">Extended detection range of up to 40m (80m from both ends) for leak and full blockage detection, covering tube diameters from 7mm to 76mm (3 inches).</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details */}
            <div className="mb-12 bg-gray-50 rounded-lg p-6 sm:p-8 border-l-4 border-gray-400">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Sound Wave Inspection System Technology
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                This is a fast inner diameter inspection system for heat exchangers, utilizing advanced sound-based technology to deliver non-invasive, precise, and efficient tube inspections.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Ultra-fast Inspection</h4>
                  <p className="text-sm text-gray-700">Extremely fast (3 seconds per tube), non-invasive inspection with comprehensive defect detection capabilities.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Any Material, Any Shape</h4>
                  <p className="text-sm text-gray-700">Straight, U-bends, fin-fans, twisted, spiral wound tubes. Works with all material types.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Extended Range</h4>
                  <p className="text-sm text-gray-700">Up to 40m leak and full blockage detection (80m from both sides) for comprehensive coverage.</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Wide Diameter Range</h4>
                  <p className="text-sm text-gray-700">Inner diameters ranging from 7mm to 76mm (3 inches) to accommodate various tube sizes.</p>
                </div>
              </div>
            </div>

            {/* Calaya Engineering Services */}
            <div className="mb-8 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                At Calaya Engineering Services, we combine innovation and precision to help clients minimize downtime, improve asset reliability, and cut maintenance costs.
              </p>

              <div className="bg-red-50 rounded-lg p-6 sm:p-8 border-l-4 border-red-500">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Ready to Upgrade Your Inspection Process?
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Let's talk about how SWIS (MachOne) can optimize your operations. Contact us today to learn more about this revolutionary inspection technology and how it can benefit your facility.
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
                  href="/partners/sound-wave-inspection"
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors font-semibold text-sm sm:text-base"
                >
                  Learn More About SWIS
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

