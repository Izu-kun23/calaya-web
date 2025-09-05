import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Auto-import all banner images in the folder
const bannerImageModules = import.meta.glob(
  '../../assets/images/banner_images/*.{jpg,jpeg,png,webp}',
  { eager: true }
)

import BannerCard from './BannerCard'
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

  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length <= 1) return

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
      }, 6000)
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
    
    setCurrentIndex(page - 1) // Convert 1-based to 0-based index
    
    // Restart auto-slide after a delay
    setTimeout(() => {
      if (slides.length > 1) {
        intervalRef.current = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length)
        }, 6000)
      }
    }, 8000)
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
      <div className="relative w-full h-96 md:h-[500px] lg:h-[815px] bg-gray-800 flex items-center justify-center">
        <p className="text-white">No banner images found</p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[815px] overflow-hidden">
      {/* Background Images with Overlapping Transitions */}
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.6,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            <motion.img
              src={currentSlide.url}
              alt={`Banner ${currentIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content overlay */}
      <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-16 lg:pt-90">
        <div className="text-center text-white max-w-3xl w-full px-4">
          {/* Animated text content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <BannerCard>
                <motion.p 
                  className="text-xs md:text-sm lg:text-base uppercase tracking-widest text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {currentSlide.small}
                </motion.p>
                
                <motion.h1 
                  className="mt-2 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {currentSlide.big}
                </motion.h1>
                
                <motion.div 
                  className="mt-6 flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <WhiteButtons size="md">Discover More</WhiteButtons>
                </motion.div>
              </BannerCard>
            </motion.div>
          </AnimatePresence>
          
          {/* Static pagination */}
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Pagination
              totalPages={slides.length}
              currentPage={currentIndex + 1}
              onChange={handlePageChange}
            />
          </motion.div>
        </div>
      </div>

      {/* Animated Scroll Arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToNextSection}
          className="flex flex-col items-center group cursor-pointer"
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
            className="relative"
            animate={{ 
              y: [0, 8, 0] 
            }}
            transition={{ 
              duration: 2,
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
          
          {/* Pulsing ring effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.5, 1],
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
  )
}

export default Banner