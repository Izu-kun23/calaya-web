import React from 'react'

const WhiteCard = ({ iconSrc, title, description, number }) => {
  return (
    <div className="w-full h-[16rem] bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center transition-all duration-300 ease-out hover:-translate-y-1 relative group">
      {/* Number overlay - only visible on hover */}
      {number && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span 
            className="text-2xl font-bold text-white"
            style={{
              WebkitTextStroke: '2px #2563eb',
              textStroke: '2px #2563eb'
            }}
          >
            {number}
          </span>
        </div>
      )}
      
      {iconSrc && (
        <img src={iconSrc} alt="" className="w-16 h-16 object-contain mb-4 flex-shrink-0" />
      )}
      {title && (
        <h4 className="text-xl font-semibold text-gray-900 mb-3 flex-shrink-0">{title}</h4>
      )}
      {description && (
        <p className="text-gray-600 leading-relaxed text-sm flex-grow flex items-center justify-center">{description}</p>
      )}
    </div>
  )
}

export default WhiteCard