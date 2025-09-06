import React from 'react'

const ServicesCard = ({ image, title, description, buttonText = "Learn More" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out w-full h-[380px] sm:h-[400px] flex flex-col">
      {/* Image at the top */}
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 object-cover"
        />
      </div>
      
      {/* Card body */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow">
          {description}
        </p>
        
        {/* Centered arrow button */}
        <div className="flex justify-center mt-auto">
          <button className="inline-flex items-center justify-center bg-red-500 text-white w-12 h-8 sm:w-16 sm:h-8 rounded-md hover:bg-red-600 transition-colors">
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesCard
