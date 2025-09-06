import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import calayaLogoWhite from "../../assets/images/calaya_logo_wc.png";
import calayaLogoBlack from "../../assets/images/calaya_logo_1.png";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const handleDropdownItemClick = (item, dropdownType) => {
    // Close dropdown when an item is clicked
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    console.log(`Clicked: ${item.name} from ${dropdownType}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const dropdownItems = {
    whoWeAre: [
      { name: "About Us", link: "/about" },
      { name: "Our Mission", link: "/mission" },
      { name: "Our Values", link: "/values" },
      { name: "Leadership Team", link: "/team" },
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

  return (
    <nav className={`w-full ${isHomePage ? 'bg-transparent absolute top-0 left-0' : 'bg-white shadow-md'} z-50`} ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo Left */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={isHomePage ? calayaLogoWhite : calayaLogoBlack}
              alt="Calaya Engineering Logo"
              className="h-8 sm:h-10 md:h-12 w-auto hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out transform hover:shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links Center */}
        <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-semibold ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
          <Link
            to="/"
            className="relative group transition-colors duration-200"
          >
            Home
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
          </Link>

          {/* Who Are We Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("whoWeAre")}
              className="relative group transition-colors duration-200 flex items-center focus:outline-none"
            >
              Who We Are
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  openDropdown === "whoWeAre" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            {openDropdown === "whoWeAre" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 overflow-hidden transition-all duration-300 origin-top opacity-100 scale-y-100 visible z-50">
                {dropdownItems.whoWeAre.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-3 text-gray-800 hover:bg-red-700 hover:text-white transition-all duration-200 text-sm"
                    onClick={() => handleDropdownItemClick(item, "whoWeAre")}
                  >
                    {item.name}
                  </Link>
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
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  openDropdown === "whatWeDo" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            {openDropdown === "whatWeDo" && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 overflow-hidden transition-all duration-300 origin-top opacity-100 scale-y-100 visible z-50">
                {dropdownItems.whatWeDo.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-3 text-gray-800 hover:bg-red-700 hover:text-white transition-all duration-200 text-sm"
                    onClick={() => handleDropdownItemClick(item, "whatWeDo")}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products / Technologies Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle("productsTechnologies")}
              className="relative group transition-colors duration-200 flex items-center focus:outline-none"
            >
              Products / Services
              <svg
                className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                  openDropdown === "productsTechnologies" ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
            </button>
            {openDropdown === "productsTechnologies" && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-white/20 overflow-hidden transition-all duration-300 origin-top opacity-100 scale-y-100 visible z-50">
                {dropdownItems.productsTechnologies.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block px-4 py-3 text-gray-800 hover:bg-red-700 hover:text-white transition-all duration-200 text-sm"
                    onClick={() => handleDropdownItemClick(item, "productsTechnologies")}
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
          >
            Projects & Partners
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
          </Link>
        </div>

        {/* Desktop Contact Us Button */}
        <div className="hidden lg:flex flex-shrink-0">
          <Link
            to="/contact"
            className="bg-red-500 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm font-semibold"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
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
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* Mobile Dropdown - Who We Are */}
            <div>
              <button
                onClick={() => handleDropdownToggle("whoWeAre")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                Who We Are
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "whoWeAre" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "whoWeAre" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.whoWeAre.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={() => handleDropdownItemClick(item, "whoWeAre")}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown - What We Do */}
            <div>
              <button
                onClick={() => handleDropdownToggle("whatWeDo")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                What We Do
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "whatWeDo" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "whatWeDo" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.whatWeDo.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={() => handleDropdownItemClick(item, "whatWeDo")}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Dropdown - Products / Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle("productsTechnologies")}
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200 flex items-center justify-between"
              >
                Products / Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    openDropdown === "productsTechnologies" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openDropdown === "productsTechnologies" && (
                <div className="ml-4 space-y-1">
                  {dropdownItems.productsTechnologies.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-md transition-colors duration-200"
                      onClick={() => handleDropdownItemClick(item, "productsTechnologies")}
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
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects & Partners
            </Link>

            <Link
              to="/contact"
              className="block mx-3 my-2 bg-red-500 text-white px-4 py-2.5 rounded-full hover:bg-red-600 transition-colors duration-200 text-sm font-semibold text-center"
              onClick={() => setIsMobileMenuOpen(false)}
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