import React from "react";
import { Link } from "react-router-dom";
import calayaLogo from "../../assets/images/calaya_logo_wc.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent absolute top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        {/* Left Links */}
        <div className="flex space-x-25 ml-1 text-sm font-medium ">
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">Home</Link>
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">Who Are We</Link>
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">What We Do</Link>
        </div>

        {/* Logo Center */}
        <div className="mx-1">
          <Link to="/">
            <img 
              src={calayaLogo} 
              alt="Calaya Engineering Logo" 
              className="h-12 w-auto hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out transform hover:shadow-lg"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex space-x-28 text-sm font-medium mr-1">
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">Products / Technologies</Link>
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">Projects</Link>
          <Link to="/" className="hover:text-red-500 transition-colors duration-200">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;