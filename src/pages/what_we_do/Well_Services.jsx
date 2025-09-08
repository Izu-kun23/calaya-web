import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Wrench, Settings, Shield, Droplets } from 'lucide-react'
import ClientSection from '../../components/section/client_section'

const Well_Services = () => {
  const [activeTab, setActiveTab] = useState(0)
  const wellCategories = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Well Completion",
      description: "Comprehensive well completion services including casing, cementing, perforation, and production equipment installation to ensure optimal well performance and longevity.",
      features: [
        "Casing and Cementing Operations",
        "Perforation Services",
        "Production Equipment Installation",
        "Completion Design and Planning",
        "Well Testing and Evaluation"
      ],
      detailedContent: {
        overview: "Our well completion capabilities include coiled tubing, slickline, plug setting and milling, fluid pumping, nitrogen transport, flowback equipment, pressure control services, tanks and a wide range of ancillary rental equipment such as cranes, compressors, valves, and gas busters. We provide overall project design, equipment selection, accessory material preparation, project and operation reporting. We have established well completion project teams in each region in the Nigerian upstream oil and gas sector, employing a supply of experienced and qualified completion engineers.",
        services: [
          {
            title: "Coiled Tubing & Slickline Operations",
            description: "Professional coiled tubing and slickline services including plug setting and milling operations for well completion and intervention work."
          },
          {
            title: "Fluid Pumping & Nitrogen Transport",
            description: "Comprehensive fluid pumping services and nitrogen transport for well completion and stimulation operations with advanced equipment."
          },
          {
            title: "Pressure Control & Flowback Equipment",
            description: "Advanced pressure control services and flowback equipment for safe and efficient well completion operations with full safety protocols."
          },
          {
            title: "Ancillary Rental Equipment",
            description: "Wide range of rental equipment including cranes, compressors, valves, gas busters, and tanks for complete project support."
          }
        ],
        benefits: [
          "Established project teams in each Nigerian upstream region",
          "Experienced and qualified completion engineers",
          "Full technical support and supervision for rig operations",
          "Localized, opportune and high-quality services"
        ]
      }
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Well Intervention",
      description: "Advanced well intervention techniques to restore, enhance, or maintain well productivity through various downhole operations and remedial work.",
      features: [
        "Coiled Tubing Operations",
        "Wireline Services",
        "Fishing and Milling Operations",
        "Stimulation and Acidizing",
        "Well Cleanout and Maintenance"
      ],
      detailedContent: {
        overview: "Calaya Engineering Services Limited Well Intervention services operate Coil Tubing, Slickline and Well Testing services. We offer our services both onshore and offshore. Calaya Coil Tubing Services have been delivering services to Oil & Gas Operators Onshore and Offshore since our inception. We provide the expertise and work in collaboration with our customers to ensure that their well performance is improved.",
        services: [
          {
            title: "Coil Tubing Services",
            description: "Professional coil tubing services delivered to Oil & Gas Operators both onshore and offshore since our inception, providing expertise for improved well performance."
          },
          {
            title: "Slickline Services",
            description: "Wide range of technology for lowering equipment or measuring devices into wells using Slickline, E-Line, and Mechanical Wireline for well intervention and reservoir evaluation."
          },
          {
            title: "Memory Logging & Perforation",
            description: "Advanced memory logging and perforation services to enable well intervention and comprehensive reservoir evaluation with cutting-edge technology."
          },
          {
            title: "Fishing & Cleaning Services",
            description: "Expert fishing and cleaning services for well intervention operations, ensuring optimal well performance and equipment recovery."
          }
        ],
        benefits: [
          "Onshore and offshore service capabilities",
          "Collaborative approach with customers",
          "Improved well performance focus",
          "Comprehensive reservoir evaluation"
        ]
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Well Head Maintenance",
      description: "Professional wellhead maintenance services to ensure safety, reliability, and optimal performance of wellhead equipment and associated systems.",
      features: [
        "Wellhead Equipment Inspection",
        "Preventive Maintenance Programs",
        "Emergency Repairs",
        "Equipment Upgrades",
        "Safety System Testing"
      ],
      detailedContent: {
        overview: "Calaya well head maintenance services form a key part of Calaya's well integrity capability - from new HPHT developments, through to the mature brownfield site. This includes the routine inspection, repair and maintenance of surface wellheads, as well as the provision of pressure testing services.",
        services: [
          {
            title: "First and Second Line Maintenance",
            description: "Comprehensive routine and non-routine maintenance services for wellhead equipment, ensuring optimal performance and reliability."
          },
          {
            title: "Repair, Refurbishment and Installation",
            description: "Complete repair, refurbishment and installation services for wellhead equipment and accessories, including chokes and valves of all brands."
          },
          {
            title: "OEM Equipment Supply & Maintenance",
            description: "Supply, installation and maintenance of OEM wellhead equipment and accessories with full technical support and expertise."
          },
          {
            title: "Tool Rentals & Specialized Services",
            description: "Tool rentals including lubricators, X-overs, drilling spools/adapters, running & retrieving tools for seal assembly & wear bushing, plus Pneumac/Hydraulic bolting services."
          }
        ],
        benefits: [
          "Well integrity capability from HPHT to brownfield",
          "Routine inspection and pressure testing services",
          "Comprehensive repair and refurbishment expertise",
          "Complete tool rental and specialized services"
        ]
      }
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Leak Sealing & Greasing Valves",
      description: "Specialized leak sealing and valve greasing services using RS Clare's globally recognized advanced lubricants and application equipment.",
      features: [
        "RS Clare Patent Rights",
        "Advanced Lubricants",
        "Global Recognition",
        "Multi-Industry Expertise"
      ],
      detailedContent: {
        overview: "Calaya has a patent right from RS Clare, a globally recognized manufacturer of advanced lubricants, supplying high-performance greases and application equipment to the oil and gas, rail, marine, industrial and thermoplastics markets we serve. Calaya Engineering Services Limited are constantly evolving and adapting to the demands of our customers and the fluctuations of the Oil & Gas industry, demonstrating our flexibility and desire to provide seamless services.",
        services: [
          {
            title: "RS Clare Advanced Lubricants",
            description: "Utilizing RS Clare's globally recognized high-performance greases and advanced lubricant technology for superior valve maintenance and leak sealing."
          },
          {
            title: "Professional Application Equipment",
            description: "State-of-the-art application equipment from RS Clare for precise and efficient valve greasing and leak sealing operations."
          },
          {
            title: "Multi-Industry Expertise",
            description: "Comprehensive experience across oil and gas, rail, marine, industrial and thermoplastics markets, providing versatile solutions."
          },
          {
            title: "Adaptive Service Solutions",
            description: "Constantly evolving and adapting to customer demands and industry fluctuations, demonstrating flexibility and commitment to seamless service delivery."
          }
        ],
        benefits: [
          "RS Clare patent rights and global recognition",
          "High-performance greases and advanced lubricants",
          "Multi-industry market expertise",
          "Flexible and adaptive service approach"
        ]
      }
    }
  ]

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
              Well Services
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive well services for optimal performance and safety in oil and gas operations
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Expert Well Services Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Calaya Engineering, we provide comprehensive well services across four key categories, 
              ensuring optimal performance, safety, and reliability for your oil and gas operations. 
              Our experienced team delivers cutting-edge solutions tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Tabs Section */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            {wellCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-3 sm:px-4 md:px-6 py-2 sm:py-3 m-1 sm:m-2 rounded-lg transition-all duration-300 text-sm sm:text-base ${
                  activeTab === index
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-red-50 hover:text-red-600 shadow-md'
                }`}
              >
                <div className="mr-2 sm:mr-3">
                  {category.icon}
                </div>
                <span className="font-semibold whitespace-nowrap">{category.title}</span>
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
                {wellCategories[activeTab].icon}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center sm:text-left">
                  {wellCategories[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 text-center sm:text-left">
                  {wellCategories[activeTab].description}
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">Overview</h4>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                {wellCategories[activeTab].detailedContent.overview}
              </p>
            </div>

            {/* Services Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">Our Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6">
                {wellCategories[activeTab].detailedContent.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gray-50 rounded-lg p-4 sm:p-6">
                    <h5 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h5>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mb-6 sm:mb-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-6">Key Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {wellCategories[activeTab].detailedContent.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center bg-red-50 rounded-lg p-3 sm:p-4">
                    <div className="w-6 sm:w-8 h-1 bg-red-500 mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Services List */}
            <div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4">Quick Services List</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3">
                {wellCategories[activeTab].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center p-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                    <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why Choose Calaya for Well Services?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">20+</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
                <p className="text-sm sm:text-base text-gray-600">Extensive experience in well services across multiple countries</p>
              </div>
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">500+</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Projects Completed</h3>
                <p className="text-sm sm:text-base text-gray-600">Successfully completed well service projects worldwide</p>
              </div>
              <div className="text-center">
                <div className="w-16 sm:w-20 h-6 sm:h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-sm sm:text-lg font-bold text-white">24/7</span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Support Available</h3>
                <p className="text-sm sm:text-base text-gray-600">Round-the-clock technical support and emergency services</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Section */}
      <ClientSection />
    </div>
  )
}

export default Well_Services
