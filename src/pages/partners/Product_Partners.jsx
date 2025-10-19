import React from 'react'
import { motion } from 'framer-motion'
import { Building, Wrench, Shield, CheckCircle, Target, TrendingUp, Settings, Zap, HardHat, Monitor, Users, Search, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/images/Useable_Images/image12.jpg'

// Import all product partner images
import rsClareImage from '../../assets/product_partners/rs_clare.jpg'
import preciseToolImage from '../../assets/product_partners/precise_tool.jpg'
import dhviImage from '../../assets/product_partners/DHVI.png'
import ipPipelineImage from '../../assets/product_partners/ip_pipeline.jpg'
import lexImage from '../../assets/product_partners/lex.jpg'
import tckwImage from '../../assets/tck.w/tck.w_logo.png'
import i2sImage from '../../assets/product_partners/i2S.jpg'
import evergreenImage from '../../assets/evergreen_energy/evergreen.png'
import remediadeImage from '../../assets/product_partners/remediade.jpg'
import cCubeImage from '../../assets/product_partners/c-cube.jpeg'
import samoaImage from '../../assets/product_partners/samoa.png'
import shootfireImage from '../../assets/product_partners/shootfire.jpg'
import gmFlowImage from '../../assets/product_partners/gm_flow.jpg'
import leakDetectionImage from '../../assets/product_partners/leak_detection.jpg'
// Import SAGE RIDER logo
import sageRiderImage from '../../assets/sage_rider/sage_rider_logo.jpg'
// Import ARIX image
import arixImage from '../../assets/arix/arix_image.png'
import gasDataLogo from '../../assets/gas_data/gasdata_logo.png'
import soundwaveLogo from '../../assets/sound_wave_inspection/soundwave_logo.png'
import scoreLogo from '../../assets/score_global/Score_logo.png'
import northernEnergyLogo from '../../assets/northern_energy/Northernenergy_logo.png'
import tomojitGhoshLogo from '../../assets/tomojit_ghosh/TGC_logo.png'


const Product_Partners = () => {
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
      image: evergreenImage, // Using placeholder until specific image is provided
      description: "Multidimensional energy and oilfield technology provider"
    },
    {
      id: 21,
      name: "Tomojit Ghosh Calibration",
      image: tomojitGhoshLogo, // Using placeholder until specific image is provided
      description: "Comprehensive calibration, inspection and surveying services"
    },
    {
      id: 22,
      name: "Quantum Downhole Systems",
      image: arixImage, // Using placeholder until specific image is provided
      description: "Innovative wellbore cleanout and production evaluation solutions"
    },
    {
      id: 23,
      name: "TCK.W Rope Monitor",
      image: arixImage, // Using placeholder until specific image is provided
      description: "Real-time online wire rope inspection systems"
    },
    {
      id: 24,
      name: "Valve Tight",
      image: arixImage, // Using placeholder until specific image is provided
      description: "DBB-SAVER technology for leak prevention and monitoring"
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
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 overflow-hidden group cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`w-full h-48 group-hover:scale-105 transition-transform duration-200 ${
                      product.name === "GAS DATA" || product.name === "Sound Wave Inspection Systems" || product.name === "SCORE Global Expertise" || product.name === "Northern Energy Innovations" || product.name === "EverGreen Energy Savers" || product.name === "Tomojit Ghosh Calibration"
                        ? "object-contain p-4 bg-white" 
                        : "object-cover"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* View Details Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    {product.name === "RS Clare" ? (
                      <Link
                        to="/partners/rs-clare"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Precise Tool" ? (
                      <Link
                        to="/partners/precise-tool"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "DHVI" ? (
                      <Link
                        to="/partners/dhvi"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "IP Pipeline Technologies" ? (
                      <Link
                        to="/partners/ip-pipeline"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Lex Technology" ? (
                      <Link
                        to="/partners/lex-technology"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "TCK.W" ? (
                      <Link
                        to="/partners/tck-w"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "12S" ? (
                      <Link
                        to="/partners/12s"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "RemediAde" ? (
                      <Link
                        to="/partners/remediade"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "C-Cube International" ? (
                      <Link
                        to="/partners/c-cube"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Samoa LTD" ? (
                      <Link
                        to="/partners/samoa"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Shootfire by Vimal Fire" ? (
                      <Link
                        to="/partners/shootfire"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "GM Flow Measurement" ? (
                      <Link
                        to="/partners/gm-flow"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Leak Detection and Repair" ? (
                      <Link
                        to="/partners/leak-detection"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "SAGE RIDER" ? (
                      <Link
                        to="/partners/sage-rider"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "ARIX Technologies" ? (
                      <Link
                        to="/partners/arix"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "GAS DATA" ? (
                      <Link
                        to="/partners/gas-data"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Sound Wave Inspection Systems" ? (
                      <Link
                        to="/partners/sound-wave-inspection"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Valve Tight" ? (
                      <Link
                        to="/partners/valve-tight"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "SCORE Global Expertise" ? (
                      <Link
                        to="/partners/score-global"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Northern Energy Innovations" ? (
                      <Link
                        to="/partners/northern-energy"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "EverGreen Energy Savers" ? (
                      <Link
                        to="/partners/evergreen-energy"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Tomojit Ghosh Calibration" ? (
                      <Link
                        to="/partners/tomojit-ghosh"
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

export default Product_Partners
