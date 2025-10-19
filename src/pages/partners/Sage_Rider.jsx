import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Users, Shield, Zap, ZoomIn, X, ChevronLeft, ChevronRight, Settings, Monitor, Droplets, Gauge, Battery, Thermometer, Activity } from 'lucide-react';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

// Import SAGE RIDER logo
import sageRiderLogo from '../../assets/sage_rider/sage_rider_logo.jpg';

const Sage_Rider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Services offered by SAGE RIDER
  const services = [
    {
      id: 1,
      title: "Casing Conveyed Gauge System",
      description: "Advanced monitoring systems for casing integrity and performance",
      icon: <Gauge className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Tubing Conveyed Gauge System",
      description: "Precision measurement and monitoring for tubing operations",
      icon: <Monitor className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Disposal Well Pressure Monitoring",
      description: "Real-time pressure monitoring for safe disposal operations",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Electric Gas Lift System",
      description: "Efficient electric gas lift solutions for enhanced production",
      icon: <Battery className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Carbon Capture Systems",
      description: "Environmental solutions for carbon capture and storage",
      icon: <Shield className="w-6 h-6" />
    },
    {
      id: 6,
      title: "Paraffin Melting Technology",
      description: "Advanced technology for paraffin removal and prevention",
      icon: <Thermometer className="w-6 h-6" />
    },
    {
      id: 7,
      title: "WaterRider",
      description: "Specialized water management and treatment solutions",
      icon: <Droplets className="w-6 h-6" />
    }
  ];

  // Enhanced modal functions with keyboard support
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setSelectedImage(services[index]);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  }, [services]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    const nextIndex = (currentImageIndex + 1) % services.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(services[nextIndex]);
  }, [currentImageIndex, services]);

  const prevImage = useCallback(() => {
    const prevIndex = (currentImageIndex - 1 + services.length) % services.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(services[prevIndex]);
  }, [currentImageIndex, services]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, nextImage, prevImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              SAGE RIDER
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Technical Solutions for Asset Optimization
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  About SAGE RIDER
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  SageRider Inc. is a Madison Industries company that focuses on technical solutions 
                  to help you get the most from your assets. With experts from various sectors of our 
                  business, we are able to understand your needs as the industry changes.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our comprehensive range of solutions ensures optimal asset performance, monitoring, 
                  and environmental compliance across all operations.
                </p>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Madison Industries Company</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Asset Optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Technical Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">Industry Expertise</span>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Logo */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src={sageRiderLogo}
                alt="SAGE RIDER"
                className="w-full max-w-md h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-md h-72 bg-gray-200 rounded-2xl shadow-lg hidden items-center justify-center text-gray-500">
                <p>SAGE RIDER Logo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical solutions designed to optimize your assets and enhance operational efficiency
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg border border-gray-200 hover:border-gray-300 p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Optimize Your Assets?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Contact us to learn more about how SAGE RIDER's technical solutions can help you 
              maximize the performance and efficiency of your operations.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Sage_Rider;
