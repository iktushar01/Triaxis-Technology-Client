import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/logoWhiteBg.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setOpenSubmenu(null);
        document.body.style.overflow = 'auto';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
    if (!isOpen) setOpenSubmenu(null);
  };

  const handleSubmenuHover = (item, isEnter) => {
    if (isEnter) {
      // On hover enter, clear any pending close and open immediately
      if (hoverTimeout) clearTimeout(hoverTimeout);
      setOpenSubmenu(item);
    } else {
      // On hover leave, set a timeout before closing
      const timeout = setTimeout(() => {
        setOpenSubmenu(null);
      }, 200); // 200ms delay before closing
      setHoverTimeout(timeout);
    }
  };

  const handleSubmenuClick = (item) => {
    if (openSubmenu === item) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(item);
    }
  };

  // NavLink active style
  const activeStyle = "text-[#E63946] font-semibold border-b-2 border-[#E63946]";
  const mobileActiveStyle = "bg-gray-100 text-[#E63946] font-semibold";

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      submenu: [
        { name: "Web Development", path: "/services/web-development" },
        { name: "Mobile Apps", path: "/services/mobile-apps" },
        { name: "UI/UX Design", path: "/services/ui-ux-design" },
      ]
    },
    { 
      name: "Products", 
      path: "/products",
      submenu: [
        { name: "Product Suite", path: "/products/suite" },
        { name: "Enterprise Solutions", path: "/products/enterprise" },
        { name: "API Platform", path: "/products/api" },
      ]
    },
    { 
      name: "Training", 
      path: "/training",
      submenu: [
        { name: "Workshops", path: "/training/workshops" },
        { name: "Certifications", path: "/training/certifications" },
        { name: "On-Demand Courses", path: "/training/courses" },
      ]
    },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-16 w-auto" 
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => handleSubmenuHover(item.name, true)}
                onMouseLeave={() => handleSubmenuHover(item.name, false)}
              >
                {item.submenu ? (
                  <>
                    <button 
                      className={`px-4 py-2 text-gray-800 hover:text-[#E63946] transition-all duration-200 flex items-center ${
                        location.pathname.startsWith(item.path) ? activeStyle : ""
                      }`}
                      onClick={() => handleSubmenuClick(item.name)}
                      aria-expanded={openSubmenu === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      <span className="ml-1.5 transform transition-transform duration-200">
                        {openSubmenu === item.name ? (
                          <FaChevronUp className="text-xs" />
                        ) : (
                          <FaChevronDown className="text-xs" />
                        )}
                      </span>
                    </button>
                    <div 
                      className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-xl py-1 z-50 border border-gray-100 transition-all duration-200 origin-top ${
                        openSubmenu === item.name 
                          ? 'opacity-100 scale-y-100 visible' 
                          : 'opacity-0 scale-y-95 invisible'
                      }`}
                      onMouseEnter={() => handleSubmenuHover(item.name, true)}
                      onMouseLeave={() => handleSubmenuHover(item.name, false)}
                      role="menu"
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2.5 text-gray-700 hover:bg-gray-50 hover:text-[#E63946] transition-colors duration-200 ${
                              isActive ? 'bg-gray-50 text-[#E63946]' : ''
                            }`
                          }
                          role="menuitem"
                        >
                          <span className="flex items-center">
                            <span className="ml-2">{subItem.name}</span>
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-4 py-2 text-gray-800 hover:text-[#E63946] transition-colors duration-200 ${
                        isActive ? activeStyle : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            <NavLink
              to="/quote"
              className="flex items-center bg-[#E63946] text-white px-5 py-2.5 rounded-md hover:bg-[#c1121f] transition-colors duration-200 ml-4 font-medium"
            >
              Contact us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#E63946] focus:outline-none transition duration-300"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              {isOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-40 bg-white mt-24 overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: 'calc(100vh - 6rem)' }}
        aria-hidden={!isOpen}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className={`flex justify-between w-full px-3 py-3 rounded-md text-base font-medium transition duration-300 ${
                      location.pathname.startsWith(item.path) ? mobileActiveStyle : "text-gray-800 hover:bg-gray-100 hover:text-[#E63946]"
                    }`}
                    aria-expanded={openSubmenu === item.name}
                  >
                    {item.name}
                    {openSubmenu === item.name ? (
                      <FaChevronUp className="text-xs mt-1" />
                    ) : (
                      <FaChevronDown className="text-xs mt-1" />
                    )}
                  </button>
                  <div 
                    className={`pl-4 ${openSubmenu === item.name ? 'block' : 'hidden'}`}
                    role="menu"
                  >
                    {item.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block px-3 py-2.5 rounded-md text-base font-medium transition duration-300 ${
                            isActive ? mobileActiveStyle : "text-gray-800 hover:bg-gray-100 hover:text-[#E63946]"
                          }`
                        }
                        onClick={toggleMenu}
                        role="menuitem"
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-3 rounded-md text-base font-medium transition duration-300 ${
                      isActive ? mobileActiveStyle : "text-gray-800 hover:bg-gray-100 hover:text-[#E63946]"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <NavLink
            to="/quote"
            className="flex items-center justify-center bg-[#E63946] text-white px-3 py-3 rounded-md hover:bg-[#c1121f] transition duration-300 mt-2 mx-2"
            onClick={toggleMenu}
          >
            Contact us
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;