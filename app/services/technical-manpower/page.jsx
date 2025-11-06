'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HardHat, Users, CheckCircle, Target, TrendingUp, Settings } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ClientSection from "../../../src/components/section/client_section";

export default function TechnicalManpowerSupportPage() {
  const [activeTab, setActiveTab] = useState(0);
  const searchParams = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 1) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const manpowerCategories = [
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Technical Manpower Support Services",
      description: "Comprehensive technical manpower support services providing skilled engineering professionals for oil and gas operations and maintenance activities.",
      features: [
        "Skilled Engineering Professionals",
        "Oil & Gas Operations Support",
        "Maintenance & Repair Services",
        "Technical Expertise",
        "Quality Assurance",
        "Safety Compliance",
        "Project Management",
        "Flexible Deployment",
      ],
      detailedContent: {
        overview: "Our technical manpower support services provide comprehensive solutions for oil and gas operations by supplying skilled engineering professionals, technicians, and specialists. We ensure that our personnel are highly qualified, experienced, and trained to meet the specific requirements of various oil and gas operations, maintenance activities, and technical projects. Our team is committed to delivering excellence in service delivery while maintaining the highest standards of safety and quality.",
        services: [
          { title: "Engineering Professionals", description: "Supply of highly qualified engineering professionals including mechanical, electrical, civil, and petroleum engineers with extensive oil and gas industry experience." },
          { title: "Technical Specialists", description: "Deployment of technical specialists and technicians for specialized operations including instrumentation, automation, process control, and equipment maintenance." },
          { title: "Operations Support", description: "Comprehensive operations support services including plant operations, production optimization, process monitoring, and technical troubleshooting." },
          { title: "Maintenance Services", description: "Professional maintenance services including preventive maintenance, corrective maintenance, equipment overhauls, and technical inspections." },
        ],
        benefits: [
          "Highly qualified and experienced professionals",
          "Comprehensive technical expertise",
          "Flexible deployment options",
          "Quality assurance and safety compliance",
          "Cost-effective manpower solutions",
          "Reduced recruitment and training overhead",
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
              Technical Manpower Support
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technical manpower support services for oil and gas operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {manpowerCategories.map((category, index) => (
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
                    {manpowerCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {manpowerCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {manpowerCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {manpowerCategories[activeTab].features.map((feature, index) => (
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
                    {manpowerCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {manpowerCategories[activeTab].detailedContent.services.map((service, index) => (
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
                    {manpowerCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
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
