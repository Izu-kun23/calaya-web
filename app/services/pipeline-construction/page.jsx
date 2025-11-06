'use client';
import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Building, Wrench, Settings, CheckCircle, Target, TrendingUp } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ClientSection from "../../../src/components/section/client_section";

function PipelineConstructionContent() {
  const [activeTab, setActiveTab] = useState(0);
  const searchParams = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 2) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const pipelineCategories = [
    {
      icon: <Wrench className="w-4 h-8" />,
      title: "Pipeline Laying/Construction",
      description: "Comprehensive pipeline laying, construction, and fabrication services for onshore and offshore oil and gas infrastructure projects.",
      features: [
        "Pipeline Design & Engineering",
        "Onshore Pipeline Construction",
        "bunkering point removal",
        "Offshore Pipeline Installation",
        "Pipeline Fabrication Services",
        "Quality Control & Testing",
        "Project Management",
        "Safety Compliance",
        "Environmental Protection",
      ],
      detailedContent: {
        overview: "Our pipeline laying, construction, and fabrication services provide comprehensive solutions for onshore and offshore oil and gas infrastructure projects. We deliver end-to-end pipeline construction services from design and engineering through fabrication, installation, and commissioning, ensuring optimal performance, safety, and regulatory compliance.",
        services: [
          { title: "Pipeline Design & Engineering", description: "Professional pipeline design and engineering services including route selection, stress analysis, material selection, and construction planning for optimal pipeline performance." },
          { title: "Onshore Pipeline Construction", description: "Complete onshore pipeline construction services including excavation, welding, coating, backfilling, and testing with full project management and quality assurance." },
          { title: "Offshore Pipeline Installation", description: "Specialized offshore pipeline installation services including subsea laying, riser installation, and tie-in operations using advanced marine construction techniques." },
          { title: "Pipeline Fabrication", description: "Professional pipeline fabrication services including spool piece manufacturing, fitting preparation, and pre-construction assembly with quality control and testing." },
        ],
        benefits: [
          "End-to-end pipeline construction solutions",
          "Professional project management",
          "Quality assurance and testing",
          "Safety and environmental compliance",
          "Advanced construction techniques",
          "Comprehensive engineering support",
        ],
      }
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Hot Tapping Services",
      description: "Specialized hot tapping services for live pipeline connections and modifications without interrupting operations, ensuring minimal downtime and maximum safety.",
      features: [
        "Live Pipeline Connections",
        "Pipeline Modifications",
        "Bypass Operations",
        "Pressure Control",
        "Safety Protocols",
        "Emergency Services",
        "Quality Assurance",
        "Documentation & Reporting",
      ],
      detailedContent: {
        overview: "Our hot tapping services provide specialized solutions for live pipeline connections and modifications without interrupting operations. We utilize advanced hot tapping technology, comprehensive safety protocols, and experienced personnel to ensure safe, efficient, and reliable pipeline modifications with minimal downtime and maximum safety.",
        services: [
          { title: "Live Pipeline Connections", description: "Professional hot tapping services for live pipeline connections including branch connections, tie-ins, and lateral connections without service interruption." },
          { title: "Pipeline Modifications", description: "Specialized pipeline modification services including valve installations, meter connections, and system upgrades performed on live pipelines with advanced hot tapping techniques." },
          { title: "Bypass Operations", description: "Comprehensive bypass operations and temporary pipeline installations to facilitate hot tapping operations while maintaining continuous service to customers." },
          { title: "Pressure Control Services", description: "Advanced pressure control services during hot tapping operations including isolation, pressure monitoring, and system protection to ensure safe and reliable operations." },
        ],
        benefits: [
          "Minimal operational downtime",
          "Safe live pipeline operations",
          "Advanced hot tapping technology",
          "Comprehensive safety protocols",
          "Emergency response capabilities",
          "Professional project execution",
        ],
      }
    }
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
              Pipeline Construction
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive pipeline construction and hot tapping services for oil and gas infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {pipelineCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === index
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-600 hover:border-red-300"
                }`}
              >
                <span className={`${activeTab === index ? "text-red-600" : "text-gray-400"}`}>
                  {category.icon}
                </span>
                <span className="font-medium text-sm sm:text-base">{category.title}</span>
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {pipelineCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {pipelineCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {pipelineCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {pipelineCategories[activeTab].features.map((feature, index) => (
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
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Service Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {pipelineCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {pipelineCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover: transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pipelineCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />
    </div>
  );
}

export default function PipelineConstructionPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <PipelineConstructionContent />
    </Suspense>
  );
}
