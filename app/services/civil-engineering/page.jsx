'use client';
import React, { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Wrench,
  HardHat,
  CheckCircle,
  Target,
  TrendingUp,
  Settings,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import ClientSection from "../../../src/components/section/client_section";

// Images from public folder
const civilImage1 = "/civil1.JPG";
const civilImage2 = "/civil2.JPG";
const civilImage3 = "/civil3.JPG";
const civilImage4 = "/cilvil4.JPG";

function CivilEngineeringContent() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const searchParams = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 1) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const civilCategories = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Civil Engineering Services",
      description:
        "Calaya Engineering Services Limited offers civil engineering services which include, but are not limited to, the following:",
      features: [
        "Commercial & Residential Buildings",
        "Water Distribution Systems",
        "Environmental Infrastructure",
        "Industrial Infrastructure",
        "Construction Management",
        "Construction Engineering",
        "Infrastructure Planning & Design",
      ],
      detailedContent: {
        overview:
          "We are a country with a vast domain covering planning, designing and construction of infrastructure such as commercial and residential buildings; transportation infrastructure including roads, bridges, pipelines, railways; water distribution systems such as dams, canals, and sanitation; environmental infrastructure like landscaping, city planning, parks; industrial infrastructure; construction management; construction engineering and a lot more.",
        services: [
          {
            title: "Commercial & Residential Buildings",
            description:
              "Professional planning, design, and construction services for commercial and residential buildings, ensuring structural integrity and compliance with building codes.",
          },
          {
            title: "Water Distribution Systems",
            description:
              "Expert design and construction of water distribution systems including dams, canals, and sanitation infrastructure for efficient water management.",
          },
          {
            title: "Environmental Infrastructure",
            description:
              "Environmental infrastructure development including landscaping, city planning, parks, and sustainable development solutions.",
          },
          {
            title: "Industrial Infrastructure",
            description:
              "Specialized industrial infrastructure planning and construction services tailored to meet specific industrial requirements and standards.",
          },
          {
            title: "Construction Management",
            description:
              "Comprehensive transportation infrastructure development including roads, bridges, pipelines, and railways with advanced engineering solutions.",
          },
        ],
        benefits: [
          "Cost-effective engineering solutions",
          "Efficient construction practices",
          "Comprehensive infrastructure coverage",
          "Budget-conscious project delivery",
          "Professional construction management",
          "Advanced engineering expertise",
        ],
      },
    },
  ];

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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Civil Engineering
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive civil engineering and construction services for
              infrastructure development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {civilCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-4 whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === index
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-600 hover:border-red-300"
                }`}
              >
                <span className="font-medium text-sm sm:text-base">
                  {category.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Service Overview */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg  p-6 h-fit sticky top-8"
              >
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {civilCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {civilCategories[activeTab].description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h3>
                  {civilCategories[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Detailed Content */}
            <div className="lg:col-span-2">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Overview */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Service Overview
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {civilCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Services
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {civilCategories[activeTab].detailedContent.services.map(
                      (service, index) => (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-lg p-4 hover: transition-shadow duration-300"
                        >
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {service.title}
                          </h4>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Civil Engineering Images Section */}
                <div className="bg-white rounded-lg  p-6 lg:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <Building className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Civil Engineering Projects
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our civil engineering expertise spans infrastructure development, 
                    construction management, and comprehensive project delivery across 
                    various sectors.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="relative overflow-hidden rounded-lg hover:transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(civilImage1)}
                    >
                      <img
                        src={civilImage1}
                        alt="Civil Engineering Project 1"
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-bold text-lg mb-1">
                          Civil Engineering Project
                        </h4>
                        <p className="text-sm text-white/90">
                          Infrastructure development and construction
                        </p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative overflow-hidden rounded-lg hover:transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(civilImage2)}
                    >
                      <img
                        src={civilImage2}
                        alt="Civil Engineering Project 2"
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-bold text-lg mb-1">
                          Civil Engineering Project
                        </h4>
                        <p className="text-sm text-white/90">
                          Construction and infrastructure development
                        </p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="relative overflow-hidden rounded-lg hover:transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(civilImage3)}
                    >
                      <img
                        src={civilImage3}
                        alt="Civil Engineering Project 3"
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-bold text-lg mb-1">
                          Civil Engineering Project
                        </h4>
                        <p className="text-sm text-white/90">
                          Professional construction services
                        </p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="relative overflow-hidden rounded-lg hover:transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedImage(civilImage4)}
                    >
                      <img
                        src={civilImage4}
                        alt="Civil Engineering Project 4"
                        className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h4 className="font-bold text-lg mb-1">
                          Civil Engineering Project
                        </h4>
                        <p className="text-sm text-white/90">
                          Infrastructure and construction management
                        </p>
                      </div>
                      <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                          />
                        </svg>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      Key Benefits
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {civilCategories[activeTab].detailedContent.benefits.map(
                      (benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end xs:items-center justify-center p-1.5 xs:p-3"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              className="relative w-full max-w-4xl xs:max-w-5xl flex flex-col items-center rounded-xl bg-black/25 p-1.5 xs:p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 xs:top-2 right-2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition-colors duration-300"
                aria-label="Close image"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedImage}
                alt="Civil Engineering Project"
                className="w-full h-auto max-h-[85vh] xs:max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function CivilEngineeringPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <CivilEngineeringContent />
    </Suspense>
  );
}
