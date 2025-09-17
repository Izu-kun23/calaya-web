import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  // Certification data
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      description: "Quality Management System",
      issuer: "International Organization for Standardization",
      date: "2023",
      category: "Quality Management",
      image: "/src/assets/certifications/iso9001.png"
    },
    {
      id: 2,
      title: "ISO 14001:2015",
      description: "Environmental Management System",
      issuer: "International Organization for Standardization",
      date: "2023",
      category: "Environmental Management",
      image: "/src/assets/certifications/iso14001.png"
    },
    {
      id: 3,
      title: "OHSAS 18001:2007",
      description: "Occupational Health and Safety Management",
      issuer: "British Standards Institution",
      date: "2023",
      category: "Health & Safety",
      image: "/src/assets/certifications/ohsas18001.png"
    },
    {
      id: 4,
      title: "API Q1",
      description: "Specification for Quality Management System Requirements for Manufacturing Organizations for the Petroleum and Natural Gas Industry",
      issuer: "American Petroleum Institute",
      date: "2023",
      category: "Oil & Gas Quality",
      image: "/src/assets/certifications/apiq1.png"
    },
    {
      id: 5,
      title: "API Q2",
      description: "Specification for Quality Management System Requirements for Service Supply Organizations for the Petroleum and Natural Gas Industry",
      issuer: "American Petroleum Institute",
      date: "2023",
      category: "Oil & Gas Services",
      image: "/src/assets/certifications/apiq2.png"
    },
    {
      id: 6,
      title: "NACE International",
      description: "Corrosion Control and Prevention Certification",
      issuer: "NACE International",
      date: "2023",
      category: "Corrosion Control",
      image: "/src/assets/certifications/nace.png"
    },
    {
      id: 7,
      title: "ASME BPVC",
      description: "Boiler and Pressure Vessel Code Certification",
      issuer: "American Society of Mechanical Engineers",
      date: "2023",
      category: "Pressure Vessels",
      image: "/src/assets/certifications/asme.png"
    },
    {
      id: 8,
      title: "AWS D1.1",
      description: "Structural Welding Code - Steel",
      issuer: "American Welding Society",
      date: "2023",
      category: "Welding Standards",
      image: "/src/assets/certifications/aws.png"
    },
    {
      id: 9,
      title: "DNV GL",
      description: "Marine and Offshore Certification",
      issuer: "DNV GL",
      date: "2023",
      category: "Marine & Offshore",
      image: "/src/assets/certifications/dnvgl.png"
    }
  ];

  const categories = [
    "All",
    "Quality Management",
    "Environmental Management",
    "Health & Safety",
    "Oil & Gas Quality",
    "Oil & Gas Services",
    "Corrosion Control",
    "Pressure Vessels",
    "Welding Standards",
    "Marine & Offshore"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCertifications = selectedCategory === "All" 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              Certifications
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto"
            >
              Recognized standards and certifications that demonstrate our commitment to quality, safety, and excellence
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Introduction Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Certifications
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Calaya Engineering Services maintains a comprehensive portfolio of international certifications and standards, 
              ensuring we meet the highest industry requirements for quality, safety, environmental responsibility, and technical excellence.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((certification, index) => (
              <motion.div
                key={certification.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={certification.image}
                      alt={certification.title}
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg" style={{ display: 'none' }}>
                      {certification.title.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {certification.title}
                    </h3>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {certification.category}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {certification.description}
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className="font-medium">{certification.issuer}</span>
                    <span>{certification.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{certifications.length}</div>
                <div className="text-blue-100">Active Certifications</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Compliance Rate</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">2023</div>
                <div className="text-blue-100">Latest Renewal</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Certifications;
