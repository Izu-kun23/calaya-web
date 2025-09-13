import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Building, Wrench, HardHat, CheckCircle, Target, TrendingUp, Settings } from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import ClientSection from "../../components/section/client_section";

const Civil_Engineering = () => {
  const [activeTab, setActiveTab] = useState(0);
  const location = useLocation();
  const [searchParams] = useSearchParams();

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

  const civilCategories = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Civil Engineering Services",
      description: "Comprehensive civil engineering services covering planning, designing and construction of infrastructure across commercial, residential, transportation, and environmental sectors.",
      features: [
        "Commercial & Residential Buildings",
        "Transportation Infrastructure",
        "Water Distribution Systems",
        "Environmental Infrastructure",
        "Industrial Infrastructure",
        "Construction Management",
        "Construction Engineering",
        "Infrastructure Planning & Design",
      ],
      detailedContent: {
        overview: "Calaya Engineering Services Limited is a company with a vast domain covering planning, designing and construction of infrastructure such as commercial and residential buildings; transportation infrastructure including roads, bridges, pipelines, railways; water distribution systems such as dams, canals, sanitation; environmental infrastructure like landscaping, city planning, parks; industrial infrastructure; construction management; construction engineering and a lot more. With tremendous growth of economy all over the world, there is a need to implement cost-effective, yet efficient civil engineering and construction engineering practices in order to meet the mounting needs while meeting budget constraints.",
        services: [
          { title: "Commercial & Residential Buildings", description: "Professional planning, design, and construction services for commercial and residential buildings, ensuring structural integrity and compliance with building codes." },
          { title: "Transportation Infrastructure", description: "Comprehensive transportation infrastructure development including roads, bridges, pipelines, and railways with advanced engineering solutions." },
          { title: "Water Distribution Systems", description: "Expert design and construction of water distribution systems including dams, canals, and sanitation infrastructure for efficient water management." },
          { title: "Environmental Infrastructure", description: "Environmental infrastructure development including landscaping, city planning, parks, and sustainable development solutions." },
          { title: "Industrial Infrastructure", description: "Specialized industrial infrastructure planning and construction services tailored to meet specific industrial requirements and standards." },
          { title: "Construction Management", description: "Professional construction management services ensuring project delivery on time, within budget, and meeting quality standards." },
        ],
        benefits: [
          "Cost-effective engineering solutions",
          "Efficient construction practices",
          "Comprehensive infrastructure coverage",
          "Budget-conscious project delivery",
          "Professional construction management",
          "Advanced engineering expertise",
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
              Civil Engineering
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive civil engineering and construction services for infrastructure development
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {civilCategories.map((category, index) => (
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
                className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {civilCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {civilCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {civilCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
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
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Service Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {civilCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {civilCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {civilCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
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
};

export default Civil_Engineering;
