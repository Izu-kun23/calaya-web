'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MoveRight, MoveLeft, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
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
 * NewsCard Component with Image Carousel and Video Support
 * Uses Material Tailwind Card component with carousel functionality for multiple images or video support
 */
const NewsCard = ({ images, video, date, title, description, link, gradientColor = "blue", showReadMore = false, maxDescriptionLength = 200 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasMultipleImages = images && images.length > 1;
  const isVideo = !!video;
  
  // Check if description should be truncated
  // Remove emojis and extra whitespace for display
  const cleanDescription = description ? description.replace(/[🔹✅📹]/g, '').replace(/\n\s*\n/g, '\n').trim() : '';
  const shouldTruncate = showReadMore && cleanDescription && cleanDescription.length > maxDescriptionLength;
  const truncatedDescription = shouldTruncate 
    ? cleanDescription.substring(0, maxDescriptionLength) + "..."
    : cleanDescription;

  const nextImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (hasMultipleImages) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  // Auto-rotate images if multiple
  useEffect(() => {
    if (!hasMultipleImages || isVideo) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [hasMultipleImages, images?.length, isVideo]);

  return (
    <Card className="w-full h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
        <CardHeader
          color="blue-gray"
          className="relative h-56 overflow-hidden"
          floated={false}
          shadow={false}
        >
          {isVideo ? (
            // Video player
            <video
              src={video}
              controls
              className="w-full h-full object-cover"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          ) : images && images.length > 0 ? (
            <>
              <img
                src={images[currentImageIndex]}
                alt={title || "News image"}
                className="w-full h-full object-cover"
              />
              {hasMultipleImages && (
                <>
                  {/* Carousel Navigation */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  {/* Carousel Indicators */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImageIndex(index);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? "bg-white w-6"
                            : "bg-white/50 w-1.5 hover:bg-white/75"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${
              gradientColor === "blue" 
                ? "from-blue-500 to-blue-600" 
                : gradientColor === "green"
                ? "from-green-500 to-green-600"
                : "from-gray-200 to-gray-300"
            } flex items-center justify-center`}>
              <div className="text-white text-center">
                <Typography variant="h3" className="text-3xl xs:text-3xl sm:text-4xl font-bold mb-2 text-white">
                  {title?.includes("500+") ? "500+" : title?.includes("ISO") ? "ISO" : ""}
                </Typography>
                <Typography className="text-xs xs:text-sm uppercase tracking-wide text-white">
                  {title?.includes("500+") ? "Projects" : title?.includes("ISO") ? "Certified" : ""}
                </Typography>
              </div>
            </div>
          )}
        </CardHeader>
        <CardBody className="flex-1 flex flex-col">
          {date && (
            <Typography
              variant="small"
              color="red"
              className="mb-2 font-semibold text-xs xs:text-sm"
            >
              {date}
            </Typography>
          )}
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-2 text-base xs:text-lg sm:text-xl font-bold"
          >
            {title ? title.replace(/[🔹✅📹]/g, '').trim() : title}
          </Typography>
          <Typography className="text-sm xs:text-sm sm:text-base text-gray-600 leading-relaxed flex-grow">
            {truncatedDescription}
          </Typography>
          {shouldTruncate && link && (
            <div className="mt-4 pt-4">
              <Link href={link}>
                <Button
                  size="sm"
                  color="red"
                  className="w-full xs:w-auto text-xs xs:text-sm"
                >
                  Read More
                </Button>
              </Link>
            </div>
          )}
        </CardBody>
      </Card>
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
  
  // News carousel state
  const newsCarouselRef = useRef(null);
  const [currentNewsSlide, setCurrentNewsSlide] = useState(0);
  const totalNewsSlides = 4; // 4 news cards
  
  // Drag functionality state
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // News carousel drag state
  const [isNewsDragging, setIsNewsDragging] = useState(false);
  const [newsStartX, setNewsStartX] = useState(0);
  const [newsScrollLeft, setNewsScrollLeft] = useState(0);

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
      // Responsive card width tuned to handheld-first breakpoints
      const getCardWidth = () => {
        const width = window.innerWidth;
        if (width < 360) return 240;
        if (width < 480) return 260;
        if (width < 768) return 300;
        if (width < 1024) return 340;
        return 380;
      };
      const cardWidth = getCardWidth();
      const gap = window.innerWidth < 480 ? 12 : window.innerWidth < 768 ? 16 : 24;
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
    // Mirror carousel slide math with new widths
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width < 360) return 240;
      if (width < 480) return 260;
      if (width < 768) return 300;
      if (width < 1024) return 340;
      return 380;
    };
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 480 ? 12 : window.innerWidth < 768 ? 16 : 24;
    const scrollPosition = carouselRef.current.scrollLeft;
    const newSlide = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentSlide(Math.min(newSlide, totalSlides - 1));
  };

  // News carousel navigation functions
  const scrollToNewsSlide = (slideIndex) => {
    if (newsCarouselRef.current) {
      const getCardWidth = () => {
        const width = window.innerWidth;
        if (width < 640) return 280; // mobile - show 1 card
        if (width < 1024) return 350; // tablet - show 2 cards
        return 380; // desktop - show 1 card at a time
      };
      const cardWidth = getCardWidth();
      const gap = window.innerWidth < 640 ? 16 : 24;
      const scrollPosition = slideIndex * (cardWidth + gap);
      newsCarouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentNewsSlide(slideIndex);
    }
  };

  const nextNewsSlide = () => {
    const next = (currentNewsSlide + 1) % totalNewsSlides;
    scrollToNewsSlide(next);
  };

  const prevNewsSlide = () => {
    const prev = (currentNewsSlide - 1 + totalNewsSlides) % totalNewsSlides;
    scrollToNewsSlide(prev);
  };

  // News carousel mouse handlers
  const handleNewsMouseDown = (e) => {
    if (!newsCarouselRef.current) return;
    setIsNewsDragging(true);
    setNewsStartX(e.pageX - newsCarouselRef.current.offsetLeft);
    setNewsScrollLeft(newsCarouselRef.current.scrollLeft);
    newsCarouselRef.current.style.cursor = 'grabbing';
  };

  const handleNewsMouseLeave = () => {
    setIsNewsDragging(false);
    if (newsCarouselRef.current) {
      newsCarouselRef.current.style.cursor = 'grab';
    }
  };

  const handleNewsMouseUp = () => {
    setIsNewsDragging(false);
    if (newsCarouselRef.current) {
      newsCarouselRef.current.style.cursor = 'grab';
    }
  };

  const handleNewsMouseMove = (e) => {
    if (!isNewsDragging || !newsCarouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - newsCarouselRef.current.offsetLeft;
    const walk = (x - newsStartX) * 1.5;
    newsCarouselRef.current.scrollLeft = newsScrollLeft - walk;
  };

  // Update current news slide based on scroll position
  const updateCurrentNewsSlide = () => {
    if (!newsCarouselRef.current) return;
    const getCardWidth = () => {
      const width = window.innerWidth;
      if (width < 640) return 280;
      if (width < 1024) return 350;
      return 380;
    };
    const cardWidth = getCardWidth();
    const gap = window.innerWidth < 640 ? 16 : 24;
    const scrollPosition = newsCarouselRef.current.scrollLeft;
    const newSlide = Math.round(scrollPosition / (cardWidth + gap));
    setCurrentNewsSlide(Math.min(newSlide, totalNewsSlides - 1));
  };

  return (
    <div>
      {/* Hero banner */}
      <Banner />

      {/* Stats Section */}
      <section className="w-full bg-blue-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SmartMotion>
            <h2 className="font-heading text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mt-4 xs:mt-6 mb-6 md:mb-8 px-2 xs:px-4 font-extrabold">
              Trusted by Industry Leaders Across the Globe
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
      <section className="w-full bg-white py-8 xs:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 xs:px-6 lg:px-8">
          <SmartMotion>
            <h3 className="text-red-500 text-xs xs:text-sm sm:text-base font-semibold tracking-[0.35em] uppercase mb-5 xs:mb-6 md:mb-8 text-center md:text-left">
              Why Calaya?
            </h3>
          </SmartMotion>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10 items-center">
            <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
              <div className="space-y-5 xs:space-y-6">
                <h2 className="text-2xl xs:text-3xl md:text-4xl font-bold text-gray-900 text-center md:text-left">
                  At Calaya
                </h2>
                <p className="text-gray-700 leading-relaxed text-sm xs:text-base text-center md:text-left">
                  We are a distinguished multinational engineering company with
                  operations spanning nine countries: Nigeria, Equatorial
                  Guinea, Congo, Malaysia, Mozambique, Angola, Spain, Ghana and UK. Since
                  our establishment in 2005, we have emerged as a trusted leader
                  in the oil and gas services sector, serving major international operators.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm xs:text-base text-center md:text-left">
                  Through innovative engineering approaches, ISO 9001:2015 and ISO 45001:2018 certified quality management systems, and our unwavering commitment
                  to excellence, we have built lasting partnerships with industry giants like Shell, Chevron, and TotalEnergies, consistently exceeding expectations in
                  diverse international markets.
                </p>
                <div className="text-center md:text-left">
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 xs:gap-4 mb-4">
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">ISO 9001:2015 Certified</span>
                    <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">ISO 45001:2018 Certified</span>

                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">500+ Projects Completed</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">9+ Countries</span>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 border-2 border-red-500 bg-white text-red-500 px-5 py-3 rounded-md shadow hover:bg-red-500 hover:text-white transition-colors text-sm xs:text-base"
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
              <div className="relative w-full max-w-[420px] mx-auto md:max-w-none">
                <div
                  ref={imageContainerRef}
                  onMouseMove={handleContainerMouseMove}
                  onMouseLeave={handleContainerMouseLeave}
                  className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl transform transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl"
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
      <section className="w-full bg-blue-900 py-10 xs:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 xs:px-6 lg:px-8 text-white">
          <SmartMotion>
            <h3 className="text-[0.7rem] xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.32em] mb-6 text-center md:text-left">
              We are committed to quality and exceptional service delivery.
            </h3>
          </SmartMotion>
          <div className="mt-8 xs:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
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
        className="w-full relative bg-cover bg-center bg-no-repeat pt-20 xs:pt-24 md:pt-32 pb-6"
        style={{
          backgroundImage: `url(${serviceImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-900/75 to-gray-900/75"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 xs:px-6">
          <SmartMotion>
            <div className="text-center md:text-left -mt-10 xs:-mt-12 md:-mt-16">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <span className="text-red-500 text-2xl font-bold mr-3">|</span>
                <h2 className="text-red-500 text-xs xs:text-sm font-semibold uppercase tracking-[0.3em]">
                  Our Top Services
                </h2>
              </div>
              <h1 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white max-w-3xl md:mx-0 mx-auto">
                World-Class Engineering
                <br />
                Solutions for the
                <br />
                Oil & Gas Industry
              </h1>
              <p className="text-gray-300 text-sm xs:text-base md:text-lg leading-relaxed mt-6 max-w-2xl mx-auto md:mx-0">
                A trusted multinational engineering leader since 2005, delivering innovative solutions 
                through strategic partnerships with industry giants like Shell, Chevron, and TotalEnergies. 
                Our ISO 9001:2015 certified processes ensure excellence across 7 countries.
              </p>
            </div>
          </SmartMotion>
          
          {/* Service Cards Carousel */}
          <div className="mt-12 xs:mt-16 relative px-1 xs:px-2 md:px-0">
            <div 
              ref={carouselRef}
              className="flex overflow-x-auto scrollbar-hide gap-3 xs:gap-4 md:gap-6 pt-4 pb-4 cursor-grab select-none"
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
              <div className="flex gap-3 xs:gap-4 md:gap-6 min-w-max">
                <SmartMotion delay={0.1}>
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
                  <div className="w-[240px] xs:w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] flex-shrink-0">
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
      <section className="w-full bg-white pt-2 pb-6">
        <div className="max-w-6xl mx-auto px-4 xs:px-6 lg:px-8">
          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-2 xs:gap-3 md:gap-4 mb-10 xs:mb-12 md:mb-16">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-500"
            >
              <MoveLeft className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
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
              className="w-10 h-10 xs:w-11 xs:h-11 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 hover:border-red-500"
            >
              <MoveRight className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
            </button>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="w-full bg-gray-50 py-10 xs:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 xs:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            <SmartMotion delay={0.1} initial={{ opacity: 0, x: -40 }}>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  Ready to Work With Us?
                </h2>
                <p className="text-gray-700 text-sm xs:text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                  Let's discuss how Calaya Engineering can help you achieve your oil and gas project goals. 
                  Our experienced team is ready to provide innovative solutions tailored to your needs.
                </p>
              </div>
            </SmartMotion>
            
            <SmartMotion delay={0.2} initial={{ opacity: 0, x: 40 }}>
              <div className="flex-shrink-0 w-full xs:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex w-full xs:w-auto justify-center items-center gap-2 bg-red-500 text-white px-6 xs:px-7 md:px-8 py-3 xs:py-3.5 md:py-4 rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl transition-all duration-300 text-base xs:text-lg font-semibold"
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
      <section className="w-full bg-white py-10 xs:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 xs:px-6 lg:px-8">
          <SmartMotion>
            <div className="text-center mb-8 xs:mb-10 sm:mb-12">
              <div className="flex items-center justify-center mb-4">
                <span className="text-red-500 text-xl xs:text-2xl font-bold mr-3">|</span>
                <h2 className="text-red-500 text-xs xs:text-sm font-semibold uppercase tracking-wide">
                  Latest from Calaya
                </h2>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest News
              </h1>
              <p className="text-gray-600 text-sm xs:text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                Discover our recent achievements, project updates, and industry insights
              </p>
            </div>
          </SmartMotion>

          {/* News Cards Carousel */}
          <div className="relative -mx-4 xs:mx-0">
            {/* Carousel Container */}
            <div
              ref={newsCarouselRef}
              onScroll={updateCurrentNewsSlide}
              onMouseDown={handleNewsMouseDown}
              onMouseLeave={handleNewsMouseLeave}
              onMouseUp={handleNewsMouseUp}
              onMouseMove={handleNewsMouseMove}
              className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4 px-4 xs:px-0"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                cursor: isNewsDragging ? 'grabbing' : 'grab',
              }}
            >
              <div className="flex gap-3 xs:gap-4 sm:gap-6">
                <div className="w-[85vw] xs:w-[280px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center">
                  <NewsCard
                    images={[
                      "/assets/news/latest_news1.jpeg",
                      "/assets/news/latest_news1.2.jpeg"
                    ]}
                    
                    title="Distinguished Visitors at Africa Energy Week"
                    description={`It was a pleasure having the NNPC Chairman "Ahmadu Musa Kida" and "Mr. Abiodun Afolabi" from TotalEnergies, that visited Calaya stand during the just concluded Africa Energy Week held in Cape Town. We truly valued the insightful discussions and exchange of ideas on the evolving opportunities within the energy sector. Thank you for taking the time to connect with us — we look forward to building on this interaction and exploring potential collaborations!`}
                    link="/news/africa-energy-week-2024"
                    showReadMore={true}
                    maxDescriptionLength={200}
                  />
                </div>

                <div className="w-[85vw] xs:w-[280px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center">
                  <NewsCard
                    images={[
                      "/assets/news/latest_news2.0.jpeg",
                      "/assets/news/latest_news2.1.jpeg"
                    ]}
                    
                    title="Honoured to Welcome Nigerian Petroleum Ministers"
                    description={`We were honoured to welcome Hon. Heineken Lokpobiri, Minister of Petroleum Resources (Oil), and Hon. Ekperikpe Ekpo, Minister of Petroleum Resources (Gas), to the Calaya stand during the just-concluded Africa Energy Week in Cape Town. Our conversations were insightful and forward-looking — exploring Nigeria's energy future, local content development, and opportunities for collaboration to drive a sustainable oil and gas sector. We appreciate both Honourable Ministers for their time, perspectives, and commitment to advancing Nigeria's energy agenda.`}
                    link="/news/nigerian-ministers-visit"
                    showReadMore={true}
                    maxDescriptionLength={200}
                  />
                </div>

                <div className="w-[85vw] xs:w-[280px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center">
                  <NewsCard
                    video="/assets/news/latest_news3.mp4"
                    
                    title="Redefining Pipeline Inspection Through Innovation"
                    description={`At Calaya Engineering Services Limited, we are proud to partner with ARIX Technologies, pioneers of advanced robotic inspection systems that are transforming how pipeline integrity is managed across the Oil & Gas industry. ARIX Technologies is fueled by a profound commitment to addressing critical pipe corrosion challenges encountered by industries worldwide.

The VENUS™️ system, developed by ARIX Technologies, is an AI-driven robotic crawler designed to perform non-intrusive, precise, and efficient inspection of pipelines — even in the most challenging environments.

By integrating this innovative technology into our operations, Calaya Engineering Services delivers:

Real-time data and diagnostics for accurate decision-making

Enhanced safety through remote inspection capabilities

Reduced downtime and improved cost efficiency

Prolonged asset life through predictive maintenance

Together, Calaya Engineering Services and ARIX Technologies are driving the future of pipeline integrity and asset management across Africa's energy sector.

Watch the VENUS™️ system in action below — technology that delivers reliability, precision, and innovation.`}
                    link="/news/venus-pipeline-inspection"
                    showReadMore={true}
                    maxDescriptionLength={250}
                  />
                </div>

                <div className="w-[85vw] xs:w-[280px] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-shrink-0 snap-center">
                  <NewsCard
                    images={[
                      "/assets/news/latest_news4.jpeg"
                    ]}
                    
                    title="Sound Wave Inspection System (SWIS) - Next-Generation Tube Inspection"
                    description={`We bring you Sound Wave Inspection System (SWIS) — a next-generation solution designed to transform the way tube inspections are done.

With MachOne's advanced sound-based technology, tube inspections are completed in just 3 seconds per tube, giving you rapid, precise results without interrupting operations.

Key Advantages:

Ultra-fast inner diameter inspection for heat exchangers and process tubes

Detects defects as small as 0.25mm holes, 2% blockage, and 20% wall loss

Works with any material or shape — straight, U-bend, fin-fan, or spiral-wound tubes

Extended detection range of up to 40m (80m from both ends)

Covers tube diameters from 7mm to 76mm (3 inches)

At Calaya Engineering Services, we combine innovation and precision to help clients minimize downtime, improve asset reliability, and cut maintenance costs.

Ready to upgrade your inspection process? Let's talk about how SWIS (MachOne) can optimize your operations.`}
                    link="/news/sound-wave-inspection-system"
                    showReadMore={true}
                    maxDescriptionLength={250}
                  />
                </div>
              </div>
            </div>

            
            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-4 xs:mt-6">
              {Array.from({ length: totalNewsSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToNewsSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentNewsSlide
                      ? "bg-red-500 w-8"
                      : "bg-gray-300 w-2 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to news card ${index + 1}`}
                />
              ))}
            </div>
          </div>

          
        </div>
      </section>
 
      {/* Testimonials Section */}
      {false && <Testimonials />}
 
      {/* Client Section */}
      <ClientSection />
    </div>
  );
}

