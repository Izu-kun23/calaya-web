'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { Building, Wrench, Shield, CheckCircle, Target, TrendingUp, Settings, Zap, HardHat, Monitor, Users, Search, Droplets } from 'lucide-react'
import Link from 'next/link'

// Hero image from public folder
const heroImage = "/assets/images/Useable_Images/image12.jpg"

// Product partner images from public folder
const rsClareImage = "/assets/product_partners/rs_clare.jpg"
const preciseToolImage = "/assets/product_partners/precise_tool.jpg"
const dhviImage = "/assets/product_partners/DHVI.png"
const ipPipelineImage = "/assets/product_partners/ip_pipeline.jpg"
const lexImage = "/assets/product_partners/lex.jpg"
const tckwImage = "/assets/tck.w/tck.w_logo.png"
const i2sImage = "/assets/product_partners/i2S.jpg"
const evergreenImage = "/assets/evergreen_energy/evergreen.png"
const remediadeImage = "/assets/product_partners/remediade.jpg"
const cCubeImage = "/assets/product_partners/c-cube.jpeg"
const samoaImage = "/assets/product_partners/samoa.png"
const shootfireImage = "/assets/product_partners/shootfire.jpg"
const gmFlowImage = "/assets/product_partners/gm_flow.jpg"
const leakDetectionImage = "/assets/product_partners/leak_detection.jpg"
const sageRiderImage = "/assets/sage_rider/sage_rider_logo.jpg"
const arixImage = "/assets/arix/arix_image.png"
const gasDataLogo = "/assets/gas_data/gasdata_logo.png"
const soundwaveLogo = "/assets/sound_wave_inspection/soundwave_logo.png"
const scoreLogo = "/assets/score_global/Score_logo.png"
const northernEnergyLogo = "/assets/northern_energy/Northernenergy_logo.png"
const tomojitGhoshLogo = "/assets/tomojit_ghosh/TGC_logo.png"
const quantumLogo = "/assets/quantum_downhole/quantum_logo.png"


export default function ProductsPage() {
  // Partner route mapping
  const partnerRoutes = {
    "RS Clare": "/partners/rs-clare",
    "Precise Tool": "/partners/precise-tool",
    "DHVI": "/partners/dhvi",
    "IP Pipeline Technologies": "/partners/ip-pipeline",
    "Lex Technology": "/partners/lex-technology",
    "TCK.W": "/partners/tck-w",
    "12S": "/partners/12s",
    "RemediAde": "/partners/remediade",
    "C-Cube International": "/partners/c-cube",
    "Samoa LTD": "/partners/samoa",
    "Shootfire by Vimal Fire": "/partners/shootfire",
    "GM Flow Measurement": "/partners/gm-flow",
    "Leak Detection and Repair": "/partners/leak-detection",
    "SAGE RIDER": "/partners/sage-rider",
    "ARIX Technologies": "/partners/arix",
    "GAS DATA": "/partners/gas-data",
    "Sound Wave Inspection Systems": "/partners/sound-wave-inspection",
    "SCORE Global Expertise": "/partners/score-global",
    "Northern Energy Innovations": "/partners/northern-energy",
    "EverGreen Energy Savers": "/partners/evergreen-energy",
    "Tomojit Ghosh Calibration": "/partners/tomojit-ghosh",
    "Quantum Downhole Systems": "/partners/quantum-downhole"
  };

  // Product and Partner data
  const products = [
    {
      id: 1,
      name: "RS Clare",
      image: rsClareImage,
      description: "Advanced lubricants and sealants for oil and gas valves"
    },
    {
      id: 2,
      name: "Precise Tool",
      image: preciseToolImage,
      description: "Precision engineering and tooling solutions"
    },
    {
      id: 3,
      name: "DHVI",
      image: dhviImage,
      description: "Industrial valves and equipment"
    },
    {
      id: 4,
      name: "IP Pipeline Technologies",
      image: ipPipelineImage,
      description: "Pipeline construction and maintenance"
    },
    {
      id: 5,
      name: "Lex Technology",
      image: lexImage,
      description: "Technology solutions for oil and gas"
    },
    {
      id: 6,
      name: "TCK.W",
      image: tckwImage,
      description: "Real-time online wire rope inspection system"
    },
    {
      id: 7,
      name: "12S",
      image: i2sImage,
      description: "Engineering and technical services"
    },
    {
      id: 8,
      name: "RemediAde",
      image: remediadeImage,
      description: "Environmental and remediation services"
    },
    {
      id: 9,
      name: "C-Cube International",
      image: cCubeImage,
      description: "International engineering solutions"
    },
    {
      id: 10,
      name: "Samoa LTD",
      image: samoaImage,
      description: "Industrial equipment and services"
    },
    {
      id: 11,
      name: "Shootfire by Vimal Fire",
      image: shootfireImage,
      description: "Fire safety and protection systems"
    },
    {
      id: 12,
      name: "GM Flow Measurement",
      image: gmFlowImage,
      description: "Flow measurement and control systems"
    },
    {
      id: 13,
      name: "Leak Detection and Repair",
      image: leakDetectionImage,
      description: "Specialized leak detection services"
    },
    {
      id: 14,
      name: "SAGE RIDER",
      image: sageRiderImage,
      description: "Technical solutions for asset optimization and monitoring systems"
    },
    {
      id: 15,
      name: "ARIX Technologies",
      image: arixImage,
      description: "Innovative robotic and software solutions for pipe corrosion inspection"
    },
    {
      id: 16,
      name: "GAS DATA",
      image: gasDataLogo,
      description: "Market leaders in gas analysis and monitoring systems globally"
    },
    {
      id: 17,
      name: "Sound Wave Inspection Systems",
      image: soundwaveLogo,
      description: "Advanced sound-based technology for ultra-fast tube inspection"
    },
    {
      id: 18,
      name: "SCORE Global Expertise",
      image: scoreLogo,
      description: "Wellhead maintenance, testing and equipment solutions"
    },
    {
      id: 19,
      name: "Northern Energy Innovations",
      image: northernEnergyLogo,
      description: "Cutting-edge drilling, completion and artificial lift solutions"
    },
    {
      id: 20,
      name: "EverGreen Energy Savers",
      image: evergreenImage,
      description: "Multidimensional energy and oilfield technology provider"
    },
    {
      id: 21,
      name: "Tomojit Ghosh Calibration",
      image: tomojitGhoshLogo,
      description: "Comprehensive calibration, inspection and surveying services"
    },
    {
      id: 22,
      name: "Quantum Downhole Systems",
      image: quantumLogo,
      description: "Innovative wellbore cleanout and production evaluation solutions using patented concentric coiled tubing technology"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Product & Partners
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Discover our comprehensive range of products and trusted partnerships in the oil and gas industry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product and Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              High-quality products and trusted partnerships designed to meet the demanding requirements of the oil and gas industry
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden group cursor-pointer flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-48 group-hover:scale-105 transition-transform duration-200 ${
                      product.name === "GAS DATA" || product.name === "Sound Wave Inspection Systems" || product.name === "SCORE Global Expertise" || product.name === "Northern Energy Innovations" || product.name === "EverGreen Energy Savers" || product.name === "Tomojit Ghosh Calibration" || product.name === "Quantum Downhole Systems"
                        ? "object-contain p-4 bg-white" 
                        : "object-cover"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>

                {/* Product Info - Using flex to push button to bottom */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {product.description}
                    </p>
                  )}
                  
                  {/* View Details Button - Always at bottom */}
                  <div className={`${product.description ? 'mt-auto pt-4 border-t border-gray-100' : 'mt-auto pt-4'}`}>
                    {partnerRoutes[product.name] ? (
                      <Link
                        href={partnerRoutes[product.name]}
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : (
                      <button className="w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm">
                        View Details
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  )
}
