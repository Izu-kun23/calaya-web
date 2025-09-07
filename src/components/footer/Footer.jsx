import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import calayaLogo from "../../assets/images/calaya_logo_wc.png";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-900 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo */}
          <div className="flex flex-col items-start md:items-center lg:items-start text-left md:text-center lg:text-left">
            <Link to="/" className="mb-4">
              <img
                src={calayaLogo}
                alt="Calaya Engineering Logo"
                className="h-16 w-auto mx-auto md:mx-0"
              />
            </Link>
              <p className="text-gray-300 text-sm max-w-xs">
                Leading oil and gas engineering solutions since 2005.
              </p>
              
              {/* Social Media Links */}
              <div className="flex space-x-3 mt-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

          {/* Middle - Links */}
          <div className="flex flex-col items-start md:items-center lg:items-center">
            <h3 className="text-white font-semibold mb-6 mr-15">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
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
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <div className="text-gray-300 text-sm leading-relaxed space-y-2 max-w-xs">
              <p className="font-medium">Port Harcourt</p>
              <p>
                Plot 194B, 23 Fiddil Avenue,<br />
                Off Ordinance Road, Trans-Amadi,<br />
                Port Harcourt, Rivers State, Nigeria.<br />
                P.O Box 4738
              </p>
              <p>
                <a href="mailto:calayaengineering@yahoo.co.uk" className="hover:text-white transition-colors">
                  calayaengineering@yahoo.co.uk
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
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} Calaya Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;