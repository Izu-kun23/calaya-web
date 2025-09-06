import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { MoveRight } from "lucide-react";
import Banner from "../components/banner/Banner";
import teamImage from "../assets/images/Useable_Images/image4.jpg";
import serviceImage from "../assets/images/Useable_Images/image5.jpg";
import procurementImage from "../assets/images/service_images/procurement.jpg";
import civilImage from "../assets/images/service_images/civil.jpg"
import facilitiesImage from "../assets/images/service_images/facilities.jpg"
import technicalImage from "../assets/images/service_images/technical.jpg"
import pipelineImage from "../assets/images/service_images/pipeline.jpg"
import corrosionImage from "../assets/images/service_images/corrosion.jpg"
import inspectionImage from "../assets/images/service_images/inspection_image.jpg"
import wellImage from "../assets/images/service_images/well.jpg"
import WhiteCard from "../components/cards/white_card";
import ServicesCard from "../components/cards/services_cards";
import missionIcon from "../assets/icons/mission_icon.png";
import visionIcon from "../assets/icons/vision_icon.png";
import strategyIcon from "../assets/icons/startegy_icon.png";

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
      className="text-red-500 text-4xl md:text-5xl font-extrabold"
    >
      {value}
      {suffix}
    </div>
  );
};

/**
 * SmartMotion
 * Handles conditional animations depending on scroll and user’s entry point.
 */
const SmartMotion = ({
  children,
  delay = 0,
  threshold = 0.6,
  ...motionProps
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [userStartedAtTop, setUserStartedAtTop] = useState(null);

  useEffect(() => {
    setUserStartedAtTop(window.scrollY <= 100);
  }, []);

  useEffect(() => {
    if (userStartedAtTop === null) return;
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const isCurrentlyVisible = rect.top < window.innerHeight && rect.bottom > 0;

    if (userStartedAtTop) {
      if (isInView && !hasAnimated) {
        setTimeout(() => setShouldAnimate(true), delay * 1000);
        setHasAnimated(true);
      }
    } else {
      if (isCurrentlyVisible && !hasAnimated) {
        setTimeout(() => setShouldAnimate(true), delay * 1000);
        setHasAnimated(true);
      }
    }
  }, [userStartedAtTop, isInView, delay, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, x: motionProps.initial?.x || 0 }}
      animate={
        shouldAnimate ? { opacity: 1, y: 0, x: 0, ...motionProps.animate } : {}
      }
      transition={{ duration: 0.6, ease: "easeOut" }}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

/**
 * HomePage
 */
const HomePage = () => {
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
      const cardWidth = 400; // w-[400px] = 400px
      const gap = 24; // gap-6 = 24px
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

  // Drag functionality handlers
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
    const walk = (x - startX) * 2; // Multiply for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Update current slide based on scroll position
  const updateCurrentSlide = () => {
    if (!carouselRef.current) return;
    const cardWidth = 400; // w-[400px] = 400px
    const gap = 24; // gap-6 = 24px
    const scrollPosition = carouselRef.current.scrollLeft;
    const newSlide = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentSlide(Math.min(newSlide, totalSlides - 1));
  };

  return (
    <div>
      {/* Hero banner */}
      <Banner />

      {/* Stats Section */}
      <section className="w-full bg-blue-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <SmartMotion>
            <h2 className="text-xl sm:text-2xl md:text-4xl text-gray-900 mt-9 mb-9 px-4">
              Providing Services in the Oil and Gas Industry
            </h2>
          </SmartMotion>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-items-center">
            <SmartMotion delay={0.2}>
              <div className="sm:ml-[280px]">
                <CountUpNumber end={2005} duration={2000} />
                <div className="mt-2 text-gray-700 uppercase text-sm">
                  around since
                </div>
              </div>
            </SmartMotion>
            <SmartMotion delay={0.4}>
              <div className="sm:mr-[280px]">
                <CountUpNumber end={100} duration={1800} suffix="%" />
                <div className="mt-2 text-gray-700 uppercase text-sm">
                  trusted
                </div>
              </div>
            </SmartMotion>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full bg-white py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SmartMotion>
            <h3 className="text-red-500 text-lg font-semibold tracking-wide uppercase mb-8 mt-10 text-center sm:text-left sm:ml-[560px]">
              Why Calaya?
            </h3>
          </SmartMotion>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center md:text-left md:ml-5">
                  At Calaya
                </h2>
                <p className="text-gray-700 leading-relaxed mb-1 p-4 sm:p-6 text-center md:text-left">
                  We are a distinguished limited liability company with
                  operations spanning seven countries: Nigeria, Equatorial
                  Guinea, Congo, Malaysia, Mozambique, Angola, and Spain. Since
                  our establishment in 2005, we have emerged as a trusted leader
                  in the oil and gas services sector.
                </p>
                <p className="text-gray-700 leading-relaxed p-4 sm:p-6 text-center md:text-left">
                  Through innovative engineering approaches and our commitment
                  to excellence, we have built lasting relationships across the
                  energy industry, consistently exceeding expectations in
                  diverse international markets.
                </p>
                <div className="px-4 sm:px-8 text-center md:text-left">
                  <Link
                    to="/about"
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
      <section className="w-full bg-blue-900 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white">
          <SmartMotion>
            <h3 className="text-sm font-semibold uppercase mb-7 mt-[-30px] text-center sm:text-left sm:ml-[420px]">
              At Calaya, we committed to service delivery.
            </h3>
          </SmartMotion>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                to="/about"
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
          Best Offers Within
          <br />
          the Oil & Gas
          <br />
          Sector
        </h1>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mx-3 mt-6 max-w-2xl">
          A trusted multinational oil and gas service provider since 2005,
          delivering innovative solutions through strategic partnerships
          and advanced technologies across Africa.
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
          WebkitScrollbar: { display: 'none' }
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={updateCurrentSlide}
      >
        <div className="flex gap-3 sm:gap-4 md:gap-6 min-w-max">
          <SmartMotion delay={0.1}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={procurementImage}
                title="Procurement Services"
                description="Comprehensive engineering solutions for complex oil and gas projects with cutting-edge technology."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.2}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={civilImage}
                title="Civil Engineering"
                description="End-to-end project management services ensuring timely delivery and quality execution."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.3}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={facilitiesImage}
                title="Facilities Management"
                description="Expert technical consulting services to optimize your operations and maximize efficiency."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.4}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={technicalImage}
                title="Technical Manpower"
                description="High-quality equipment supply and maintenance services for all your operational needs."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.5}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={pipelineImage}
                title="Pipeline Construction"
                description="Comprehensive safety solutions and training programs to ensure workplace security."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.6}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={inspectionImage}
                title="Inspenction Services"
                description="Sustainable environmental solutions and compliance services for responsible operations."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.7}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={corrosionImage}
                title="Corrosion Management"
                description="Professional maintenance and repair services to keep your equipment running optimally."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
          <SmartMotion delay={0.8}>
            <div className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] flex-shrink-0">
              <ServicesCard
                image={wellImage}
                title="Well Services"
                description="Comprehensive training programs to develop skilled professionals in the oil and gas sector."
                buttonText="Learn More"
              />
            </div>
          </SmartMotion>
        </div>
      </div>
    </div>
  </div>
</section>

{/* White background section with pagination controls */}
<section className="w-full bg-white pt-2 pb-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    {/* Pagination Controls */}
    <div className="flex items-center justify-center gap-4 sm:gap-6 mb-16">
      {/* Pagination Dots */}
      <div className="flex gap-2">
        {Array.from({ length: totalSlides }, (_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300  ${
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
<section className="w-full bg-gray-50 py-8 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
            Let's discuss how Calaya Engineering can help you achieve your oil and gas project goals. 
            Our experienced team is ready to provide innovative solutions tailored to your needs.
          </p>
        </div>
      </SmartMotion>
      
      <SmartMotion delay={0.2} initial={{ opacity: 0, x: 40 }}>
        <div className="flex-shrink-0">
          <Link
            to="/contact"
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
<section className="w-full bg-white py-8 sm:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <SmartMotion>
      <div className="text-center mb-8 sm:mb-12">
        <div className="flex items-center justify-center mb-4">
          <span className="text-red-500 text-2xl font-bold mr-3">|</span>
          <h2 className="text-red-500 text-sm font-semibold uppercase tracking-wide">
            Latest from Calaya
          </h2>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stay Updated with Our Latest News
        </h1>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
          Discover our recent achievements, project updates, and industry insights
        </p>
      </div>
    </SmartMotion>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {/* News Item 1 */}
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
              to="/news/expansion-2024"
              className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200 text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>
      </SmartMotion>

      {/* News Item 2 */}
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
              to="/news/milestone-500"
              className="text-red-500 font-semibold hover:text-red-600 transition-colors duration-200 text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>
      </SmartMotion>

      {/* News Item 3 */}
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
              to="/news/iso-certification"
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
          to="/news"
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

    </div>
  );
};

export default HomePage;
