import React, { useState } from "react";
import { motion } from "framer-motion";
import { Monitor, Shield, Search } from "lucide-react";
import ClientSection from "../../components/section/client_section";

const Corrosion_Management = () => {
  const [activeTab, setActiveTab] = useState(0);
  const corrosionCategories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Internal Corrosion Monitoring",
      description:
        "Advanced internal corrosion monitoring systems and technologies to detect, assess, and prevent corrosion within pipelines, vessels, and equipment.",
      features: [
        "Corrosion Coupon Installation & Monitoring",
        "Electrical Corrosion Probe Systems",
        "Oil Tank Corrosion Assessment",
        "Platform & Subsea Pipeline Monitoring",
        "Quantitative Corrosion Rate Analysis",
      ],
        detailedContent: {
          overview:
            "The monitoring of corrosive processes is part of the routine of many industries, especially those of processes such as refineries, petrochemicals, FPSOs and other plants. At Calaya Engineering Services, our procedures for Internal Corrosion Monitoring involves the use of Corrosion Coupons and Electrical Corrosion Probes to give a quantitative estimate of corrosion rates that take place within a specific Operating System, offer Visual Signals of the Corrosion type and Monitor the amount of Internal Corrosion in Oil Tanks, Platform Pipes, Deep Core or Subsea Pipes.",
          services: [
            {
              title: "Corrosion Coupons",
              description:
                "Professional installation and monitoring of corrosion coupons to provide quantitative estimates of corrosion rates within specific operating systems, offering visual signals of corrosion types and patterns.",
            },
            {
              title: "Electrical Corrosion Probes",
              description:
                "Advanced electrical corrosion probe systems for real-time monitoring and quantitative assessment of corrosion rates in various operating environments and conditions.",
            },
            {
              title: "Oil Tank Corrosion Monitoring",
              description:
                "Specialized monitoring services for internal corrosion in oil storage tanks, providing comprehensive assessment and early warning systems for tank integrity management.",
            },
            {
              title: "Pipeline Corrosion Assessment",
              description:
                "Comprehensive monitoring of internal corrosion in platform pipes, deep core pipes, and subsea pipes using advanced probe technologies and coupon analysis.",
            },
          ],
        benefits: [
          "Quantitative corrosion rate estimation",
          "Visual corrosion type identification",
          "Multi-industry application (refineries, petrochemicals, FPSOs)",
          "Comprehensive system monitoring",
        ],
      },
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cathodic Protection Services",
      description:
        "Comprehensive cathodic protection systems design, installation, and maintenance to prevent external corrosion of buried and submerged metallic structures.",
      features: [
        "Pipeline Protection (Oil, Gas, Product, Water)",
        "Storage Tank Systems (Above & Underground)",
        "Marine Structures (Jetties, Wharves, Piling)",
        "Power Station Cooling Systems",
        "Industrial & Infrastructure Applications",
      ],
        detailedContent: {
          overview:
            "CALAYA has been providing successful cathodic protection solutions to the Oil, Gas, Petrochemical, Water and Power Industries over the last 15 years. Our comprehensive cathodic protection services cover a wide range of applications including pipelines, storage tanks, well casings, marine structures, and industrial facilities.",
          services: [
            {
              title: "Pipeline Cathodic Protection",
              description:
                "Complete cathodic protection solutions for oil, gas, product, and water pipelines, including system design, installation, and ongoing monitoring for optimal corrosion prevention.",
            },
            {
              title: "Storage Tank Protection",
              description:
                "Specialized cathodic protection systems for above ground and underground storage tanks, ensuring long-term integrity and preventing external corrosion in various environments.",
            },
            {
              title: "Marine & Industrial Structures",
              description:
                "Advanced cathodic protection for marine structures including jetties and wharves, sheet and cylindrical piling (land & marine), and in-plant pipe work systems.",
            },
            {
              title: "Power & Infrastructure Protection",
              description:
                "Comprehensive protection solutions for compressor stations, cooling water pipe work for power stations, concrete structures (pipelines, bridges), and well casings.",
            },
          ],
        benefits: [
          "15+ years of successful industry experience",
          "Multi-industry expertise (Oil, Gas, Petrochemical, Water, Power)",
          "Comprehensive application coverage",
          "Proven track record of successful solutions",
        ],
      },
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "DCVG (Coating Defect Survey & Repair)",
      description:
        "Advanced DCVG (Direct Current Voltage Gradient) surveys to detect coating defects and provide comprehensive repair solutions for pipeline integrity management.",
      features: [
        "Field DCVG Surveys (Oil, Gas, Water Pipelines)",
        "NACE Certified Expert Analysis",
        "Coating Fault Location & Sizing",
        "Cathodic Protection Strategy Evaluation",
        "Pipeline Coating Anomaly Detection",
      ],
        detailedContent: {
          overview:
            "In particular, oil and natural gas pipelines are routinely monitored using this technique to help locate coating faults and highlight deficiencies in their cathodic protection (CP) strategies. Qualified Calaya technical personnel can conduct DCVG surveys in the field for oil, gas and water pipelines. Data is then analyzed by NACE certified experts. Direct Current Voltage Gradient surveys are used to evaluate defects in pipeline coatings. Corrosion normally occurs where the bare metal surface of a pipeline comes in contact with its surrounding electrolyte (water and soil). The primary purpose of a DCVG survey is to find and size pipeline coating anomalies associated with corrosion.",
          services: [
            {
              title: "Field DCVG Surveys",
              description:
                "Qualified Calaya technical personnel conduct comprehensive DCVG surveys in the field for oil, gas, and water pipelines, providing accurate detection of coating faults and cathodic protection deficiencies.",
            },
            {
              title: "NACE Certified Data Analysis",
              description:
                "Professional data analysis by NACE certified experts to evaluate coating defects, assess corrosion risks, and provide detailed recommendations for pipeline integrity management.",
            },
            {
              title: "Coating Anomaly Detection",
              description:
                "Advanced DCVG technology to find and size pipeline coating anomalies associated with corrosion, identifying areas where bare metal surfaces contact surrounding electrolytes.",
            },
            {
              title: "Cathodic Protection Strategy Assessment",
              description:
                "Comprehensive evaluation of cathodic protection strategies to highlight deficiencies and optimize protection systems for enhanced pipeline integrity and corrosion prevention.",
            },
          ],
        benefits: [
          "Qualified technical personnel for field surveys",
          "NACE certified expert data analysis",
          "Routine pipeline monitoring capability",
          "Coating fault location and sizing accuracy",
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
              Corrosion Management
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Advanced corrosion prevention and management solutions for oil and
              gas infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Corrosion Management Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-[-2rem]">
              Calaya Engineering Services is one of the renowned Oil & Gas
              servicing company that works in conformity with approved standards
              to provide the best results at all levels of corrosion management
              for process and storage facilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {corrosionCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 m-1 sm:m-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeTab === index
                    ? "bg-red-500 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md"
                }`}
              >
                <div className="mr-2 sm:mr-3">{category.icon}</div>
                <span className="font-semibold whitespace-nowrap">
                  {category.title}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10"
          >
            {/* Active Tab Header */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4 sm:mb-0 sm:mr-6">
                {corrosionCategories[activeTab].icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                  {corrosionCategories[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left">
                  {corrosionCategories[activeTab].description}
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Overview
              </h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {corrosionCategories[activeTab].detailedContent.overview}
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                Our Services
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                {corrosionCategories[activeTab].detailedContent.services.map(
                  (service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-gray-50 rounded-lg p-4 sm:p-6"
                    >
                      <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h5>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {corrosionCategories[activeTab].detailedContent.benefits.map(
                  (benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className="flex items-center bg-red-50 rounded-lg p-3 sm:p-4"
                    >
                      <div className="w-6 sm:w-8 h-1 bg-red-500 mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Quick Services List */}
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Quick Services List
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                {corrosionCategories[activeTab].features.map(
                  (feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center p-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-700">
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why Choose Calaya for Corrosion Management?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">
                    19+
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Years Experience
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Extensive experience in corrosion management across multiple
                  countries
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">
                    500+
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Projects Completed
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Successfully completed corrosion management projects worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">
                    24/7
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  Support Available
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Round-the-clock technical support and emergency services
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Client Section */}
      <ClientSection />
    </div>
  );
};

export default Corrosion_Management;
