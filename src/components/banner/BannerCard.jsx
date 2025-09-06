import React from "react";

const BannerCard = ({ children }) => {
  return (
    <div className="rounded-2xl bg-blue-900/50 supports-[backdrop-filter]:backdrop-blur-md border border-blue-800/20 ring-1 ring-blue-500/20 shadow-lg p-6 sm:p-8 text-white">
      {children}
    </div>
  );
};

export default BannerCard;