import React, { useState, useEffect } from 'react';
import { CircleArrowUp } from 'lucide-react';

const TopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full  hover: transition-all duration-300 ease-in-out transform hover:scale-110"
          aria-label="Back to top"
        >
          <CircleArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default TopArrow;
