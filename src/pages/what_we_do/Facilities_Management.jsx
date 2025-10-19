import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building,
  Wrench,
  Droplets,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
  Settings,
  X,
} from "lucide-react";
import { useLocation, useSearchParams } from "react-router-dom";
import ClientSection from "../../components/section/client_section";

const Facilities_Management = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 4) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const facilitiesCategories = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "HVAC/Electrical Installation & Maintenance Services",
      description:
        "Comprehensive HVAC and electrical installation, maintenance, and repair services for industrial facilities, ensuring optimal system performance and energy efficiency.",
      features: [
        "HVAC System Installation & Maintenance",
        "Electrical System Installation & Repair",
        "Preventive Maintenance Programs",
        "Energy Efficiency Optimization",
        "Emergency Repair Services",
        "System Upgrades & Modernization",
        "Compliance & Safety Inspections",
        "24/7 Emergency Support",
      ],
      detailedContent: {
        overview:
          "Calaya Engineering Services is able to provide a complete and comprehensive range of solutions for clients wishing to improve their facilities' operational efficiency or increase the lifespan of their current fleet. At Calaya Engineering Service Limited, we work hard to meet our client's demands by hiring only highly qualified technicians and providing excellent air conditioning services. We are proud to meet the HVAC installation, maintenance, and repair needs of residential and commercial clients around the globe.",
        services: [
          {
            title: "Direct Expansion Systems",
            description:
              "Direct expansion and chilled water central cooling systems for comfort and process needs, ensuring optimal temperature control and energy efficiency.",
          },
          {
            title: "Precision Air Cooling",
            description:
              "Precision air cooling (PAC) systems for critical applications requiring exact temperature and humidity control.",
          },
          {
            title: "Dehumidifier Systems",
            description:
              "Advanced dehumidifier systems to control moisture levels and maintain optimal environmental conditions.",
          },
          {
            title: "Ventilation Duct Work",
            description:
              "Professional installation and maintenance of ventilation duct work including both rigid and flexible systems.",
          },
        ],
        benefits: [
          "Improved facilities operational efficiency",
          "Extended lifespan of current fleet",
          "Highly qualified technicians",
          "Residential and commercial expertise",
        ],
      },
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Grit & Hydro Blasting and Coating Services",
      description:
        "Professional surface preparation and coating services using advanced grit and hydro blasting techniques to ensure optimal adhesion and long-lasting protection.",
      features: [
        "Grit Blasting Services",
        "Hydro Blasting Services",
        "Surface Preparation",
        "Protective Coating Application",
        "Quality Control & Inspection",
        "Environmental Compliance",
        "Custom Coating Solutions",
        "Project Management",
      ],
      detailedContent: {
        overview:
          "Grit & Hydro Blasting and Coating are corrosion control activities aimed at checking and restoring the integrity of facilities and equipment to pre-defined standards or specifications. We provide a diverse suite of services to address virtually any surface treatment and protection challenge. From surface treatment and coating in the harshest operating environments to ensuring the safety of your workforce against a potential disaster. We have developed a reputation for high quality and excellent service in the surface preparation and protective coatings industry.",
        services: [
          {
            title: "Surface Preparation",
            description:
              "Professional surface preparation services to ensure optimal adhesion and long-lasting protection for industrial equipment and structures in the harshest operating environments.",
          },
          {
            title: "Blasting",
            description:
              "Advanced grit and hydro blasting services for corrosion control activities, checking and restoring the integrity of facilities and equipment to pre-defined standards or specifications.",
          },
          {
            title: "Painting",
            description:
              "High-quality protective coating and painting services to ensure workforce safety against potential disasters and maintain equipment integrity in challenging environments.",
          },
          {
            title: "Quality Assurance",
            description:
              "Comprehensive quality control and inspection services to ensure all surface treatment and protection work meets the highest industry standards and client specifications.",
          },
        ],
        benefits: [
          "Restored facility and equipment integrity",
          "Pre-defined standards and specifications compliance",
          "Workforce safety protection",
          "High quality and excellent service reputation",
        ],
      },
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Cleaning of Tanks, Test Separator, Pipes & Platform",
      description:
        "Specialized cleaning services for tanks, test separators, pipelines, and platform equipment to ensure optimal performance and regulatory compliance.",
      features: [
        "Tank Cleaning Services",
        "Test Separator Cleaning",
        "Pipeline Cleaning",
        "Platform Equipment Cleaning",
        "Chemical Cleaning Solutions",
        "Mechanical Cleaning Methods",
        "Waste Management",
        "Safety & Environmental Compliance",
      ],
      detailedContent: {
        overview:
          "Calaya's Expert Tank Cleaning service team specializes in Cleaning Tanks, Vessels and more. You can count on our highly-skilled personnel and technically advanced equipment to clean your tank or vessel safely and efficiently while exceeding your expectations and maintaining regulatory compliance. We are experienced with tanks that are utilized to store various products including hazardous, nonhazardous chemicals, petrochemicals, petroleum and even food products like milk and grain. From municipal water storage tanks, to power plants, chemical processing plants, food production and fire protection.",
        services: [
          {
            title: "Tank Roof Cleaning",
            description:
              "Professional tank roof cleaning, sand blasting and coating services to maintain structural integrity and prevent corrosion.",
          },
          {
            title: "Storage Tank Removal",
            description:
              "Aboveground Storage Tank (AST) and Underground Storage Tank (UST) removal services with proper disposal and environmental compliance.",
          },
          {
            title: "Tank Maintenance & Inspection",
            description:
              "Comprehensive tank maintenance and inspection services to ensure optimal performance and regulatory compliance.",
          },
          {
            title: "Vessel Cleaning",
            description:
              "Expert tank and vessel cleaning services during decommissioning and industrial renovations with specialized equipment and techniques.",
          },
          {
            title: "Utility Cleaning",
            description:
              "Utility manhole and vault cleaning services for municipal water storage tanks, power plants, and industrial facilities.",
          },
          {
            title: "Specialized Cleaning",
            description:
              "Cleaning services for finished product, waste water, chemical, silos, reservoirs, and septic tank systems.",
          },
        ],
        benefits: [
          "Highly-skilled personnel and advanced equipment",
          "Safe and efficient cleaning processes",
          "Regulatory compliance maintenance",
          "Experience with diverse product types",
        ],
      },
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Online Leak Repair",
      description:
        "Specialized online leak repair services for pipelines and equipment without interrupting operations, ensuring minimal downtime and maximum efficiency.",
      features: [
        "Hot Tapping Services",
        "Leak Detection & Assessment",
        "Online Repair Techniques",
        "Pipeline Isolation",
        "Pressure Testing",
        "Emergency Response",
        "Compliance Documentation",
        "24/7 Emergency Services",
      ],
      detailedContent: {
        overview:
          "Calaya professionally undertakes online leak repair using the latest repair/sealing methodology in achieving the task. Our team of experienced professionals can seal online leaking points in valves, flanges and other critical equipment without interrupting operations, ensuring minimal downtime and maximum efficiency.",
        services: [
          {
            title: "Valve Leak Repair",
            description:
              "Professional online leak repair services for valves using the latest sealing methodology to ensure immediate and effective leak containment.",
          },
          {
            title: "Flange Leak Repair",
            description:
              "Expert online repair services for flange leaks utilizing advanced sealing techniques while maintaining operational continuity.",
          },
          {
            title: "Online Sealing Solutions",
            description:
              "Latest repair and sealing methodology applied by experienced professionals to seal leaking points in critical equipment and systems.",
          },
          {
            title: "Emergency Leak Response",
            description:
              "Rapid response online leak repair services to minimize operational disruption and ensure safety compliance in emergency situations.",
          },
        ],
        benefits: [
          "Latest repair/sealing methodology",
          "Experienced professional team",
          "Online leak sealing capabilities",
          "Minimal operational disruption",
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
              Facilities Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive facilities management and maintenance services for
              industrial operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {facilitiesCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 px-6 py-4 whitespace-nowrap border-b-2 transition-colors duration-300 ${
                  activeTab === index
                    ? "border-red-600 text-red-600 bg-red-50"
                    : "border-transparent text-gray-600 hover:text-red-600 hover:border-red-300"
                }`}
              >
                <span
                  className={`${
                    activeTab === index ? "text-red-600" : "text-gray-400"
                  }`}
                >
                  {category.icon}
                </span>
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
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {facilitiesCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {facilitiesCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {facilitiesCategories[activeTab].description}
                </p>

                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Key Features:
                  </h3>
                  {facilitiesCategories[activeTab].features.map(
                    (feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    )
                  )}
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
                    <h3 className="text-xl font-bold text-gray-900">
                      Service Overview
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {facilitiesCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Our Services
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {facilitiesCategories[
                      activeTab
                    ].detailedContent.services.map((service, index) => (
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
                    ))}
                  </div>
                </div>

                {/* HVAC Images Section - Only show for first tab */}
                {activeTab === 0 && (
                  <div className="bg-white rounded-lg  p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Building className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        HVAC Installation & Maintenance
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our professional HVAC installation and maintenance
                      services ensure optimal system performance and energy
                      efficiency for industrial facilities.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/facilities_management/hvac1.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/facilities_management/hvac1.jpeg"
                          alt="HVAC System Installation"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            HVAC System Installation
                          </h4>
                          <p className="text-sm text-white/90">
                            Professional installation of industrial HVAC systems
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
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/facilities_management/hvac2.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/facilities_management/hvac2.jpeg"
                          alt="HVAC Maintenance Services"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            HVAC Maintenance Services
                          </h4>
                          <p className="text-sm text-white/90">
                            Regular maintenance and repair services
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
                )}

                {/* Grit & Hydro Blasting Images Section - Only show for second tab */}
                {activeTab === 1 && (
                  <div className="bg-white rounded-lg  p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Wrench className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Grit & Hydro Blasting Services
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Professional surface preparation and coating services
                      using advanced grit and hydro blasting techniques for
                      optimal adhesion and protection.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/hydroblasting/hydroblasting9.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/hydroblasting/hydroblasting9.jpeg"
                          alt="Hydro Blasting Operations"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Hydro Blasting Operations
                          </h4>
                          <p className="text-sm text-white/90">
                            High-pressure water blasting for surface preparation
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
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/hydroblasting/hydroblasting2.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/hydroblasting/hydroblasting2.jpeg"
                          alt="Advanced Hydro Blasting"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Advanced Hydro Blasting
                          </h4>
                          <p className="text-sm text-white/90">
                            Specialized hydro blasting equipment and techniques
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
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/gritblasting/gritblasting1.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/gritblasting/gritblasting1.jpeg"
                          alt="Grit Blasting Services"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Grit Blasting Services
                          </h4>
                          <p className="text-sm text-white/90">
                            Professional grit blasting for surface preparation
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
                )}

                {/* Tank Cleaning Images Section - Only show for third tab */}
                {activeTab === 2 && (
                  <div className="bg-white rounded-lg  p-6 lg:p-10">
                    <div className="flex items-center gap-3 mb-6">
                      <Droplets className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Tank Cleaning Services
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Professional tank cleaning services using advanced
                      techniques and equipment to ensure safe and efficient
                      cleaning of industrial tanks, vessels, and equipment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/facilities_management/tank_cleaning1.jpg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/facilities_management/tank_cleaning1.jpg"
                          alt="Professional Tank Cleaning Operations"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Professional Tank Cleaning Operations
                          </h4>
                          <p className="text-sm text-white/90">
                            Advanced tank cleaning with specialized equipment
                            and safety protocols
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
                )}

                {/* Online Leak Repair Images Section - Only show for fourth tab */}
                {activeTab === 3 && (
                  <div className="bg-white rounded-lg  p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Zap className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Online Leak Repair Services
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Specialized online leak repair services for pipelines and
                      equipment without interrupting operations, ensuring
                      minimal downtime and maximum efficiency.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/facilities_management/Online_leak1.jpg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/facilities_management/Online_leak1.jpg"
                          alt="Online Leak Repair Operations"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Online Leak Repair Operations
                          </h4>
                          <p className="text-sm text-white/90">
                            Professional leak repair using advanced sealing
                            methodology without operational interruption
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
                        className="relative overflow-hidden rounded-lg  hover: transition-all duration-300 cursor-pointer group"
                        onClick={() =>
                          setSelectedImage(
                            "/src/assets/facilities_management/online_leak2.jpeg"
                          )
                        }
                      >
                        <img
                          src="/src/assets/facilities_management/online_leak2.jpeg"
                          alt="Advanced Leak Sealing Techniques"
                          className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h4 className="font-bold text-lg mb-1">
                            Advanced Leak Sealing Techniques
                          </h4>
                          <p className="text-sm text-white/90">
                            Expert technicians using specialized tools for
                            critical equipment leak repair
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
                )}

                {/* Benefits */}
                <div className="bg-white rounded-lg  p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">
                      Key Benefits
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {facilitiesCategories[
                      activeTab
                    ].detailedContent.benefits.map((benefit, index) => (
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-auto object-contain rounded-lg "
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Facilities_Management;
