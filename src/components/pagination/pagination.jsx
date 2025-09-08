import React, { useState } from "react";

const Pagination = ({ totalPages = 5, currentPage, onChange }) => {
  const isControlled = typeof currentPage === 'number' && typeof onChange === 'function';
  const [internalPage, setInternalPage] = useState(1);
  const activePage = isControlled ? currentPage : internalPage;

  return (
    <div className="flex justify-center mt-6 sm:mt-8 gap-2 sm:gap-3">
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        const isActive = page === activePage;

        return (
          <button
            key={page}
            type="button"
            onClick={() => {
              if (isControlled) {
                onChange(page);
              } else {
                setInternalPage(page);
              }
            }}
            aria-label={`Go to slide ${page}`}
            className={`transition-all duration-300 ease-out rounded-full transform hover:scale-110 ${
              isActive
                ? "bg-blue-700 shadow-lg scale-110"
                : "bg-white/60 hover:bg-white/80 shadow-md"
            } w-8 h-2 sm:w-10 sm:h-2.5 md:w-12 md:h-3 border border-white/30 hover:border-white/50`}
          >
            <span className="sr-only">{`Slide ${page}`}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;