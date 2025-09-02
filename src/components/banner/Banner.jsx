import React from 'react'
import bannerImage from '../../assets/images/banner_img.jpg'

const Banner = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-184 overflow-hidden">
      {/* Banner Image from assets/images */}
      <img 
        src={bannerImage} 
        alt="Calaya Engineering Banner"
        className="w-full h-full object-cover"
      />
      
      {/* Optional: Overlay with text */}
      <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Calaya Engineering
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            Innovative Engineering Solutions
          </p>
        </div>
      </div>
    </div>
  )
}

export default Banner
