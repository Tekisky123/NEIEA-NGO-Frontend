import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../images/Logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    if (isOpen) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownHover = (dropdownName: string) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Reduced delay for better UX
    setHoverTimeout(timeout);
  };

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  // Nav data
  const navData = {
    main: [
      { name: "Home", path: "/" },
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
        name: "NEIEA Working",
        path: "/working",
        submenu: [
          {
            name: "Blended Learning",
            path: "/the-blended-learning-mode-teaching",
          },
          { name: "Technology", path: "/mooc-technology-2" },
          {
            name: "DOP",
            path: "/dop",
            submenu: [
              { name: "DOP", path: "/dop-5" },
              { name: "Zoom Lectures", path: "/zoom-lectures" },
            ],
          },
          { name: "Teacher's Training", path: "/teachers-training" },
        ],
      },
      {
        name: "Course Offerings",
        path: "/courses",
        submenu: [
          {
            name: "Foundational English Course",
            path: "/foundational-english-course",
          },
          {
            name: "English Beginner's Level Course",
            path: "/english-beginners-level-course",
          },
          {
            name: "English Proficiency Course",
            path: "/english-proficiency-course-2",
          },
          {
            name: "NIOS English",
            path: "/nios-secondary-examinations-preparatory-course",
          },
          { name: "NIOS Math", path: "/nios-math" },
          { name: "Foundation Maths Course", path: "/foundation-maths-course" },
          {
            name: "Technical Training",
            path: "/technical-training",
            submenu: [
              {
                name: "Microsoft Office Course for Beginners",
                path: "/microsoft-office-course-for-beginners",
              },
              { name: "Technical Training", path: "/technical-training" },
            ],
          },
          { name: "Testimonials", path: "/testimonials" },
          { name: "Activities", path: "/activities" },
        ],
      },
      {
        name: "Our Programmes",
        path: "/programmes",
        submenu: [
          { name: "Girl's Education", path: "/girl-education" },
          { name: "Homeless Children", path: "/homeless-children" },
          { name: "Slum Children", path: "/slum-children" },
          {
            name: "Public schools and Private schools",
            path: "/public-schools-and-private-schools",
          },
          { name: "Dropout Students", path: "/dropout-students" },
          { name: "Madarsa Education", path: "/madarsa-education-2" },
        ],
      },
      { name: "Be The Change", path: "/change" },
      { name: "NEI USA", path: "/usa" },
      {
        name: "Donation",
        path: "/donation",
        submenu: [
          { name: "Donation", path: "/donation" },
          { name: "Crowdfunding", path: "/crowdfunding-campaign" },
        ],
      },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
      {
        name: "NEWS Media",
        path: "/news-media",
        submenu: [
          { name: "NEWS Media", path: "/news-media" },
          { name: "Gallery", path: "/gallery" },
        ],
      },
    ],
  };

  // Check if a link has a submenu
  const hasSubmenu = (linkName: string) => {
    const link = navData.main.find((item) => item.name === linkName);
    return link && link.submenu;
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top Section - Logo and Organization Name */}
      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-md"
            >
              <img
                src={logo}
                alt="NEIEA Logo"
                className={`transition-all duration-300 ${
                  scrolled ? "h-12" : "h-14"
                }`}
              />
              <div className="hidden md:block">
                <h1 className="text-lg font-bold text-gray-800">
                  The New Equitable and Innovative
                </h1>
                <h2 className="text-lg font-bold text-primary-600">
                  Educational Association (NEIEA)
                </h2>
              </div>
            </Link>

            {/* Mobile Menu Button - Placed in top section for better visibility */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation */}
      <div
        className={`bg-primary-700 transition-all duration-300 ${
          scrolled ? "py-1" : "py-2"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navData.main.map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() =>
                    hasSubmenu(link.name) && handleDropdownHover(link.name)
                  }
                  onMouseLeave={handleDropdownLeave}
                >
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isActive
                          ? "text-white bg-primary-800/50"
                          : "text-white/90 hover:text-white hover:bg-primary-800/30"
                      }`
                    }
                    onClick={(e) => {
                      if (hasSubmenu(link.name)) {
                        e.preventDefault();
                        toggleDropdown(link.name);
                      }
                    }}
                  >
                    {link.name}
                    {hasSubmenu(link.name) && (
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
                        className="absolute left-0 mt-1 w-56 bg-white rounded-lg shadow-xl py-2 z-20 border border-gray-100"
                        onMouseEnter={() => handleDropdownHover(link.name)}
                        onMouseLeave={handleDropdownLeave}
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
                                  opacity: activeDropdown === link.name ? 1 : 0,
                                  x: activeDropdown === link.name ? 0 : 10,
                                }}
                                className="absolute left-full top-0 ml-1 w-56 bg-white rounded-lg shadow-xl py-2 z-30 border border-gray-100"
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

            {/* CTA Button */}
            <div className="hidden lg:flex items-center ml-4">
              <Link
                to="/donate"
                className="bg-white text-primary-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              >
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
                  {hasSubmenu(link.name) ? (
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
                              {link.submenu?.map((sublink) => (
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
                                            <div className="py-1 pl-6">
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
                                      className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50"
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
                <Link
                  to="/donate"
                  className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-base font-medium transition-all shadow-md"
                >
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
