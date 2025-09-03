import React, { useState } from "react";

const Pagination = ({ totalPages = 5, currentPage, onChange }) => {
  const isControlled = typeof currentPage === 'number' && typeof onChange === 'function';
  const [internalPage, setInternalPage] = useState(1);
  const activePage = isControlled ? currentPage : internalPage;

  return (
    <div className="flex justify-center mt-8 gap-2 md:gap-3">
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
            className={`transition-colors rounded-md ${
              isActive
                ? "bg-blue-500"
                : "bg-white/60 hover:bg-white/80"
            } w-8 h-1 md:w-10 md:h-2.5 shadow-sm border border-white/40`}
          >
            <span className="sr-only">{`Slide ${page}`}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;