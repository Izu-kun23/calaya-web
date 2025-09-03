import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
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
  const images = useMemo(() => {
    const urls = Object.values(bannerImageModules)
      .map((mod) => (mod && typeof mod === 'object' && 'default' in mod ? mod.default : null))
      .filter(Boolean)
    return urls.length > 0 ? urls.sort((a, b) => a.localeCompare(b)) : []
  }, [])

  // Text inference
  const baseSlides = useMemo(() => {
    const inferTexts = (url) => {
      const name = url.split('/').pop()?.toLowerCase() || ''
      if (name.includes('offshore')) return { small: 'Prioritizing Safe Operation', big: 'With Standerdized Services' }
      if (name.includes('valve')) return { small: 'Building & Nurturing', big: 'Strong Professional Networks' }
      if (name.includes('wellhead')) return { small: 'A Leading Oil & gas solutions', big: 'With High-integrity systems' }
      return { small: 'World class team', big: 'Providing excellent services' }
    }
    return images.map((url) => ({ url, ...inferTexts(url) }))
  }, [images])

  // Seamless slides
  const slides = useMemo(() => {
    if (baseSlides.length <= 1) return baseSlides
    return [baseSlides[baseSlides.length - 1], ...baseSlides, baseSlides[0]]
  }, [baseSlides])

  const [current, setCurrent] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStartX, setDragStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)

  const containerRef = useRef(null)
  const intervalRef = useRef(null)

  // Auto-slide with proper cleanup
  useEffect(() => {
    if (images.length <= 1 || isDragging) return
    
    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setIsTransitioning(true)
        setCurrent((prev) => prev + 1)
      }, 6000)
    }

    startAutoSlide()
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [images.length, isDragging])

  // Transition end → loop fix
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false)
    if (current === slides.length - 1) setCurrent(1)
    if (current === 0) setCurrent(slides.length - 2)
  }, [current, slides.length])

  // Dragging handlers with useCallback for performance
  const handleMouseDown = useCallback((e) => {
    if (images.length <= 1) return
    setIsDragging(true)
    setDragStartX(e.clientX)
    setDragOffset(0)
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [images.length])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return
    setDragOffset(e.clientX - dragStartX)
  }, [isDragging, dragStartX])

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return
    setIsDragging(false)
    const threshold = containerRef.current?.offsetWidth / 4 || 100
    
    if (Math.abs(dragOffset) > threshold) {
      setIsTransitioning(true)
      setCurrent((prev) => dragOffset > 0 ? prev - 1 : prev + 1)
    } else {
      // Snap back with transition
      setIsTransitioning(true)
      setCurrent((prev) => prev)
    }
    setDragOffset(0)
  }, [isDragging, dragOffset])

  // Event listeners with proper cleanup
  useEffect(() => {
    if (isDragging) {
      const handleMouseMoveGlobal = (e) => handleMouseMove(e)
      const handleMouseUpGlobal = () => handleMouseUp()
      
      window.addEventListener('mousemove', handleMouseMoveGlobal, { passive: true })
      window.addEventListener('mouseup', handleMouseUpGlobal, { passive: true })
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMoveGlobal)
        window.removeEventListener('mouseup', handleMouseUpGlobal)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp])

  // Transform calculation with useMemo for performance
  const transform = useMemo(() => {
    const base = -current * 100
    if (isDragging && containerRef.current) {
      return base + (dragOffset / containerRef.current.offsetWidth) * 100
    }
    return base
  }, [current, isDragging, dragOffset])

  // Current text with useMemo
  const currentSlide = useMemo(() => {
    if (baseSlides.length <= 1) return baseSlides[0] || {}
    let index = current - 1
    if (current === 0) index = baseSlides.length - 1
    if (current === slides.length - 1) index = 0
    return baseSlides[index]
  }, [baseSlides, current, slides.length])

  // Pagination change handler
  const handlePageChange = useCallback((page) => {
    setIsTransitioning(true)
    setCurrent(page)
  }, [])

  // Memoized image rendering for performance
  const renderedImages = useMemo(() => {
    return slides.map((s, i) => (
      <img
        key={`${s.url}-${i}`}
        src={s.url}
        alt="Banner"
        className={`w-full h-full object-cover shrink-0 grow-0 basis-full select-none pointer-events-none ${
          current === i ? 'animate-banner-zoom-out' : ''
        }`}
      />
    ))
  }, [slides, current])

  return (
    <div className="relative w-full h-96 md:h-[500px] lg:h-[815px] overflow-hidden">
      {/* Images */}
      <div
        ref={containerRef}
        className={`absolute inset-0 flex h-full ${isTransitioning ? 'transition-transform duration-700 ease-out' : ''}`}
        style={{ transform: `translateX(${transform}%)` }}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={handleMouseDown}
      >
        {renderedImages}
      </div>

      {/* Overlay text */}
      <div className="absolute inset-0 bg-black/40 flex items-start justify-center pt-12 md:pt-16 lg:pt-90">
        <div className="text-center text-white max-w-3xl w-full px-4">
          <AnimatePresence mode="wait">
            {currentSlide && (
              <motion.div
                key={`${currentSlide.small}-${currentSlide.big}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  staggerChildren: 0.1
                }}
              >
                <BannerCard>
                  <motion.p 
                    className="text-xs md:text-sm lg:text-base uppercase tracking-widest text-white/90"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {currentSlide.small}
                  </motion.p>
                  <motion.h1 
                    className="mt-2 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {currentSlide.big}
                  </motion.h1>
                  <motion.div 
                    className="mt-6 flex items-center justify-center pointer-events-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <WhiteButtons size="md">Discover More</WhiteButtons>
                  </motion.div>
                </BannerCard>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Pagination positioned outside of animations - always visible */}
          <div className="mt-6 flex justify-center pointer-events-auto">
            <Pagination
              totalPages={images.length || 1}
              currentPage={current === 0 ? images.length : current === slides.length - 1 ? 1 : current}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner