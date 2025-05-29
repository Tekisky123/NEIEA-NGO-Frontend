import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../images/logo2.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveDropdown(null);
  };

  const handleDropdownHover = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = (dropdownName: string) => {
    if (!dropdownName.includes("-")) {
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Nav data
  const navData = {
    main: [
      { name: "Home", path: "/" },
      {
        name: "Our Work",
        path: "/our-work",
        submenu: [
          {
            name: "Introduction and Working",
            path: "/neieaintroduction-and-working",
          },
          { name: "Our Story", path: "/about-us" },
          { name: "History", path: "/history" },
          { name: "Vision and Mission", path: "/mission-and-vision" },
          { name: "Leaders", path: "/leaders-of-neiea" },
          { name: "Team Leaders", path: "/team-leaders" },
        ],
      },
      {
        name: "About Us",
        path: "/about",
        submenu: [
          {
            name: "Introduction and Working",
            path: "/neieaintroduction-and-working",
          },
          { name: "Our Story", path: "/about-us" },
          { name: "History", path: "/history" },
          { name: "Vision and Mission", path: "/mission-and-vision" },
          { name: "Leaders", path: "/leaders-of-neiea" },
          { name: "Team Leaders", path: "/team-leaders" },
        ],
      },
      {
        name: "Take Action",
        path: "/take-action",
        submenu: [
          { name: "Volunteer", path: "/volunteer" },
          { name: "Advocate", path: "/advocate" },
          { name: "Fundraise", path: "/fundraise" },
        ],
      },
      {
        name: "Courses",
        path: "/courses",
      
      },
      { name: "Sponsorship", path: "/sponsorship" },
    ],
  };

  return (
    <header
      ref={navbarRef}
      className={`sticky w-full top-0 z-50 transition-all duration-300 bg-white shadow-md`}
    >
      {/* Logo and Organization Name - Centered and Prominent */}
      <div className="container mx-auto p-1">
        <div className="flex flex-col items-center text-center">
          <Link
            to="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md transition-all"
          >
            <img
              src={logo}
              alt="NEIEA Logo"
              className={`transition-all duration-300 h-16 md:h-20`}
            />
            <div className="mt-2">
              <h1 className="text-xl md:text-3xl font-bold text-start text-primary-600">
                The New Equitable and Innovative Educational Association (NEIEA)
              </h1>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`transition-all duration-300 py-1 bg-primary-700 shadow-md`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-white hover:text-white hover:bg-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 py-3">
              {navData.main.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() =>
                    link.submenu && handleDropdownHover(link.name)
                  }
                  onMouseLeave={() => handleDropdownLeave(link.name)}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-md text-md font-medium transition-colors flex items-center focus:outline-none focus:ring-2 focus:ring-white ${
                        isActive
                          ? "text-white bg-primary-800/70"
                          : "text-white/90 hover:text-white hover:bg-primary-800/40"
                      }`
                    }
                    onClick={(e) => {
                      if (link.submenu) {
                        e.preventDefault();
                        toggleDropdown(link.name);
                      }
                    }}
                  >
                    {link.name}
                    {link.submenu && (
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </NavLink>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === link.name && link.submenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 transform -translate-x-1/2 mt-1 min-w-[200px] bg-white rounded-lg shadow-xl py-2 z-20 border border-gray-100"
                        onMouseEnter={() => handleDropdownHover(link.name)}
                        onMouseLeave={() => handleDropdownLeave(link.name)}
                      >
                        {link.submenu.map((sublink) => (
                          <div key={sublink.path} className="relative group">
                            <NavLink
                              to={sublink.path}
                              className={({ isActive }) =>
                                `block px-4 py-2 text-sm ${
                                  isActive
                                    ? "bg-primary-50 text-primary-700 font-medium"
                                    : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                } transition-colors flex justify-between items-center`
                              }
                              onMouseEnter={() =>
                                sublink.submenu &&
                                handleDropdownHover(
                                  `${link.name}-${sublink.name}`
                                )
                              }
                              onMouseLeave={() =>
                                sublink.submenu &&
                                handleDropdownLeave(
                                  `${link.name}-${sublink.name}`
                                )
                              }
                            >
                              {sublink.name}
                              {sublink.submenu && (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </NavLink>

                            {/* Second level dropdown */}
                            {sublink.submenu && (
                              <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                animate={{
                                  opacity:
                                    activeDropdown ===
                                    `${link.name}-${sublink.name}`
                                      ? 1
                                      : 0,
                                  x:
                                    activeDropdown ===
                                    `${link.name}-${sublink.name}`
                                      ? 0
                                      : 10,
                                }}
                                className="absolute left-full top-0 ml-1 min-w-[200px] bg-white rounded-lg shadow-xl py-2 z-30 border border-gray-100"
                                onMouseEnter={() =>
                                  handleDropdownHover(
                                    `${link.name}-${sublink.name}`
                                  )
                                }
                                onMouseLeave={() =>
                                  handleDropdownLeave(
                                    `${link.name}-${sublink.name}`
                                  )
                                }
                              >
                                {sublink.submenu.map((subSubLink) => (
                                  <NavLink
                                    key={subSubLink.path}
                                    to={subSubLink.path}
                                    className={({ isActive }) =>
                                      `block px-4 py-2 text-sm ${
                                        isActive
                                          ? "bg-primary-50 text-primary-700 font-medium"
                                          : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                                      } transition-colors`
                                    }
                                  >
                                    {subSubLink.name}
                                  </NavLink>
                                ))}
                              </motion.div>
                            )}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center ml-4">
              <Link to="/donate" className="btn-accent ">
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white shadow-lg"
          >
            <div className="py-2 space-y-1">
              {navData.main.map((link) => (
                <div
                  key={link.name}
                  className="border-b border-gray-100 last:border-0"
                >
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`w-full flex justify-between items-center px-4 py-3 text-base font-medium ${
                          activeDropdown === link.name
                            ? "text-primary-700 bg-primary-50"
                            : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-gray-50 overflow-hidden"
                          >
                            <div className="py-1 pl-6">
                              {link.submenu.map((sublink) => (
                                <div
                                  key={sublink.path}
                                  className="border-b border-gray-100 last:border-0"
                                >
                                  {sublink.submenu ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          toggleDropdown(
                                            `${link.name}-${sublink.name}`
                                          )
                                        }
                                        className={`w-full flex justify-between items-center px-4 py-2 text-sm font-medium ${
                                          activeDropdown ===
                                          `${link.name}-${sublink.name}`
                                            ? "text-primary-700 bg-primary-50"
                                            : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                                        }`}
                                      >
                                        {sublink.name}
                                        <ChevronDown
                                          className={`w-4 h-4 transition-transform ${
                                            activeDropdown ===
                                            `${link.name}-${sublink.name}`
                                              ? "rotate-180"
                                              : ""
                                          }`}
                                        />
                                      </button>

                                      <AnimatePresence>
                                        {activeDropdown ===
                                          `${link.name}-${sublink.name}` && (
                                          <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                              opacity: 1,
                                              height: "auto",
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.15 }}
                                            className="bg-gray-100 overflow-hidden"
                                          >
                                            <div className="py-1 pl-8">
                                              {sublink.submenu.map(
                                                (subSubLink) => (
                                                  <NavLink
                                                    key={subSubLink.path}
                                                    to={subSubLink.path}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                                                  >
                                                    {subSubLink.name}
                                                  </NavLink>
                                                )
                                              )}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <NavLink
                                      to={sublink.path}
                                      className={({ isActive }) =>
                                        `block px-4 py-2 text-sm ${
                                          isActive
                                            ? "text-primary-700 font-medium bg-primary-50"
                                            : "text-gray-700 hover:text-primary-600 hover:bg-primary-50"
                                        }`
                                      }
                                    >
                                      {sublink.name}
                                    </NavLink>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 text-base font-medium ${
                          isActive
                            ? "text-primary-700 bg-primary-50"
                            : "text-neutral-700 hover:text-primary-600 hover:bg-primary-50"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </div>
              ))}

              {/* Mobile CTA Button */}
              <div className="px-4 py-3">
                <Link to="/donate" className="btn-accent">
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
