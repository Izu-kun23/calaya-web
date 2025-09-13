import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const DropDown = ({ 
  isOpen, 
  onClose, 
  title, 
  items, 
  columns = 3,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-800',
  hoverColor = 'hover:bg-red-500',
  hoverTextColor = 'hover:text-white'
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  
  // Reset submenu when dropdown closes
  React.useEffect(() => {
    if (!isOpen) {
      setActiveSubmenu(null)
    }
  }, [isOpen])
  
  if (!isOpen) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={`fixed top-16 left-0 w-full bg-white shadow-2xl border-t border-gray-200 z-50`}
        >
            <div className="max-w-7xl mx-auto px-6 py-8">
              {/* Header */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
                <div className="w-16 h-1 bg-red-500"></div>
              </motion.div>
          
              {/* Grid layout */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6`}>
                {items.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                  >
                <div>
                  {/* Main item - always show */}
                  {item.hasSubmenu ? (
                    <div className="flex items-start space-x-3 p-4 rounded-lg">
                      {item.icon && (
                        <div className="flex-shrink-0 mt-1">
                          {item.icon}
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1 text-gray-900">
                          {item.name}
                        </h4>
                        {item.description && (
                          <p className="text-sm text-gray-600">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                        className="flex-shrink-0 p-1 hover:bg-gray-100 rounded transition-colors"
                      >
                        <ChevronRight className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeSubmenu === index ? "rotate-90" : ""}`} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.link}
                      className={`block p-4 rounded-lg transition-all duration-300 ${textColor} ${hoverColor} ${hoverTextColor} group`}
                      onClick={onClose}
                    >
                      <div className="flex items-start space-x-3">
                        {item.icon && (
                          <div className="flex-shrink-0 mt-1">
                            {item.icon}
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1 group-hover:text-white transition-colors">
                            {item.name}
                          </h4>
                          {item.description && (
                            <p className="text-sm opacity-80 group-hover:text-white transition-colors">
                              {item.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  )}
                  
                    {/* Submenu items - show when expanded */}
                    <AnimatePresence>
                      {item.hasSubmenu && activeSubmenu === index && item.submenu && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-8 space-y-1 overflow-hidden"
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <motion.div
                              key={subIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: subIndex * 0.1 }}
                            >
                              <Link
                                to={subItem.link}
                                className={`block p-3 rounded-lg transition-all duration-300 ${textColor} ${hoverColor} ${hoverTextColor} group`}
                                onClick={onClose}
                              >
                          <div className="flex items-start space-x-3">
                            {subItem.icon && (
                              <div className="flex-shrink-0 mt-0.5">
                                {subItem.icon}
                              </div>
                            )}
                            <div className="flex-1">
                              <h5 className="font-medium text-base mb-1 group-hover:text-white transition-colors">
                                {subItem.name}
                              </h5>
                              {subItem.description && (
                                <p className="text-xs opacity-80 group-hover:text-white transition-colors">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </div>
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Footer with close button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8 pt-6 border-t border-gray-200 flex justify-end"
            >
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200"
              >
                Close
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DropDown
