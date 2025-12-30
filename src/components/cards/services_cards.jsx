'use client';
import React from 'react';
import Link from 'next/link';

const ServicesCard = ({ image, title, description, buttonText = "Learn More", link = "#" }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-full max-w-[385px] h-[420px] sm:h-[440px] flex flex-col">
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-40 sm:h-48 object-cover"
          draggable={false}
        />
      </div>
      
      {/* Card body */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
          {title}
        </h3>

        <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-grow text-xs sm:text-sm">
          {description}
        </p>
        
        {/* Button */}
        <div className="mt-auto">
          <Link 
            href={link}
            className="w-full inline-flex items-center justify-center gap-2 bg-red-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium text-xs sm:text-sm"
          >
            {buttonText}
            <svg 
              className="w-3 h-3 sm:w-4 sm:h-4"
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;