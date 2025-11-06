'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, Wrench, Droplets, Zap, CheckCircle, Target, TrendingUp, Settings, X, Shield, Monitor } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ClientSection from "../../../src/components/section/client_section";

export default function InspectionServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const searchParams = useSearchParams();

  // Handle URL-based tab activation
  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      const tabIndex = parseInt(tabParam);
      if (tabIndex >= 0 && tabIndex < 3) {
        setActiveTab(tabIndex);
      }
    }
  }, [searchParams]);

  const InspectionCategories = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Statutory Inspection",
      description: "Comprehensive regulatory compliance inspections ensuring safety, integrity, and adherence to industry standards for pressure vessels, lifting equipment, and safety systems.",
      features: [
        "Pressure Vessel Inspections",
        "Lifting Equipment Certification",
        "Safety System Validation",
        "Regulatory Compliance Assessment",
        "Documentation & Reporting",
        "Risk Assessment & Mitigation",
        "Emergency Response Planning",
        "Continuous Monitoring Programs",
      ],
      detailedContent: {
        overview: "Calaya Engineering provides comprehensive statutory inspection services to ensure your facilities and equipment meet all regulatory requirements and industry standards. Our certified inspectors conduct thorough examinations of pressure vessels, lifting equipment, and safety systems to maintain operational integrity and regulatory compliance. We work closely with regulatory authorities to ensure your operations remain compliant while maximizing safety and efficiency.",
        services: [
          { title: "Pressure Vessel Inspection", description: "Thorough examination of pressure vessels, tanks, and containment systems to ensure structural integrity and compliance with ASME, API, and local regulatory standards." },
          { title: "Lifting Equipment Certification", description: "Comprehensive inspection and certification of cranes, hoists, slings, and lifting accessories to ensure safe operation and regulatory compliance." },
          { title: "Safety System Validation", description: "Inspection and testing of safety systems including emergency shutdown systems, fire protection equipment, and gas detection systems." },
          { title: "Regulatory Compliance Audit", description: "Complete assessment of facility compliance with local, national, and international regulations including documentation review and gap analysis." },
          { title: "Risk Assessment Services", description: "Professional risk evaluation and hazard identification services to develop comprehensive safety management programs and mitigation strategies." },
        ],
        benefits: [
          "Full regulatory compliance assurance",
          "Enhanced safety and risk mitigation",
          "Certified professional inspectors",
          "Comprehensive documentation and reporting",
        ],
      }
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Manual NDT",
      description: "Traditional non-destructive testing methods including visual testing, penetrant testing, magnetic particle testing, ultrasonic testing, and radiographic testing for comprehensive material evaluation.",
      features: [
        "Visual Testing (VT)",
        "Penetrant Testing (PT)",
        "Magnetic Particle Testing (MT)",
        "Ultrasonic Testing (UT)",
        "Radiographic Testing (RT)",
        "Eddy Current Testing (ECT)",
        "Thickness Measurement",
        "Weld Quality Assessment",
      ],
      detailedContent: {
        overview: "Our manual NDT services utilize proven testing methodologies to detect surface and subsurface defects in materials and welds without causing damage to the inspected components. Our Level II and Level III certified technicians employ a wide range of traditional NDT techniques to ensure the integrity and reliability of your critical equipment and structures.",
        services: [
          { title: "Visual Testing (VT)", description: "Comprehensive visual inspection using advanced lighting, magnification, and borescope equipment to identify surface defects, corrosion, and structural anomalies." },
          { title: "Penetrant Testing (PT)", description: "Surface-breaking defect detection using liquid penetrant methods suitable for non-porous materials including metals, ceramics, and composites." },
          { title: "Magnetic Particle Testing (MT)", description: "Detection of surface and near-surface discontinuities in ferromagnetic materials using magnetic fields and magnetic particle indication." },
          { title: "Ultrasonic Testing (UT)", description: "High-frequency sound wave testing for internal defect detection, thickness measurement, and material characterization in metals and composites." },
          { title: "Radiographic Testing (RT)", description: "X-ray and gamma-ray inspection for internal defect visualization and dimensional analysis of welds and castings." },
        ],
        benefits: [
          "Certified Level II & III technicians",
          "Comprehensive defect detection capabilities",
          "Industry-standard testing procedures",
          "Detailed inspection reports and documentation",
        ],
      },
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Advanced NDT",
      description: "Cutting-edge inspection technologies including Phased Array Ultrasonic Testing (PAUT), Time of Flight Diffraction (TOFD), Magnetic Flux Leakage (MFL), and digital radiography for superior defect detection and analysis.",
      features: [
        "Phased Array Ultrasonic Testing (PAUT)",
        "Time of Flight Diffraction (TOFD)",
        "Magnetic Flux Leakage (MFL)",
        "Digital Radiography (DR/CR)",
        "3D Laser Scanning",
        "Thermal Imaging Analysis",
        "Automated Inspection Systems",
        "Real-time Data Analysis",
      ],
      detailedContent: {
        overview: "Calaya Engineering's advanced NDT services utilize state-of-the-art inspection technologies to provide superior defect detection, characterization, and analysis capabilities. Our advanced techniques offer higher sensitivity, faster inspection speeds, and more detailed data collection compared to traditional methods, enabling more accurate assessment of material integrity and predictive maintenance planning.",
        services: [
          { title: "Phased Array Ultrasonic Testing (PAUT)", description: "Advanced ultrasonic testing using multiple element arrays for rapid, high-resolution imaging and accurate defect sizing in complex geometries and challenging access areas." },
          { title: "Time of Flight Diffraction (TOFD)", description: "Precision ultrasonic technique for crack detection and sizing with superior accuracy for weld inspection and corrosion mapping applications." },
          { title: "Magnetic Flux Leakage (MFL)", description: "Pipeline and tank inspection technology for rapid corrosion and defect detection over large surface areas with detailed mapping and analysis capabilities." },
          { title: "Digital Radiography (DR/CR)", description: "Advanced radiographic inspection using digital detectors for enhanced image quality, faster processing, and improved defect detection sensitivity." },
          { title: "3D Laser Scanning", description: "High-precision dimensional measurement and geometric analysis for deformation monitoring, corrosion mapping, and as-built documentation." },
          { title: "Automated Inspection Systems", description: "Robotic and automated inspection solutions for consistent, repeatable testing in challenging environments with real-time data collection and analysis." },
        ],
        benefits: [
          "Superior defect detection sensitivity",
          "Faster inspection speeds and efficiency",
          "Advanced data analysis and reporting",
          "Automated and robotic inspection capabilities",
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
              Inspection Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Professional inspection and non-destructive testing services for industrial equipment and facilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {InspectionCategories.map((category, index) => (
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
                className="bg-white rounded-lg p-6 h-fit sticky top-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-red-600">
                    {InspectionCategories[activeTab].icon}
                  </span>
                  <h2 className="text-xl font-bold text-gray-900">
                    {InspectionCategories[activeTab].title}
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  {InspectionCategories[activeTab].description}
                </p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Features:</h3>
                  {InspectionCategories[activeTab].features.map((feature, index) => (
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
                <div className="bg-white rounded-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Target className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Service Overview</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {InspectionCategories[activeTab].detailedContent.overview}
                  </p>
                </div>

                {/* Services */}
                <div className="bg-white rounded-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Settings className="w-6 h-6 text-red-600" />
                    <h3 className="text-xl font-bold text-gray-900">Our Services</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {InspectionCategories[activeTab].detailedContent.services.map((service, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4 hover: transition-shadow duration-300">
                        <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-white rounded-lg p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">Key Benefits</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {InspectionCategories[activeTab].detailedContent.benefits.map((benefit, index) => (
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
}
