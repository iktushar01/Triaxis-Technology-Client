import React, { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/logoWhiteBg.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const toggleSubmenu = (item) => {
    setOpenSubmenu(openSubmenu === item ? null : item);
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
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

          {/* Desktop Menu - Show on lg screens and up */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className={`px-3 py-2 text-gray-800 hover:text-[#E63946] transition duration-300 flex items-center ${
                        location.pathname.startsWith(item.path) ? activeStyle : ""
                      }`}
                      onClick={() => toggleSubmenu(item.name)}
                      aria-expanded={openSubmenu === item.name}
                      aria-haspopup="true"
                    >
                      {item.name}
                      {openSubmenu === item.name ? (
                        <FaChevronUp className="ml-1 text-xs" />
                      ) : (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </button>
                    <div 
                      className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 ${
                        openSubmenu === item.name ? 'block' : 'hidden'
                      } group-hover:block`}
                      onMouseLeave={() => setOpenSubmenu(null)}
                      role="menu"
                    >
                      {item.submenu.map((subItem) => (
                        <NavLink
                          key={subItem.name}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-[#E63946] transition duration-300 ${
                              isActive ? 'bg-gray-100' : ''
                            }`
                          }
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
                      `px-3 py-2 text-gray-800 hover:text-[#E63946] transition duration-300 
                      ${isActive ? activeStyle : ""}`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
            <NavLink
              to="/quote"
              className="flex items-center bg-[#E63946] text-white px-4 py-2 rounded-md hover:bg-[#c1121f] transition duration-300 ml-4"
            >
              Contact us
            </NavLink>
          </div>

          {/* Mobile menu button - Show on lg screens and below */}
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

      {/* Mobile Menu - Fixed position to prevent content shifting */}
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
                    className={`flex justify-between w-full px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
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
                          `block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
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
                    `block px-3 py-2 rounded-md text-base font-medium transition duration-300 ${
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
            className="flex items-center bg-[#E63946] text-white px-3 py-2 rounded-md hover:bg-[#c1121f] transition duration-300 mt-2"
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