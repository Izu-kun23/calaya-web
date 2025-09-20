import React from 'react';
import { motion } from 'framer-motion';

const Precise_Tool = () => {
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
                src="/src/assets/precisetool/precise_tool.jpg"
                alt="Precise Tool"
                className="w-full max-w-md h-auto rounded-2xl shadow-xl object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full max-w-md h-72 bg-gray-200 rounded-2xl shadow-lg hidden items-center justify-center text-gray-500">
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
                 src="/src/assets/precisetool/content.jpeg"
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
            className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-10 lg:p-14 text-white shadow-xl mt-20"
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
        className="py-16 lg:py-20 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our precision engineering solutions and downhole instrumentation capabilities
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="max-w-6xl mx-7">
            {/* Top Row - 3 Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                {
                  id: 1,
                  title: "Oura Artificial Lift",
                  image: "/src/assets/precisetool/gallery/oaura.png",
                  videoId: "xBwJT5WVC00", // YouTube video ID from https://www.youtube.com/watch?v=xBwJT5WVC00&t=2s
                  description: "Advanced artificial lift solutions"
                },
                {
                  id: 2,
                  title: "Oura Enhanced Oil Recovery",
                  image: "/src/assets/precisetool/gallery/oaura1.png",
                  videoId: "X82F-ngURHU", // YouTube video ID from https://www.youtube.com/watch?v=X82F-ngURHU&t=6s
                  description: "Innovative lift technology"
                },
                {
                  id: 3,
                  title: "Precise Downhole Solutions",
                  image: "/src/assets/precisetool/gallery/precise.png",
                  videoId: "5VF4uYG_0Sg", // YouTube video ID from https://www.youtube.com/watch?v=5VF4uYG_0Sg
                  description: "Precision downhole solutions"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer max-w-sm mx-auto"
                  onClick={() => {
                    if (item.videoId) {
                      // Open YouTube video in new tab
                      window.open(`https://www.youtube.com/watch?v=${item.videoId}`, '_blank');
                    }
                  }}
                >
                  {/* Gallery Image or YouTube Thumbnail */}
                  {item.videoId ? (
                    // YouTube Video - RS Clare Style
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-red-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                        <p>{item.title} Image</p>
                      </div>
                    </div>
                  ) : (
                    // Regular Image
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                        <p>{item.title} Image</p>
                      </div>
                    </div>
                  )}

                  {/* Item Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - 2 Images (Centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  id: 4,
                  title: "Precise Downhole Solutions Services",
                  image: "/src/assets/precisetool/gallery/precise2.png",
                  videoId: "_jTOpRPF3bU", // YouTube video ID from https://www.youtube.com/watch?v=_jTOpRPF3bU&t=1s
                  description: "Advanced precision technology"
                },
                {
                  id: 5,
                  title: "Precise RFT PT Sensors",
                  image: "/src/assets/precisetool/gallery/precise3.png",
                  videoId: "placeholder", // Placeholder video ID - can be updated with actual YouTube video ID
                  description: "Comprehensive downhole solutions"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 3) * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer max-w-sm mx-auto"
                  onClick={() => {
                    if (item.videoId) {
                      // Open YouTube video in new tab
                      window.open(`https://www.youtube.com/watch?v=${item.videoId}`, '_blank');
                    }
                  }}
                >
                  {/* Gallery Image or YouTube Thumbnail */}
                  {item.videoId ? (
                    // YouTube Video - Same style as top row
                    <div className="aspect-video overflow-hidden relative">
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-red-600 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                        <p>{item.title} Image</p>
                      </div>
                    </div>
                  ) : (
                    // Regular Image
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500" style={{ display: 'none' }}>
                        <p>{item.title} Image</p>
                      </div>
                    </div>
                  )}

                  {/* Item Info */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Precise_Tool;