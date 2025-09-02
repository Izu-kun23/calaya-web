import React from "react";
import { Link } from "react-router-dom";
import calayaLogo from "../../assets/images/calaya_logo_1.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left Links */}
        <div className="flex space-x-18 ml-20 text-gray-700 text-sm font-medium">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/" className="hover:text-red-500">Who Are We</Link>
          <Link to="/" className="hover:text-red-500">What We Do</Link>
        </div>

        {/* Logo Center */}
        <div className="mx-1">
          <Link to="/">
            <img 
              src={calayaLogo} 
              alt="Calaya Engineering Logo" 
              className="h-12 w-auto"
            />
          </Link>
        </div>

        {/* Right Links */}
        <div className="flex space-x-18 text-gray-700 text-sm font-medium mr-20">
          <Link to="/" className="hover:text-red-500">Products / Technologies</Link>
          <Link to="/" className="hover:text-red-500">Projects</Link>
          <Link to="/" className="hover:text-red-500">Contacts</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;