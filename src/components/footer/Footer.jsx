import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center text-gray-700">
        
        {/* Center - Copyright */}
        <div className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Calaya Engineering. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;