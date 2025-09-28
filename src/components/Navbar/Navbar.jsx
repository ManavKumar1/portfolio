"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "./Navbar.scss";

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/expertise", label: "Skills & Expertise" },
    { path: "/contact", label: "Contact" },
    { path: "/sde", label: "SDE Role" },
    { path: "/qa", label: "QA Role" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMenu}>
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Manav.dev
          </motion.span>
        </Link>

        <div className='navbar-right'>
          <motion.button
            className='theme-toggle'
            onClick={toggleTheme}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </motion.button>

          <div className='menu-icon' onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </div>

          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            {navLinks.map((link, index) => (
              <motion.li
                key={index}
                className='nav-item'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.path}
                  className={`nav-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <motion.div
                      className='nav-indicator'
                      layoutId='nav-indicator'
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
