"use client";
import { motion } from "framer-motion";
import "./Footer.scss";
import { socialLinks } from "../../data/AboutData";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const getIcon = (iconName) => {
    switch (iconName) {
      case "github":
        return <FiGithub />;
      case "linkedin":
        return <FiLinkedin />;
      case "mail":
        return <FiMail />;
      // Uncomment below if Twitter is needed
      // case "twitter":
      //   return <FiTwitter />;
      default:
        return null;
    }
  };
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <h3>Manav.dev</h3>
            {/* <p>Software Engineer specializing in full-stack development</p> */}
            <p>Full-Stack Developer & QA Automation Engineer</p>
          </div>

          <div className='footer-links'>
            <div className='footer-section'>
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/about'>About</a>
                </li>
                <li>
                  <a href='/projects'>Projects</a>
                </li>
                <li>
                  <a href='/expertise'>Skills & Expertise</a>
                </li>
                <li>
                  <a href='/contact'>Contact</a>
                </li>
                <li>
                  <a href='/sde'>SDE Role</a>
                </li>
                <li>
                  <a href='/qa'>QA Role</a>
                </li>
              </ul>
            </div>

            <div className='footer-section'>
              <h4>Technical Skills</h4>
              <ul>
                <li>
                  <a href='/expertise#frontend'>Frontend Development</a>
                </li>
                <li>
                  <a href='/expertise#backend'>Backend Development</a>
                </li>
                <li>
                  <a href='/expertise#database'>Database Management</a>
                </li>
                <li>
                  <a href='/expertise#devops'>DevOps & CI/CD</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p>Made with ❤️</p>
          <p> &copy; {currentYear} Manav. All rights reserved.</p>

          <div className='social-links'>
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {getIcon(link.icon)}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
