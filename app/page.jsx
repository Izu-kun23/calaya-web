'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MoveRight, MoveLeft } from "lucide-react";
import Banner from "../src/components/banner/Banner";
// Images from public folder
const teamImage = "/assets/images/Useable_Images/personnel.png";
const serviceImage = "/assets/images/Useable_Images/image5.jpg";
const procurementImage = "/assets/images/service_images/procurement.jpg";
const civilImage = "/assets/images/service_images/civil.jpg";
const facilitiesImage = "/assets/images/service_images/facilities.jpg";
const technicalImage = "/assets/images/service_images/technical.jpg";
const pipelineImage = "/assets/images/service_images/pipeline.jpg";
const corrosionImage = "/assets/images/service_images/corrosion.jpg";
const inspectionImage = "/assets/images/service_images/inspection_image.jpg";
const wellImage = "/assets/images/service_images/well.jpg";
import WhiteCard from "../src/components/cards/white_card";
import ServicesCard from "../src/components/cards/services_cards";
import ClientSection from "../src/components/section/client_section";
import Testimonials from "../src/components/testimonials/Testimonials";
const missionIcon = "/assets/icons/mission_icon.png";
const visionIcon = "/assets/icons/vision_icon.png";
const strategyIcon = "/assets/icons/startegy_icon.png";

/**
 * CountUpNumber
 * Animates a number from 0 to `end` when the element enters the viewport.
 */
const CountUpNumber = ({ end, duration = 2000, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const containerRef = useRef(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const targetNumber = Number(String(end).replace(/[^0-9.]/g, "")) || 0;

    const startAnimation = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const startTime = performance.now();

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(progress * targetNumber);
        setValue(current);
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div
      ref={containerRef}
      className="font-data text-red-500 text-4xl md:text-5xl font-extrabold tracking-tight"
    >
      {value}
      {suffix}
    </div>
  );
};

/**
 * SmartMotion
 * Enhanced component that handles animations regardless of user's entry point.
 * Automatically animates elements when they come into view, whether user started at top or middle of page.
 */
const SmartMotion = ({
  children,
  delay = 0,
  threshold = 0.3,
  ...motionProps
}) => {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Use intersection observer for better performance
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Check if element is already visible (user scrolled to middle of page)
            const rect = element.getBoundingClientRect();
            const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isCurrentlyVisible) {
              // Element is already visible, animate immediately
              setTimeout(() => {
                setShouldAnimate(true);
                setHasAnimated(true);
              }, delay * 1000);
            } else {
              // Element is coming into view, animate when it enters
              setTimeout(() => {
                setShouldAnimate(true);
                setHasAnimated(true);
              }, delay * 1000);
            }
            observer.disconnect();
          }
        });
      },
      { 
        threshold: threshold,
        rootMargin: '50px 0px -50px 0px' // Start animation slightly before element is fully visible
      }
    );

    observer.observe(element);
    setIsInitialized(true);

    return () => observer.disconnect();
  }, [threshold, delay, hasAnimated]);

  // Fallback for elements that are already visible when component mounts
  useEffect(() => {
    if (!isInitialized || hasAnimated) return;
    
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isCurrentlyVisible) {
      setTimeout(() => {
        setShouldAnimate(true);
        setHasAnimated(true);
      }, delay * 1000);
    }
  }, [isInitialized, hasAnimated, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, x: motionProps.initial?.x || 0 }}
      animate={
        shouldAnimate 
          ? { 
              opacity: 1, 
              y: 0, 
              x: 0, 
              ...motionProps.animate 
            } 
          : { 
              opacity: 0, 
              y: 30, 
              x: motionProps.initial?.x || 0 
            }
      }
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother animation
        delay: shouldAnimate ? 0 : delay 
      }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/**
 * HomePage
 */
export default function HomePage() {
  const imageContainerRef = useRef(null);
  const [containerOffset, setContainerOffset] = useState({ x: 0, y: 0 });
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6; // 8 cards, showing ~3 at a time, so 6 slides
  
  // Drag functionality state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleContainerMouseMove = (e) => {
    const el = imageContainerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left;
    const relY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxMove = 10;
    const moveX = ((relX - centerX) / centerX) * maxMove;
    const moveY = ((relY - centerY) / centerY) * maxMove;
    setContainerOffset({ x: moveX, y: moveY });
  };

  const handleContainerMouseLeave = () => {
    setContainerOffset({ x: 0, y: 0 });
  };

  const scrollToSlide = (slideIndex) => {
    if (carouselRef.current) {
      // Responsive card width based on screen size
      const getCardWidth = () => {
        if (window.innerWidth < 640) return 260; // mobile
        if (window.innerWidth < 768) return 320; // sm
        if (window.innerWidth < 1024) return 350; // md
        return 400; // lg+
      };
      const cardWidth = getCardWidth();
      const gap = window.innerWidth < 640 ? 12 : 24; // gap-3 on mobile, gap-6 on larger screens
      const scrollPosition = slideIndex * (cardWidth + gap);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentSlide(slideIndex);
    }
  };

  const nextSlide = () => {
    const nextIndex = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
    scrollToSlide(prevIndex);
  };

  // Simple touch events for smooth horizontal scrolling
  const handleTouchStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Add touch event listeners with passive: false to allow preventDefault
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const touchMoveHandler = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      
      const x = e.touches[0].pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      carousel.scrollLeft = scrollLeft - walk;
    };

    carousel.addEventListener('touchmove', touchMoveHandler, { passive: false });

    return () => {
      carousel.removeEventListener('touchmove', touchMoveHandler);
    };
  }, [isDragging, startX, scrollLeft]);

  // Simple mouse events
  const handleMouseDown = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
    carouselRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Update current slide based on scroll position
  const updateCurrentSlide = () => {
    if (!carouselRef.current) return;
    // Responsive card width based on screen size
    const getCardWidth = () => {
      if (window.innerWidth < 640) return 260; // mobile
      if (window.innerWidth < 768) return 320; // sm
      if (window.innerWidth < 1024) return 350; // md
      return 400; // lg+
    };
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 640 ? 12 : 24; // gap-3 on mobile, gap-6 on larger screens
    const scrollPosition = carouselRef.current.scrollLeft;
    const newSlide = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentSlide(Math.min(newSlide, totalSlides - 1));
  };

  return (
    <div>
      {/* Hero banner */}
      <Banner />

      {/* Stats Section */}
      <section className="w-full bg-blue-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SmartMotion>
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mt-6 sm:mt-[-9px] mb-6 sm:mb-9 px-4 font-extrabold">
              Trusted by Industry Leaders Across 7 Countries
            </h2>
            <p className="font-body text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto px-4 mb-8 leading-relaxed">
              Partnering with major operators including Shell, Chevron, and TotalEnergies to deliver world-class engineering solutions
            </p>
          </SmartMotion>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 justify-items-center max-w-4xl mx-auto">
            <SmartMotion delay={0.2}>
              <div className="text-center">
                <CountUpNumber end={2005} duration={2000} />
                <div className="font-data mt-2 text-gray-700 uppercase text-sm font-medium tracking-wide">
                  around since
                </div>
              </div>
            </SmartMotion>
            <SmartMotion delay={0.4}>
              <div className="text-center">
                <CountUpNumber end={100} duration={1800} suffix="%" />
                <div className="font-data mt-2 text-gray-700 uppercase text-sm font-medium tracking-wide">
                  trusted
                </div>
              </div>
            </SmartMotion>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SmartMotion>
            <h3 className="text-red-500 text-base sm:text-lg font-semibold tracking-wide uppercase mb-6 sm:mb-8 mt-6 sm:mt-1 text-center sm:text-left sm:ml-[280px] lg:ml-[560px]">
              Why Calaya?
            </h3>
          </SmartMotion>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
            <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left md:ml-5">
                  At Calaya
                </h2>
                <p className="text-gray-700 leading-relaxed mb-1 p-4 sm:p-6 text-center md:text-left">
                  We are a distinguished multinational engineering company with
                  operations spanning seven countries: Nigeria, Equatorial
                  Guinea, Congo, Malaysia, Mozambique, Angola, and Spain. Since
                  our establishment in 2005, we have emerged as a trusted leader
                  in the oil and gas services sector, serving major international operators.
                </p>
                <p className="text-gray-700 leading-relaxed p-4 sm:p-6 text-center md:text-left">
                  Through innovative engineering approaches, ISO 9001:2015 certified quality management systems, and our unwavering commitment
                  to excellence, we have built lasting partnerships with industry giants like Shell, Chevron, and TotalEnergies, consistently exceeding expectations in
                  diverse international markets.
                </p>
                <div className="px-4 sm:px-6 text-center md:text-left">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">ISO 9001:2015 Certified</span>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">500+ Projects Completed</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">7+ Countries</span>
                  </div>
                </div>
                <div className="px-4 sm:px-8 text-center md:text-left">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 border-2 border-red-500 bg-white text-red-500 px-5 py-3 rounded-md shadow hover:bg-red-500 hover:text-white transition-colors text-sm"
                  >
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </SmartMotion>

            <SmartMotion delay={0.2} initial={{ opacity: 0, x: 40 }}>
              <div className="relative">
                <div
                  ref={imageContainerRef}
                  onMouseMove={handleContainerMouseMove}
                  onMouseLeave={handleContainerMouseLeave}
                  className="aspect-[4/3] w-full overflow-hidden rounded-xl shadow-xl transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
                  style={{
                    transform: `translate(${containerOffset.x}px, ${containerOffset.y}px)`,
                  }}
                >
                  <img
                    src={teamImage}
                    alt="Calaya Engineering team"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </SmartMotion>
          </div>
        </div>
      </section>

      {/* Blue Commitment Section */}
      <section className="w-full bg-blue-900 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <SmartMotion>
            <h3 className="text-xs sm:text-sm font-semibold uppercase mb-6 sm:mb-7 mt-[-20px] sm:mt-[-30px] text-center sm:text-left sm:ml-[210px] lg:ml-[420px]">
              We are committed to service delivery.
            </h3>
          </SmartMotion>
          <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <SmartMotion delay={0.1}>
              <WhiteCard
                iconSrc={missionIcon}
                title="Our Mission"
                description="To alleviate the plight of technically sound Nigerians to the world by partaking in various engineering works"
                number="01"
              />
            </SmartMotion>
            <SmartMotion delay={0.25}>
              <WhiteCard
                iconSrc={visionIcon}
                title="Our Vision"
                description="To be one of the world most renowned oil servicing Company in the nearest possible time."
                number="02"
              />
            </SmartMotion>
            <SmartMotion delay={0.4}>
              <WhiteCard
                iconSrc={strategyIcon}
                title="Our Strategy"
                description="Using well informed leadership capable of thinking and acting in the present while developing, Planning and facilitating the change required for the future"
                number="03"
              />
            </SmartMotion>
          </div>
          <SmartMotion delay={0.55}>
            <div className="mt-10 text-center">
              <Link
                href="/about"
                className="inline-block border-2 border-white text-white px-5 py-3 rounded-md hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn more!
              </Link>
            </div>
          </SmartMotion>
        </div>
      </section>

      <div className="w-full bg-white py-12"></div>

      {/* Our Services Section */}
      <section
        className="w-full relative bg-cover bg-center bg-no-repeat pt-[120px] pb-2"
        style={{
          backgroundImage: `url(${serviceImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/75 to-gray-900/75"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <SmartMotion>
            <div className="text-left mt-[-60px]">
              <div className="flex items-center mb-4">
                <span className="text-red-500 text-2xl font-bold mr-3">|</span>
                <h2 className="text-red-500 text-sm font-semibold uppercase tracking-wide">
                  Our Top Services
                </h2>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mx-3 text-white">
                World-Class Engineering
                <br />
                Solutions for the
                <br />
                Oil & Gas Industry
              </h1>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mx-3 mt-6 max-w-2xl">
                A trusted multinational engineering leader since 2005, delivering innovative solutions 
                through strategic partnerships with industry giants like Shell, Chevron, and TotalEnergies. 
                Our ISO 9001:2015 certified processes ensure excellence across 7 countries.
              </p>
            </div>
          </SmartMotion>
          
          {/* Service Cards Carousel */}
          <div className="mt-16 relative px-2 sm:px-0 sm:ml-4">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide gap-3 sm:gap-4 md:gap-6 pt-4 pb-4 cursor-grab select-none" 
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitScrollbar: { display: 'none' },
                touchAction: 'pan-x'
              }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onScroll={updateCurrentSlide}
            >
              <div className="flex gap-3 sm:gap-4 md:gap-6 min-w-max">
                <SmartMotion delay={0.1}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={procurementImage}
                      title="Procurement Services"
                      description="Strategic sourcing and supply chain management for critical oil and gas equipment, ensuring quality, compliance, and cost optimization for major operators."
                      buttonText="Learn More"
                      link="/services/procurement"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.2}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={civilImage}
                      title="Civil Engineering"
                      description="Infrastructure development and construction management for offshore platforms, onshore facilities, and supporting infrastructure with international standards compliance."
                      buttonText="Learn More"
                      link="/services/civil-engineering"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.3}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={facilitiesImage}
                      title="Facilities Management"
                      description="Comprehensive operations and maintenance services for oil and gas facilities, ensuring optimal performance, safety compliance, and extended asset lifecycle."
                      buttonText="Learn More"
                      link="/services/facilities-management"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.4}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={technicalImage}
                      title="Technical Manpower"
                      description="Skilled engineering professionals and technical specialists deployed across international projects, providing expertise in drilling, production, and maintenance operations."
                      buttonText="Learn More"
                      link="/services/technical-manpower"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.5}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={pipelineImage}
                      title="Pipeline Construction"
                      description="End-to-end pipeline engineering and construction services, from design and installation to testing and commissioning, meeting international safety and environmental standards."
                      buttonText="Learn More"
                      link="/services/pipeline-construction"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.6}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={inspectionImage}
                      title="Inspection Services"
                      description="Advanced non-destructive testing and inspection services for critical infrastructure, ensuring compliance with international standards and regulatory requirements."
                      buttonText="Learn More"
                      link="/services/corrosion-management"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.7}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={corrosionImage}
                      title="Corrosion Management"
                      description="Specialized corrosion prevention and control services, including coating systems, cathodic protection, and material selection for harsh offshore and onshore environments."
                      buttonText="Learn More"
                      link="/services/corrosion-management"
                    />
                  </div>
                </SmartMotion>
                <SmartMotion delay={0.8}>
                  <div className="w-[260px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
                    <ServicesCard
                      image={wellImage}
                      title="Well Services"
                      description="Complete well lifecycle services including drilling support, completion, workover operations, and well intervention services for both onshore and offshore applications."
                      buttonText="Learn More"
                      link="/services/well-services"
                    />
                  </div>
                </SmartMotion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White background section with pagination controls */}
      <section className="w-full bg-white pt-1 pb-[-5px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-500"
            >
              <MoveLeft className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-1.5">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300  ${
                    currentSlide === index 
                      ? 'bg-red-500 scale-125' 
                      : 'bg-red-300 hover:bg-red-100'
                  }`}
                />
              ))}
            </div>
            
            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-500"
            >
              <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full bg-gray-50 py-8 sm:py-12 lg:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Let's discuss how Calaya Engineering can help you achieve your oil and gas project goals. 
                  Our experienced team is ready to provide innovative solutions tailored to your needs.
                </p>
              </div>
            </SmartMotion>
            
            <SmartMotion delay={0.2} initial={{ opacity: 0, x: 40 }}>
              <div className="flex-shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-red-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 text-base sm:text-lg font-semibold"
                >
                  Get in Touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </SmartMotion>
          </div>
        </div>
      </section>

      {/* Latest from Calaya Section */}
      {/**
       * Latest from Calaya Section (Temporarily hidden per request)
       */}
      {false && (
        <section className="w-full bg-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SmartMotion>
              <div className="text-center mb-8 sm:mb-12">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-red-500 text-xl sm:text-2xl font-bold mr-3">|</span>
                  <h2 className="text-red-500 text-xs sm:text-sm font-semibold uppercase tracking-wide">
                    Latest from Calaya
                  </h2>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Stay Updated with Our Latest News
                </h1>
                <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                  Discover our recent achievements, project updates, and industry insights
                </p>
              </div>
            </SmartMotion>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <SmartMotion delay={0.1}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl sm:text-4xl font-bold mb-2">2024</div>
                      <div className="text-xs sm:text-sm uppercase tracking-wide">New Year</div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-sm text-red-500 font-semibold mb-2">January 15, 2024</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Expanding Operations to New Markets
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      Calaya Engineering announces expansion into three new African markets, 
                      strengthening our presence across the continent.
                    </p>
                    <Link
                      href="/news/expansion-2024"
                      className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </SmartMotion>

              <SmartMotion delay={0.2}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl sm:text-4xl font-bold mb-2">500+</div>
                      <div className="text-xs sm:text-sm uppercase tracking-wide">Projects</div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-sm text-red-500 font-semibold mb-2">December 20, 2023</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      Milestone Achievement: 500+ Projects Completed
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      We're proud to announce the successful completion of over 500 oil and gas 
                      projects across our seven operating countries.
                    </p>
                    <Link
                      href="/news/milestone-500"
                      className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </SmartMotion>

              <SmartMotion delay={0.3}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-3xl sm:text-4xl font-bold mb-2">ISO</div>
                      <div className="text-xs sm:text-sm uppercase tracking-wide">Certified</div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-sm text-red-500 font-semibold mb-2">November 10, 2023</div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                      ISO 9001:2015 Certification Renewed
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base">
                      Calaya Engineering successfully renews ISO 9001:2015 certification, 
                      reaffirming our commitment to quality management systems.
                    </p>
                    <Link
                      href="/news/iso-certification"
                      className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200 text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </SmartMotion>
            </div>

            <SmartMotion delay={0.4}>
              <div className="text-center mt-8 sm:mt-12">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition-colors duration-200 font-semibold text-sm sm:text-base"
                >
                  View All News
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 12a.75.75 0 0 1 .75-.75h11.69l-3.72-3.72a.75.75 0 1 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 1 1-1.06-1.06l3.72-3.72H5.25A.75.75 0 0 1 4.5 12Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </SmartMotion>
          </div>
        </section>
      )}
 
      {/* Testimonials Section */}
      {false && <Testimonials />}
 
      {/* Client Section */}
      <ClientSection />
    </div>
  );
}

