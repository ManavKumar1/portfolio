"use client";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiPlay,
  FiCode,
  FiGithub,
  FiMail,
  FiSettings,
} from "react-icons/fi";
import "./SDE.scss";
import video from "../../../assets/Video/Intro.mp4";
import resume from '../../../assets/Resumes/Manav_Kumar_RESUME.pdf'
const SDE = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl =resume;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Manav_Kumar_SDE_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sde-page">
      <section className="sde-hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-text">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Software Development Engineer
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Building scalable web applications and robust backend systems
                with modern technologies
              </motion.p>
            </div>

            <motion.div
              className="video-container"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="video-wrapper">
                 <video
                  poster="/placeholder.jpg"
                  className="intro-video"
                  autoPlay
                  defaultMuted
                  playsInline
                  controls
                  controlsList="nodownload"
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                  <FiPlay className="play-icon" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="sde-actions">
        <div className="container">
          <motion.div
            className="actions-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="action-card primary-action"
              onClick={handleDownloadResume}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="action-icon" />
              <h3>Download Resume</h3>
              <p>
                Get my latest SDE resume with detailed experience and projects
              </p>
            </motion.button>

            <motion.a
              href="/projects"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode className="action-icon" />
              <h3>View Projects</h3>
              <p>
                Explore my development projects and technical implementations
              </p>
            </motion.a>

            <motion.a
              href="/expertise"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSettings className="action-icon" />
              <h3>Technical Skills</h3>
              <p>View my technical proficiency and development expertise</p>
            </motion.a>

            <motion.a
              href="https://github.com/ManavKumar1"
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="action-icon" />
              <h3>GitHub Profile</h3>
              <p>
                Check out my code repositories and open source contributions
              </p>
            </motion.a>

            <motion.a
              href="/contact"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="action-icon" />
              <h3>Get in Touch</h3>
              <p>Let's discuss opportunities and potential collaborations</p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      <section className="sde-cta">
        <div className="container">
          <motion.div
            className="cta-content glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Build Something Amazing?</h2>
            <p>
              I'm passionate about creating efficient, scalable solutions that
              solve real-world problems. Let's discuss how I can contribute to
              your development team.
            </p>
            <div className="cta-buttons">
              <motion.a
                href="/contact"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SDE;
