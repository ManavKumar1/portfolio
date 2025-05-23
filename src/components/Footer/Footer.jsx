"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import "./Footer.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/manavkumar1",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/manav-kumar-0",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter />,
      url: "https://twitter.com/yourusername",
      label: "Twitter",
    },
    { icon: <FiMail />, url: "mailto:reachformanav@gmail.com", label: "Email" },
  ];

  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-content'>
          <div className='footer-logo'>
            <h3>Manav.dev</h3>
            <p>Software Engineer specializing in full-stack development</p>
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
          <p>&copy; {currentYear} Manav. All rights reserved.</p>

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
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
