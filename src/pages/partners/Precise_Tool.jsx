import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import CaseStudyModal from '../../components/modal/CaseStudyModal';

// Import Precise Tool gallery images
import oaura from '../../assets/precisetool/gallery/oaura.png';
import oaura1 from '../../assets/precisetool/gallery/oaura1.png';
import precise from '../../assets/precisetool/gallery/precise.png';
import precise2 from '../../assets/precisetool/gallery/precise2.png';
import precise3 from '../../assets/precisetool/gallery/precise3.png';

// Import Precise Tool content images
import preciseToolImg from '../../assets/precisetool/precise_tool.jpg';
import preciseContent from '../../assets/precisetool/content.jpeg';

const Precise_Tool = () => {
  // Gallery state management
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://www.youtube.com/watch?v=xBwJT5WVC00",
      thumbnail: oaura,
      alt: "Oura Artificial Lift",
      title: "Oura Artificial Lift",
      description: "Advanced artificial lift solutions for enhanced oil recovery",
      category: "Video",
      isVideo: true
    },
    {
      id: 2,
      src: "https://www.youtube.com/watch?v=X82F-ngURHU",
      thumbnail: oaura1,
      alt: "Oura Enhanced Oil Recovery",
      title: "Oura Enhanced Oil Recovery",
      description: "Innovative lift technology for maximum efficiency",
      category: "Video",
      isVideo: true
    },
    {
      id: 3,
      src: "https://www.youtube.com/watch?v=5VF4uYG_0Sg",
      thumbnail: precise,
      alt: "Precise Downhole Solutions",
      title: "Precise Downhole Solutions",
      description: "Precision downhole solutions for complex operations",
      category: "Video",
      isVideo: true
    },
    {
      id: 4,
      src: "https://www.youtube.com/watch?v=_jTOpRPF3bU",
      thumbnail: precise2,
      alt: "Precise Downhole Solutions Services",
      title: "Precise Downhole Solutions Services",
      description: "Advanced precision technology for comprehensive solutions",
      category: "Video",
      isVideo: true
    },
    {
      id: 5,
      src: precise3,
      alt: "Precise RFT PT Sensors",
      title: "Precise RFT PT Sensors",
      description: "Comprehensive downhole solutions with advanced sensor technology",
      category: "Technology"
    }
  ];

  // Gallery functions
  const openModal = useCallback((index) => {
    setCurrentImageIndex(index);
    setSelectedImage(galleryImages[index]);
    setIsLoading(false);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
  }, [galleryImages]);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(galleryImages[(currentImageIndex + 1) % galleryImages.length]);
  }, [galleryImages, currentImageIndex]);

  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(galleryImages[currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1]);
  }, [galleryImages, currentImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch (e.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, closeModal, nextImage, prevImage]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            Precise Tool
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Innovation and problem-solving in downhole instrumentation worldwide
          </motion.p>
        </div>
      </motion.section>

      {/* Introduction + Image Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-24 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Introduction
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Precise Downhole Solutions brings innovation and problem-solving to the world of downhole instrumentation. With extensive experience across multiple completions in the oil and gas market, our expertise drives efficiencies and helps producing companies remain globally competitive.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our safety-first approach, attention to detail, and commitment to exceeding customer expectations define our work. By diversifying markets and continuously developing new technologies, we empower customers to leverage data effectively while maintaining ESG performance standards.
              </p>
            </motion.div>

            {/* Image Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex justify-center"
            >
              <img
                src={preciseToolImg}
                alt="Precise Tool"
                className="w-full max-w-md h-auto rounded-2xl  object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-md h-72 bg-gray-200 rounded-2xl  hidden items-center justify-center text-gray-500">
                <p>Precise Tool Image</p>
              </div>
            </motion.div>
          </div>

           {/* Services Section */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             viewport={{ once: true }}
             className="mt-20"
           >
             <div className="text-center mb-12">
               <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                 Our Services
               </h3>
               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                 Comprehensive solutions for downhole instrumentation and oil & gas operations
               </p>
             </div>
             
             <div className="max-w-5xl mx-auto">
               <motion.ul 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.8 }}
                 viewport={{ once: true }}
                 className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg"
               >
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Engineering and Design</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Sensor Manufacturing</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Instrumentation Encapsulation / Protection</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Instrumentation Deployment Techniques</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Pump-Downs (Fluid Deployed)</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Spool-in's (Gravity Feeds)</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Drag-In's</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Clamping & Banding</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Coiled Tubing</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Clamp Management and Refurbishment</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">ESP Spooling Services</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Chemical Injection Services</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Regulatory Inspections</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">DTS/DAS Fiber Optic Surveys</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Fiber Optic</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Pipeline Monitoring</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Fire Detection</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Infrastructure Monitoring & More</span>
                 </li>
                 <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                   <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                   <span className="text-gray-800 font-medium">Wireline Services</span>
                 </li>
               </motion.ul>
             </div>
             
             {/* Content Image */}
             <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 1.0 }}
               viewport={{ once: true }}
               className="mt-12 flex justify-center"
             >
               <img
                 src={preciseContent}
                 alt="Precise Tool Products and Services"
                 className="max-w-6xl w-full h-auto rounded-lg"
                 onError={(e) => {
                   e.target.style.display = 'none';
                   e.target.nextSibling.style.display = 'block';
                 }}
               />
               <div className="max-w-6xl w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                 <p>Precise Tool Products and Services</p>
               </div>
             </motion.div>
           </motion.div>

          {/* Real-Time Systems Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 lg:p-14 text-white  mt-20"
          >
            <h3 className="text-3xl font-bold mb-8 text-center">
              Real-Time Drop Spool Systems
            </h3>
            <ul className="space-y-5 text-lg max-w-3xl mx-auto">
              <li>Provide bottom hole pressure and temperature data in real time directly to your desktop</li>
              <li>Monitor, record, and build models immediately with no time wasted</li>
              <li>Run multiple gauges as downhole recorders for surveys and tests</li>
              <li>Execute accurate and efficient pressure gradient tests</li>
              <li>Additional services available upon request</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 lg:py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Gallery
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Explore our precision engineering solutions and downhole instrumentation capabilities
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openModal(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openModal(index);
                  }
                }}
                aria-label={`View ${image.title} in full size`}
              >
                <article className="relative overflow-hidden rounded-xl  hover: transition-all duration-300 transform hover:-translate-y-1">
                  {image.isVideo ? (
                    <div className="relative w-full h-72">
                      <img
                        src={image.thumbnail}
                        alt={image.alt}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onLoad={() => setIsLoading(false)}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-red-600 rounded-full p-4 ">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      onLoad={() => setIsLoading(false)}
                    />
                  )}
                  
                  {/* Loading State */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-blue-600 rounded-full mb-2">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">{image.description}</p>
                    <div className="flex items-center text-sm font-medium">
                      {image.isVideo ? (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          <span>Click to watch video</span>
                        </>
                      ) : (
                        <>
                          <ZoomIn className="w-4 h-4 mr-2" />
                          <span>Click to view full size</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Zoom/Play Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                    {image.isVideo ? (
                      <Play className="w-6 h-6 text-gray-800" />
                    ) : (
                      <ZoomIn className="w-6 h-6 text-gray-800" />
                    )}
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Image Modal - No Size Constraints */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 backdrop-blur-sm"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Modal Content */}
              {selectedImage.isVideo ? (
                <div className="w-full max-w-6xl">
                  <div className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${selectedImage.src.split('v=')[1]?.split('&')[0]}?autoplay=1`}
                      title={selectedImage.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 id="modal-title" className="text-xl font-semibold text-white mb-2">
                      {selectedImage.title}
                    </h3>
                    <p id="modal-description" className="text-gray-300">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              ) : (
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-none max-h-none w-auto h-auto object-contain"
                  style={{
                    width: '530px',
                    height: '630px'
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Precise_Tool;