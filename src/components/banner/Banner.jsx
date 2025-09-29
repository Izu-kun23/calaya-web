import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

// Auto-import all banner images in the folder
const bannerImageModules = import.meta.glob(
  '../../assets/images/banner_images/*.{jpg,jpeg,png,webp}',
  { eager: true }
)

import WhiteButtons from '../buttons/WhiteButtons'
import Pagination from '../pagination/pagination'

const Banner = () => {
  // Extract and sort images
  const images = useMemo(() => {
    const urls = Object.values(bannerImageModules)
      .map((mod) => (mod && typeof mod === 'object' && 'default' in mod ? mod.default : null))
      .filter(Boolean)
    return urls.length > 0 ? urls.sort((a, b) => a.localeCompare(b)) : []
  }, [])

  // Generate slide data with text
  const slides = useMemo(() => {
    const inferTexts = (url) => {
      const name = url.split('/').pop()?.toLowerCase() || ''
      if (name.includes('offshore')) return { small: 'Prioritizing Safe Operation', big: 'With Standardized Services' }
      if (name.includes('valve')) return { small: 'Building & Nurturing', big: 'Strong Professional Networks' }
      if (name.includes('wellhead')) return { small: 'A Leading Oil & Gas Solutions', big: 'With High-Integrity Systems' }
      return { small: 'World Class Team', big: 'Providing Excellent Services' }
    }
    return images.map((url) => ({ url, ...inferTexts(url) }))
  }, [images])

  // Create infinite loop slides (duplicate slides for seamless looping)
  const infiniteSlides = useMemo(() => {
    if (slides.length <= 1) return slides
    // Add duplicate slides at the end and beginning for infinite loop
    return [...slides, ...slides, ...slides]
  }, [slides])

  const [currentIndex, setCurrentIndex] = useState(slides.length) // Start from middle set
  const intervalRef = useRef(null)

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length <= 1) return

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1
          // If we've reached the end of the duplicated slides, reset to start of middle set
          if (nextIndex >= slides.length * 2) {
            return slides.length
          }
          return nextIndex
        })
      }, 5000)
    }

    startAutoSlide()
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [slides.length])

  // Handle pagination change
  const handlePageChange = (page) => {
    // Clear auto-slide temporarily
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    
    // Set to middle set + page index for seamless loop
    setCurrentIndex(slides.length + (page - 1))
    
    // Restart auto-slide after a delay
    setTimeout(() => {
      if (slides.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => {
            const nextIndex = prev + 1
            if (nextIndex >= slides.length * 2) {
              return slides.length
            }
            return nextIndex
          })
        }, 5000)
      }
    }, 7000)
  }

  // Smooth scroll function
  const scrollToNextSection = () => {
    const bannerHeight = window.innerHeight
    window.scrollTo({
      top: bannerHeight,
      behavior: 'smooth'
    })
  }

  // Get current slide data
  const currentSlide = slides[currentIndex] || {}

  // Handle edge cases
  if (!slides.length) {
    return (
      <div className="relative w-full h-screen md:h-[500px] lg:h-[815px] bg-gray-800 flex items-center justify-center">
        <p className="text-white">No banner images found</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-screen md:h-[500px] lg:h-[815px] overflow-hidden">
      {/* Complete Slide Units - Image + Text together */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full w-full"
          style={{ width: `${infiniteSlides.length * 100}%` }}
          animate={{ x: `-${(currentIndex * 100) / infiniteSlides.length}%` }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut"
          }}
        >
          {infiniteSlides.map((slide, index) => (
            <div
              key={index}
              className="h-full flex-shrink-0 relative"
              style={{ width: `${100 / infiniteSlides.length}%` }}
            >
              {/* Background Image */}
              <img
                src={slide.url}
                alt={`Banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay with tint */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/60" />

            </div>
          ))}
        </motion.div>
      </div>

      {/* Fixed text overlay - doesn't move with images */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="text-white max-w-7xl w-full px-4 sm:px-6 lg:px-15">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text content on the left */}
            <div className="space-y-6">
              <p className="text-sm md:text-base lg:text-lg uppercase tracking-widest text-white/90 font-medium">
                A Leading Oil & Gas Firm
              </p>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
                Providing Excellent Services
              </h1>
              
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    // Check if mobile menu should open (mobile view)
                    if (window.innerWidth < 1024) { // lg breakpoint
                      // Dispatch custom event to open mobile menu
                      window.dispatchEvent(new CustomEvent('openMobileMenu'));
                    } else {
                      // Dispatch custom event to trigger What We Do dropdown (desktop)
                      window.dispatchEvent(new CustomEvent('openWhatWeDoDropdown'));
                    }
                  }}
                  className="w-45 h-16 bg-white rounded-full flex items-center justify-center hover:bg-white/90 transition-colors duration-300"
                >
                  <span className="text-black text-sm font-semibold">View Services</span>
                </button>
                <Link 
                  to="/contact" 
                  className="w-45 h-16 rounded-full flex items-center justify-center border border-white hover:border-red-500 group transition-colors duration-300"
                >
                  <span className="text-white group-hover:text-red-500 text-sm font-semibold transition-colors duration-300">Contact Us</span>
                </Link>
              </div>
            </div>
            
            {/* Empty space on the right for balance */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Bottom section with pagination and scroll arrow - stays fixed */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="pb-8">
          {/* Pagination */}
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Pagination
              totalPages={slides.length}
              currentPage={((currentIndex % slides.length) + 1)}
              onChange={handlePageChange}
            />
          </motion.div>

          {/* Scroll Arrow */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.button
              onClick={scrollToNextSection}
              className="flex flex-col items-center group cursor-pointer relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Scroll text */}
              <motion.span
                className="text-white/80 text-xs uppercase tracking-wider mb-2 group-hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 2 }}
              >
                Scroll
              </motion.span>
              
              {/* Animated Arrow */}
              <motion.div
                className="relative w-6 h-6 flex items-center justify-center"
                animate={{ 
                  y: [0, 5, 0] 
                }}
                transition={{ 
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white/80 group-hover:text-white transition-colors duration-300"
                  whileHover={{ strokeWidth: 2.5 }}
                >
                  <motion.path
                    d="M12 5v14M19 12l-7 7-7-7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 2.2 }}
                  />
                </motion.svg>
              </motion.div>
              
              {/* Pulsing ring effect - around both text and arrow */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Banner