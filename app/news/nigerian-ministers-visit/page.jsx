'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * News Detail Page - Honoured to Welcome Nigerian Petroleum Ministers
 * Full page view for the Nigerian Ministers Visit news article
 */
export default function NigerianMinistersVisitPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/assets/news/latest_news2.0.jpeg",
    "/assets/news/latest_news2.1.jpeg"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section with Images */}
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
              Honoured to Welcome Nigerian Petroleum Ministers
            </h1>
          </motion.div>

          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl bg-black"
          >
            <div className="relative aspect-video w-full">
              <img
                src={images[currentImageIndex]}
                alt="Nigerian Petroleum Ministers Visit"
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/50 w-2 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
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
            {/* Main Content */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg md:text-xl">
                We were honoured to welcome Hon. Heineken Lokpobiri, Minister of Petroleum Resources (Oil), and Hon. Ekperikpe Ekpo, Minister of Petroleum Resources (Gas), to the Calaya stand during the just-concluded Africa Energy Week in Cape Town.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                Our conversations were insightful and forward-looking — exploring Nigeria's energy future, local content development, and opportunities for collaboration to drive a sustainable oil and gas sector.
              </p>

              <p className="text-base sm:text-lg md:text-xl">
                We appreciate both Honourable Ministers for their time, perspectives, and commitment to advancing Nigeria's energy agenda.
              </p>

              {/* Ministers Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Hon. Heineken Lokpobiri
                  </h3>
                  <p className="text-base text-gray-700 font-semibold mb-2">
                    Minister of Petroleum Resources (Oil)
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Leading Nigeria's oil sector development and policy initiatives, focusing on maximizing the nation's petroleum resources and ensuring sustainable growth.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Hon. Ekperikpe Ekpo
                  </h3>
                  <p className="text-base text-gray-700 font-semibold mb-2">
                    Minister of Petroleum Resources (Gas)
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Driving Nigeria's gas sector transformation, promoting gas utilization, and positioning Nigeria as a leading gas producer in Africa.
                  </p>
                </div>
              </div>

              {/* Highlight Box */}
              <div className="bg-red-50 rounded-lg p-6 sm:p-8 border-l-4 border-red-500 mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Advancing Nigeria's Energy Agenda
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  These discussions highlight the importance of collaboration between the public and private sectors in driving Nigeria's energy transformation. Calaya Engineering is committed to supporting Nigeria's energy goals through innovative solutions and local content development.
                </p>
                <ul className="list-disc list-inside space-y-2 text-base sm:text-lg text-gray-700 ml-2">
                  <li>Promoting local content development in the oil and gas sector</li>
                  <li>Supporting sustainable energy practices and technologies</li>
                  <li>Building strategic partnerships for industry growth</li>
                  <li>Contributing to Nigeria's energy security and independence</li>
                </ul>
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

