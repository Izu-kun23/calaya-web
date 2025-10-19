import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import calayaLogo from "../../assets/images/calaya_logo_wc.png";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 mt-8 sm:mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left - Logo */}
          <div className="flex flex-col items-start sm:items-center lg:items-start text-left sm:text-center lg:text-left">
            <Link to="/" className="mb-4">
              <img
                src={calayaLogo}
                alt="Calaya Engineering Logo"
                className="h-12 sm:h-14 lg:h-16 w-auto mx-auto sm:mx-0"
              />
            </Link>
              <p className="text-gray-300 text-xs sm:text-sm max-w-xs">
                Leading oil and gas engineering solutions since 2005.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-2 sm:space-x-3 mt-4">
                <a 
                  href="https://www.facebook.com/Calayaengineeringservices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                
                <a 
                  href="https://x.com/calayaeng2005" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                
                <a 
                  href="https://www.instagram.com/calaya_ltd/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
                
                <a 
                  href="https://www.linkedin.com/company/calaya-engineering-services-limited/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </a>
              </div>
            </div>

          {/* Middle - Links */}
          <div className="flex flex-col items-start sm:items-center lg:items-center">
            <h3 className="text-white font-semibold mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-3 text-xs sm:text-sm">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Right - Contact Information */}
          <div className="flex flex-col items-start text-left">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h3>
            <div className="text-gray-300 text-xs sm:text-sm leading-relaxed space-y-2 max-w-xs">
              <p className="font-medium">Port Harcourt</p>
              <p>
                Plot 194B, 23 Fiddil Avenue,<br />
                Off Ordinance Road, Trans-Amadi,<br />
                Port Harcourt, Rivers State, Nigeria.<br />
                P.O Box 4738
              </p>
              <p>
                <a href="mailto:info@calayaengineering.com" className="hover:text-white transition-colors">
                  info@calayaengineering.com
                </a>
              </p>
              <p>
                Tel:{" "}
                <a href="tel:+23484301123" className="hover:text-white transition-colors">
                  (+234) 84301123
                </a>
                ,<br />
                <a href="tel:+2349028219836" className="hover:text-white transition-colors">
                  (+234) 9028219836
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="border-t border-blue-800 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center">
          <p className="text-xs sm:text-sm text-gray-300">
            © {new Date().getFullYear()} Calaya Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;