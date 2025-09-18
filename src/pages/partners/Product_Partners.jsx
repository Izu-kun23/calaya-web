import React from 'react'
import { motion } from 'framer-motion'
import { Building, Wrench, Shield, CheckCircle, Target, TrendingUp, Settings, Zap, HardHat, Monitor, Users, Search, Droplets } from 'lucide-react'
import { Link } from 'react-router-dom'


const Product_Partners = () => {
  // Product and Partner data
  const products = [
    {
      id: 1,
      name: "RS Clare",
      image: "/src/assets/product_partners/rs_clare.jpg",
      description: "Advanced lubricants and greasing equipment"
    },
    {
      id: 2,
      name: "Precise Tool",
      image: "/src/assets/product_partners/precise_tool.jpg",
      description: "Precision engineering and tooling solutions"
    },
    {
      id: 3,
      name: "DHVI",
      image: "/src/assets/product_partners/DHVI.png",
      description: "Industrial valves and equipment"
    },
    {
      id: 4,
      name: "IP Pipeline Technologies",
      image: "/src/assets/product_partners/ip_pipeline.jpg",
      description: "Pipeline construction and maintenance"
    },
    {
      id: 5,
      name: "Lex Technology",
      image: "/src/assets/product_partners/lex.jpg",
      description: "Technology solutions for oil and gas"
    },
    {
      id: 6,
      name: "TCK.W",
      image: "/src/assets/product_partners/i2S.jpg",
      description: "Specialized equipment and services"
    },
    {
      id: 7,
      name: "12S",
      image: "/src/assets/product_partners/i2S.jpg",
      description: "Engineering and technical services"
    },
    {
      id: 8,
      name: "RemediAde",
      image: "/src/assets/product_partners/remediade.jpg",
      description: "Environmental and remediation services"
    },
    {
      id: 9,
      name: "C-Cube International",
      image: "/src/assets/product_partners/c-cube.jpeg",
      description: "International engineering solutions"
    },
    {
      id: 10,
      name: "Samoa LTD",
      image: "/src/assets/product_partners/samoa.png",
      description: "Industrial equipment and services"
    },
    {
      id: 11,
      name: "Shootfire by Vimal Fire",
      image: "/src/assets/product_partners/shootfire.jpg",
      description: "Fire safety and protection systems"
    },
    {
      id: 12,
      name: "GM Flow Measurement",
      image: "/src/assets/product_partners/gm_flow.jpg",
      description: "Flow measurement and control systems"
    },
    {
      id: 13,
      name: "Leak Detection and Repair",
      image: "/src/assets/product_partners/leak_detection.jpg",
      description: "Specialized leak detection services"
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
              Product & Partners
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
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
            transition={{ duration: 0.6, delay: 0.2 }}
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
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
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : product.name === "Precise Tool" ? (
                      <Link
                        to="/partners/precise-tool"
                        className="block w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm text-center"
                      >
                        View Details
                      </Link>
                    ) : (
                      <button className="w-full bg-gray-100 hover:bg-red-500 text-gray-700 hover:text-white px-4 py-2 rounded-lg transition-colors duration-300 font-medium text-sm">
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


      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Contact us to discuss your specific product requirements and partnership opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Sales
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-300">
                Become a Partner
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Product_Partners
