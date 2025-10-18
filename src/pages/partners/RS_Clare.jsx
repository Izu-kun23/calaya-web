import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ZoomIn, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import CaseStudyModal from '../../components/modal/CaseStudyModal';
import heroImage from '../../assets/images/Useable_Images/image12.jpg';

const RS_Clare = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  
  // Gallery state management
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Gallery images data
  const galleryImages = [
    {
      id: 1,
      src: "https://www.youtube.com/watch?v=Rj8FRNJKV7s",
      thumbnail: "/src/assets/casestudy/rsclare_gallery/gallery5.png",
      alt: "RS Clare Advanced Oilfield Lubrication",
      title: "RS Clare Advanced Oilfield Lubrication",
      description: "Watch our demonstration video showcasing RS Clare's advanced oilfield lubrication solutions",
      category: "Video",
      isVideo: true
    },
    {
      id: 2,
      src: "/src/assets/casestudy/rsclare_gallery/gallery1.png",
      alt: "RS Clare field operations",
      title: "Field Operations",
      description: "RS Clare products in action across various field operations and applications",
      category: "Operations"
    },
    {
      id: 3,
      src: "/src/assets/casestudy/rsclare_gallery/gallery2.png",
      alt: "RS Clare equipment in action",
      title: "Equipment in Action",
      description: "Our equipment performing critical functions in demanding industrial environments",
      category: "Equipment"
    },
    {
      id: 4,
      src: "/src/assets/casestudy/rsclare_gallery/gallery3.png",
      alt: "RS Clare valve maintenance",
      title: "Valve Maintenance",
      description: "Professional valve maintenance using RS Clare advanced lubrication solutions",
      category: "Maintenance"
    },
    {
      id: 5,
      src: "/src/assets/casestudy/rsclare_gallery/gallery4.png",
      alt: "RS Clare industrial applications",
      title: "Industrial Applications",
      description: "RS Clare solutions applied across diverse industrial applications and sectors",
      category: "Applications"
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

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: "Field Trial - Mobil Producing Nigeria Unlimited",
      client: "Mobil Producing Nigeria (ExxonMobil)",
      description: "As part of a technical project to increase wellhead gate valve integrity and save cost from always changing worn out gate/seat in ExxonMobil Fields, the Drilling and Well Intervention Division were exploring the technical capabilities of Valve Lubricant 601 and Valve Sealant 701 as a possible solution for the cavity retention and valve leakage issues they were experiencing with the incumbent valve grease being used in their Christmas trees. Calaya Sealant Team was communicated on November, 2022 to come to Cameron Yard in Onne Port Harcourt, Rivers State for a field trial on a 31/8 x 5K Xmas Tree. A manual operated Wing Valve (WV) was pressure tested to 2500psi and leak rate of 2300psi/min was observed. Calaya Sealant team rigged up the RS Clare Heavy Duty Pump and injected High Grade RS Clare Valve Sealant 701 into the WV cavity. The WV was pressured up to 2500psi and observed for 10mins, no pressure drop was observed. Same Valve was pressured up to 5000psi, monitored for 10mins and no pressure drop was observed. The ExxonMobil Engineers were extremely happy with this result and now have Valve Sealant 701 as part of their emergency isolation routine.",
      application: "Wellhead gate valve integrity and Christmas tree maintenance",
      products: "RS Clare Valve Lubricant 601 and Valve Sealant 701",
      result: "Complete leak elimination at 5000psi with zero pressure drop observed",
      specifications: [
        "31/8 x 5K Xmas Tree manual operated Wing Valve",
        "Initial leak rate: 2300psi/min at 2500psi",
        "Final test: 5000psi with zero pressure drop",
        "10-minute monitoring periods at each pressure level",
        "RS Clare Heavy Duty Pump injection system used"
      ]
    },
    {
      id: 2,
      title: "36\" Station Manual Gate Valve Leak Sealing - WAPCo",
      client: "(WAPCo)",
      description: "West African Gas Pipeline Company Limited (WAPCo) is an international Company transporting Natural Gas in Nigeria, Benin, Togo and Ghana in a safe, responsible and reliable manner to create values. The WAGP was birthed from an Economic Community of West African States (ECOWAS) dream to have a natural gas pipeline across West Africa as a key regional economic goal. WAPCo were experiencing issues keeping their 36\" manual gate valve gas export line closed without having a leak, these was brought to Calaya Engineering Services Limited notice. The valve was leaking at 7 bar (102psi) in 12 hours and 15 bar (218psi) in 24 hours. Their incumbent valve lubricant was not able to provide an effective preventative maintenance solution to preserve valve functionality and prevent leakage. Calaya Engineering Services Limited Valve Sealant Team was mobilized to WAPCo Nigeria field office in Badagry where the field demonstration was carried out. 2 drums (36kg) of RS Clare Valve Sealant 701 was injected into the 36\" MGV cavity. The valve was monitored for 24hours and no leak was observed again, with Valve Sealant 701 successfully able to stop the leaks and improve ease of valve operation. The WAPCo Engineers were extremely happy with this result and now have Valve Sealant 701 as part of their emergency isolation routine.",
      application: "Gas pipeline infrastructure and valve maintenance across West Africa",
      products: "RS Clare Valve Sealant 701",
      result: "Complete leak elimination with 24-hour monitoring showing zero leaks",
      specifications: [
        "36\" manual gate valve gas export line",
        "Initial leak rate: 7 bar (102psi) in 12 hours, 15 bar (218psi) in 24 hours",
        "2 drums (36kg) of Valve Sealant 701 injected",
        "24-hour monitoring period with zero leaks observed",
        "WAPCo Nigeria field office in Badagry location"
      ]
    },
    {
      id: 3,
      title: "Valve Sealant 701 for Slickline Operations - Addax Petroleum",
      client: "Addax Petroleum",
      description: "During Addax Petroleum Izombe (OML 124) slickline operation for WRSCSSSV change out on Well IZ-1LS of Vetco Gray (11\"X 3\"8X 3\"8X 5K), the wellhead maintenance team carried out integrity check on Xmas tree valves and noticed the Swab Valve passing @600psi-1200psi in 2mins, Master Valves both passing @600psi-1200psi in 5mins. Calaya Sealant team were contacted to carryout sealing of the passing valves to create a barrier for slickline operations. After pumping high grade RS Clare 701 valve sealant on Xmas tree valves, they were tested and confirmed ok and holding in 10mins. Slickline rigged up and carried out the WRSCSSSV change out and the Addax company man confirmed the integrity of the valves were retained till the end of the whole operation on the well. Addax Petroleum has always been using Calaya wellhead maintenance team for 1st and 2nd line wellhead maintenance on all their wells. The use of RS Clare Valve Lubricant 601 has been using for routine maintenance every 6 months and the deployment of RS Clare Valve Sealant 701 for all the passing valves to keep the valves integrity at all times.",
      application: "Well intervention and slickline operations on OML 124",
      products: "RS Clare Valve Sealant 701 and Valve Lubricant 601",
      result: "Successful valve sealing and maintained integrity throughout entire operation",
      specifications: [
        "Well IZ-1LS of Vetco Gray (11\"X 3\"8X 3\"8X 5K)",
        "Swab Valve: passing @600psi-1200psi in 2mins (before treatment)",
        "Master Valves: both passing @600psi-1200psi in 5mins (before treatment)",
        "Post-treatment: valves holding pressure in 10mins",
        "Routine maintenance: RS Clare 601 every 6 months"
      ]
    },
    {
      id: 4,
      title: "Valve Sealant 701 for Wireline Well Securing - SPDC",
      client: "SPDC",
      description: "Shell Petroleum Development Company, Nigeria (SPDC) is the leading exploration and production company in Nigeria. Gas fields and processing plants are operated by SPDC exclusively on behalf of the Nigerian government. SPDC had a major integrity issue with their crude oil well 3\"8 gate valves at Soku. All the valves were leaking and they could not rig up Wireline to secure the well and suspend it to do a christmas tree change out. They tried many different greases and sealants to try and seal the leak to enable the change out, none of which worked. It was then they decided to call Calaya to come and inject RS Clare Valve Sealant 701. The valve cavity was filled with Valve Sealant 701 and it sealed the leak and maintained 0psi pressure to allow SPDC engineers to rig up. The same procedure was then performed on 2 other wells in low pressure normal temperature crude oil wells with similar success. For high pressure, high temperature (HPHT) gas wells, SPDC used RS Clare 701 in 5 wells with a 100% success rate to allow the Wireline equipment to be safely rigged up and to avoid commencing a well kill and damaging the reservoir. SPDC now ensure they hold 4-5 drums in stock at all times in case of an emergency. 'Valve Sealant 701 is now the most practical solution and is now common practice with our Well Head Maintenance crew to temporarily restore valve integrity and do a valve change out' - Temitope Alalade, SPDC Completion and Well Intervention (CWI) Engineer.",
      application: "Wireline well securing operations and Christmas tree change outs",
      products: "RS Clare Valve Sealant 701",
      result: "100% success rate across 8 wells, enabling safe wireline operations and avoiding reservoir damage",
      specifications: [
        "3\"8 gate valves at Soku location",
        "Low pressure normal temperature crude oil wells (3 wells)",
        "High pressure, high temperature (HPHT) gas wells (5 wells)",
        "0psi pressure maintained for safe rig-up operations",
        "4-5 drums maintained in stock for emergency use"
      ]
    },
    {
      id: 5,
      title: "601 Valve Lubricant for Routine Maintenance - NAOC",
      client: "NAOC",
      description: "Calaya Engineering Services has executed SCSSSV and wellhead integrity checks on NAOC swamp and Land locations. At the course of the routine maintenance, RS Clare Valve Lubricant 601 is a mandatory lubricant injected into the cavities of the Xmas tree valves at every six months' interval. It's been noticed that during the six months' maintenance schedule, the lubricant in the wellhead valves cavity still retains the grease efficiency thereby reducing the wear and tear on the christmas tree valves. NAOC wellhead operators have sent in their testimonies to commend Calaya wellhead research team on the ease of operating wellhead stiff valves because the introduction of RS Clare Lubricant 601 on the valves, maintains the integrity and prolongs the life span of the valves.",
      application: "SCSSSV and wellhead integrity checks on NAOC swamp and land locations",
      products: "RS Clare 601 Valve Lubricant",
      result: "Improved valve operation ease, maintained integrity, and prolonged valve lifespan",
      specifications: [
        "NAOC swamp and land locations",
        "Six-month maintenance intervals",
        "Xmas tree valve cavity lubrication",
        "SCSSSV and wellhead integrity checks",
        "Reduced wear and tear on Christmas tree valves"
      ]
    },
    {
      id: 6,
      title: "Greasing and Leak Sealing of GTS-4 - NLNG Bonny Facility",
      client: "NLNG",
      description: "Calaya Engineering Services has executed Station valve greasing and leak sealing of NLNG GTS pipeline components consisting of process and production valves. At the course of the greasing and leak sealing operations, station valves ranging from 2\", 4\", 8\", 12\", 24\" and 36\" were successfully maintained and integrity restored using RS Clare Valve Lubricant 601 and Valve Sealant 701. This project ensured the reliability of critical gas processing equipment in one of Nigeria's most important LNG facilities.",
      application: "Station valve greasing and leak sealing of NLNG GTS pipeline components",
      products: "RS Clare Valve Lubricant 601 and Valve Sealant 701",
      result: "Successful maintenance and integrity restoration of multiple valve sizes",
      specifications: [
        "GTS pipeline components (process and production valves)",
        "Valve sizes: 2\", 4\", 8\", 12\", 24\", and 36\"",
        "NLNG Bonny Facility location",
        "Station valve greasing and leak sealing operations",
        "Critical gas processing equipment maintenance"
      ]
    },
    {
      id: 7,
      title: "Field Trial - Mobil Producing Nigeria Unlimited",
      client: "Mobil Producing Nigeria (ExxonMobil)",
      description: "As part of a technical project to increase wellhead gate valve integrity and save cost from always changing worn out gate/seat in ExxonMobil Fields, the Drilling and Well Intervention Division were exploring the technical capabilities of Valve Lubricant 601 and Valve Sealant 701 as a possible solution for the cavity retention and valve leakage issues they were experiencing with the incumbent valve grease being used in their Xmas trees. Calaya Sealant Team was communicated on November, 2022 to come to Cameron Yard in Onne Port Harcourt, Rivers State for a field trial on a 3\" x 5K Xmas Tree. A manual operated Wing Valve (WV) was pressure tested to 2500psi and leak rate of 2300psi/min was observed. Calaya Sealant team rigged up the RS Clare Heavy Duty Pump and injected High Grade RS Clare Valve Sealant 701 into the WV cavity. The WV was pressured up to 2500psi and observed for 10mins, no pressure drop was observed. Same Valve was pressured up to 5000psi, monitored for 10mins and no pressure drop was observed. The ExxonMobil Engineers were extremely happy with this result and now have Valve Sealant 701 as part of their emergency isolation routine.",
      application: "Wellhead gate valve integrity and Christmas tree maintenance in ExxonMobil Fields",
      products: "RS Clare Valve Lubricant 601 and Valve Sealant 701",
      result: "Complete leak elimination at 5000psi with zero pressure drop observed, now part of emergency isolation routine",
      specifications: [
        "3\" x 5K Xmas Tree manual operated Wing Valve",
        "Initial leak rate: 2300psi/min at 2500psi",
        "Final test: 5000psi with zero pressure drop",
        "10-minute monitoring periods at each pressure level",
        "RS Clare Heavy Duty Pump injection system used",
        "Cameron Yard, Onne Port Harcourt, Rivers State location"
      ]
    },
    {
      id: 8,
      title: "Valve Sealant 701 for Intervention Work - SPDC STOG Field",
      client: "SPDC",
      description: "The SPDC Nigeria Forcados and Escravos asset is a mature oil, gas and condensate producing field. The produced gas and fluids contain small concentrations of H2S, CO2 and chlorides. The Xmas trees are a combination of Cameron, FMC & Kvaerner 5K and 10K Y-blocks. The SI pressures are less than 20% of the equipment ratings. Over the years a maintenance program was implemented to ensure the X-mas trees were greased on a regular basis (every 6 months) with 'standard grease' as recommended. Issues arose when trying to establish barriers for intervention work as per SPDC policy on the aging Xmas tree valves. SPDC CSR found that the only way to achieve the required barriers was to have a Sealant crew work on the Xmas tree valves just prior to performing the intervention (usually the same day) and keep the crew on location in case they were needed. During the 'grease investigation period' SPDC started a CT STOG (Coil Tubing Intervention) program where barriers were required almost on a daily basis. Once they started using Valve Sealant 701 they found that they no longer needed to grease the Xmas tree valves afterwards, in fact we could grease it two weeks prior and still achieve the required barriers. During CT Well Intervention operations, they also no longer had to keep grease and pumping equipment on location and rarely had to grease the X-mas tree during operations. Due to the excellent performance of Valve Sealant 701, management decided to switch to Valve Sealant 701 throughout the field. Huge cost savings have been delivered as a result, and SPDC continue to use VL/VS 601/701 in this field and many more regions across the globe. 'We have found that since the X-mas tree valves do not require as much grease due to the fact that Valve Lubricant 601 does not washout. We were also able to maintain the barriers when needed and failures on leak off tests have diminished immensely' - SPDC Operations Team.",
      application: "CT STOG (Coil Tubing Intervention) program and barrier establishment for intervention work",
      products: "RS Clare Valve Lubricant 601 and Valve Sealant 701",
      result: "Huge cost savings, reduced maintenance requirements, and successful barrier establishment throughout the field",
      specifications: [
        "Forcados and Escravos asset - mature oil, gas and condensate producing field",
        "Cameron, FMC & Kvaerner 5K and 10K Y-blocks Xmas trees",
        "H2S, CO2 and chlorides in produced gas and fluids",
        "SI pressures less than 20% of equipment ratings",
        "CT STOG program with daily barrier requirements",
        "Two-week advance greasing capability maintained"
      ]
    }
  ];

  const handleReadMore = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gray-900 text-white py-12 sm:py-16 lg:py-20 overflow-hidden"
      >
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
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4"
            >
              RS Clare
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto"
            >
              Advanced lubricants and greasing equipment for industrial applications
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
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Introduction
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 leading-relaxed mb-8"
          >
            RS Clare is a leading provider of advanced lubricants and greasing equipment for industrial applications across various sectors.
          </motion.p>
          
          {/* RS Clare Images */}
          <div className="flex flex-col lg:flex-row justify-start gap-4 lg:gap-6">
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              src="/src/assets/product_partners/content_images/rsclare1.png"
              alt="RS Clare Products and Services"
              className="w-full lg:max-w-xs lg:w-auto h-64 sm:h-80 lg:h-100 object-cover rounded-lg "
            />
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="w-full lg:flex-1"
            >
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                src="/src/assets/product_partners/content_images/rsclarelogo.png"
                alt="RS Clare Logo"
                className="max-w-48 sm:max-w-64 lg:max-w-32 w-full h-auto rounded-lg"
              />
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm mt-4 w-full lg:max-w-180 leading-relaxed font-bold" 
                style={{ color: '#344C78' }}
              >
                THE MOST ADVANCED LUBRICATION AND SEALING SOLUTIONS FOR UPSTREAM VALVES. PROVEN TO MAINTAIN VALVE INTEGRITY IN THE WORLD'S MOST DEMANDING ENVIRONMENTS FOR A COST-EFFECTIVE OPERATIONS.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm mt-6 w-full lg:max-w-180 leading-relaxed text-gray-700"
              >
                RS Clare are manufacturers of advanced lubricants and sealants for oil and gas valves and the supplier of choice to major exploration and production (E&P) operators worldwide, and the only oilfield lubricant manufacturer with a single product approved by the 6 major global valve OEMs. Our premium valve lubricants are completely hydrocarbon resistant so that even in the most aggressive environments, valves are protected and well integrity is maintained.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm mt-4 w-full lg:max-w-180 leading-relaxed text-gray-700"
              >
                Our valve lubricants and sealants have been field tested and are proven at enabling operators to increase re-greasing intervals and reduce the number and frequency of valve repairs, resulting in much lower operational costs and fewer production shut-downs or instances of non-production time (NPT).
              </motion.p>
              
              {/* RS Clare Additional Images */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="mt-6 flex justify-start"
              >
                <img
                  src="/src/assets/product_partners/content_images/rsclare2.png"
                  alt="RS Clare Additional Products"
                  className="w-full sm:max-w-2xl lg:max-w-4xl h-auto rounded-lg"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="mt-6 flex justify-start"
              >
                <img
                  src="/src/assets/product_partners/content_images/rsclare3.png"
                  alt="RS Clare Products 3"
                  className="w-full sm:max-w-2xl lg:max-w-4xl h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Case Studies Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 lg:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8"
          >
            Case Studies
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div 
                key={caseStudy.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-lg p-4 lg:p-6 hover: transition-shadow duration-300 relative"
              >
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm leading-relaxed mb-4">
                  {caseStudy.description.substring(0, 120)}...
                </p>
                <div className={`flex items-center text-xs lg:text-sm mb-4 ${
                  index % 4 === 0 ? 'text-blue-600' : 
                  index % 4 === 1 ? 'text-green-600' : 
                  index % 4 === 2 ? 'text-purple-600' : 
                  'text-orange-600'
                }`}>
                  <span className="font-semibold">Client:</span>
                  <span className="ml-2">{caseStudy.client}</span>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={() => handleReadMore(caseStudy)}
                    className="flex items-center gap-1 text-xs text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
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
              Explore our field operations and RS Clare product applications across various oil and gas facilities
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

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        caseStudy={selectedCaseStudy}
      />
    </div>
  );
};

export default RS_Clare;