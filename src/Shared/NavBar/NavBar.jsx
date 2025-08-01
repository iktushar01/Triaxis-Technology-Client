import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleSubmenuToggle = (itemName) => {
    setOpenSubmenu(openSubmenu === itemName ? null : itemName);
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
        { name: "Service 1", path: "/services/service1" },
        { name: "Service 2", path: "/services/service2" },
        { name: "Service 3", path: "/services/service3" },
      ]
    },
    { 
      name: "Products", 
      path: "/products",
      submenu: [
        { name: "Product 1", path: "/products/product1" },
        { name: "Product 2", path: "/products/product2" },
        { name: "Product 3", path: "/products/product3" },
      ]
    },
    { 
      name: "Training", 
      path: "/training",
      submenu: [
        { name: "Training 1", path: "/training/training1" },
        { name: "Training 2", path: "/training/training2" },
        { name: "Training 3", path: "/training/training3" },
      ]
    },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-4 cursor-pointer">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-22 w-auto" 
            />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <div className="flex items-center">
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `px-3 py-2 text-gray-800 hover:text-[#E63946] transition duration-300 cursor-pointer flex items-center ${
                            isActive ? activeStyle : ""
                          }`
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleSubmenuToggle(item.name);
                        }}
                      >
                        {item.name}
                      </NavLink>
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={() => handleSubmenuToggle(item.name)}
                        aria-expanded={openSubmenu === item.name}
                      >
                        {openSubmenu === item.name ? (
                          <FaChevronUp className="text-xs" />
                        ) : (
                          <FaChevronDown className="text-xs" />
                        )}
                      </button>
                    </div>
                    <div 
                      className={`absolute left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-all duration-200 origin-top ${
                        openSubmenu === item.name ? 'scale-y-100 opacity-100' : 'scale-y-95 opacity-0 invisible'
                      } group-hover:scale-y-100 group-hover:opacity-100 group-hover:visible`}
                      onMouseLeave={() => openSubmenu !== item.name && setOpenSubmenu(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#E63946] transition duration-300 cursor-pointer ${
                              isActive ? 'bg-gray-100' : ''
                            }`
                          }
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 text-gray-800 hover:text-[#E63946] transition duration-300 cursor-pointer ${
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
              to="/contact"
              className="flex items-center bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c1121f] transition duration-300 ml-4 cursor-pointer"
            >
              Contact us
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#E63946] focus:outline-none transition duration-300 cursor-pointer"
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
                  <div className="flex justify-between items-center">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex-1 px-3 py-2 rounded-md text-base font-medium transition duration-300 cursor-pointer ${
                          isActive ? mobileActiveStyle : "text-gray-800 hover:bg-gray-100 hover:text-[#E63946]"
                        }`
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        handleSubmenuToggle(item.name);
                      }}
                    >
                      {item.name}
                    </NavLink>
                    <button
                      className="p-2 focus:outline-none"
                      onClick={() => handleSubmenuToggle(item.name)}
                    >
                      {openSubmenu === item.name ? (
                        <FaChevronUp className="text-xs" />
                      ) : (
                        <FaChevronDown className="text-xs" />
                      )}
                    </button>
                  </div>
                  <div 
                    className={`pl-4 transition-all duration-200 overflow-hidden ${
                      openSubmenu === item.name ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    {item.submenu.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-base font-medium transition duration-300 cursor-pointer ${
                            isActive ? mobileActiveStyle : "text-gray-800 hover:bg-gray-100 hover:text-[#E63946]"
                          }`
                        }
                        onClick={toggleMenu}
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
                    `block px-3 py-2 rounded-md text-base font-medium transition duration-300 cursor-pointer ${
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
            to="/contact"
            className="flex items-center bg-[#E63946] text-white px-3 py-2 rounded-md hover:bg-[#c1121f] transition duration-300 mt-2 cursor-pointer"
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