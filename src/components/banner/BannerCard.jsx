import React from "react";

const BannerCard = ({ children }) => {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-blue-900/60 to-blue-800/40 supports-[backdrop-filter]:backdrop-blur-lg border border-white/20 ring-1 ring-white/10 p-6 sm:p-8 md:p-10 text-white transform hover:scale-[1.02] transition-all duration-500 ease-out">
      <div className="relative">
        {/* Subtle inner glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        {children}
      </div>
    </div>
  );
};

export default BannerCard;