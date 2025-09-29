import React, { useState, useRef, useEffect, memo, useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Users, Wrench, Monitor, Shield, Search, Building, HardHat, Settings, Zap, Droplets } from "lucide-react";
import calayaLogoWhite from "../../assets/images/calaya_logo_wc.png";
import calayaLogoBlack from "../../assets/images/calaya_logo_1.png";
import DropDown from "../dropdown/drop_down";

/**
 * Navbar Component - Optimized with memoization and callbacks for better performance
 * Prevents unnecessary re-renders and improves navigation responsiveness
 */
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Memoize dropdown items to prevent recreation on every render
  const dropdownItems = useMemo(() => ({
    whoWeAre: [
      { name: "About Us", link: "/about", icon: <Users className="w-5 h-5" />, description: "Learn about our company history and mission" },
      { name: "Our Certifications", link: "/certifications", icon: <Shield className="w-5 h-5" />, description: "View our industry certifications and standards" },
      { 
        name: "Our Policies", 
        link: "/policies", 
        icon: <Settings className="w-5 h-5" />, 
        description: "OHS and Quality policies",
        hasSubmenu: true,
        submenu: [
          { name: "OHS Policy", link: "/policies/ohs", icon: <Shield className="w-4 h-4" />, description: "Occupational Health and Safety Policy" },
          { name: "Quality Policy", link: "/policies/quality", icon: <Settings className="w-4 h-4" />, description: "Quality Management Policy" }
        ]
      },
    ],
    whatWeDo: [
      { 
        name: "Well Services", 
        link: "/services/well-services", 
        icon: <Wrench className="w-5 h-5" />, 
        description: "Complete well lifecycle services",
        hasSubmenu: true,
        submenu: [
          { name: "Well Completion", link: "/services/well-services?tab=0", icon: <Settings className="w-4 h-4" />, description: "Comprehensive well completion services" },
          { name: "Well Intervention", link: "/services/well-services?tab=1", icon: <Wrench className="w-4 h-4" />, description: "Advanced well intervention techniques" },
          { name: "Well Head Maintenance", link: "/services/well-services?tab=2", icon: <Shield className="w-4 h-4" />, description: "Professional wellhead maintenance services" },
          { name: "Leak Sealing & Greasing", link: "/services/well-services?tab=3", icon: <Settings className="w-4 h-4" />, description: "Specialized leak sealing and valve greasing" }
        ]
      },
      { 
        name: "Corrosion Management", 
        link: "/services/corrosion-management", 
        icon: <Monitor className="w-5 h-5" />, 
        description: "Advanced corrosion prevention solutions",
        hasSubmenu: true,
        submenu: [
          { name: "Internal Corrosion Monitoring", link: "/services/corrosion-management?tab=0", icon: <Monitor className="w-4 h-4" />, description: "Advanced internal corrosion monitoring systems" },
          { name: "Cathodic Protection Services", link: "/services/corrosion-management?tab=1", icon: <Shield className="w-4 h-4" />, description: "Comprehensive cathodic protection systems" },
          { name: "DCVG Survey & Repair", link: "/services/corrosion-management?tab=2", icon: <Search className="w-4 h-4" />, description: "Advanced DCVG surveys and repair solutions" }
        ]
      },
      { 
        name: "Pipeline Construction", 
        link: "/services/pipeline-construction", 
        icon: <Building className="w-5 h-5" />, 
        description: "Pipeline laying and hot tapping services",
        hasSubmenu: true,
        submenu: [
          { name: "Pipeline Laying/Construction", link: "/services/pipeline-construction?tab=0", icon: <Wrench className="w-4 h-4" />, description: "Pipeline laying, fabrication, and installation" },
          { name: "Hot Tapping Services", link: "/services/pipeline-construction?tab=1", icon: <Settings className="w-4 h-4" />, description: "Live pipeline connections and modifications" }
        ]
      },
      { 
        name: "Technical Manpower Support", 
        link: "/services/technical-manpower", 
        icon: <HardHat className="w-5 h-5" />, 
        description: "Skilled engineering professionals",
      },
      { 
        name: "Facilities Management", 
        link: "/services/facilities-management", 
        icon: <Building className="w-5 h-5" />, 
        description: "Comprehensive facilities management services",
        hasSubmenu: true,
        submenu: [
          { name: "HVAC/Electrical Installation", link: "/services/facilities-management?tab=0", icon: <Zap className="w-4 h-4" />, description: "HVAC and electrical installation & maintenance" },
          { name: "Grit & Hydro Blasting", link: "/services/facilities-management?tab=1", icon: <Droplets className="w-4 h-4" />, description: "Grit & hydro blasting and coating services" },
          { name: "Tank & Pipe Cleaning", link: "/services/facilities-management?tab=2", icon: <Settings className="w-4 h-4" />, description: "Cleaning of tanks, test separators, pipes & platforms" },
          { name: "Online Leak Repair", link: "/services/facilities-management?tab=3", icon: <Shield className="w-4 h-4" />, description: "Professional online leak repair services" }
        ]
      },
      { 
        name: "Civil Engineering", 
        link: "/services/civil-engineering", 
        icon: <Building className="w-5 h-5" />, 
        description: "Infrastructure development and construction",
      },
      { 
        name: "Procurement Services", 
        link: "/services/procurement", 
        icon: <Settings className="w-5 h-5" />, 
        description: "Strategic sourcing and supply chain management",
      },
    ],
    productsTechnologies: [
      { name: "Valve Technologies", link: "/valves", icon: <Settings className="w-5 h-5" />, description: "Advanced valve systems and technologies" },
      { name: "Wellhead Systems", link: "/wellheads", icon: <Wrench className="w-5 h-5" />, description: "Complete wellhead equipment and systems" },
      { name: "Offshore Solutions", link: "/offshore", icon: <Building className="w-5 h-5" />, description: "Offshore platform and marine solutions" },
      { name: "Custom Equipment", link: "/custom", icon: <Settings className="w-5 h-5" />, description: "Custom engineered equipment solutions" },
    ],
  }), []);

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

  // Close dropdown when clicking outside and prevent scroll when dropdown is open
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setActiveSubmenu(null);
      }
    };

    // Prevent body scroll when dropdown is open
    const preventScroll = (e) => {
      if (activeDropdown || isMobileMenuOpen) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // Add scroll prevention when dropdown is open
    if (activeDropdown || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('wheel', preventScroll, { passive: false });
      document.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      document.body.style.overflow = 'unset';
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    }

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
      document.body.style.overflow = 'unset';
    };
  }, [activeDropdown, isMobileMenuOpen]);

  return (
    <nav className={`w-full ${isHomePage ? 'bg-transparent absolute top-0 left-0' : 'bg-white shadow-md'} z-50`} ref={navbarRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" onClick={handleLinkClick}>
            <img
              src={isHomePage ? calayaLogoWhite : calayaLogoBlack}
              alt="Calaya Engineering Logo"
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-out transform hover:shadow-lg"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className={`hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 text-xs sm:text-sm font-semibold ${isHomePage ? 'text-white' : 'text-gray-800'}`}>
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
            
            <DropDown
              isOpen={activeDropdown === "whoWeAre"}
              onClose={() => setActiveDropdown(null)}
              title="Who We Are"
              items={dropdownItems.whoWeAre}
              columns={3}
            />
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
            
            <DropDown
              isOpen={activeDropdown === "whatWeDo"}
              onClose={() => setActiveDropdown(null)}
              title="What We Do"
              items={dropdownItems.whatWeDo}
              columns={4}
            />
          </div>

          {/* Product & Partners Link */}
          <Link
            to="/products"
            className="relative group transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Product & Partners
            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isHomePage ? 'bg-red-700' : 'bg-red-500'} group-hover:w-full transition-all duration-300 ease-out`}></span>
          </Link>

          <Link
            to="/projects"
            className="relative group transition-colors duration-200"
            onClick={handleLinkClick}
          >
            Our Projects
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
            {isMobileMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Background Blur */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 backdrop-blur-sm z-40" />
      )}

      {/* Mobile Sidebar */}
      <div className={`lg:hidden fixed top-0 left-0 h-full w-72 sm:w-80 bg-white/90 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <img
            src={calayaLogoBlack}
            alt="Calaya Engineering Logo"
            className="h-8 w-auto"
          />
          <button
            onClick={closeAllMenus}
            className="p-2 rounded-md text-gray-800 hover:bg-gray-100 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Home
              </Link>

              {/* Mobile - Who We Are */}
              <div>
                <button
                  onClick={() => handleDropdownToggle("whoWeAre")}
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 flex items-center justify-between font-medium"
                >
                  Who We Are
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "whoWeAre" ? "rotate-180" : ""}`} />
                </button>
                
                {activeDropdown === "whoWeAre" && (
                  <div className="ml-4 mt-2 space-y-1">
                    {dropdownItems.whoWeAre.map((item, index) => (
                      <div key={index}>
                        {item.hasSubmenu ? (
                          <div>
                            <button
                              onClick={() => handleSubmenuToggle(`policies-${index}`)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 flex items-center justify-between"
                            >
                              <span className="font-medium">{item.name}</span>
                              <ChevronRight className={`w-3 h-3 transition-transform duration-200 ${activeSubmenu === `policies-${index}` ? "rotate-90" : ""}`} />
                            </button>
                            {activeSubmenu === `policies-${index}` && (
                              <div className="ml-4 mt-1 space-y-1">
                                {item.submenu.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.link}
                                    className="block px-4 py-2 text-xs text-gray-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200"
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
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200"
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
                  className="w-full text-left px-4 py-3 text-gray-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 flex items-center justify-between font-medium"
                >
                  What We Do
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "whatWeDo" ? "rotate-180" : ""}`} />
                </button>
                
                {activeDropdown === "whatWeDo" && (
                  <div className="ml-4 mt-2 space-y-1">
              {dropdownItems.whatWeDo.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200"
                        onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}
            </div>
                )}
        </div>

              {/* Mobile - Product & Partners */}
              <Link
                to="/products"
                className="block px-4 py-3 text-gray-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 font-medium"
                onClick={handleLinkClick}
              >
                Product & Partners
              </Link>

          <Link
            to="/projects"
                className="block px-4 py-3 text-gray-800 hover:bg-red-500 hover:text-white rounded-lg transition-colors duration-200 font-medium"
                onClick={handleLinkClick}
          >
                Our Projects
          </Link>
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200">
          <Link
              to="/contact"
              className="block w-full bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition-colors duration-200 text-sm font-semibold text-center"
              onClick={handleLinkClick}
          >
              Contact Us
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;