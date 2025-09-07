import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import calayaLogoWhite from "../../assets/images/calaya_logo_wc.png";
import calayaLogoBlack from "../../assets/images/calaya_logo_1.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const dropdownItems = {
    whoWeAre: [
      { name: "About Us", link: "/about" },
      { name: "Our Certifications", link: "/certifications" },
      { 
        name: "Our Policies", 
        link: "/policies", 
        hasSubmenu: true, 
        submenu: [
          { name: "OHS Policy", link: "/policies/ohs" },
          { name: "Quality Policy", link: "/policies/quality" }
        ]
      },
    ],
    whatWeDo: [
      { name: "Engineering Services", link: "/engineering" },
      { name: "Consulting", link: "/consulting" },
      { name: "Project Management", link: "/project-management" },
      { name: "Quality Assurance", link: "/quality" },
    ],
    productsTechnologies: [
      { name: "Valve Technologies", link: "/valves" },
      { name: "Wellhead Systems", link: "/wellheads" },
      { name: "Offshore Solutions", link: "/offshore" },
      { name: "Custom Equipment", link: "/custom" },
    ],
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubmenu(null); // Reset submenu when changing main dropdown
  };

  const handleSubmenuToggle = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  const closeAllMenus = () => {
    setActiveDropdown(null);
    setActiveSubmenu(null);
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeAllMenus();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`w-full ${isHomePage ? 'bg-transparent absolute top-0 left-0' : 'bg-white shadow-md'} z-50`} ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={isHomePage ? calayaLogoWhite : calayaLogoBlack}
              alt="Calaya Engineering Logo"
              className="h-8 sm:h-10 md:h-12 w-auto hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out transform hover:shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
          <Link
            to="/"
            className="relative group transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Home
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
          </Link>

          {/* Who We Are Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("whoWeAre")}
              className="relative group transition-colors duration-200 flex items-center focus:outline-none"
            >
              Who We Are
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "whoWeAre" ? "rotate-180" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            
            {activeDropdown === "whoWeAre" && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {dropdownItems.whoWeAre.map((item, index) => (
                  <div key={index} className="relative">
                    {item.hasSubmenu ? (
                      <>
                        <button
                          onClick={() => handleSubmenuToggle(`policies-${index}`)}
                          className="w-full px-4 py-3 text-gray-800 hover:bg-red-50 transition-colors duration-200 flex items-center justify-between text-left"
                        >
                          <span className="text-sm font-medium">{item.name}</span>
                          <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${activeSubmenu === `policies-${index}` ? "rotate-90" : ""}`} />
                        </button>
                        {activeSubmenu === `policies-${index}` && (
                          <div className="bg-gray-50 border-t border-gray-100">
                            {item.submenu.map((subItem, subIndex) => (
                              <Link
                                key={subIndex}
                                to={subItem.link}
                                className="block px-6 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white transition-colors duration-200"
                                onClick={handleLinkClick}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.link}
                        className="block px-4 py-3 text-sm text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-200"
                        onClick={handleLinkClick}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* What We Do Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("whatWeDo")}
              className="relative group transition-colors duration-200 flex items-center focus:outline-none"
            >
              What We Do
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "whatWeDo" ? "rotate-180" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            
            {activeDropdown === "whatWeDo" && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {dropdownItems.whatWeDo.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products / Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("productsTechnologies")}
              className="relative group transition-colors duration-200 flex items-center focus:outline-none"
            >
              Products / Services
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === "productsTechnologies" ? "rotate-180" : ""}`} />
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            
            {activeDropdown === "productsTechnologies" && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                {dropdownItems.productsTechnologies.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-3 text-sm text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/"
            className="relative group transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Projects & Partners
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link
            to="/contact"
            className="bg-red-500 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm font-semibold"
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md ${isHomePage ? 'text-white' : 'text-gray-800'} hover:bg-gray-100 focus:outline-none`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Home
            </Link>

            {/* Mobile - Who We Are */}
            <div>
              <button
                onClick={() => handleDropdownToggle("whoWeAre")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                Who We Are
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "whoWeAre" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "whoWeAre" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.whoWeAre.map((item, index) => (
                    <div key={index}>
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={() => handleSubmenuToggle(`policies-${index}`)}
                            className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
                          >
                            <span className="font-medium">{item.name}</span>
                            <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${activeSubmenu === `policies-${index}` ? "rotate-90" : ""}`} />
                          </button>
                          {activeSubmenu === `policies-${index}` && (
                            <div className="ml-4 space-y-1">
                              {item.submenu.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  to={subItem.link}
                                  className="block px-3 py-2 text-xs text-gray-500 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                                  onClick={handleLinkClick}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.link}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile - What We Do */}
            <div>
              <button
                onClick={() => handleDropdownToggle("whatWeDo")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                What We Do
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "whatWeDo" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "whatWeDo" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.whatWeDo.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile - Products / Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle("productsTechnologies")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                Products / Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "productsTechnologies" ? "rotate-180" : ""}`} />
              </button>
              
              {activeDropdown === "productsTechnologies" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.productsTechnologies.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/"
              className="block px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
              onClick={handleLinkClick}
            >
              Projects & Partners
            </Link>

            <Link
              to="/contact"
              className="block mx-3 my-2 bg-red-500 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm font-semibold text-center"
              onClick={handleLinkClick}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;