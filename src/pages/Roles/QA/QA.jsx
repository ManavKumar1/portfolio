"use client";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiPlay,
  FiCheckCircle,
  FiMail,
  FiSettings,
} from "react-icons/fi";
import { GrBug } from "react-icons/gr";
import "./QA.scss";
import video from "../../../assets/Video/Intro.mp4";
import resume from '../../../assets/Resumes/Manav_Resume_QA.pdf'
const QA = () => {
  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const resumeUrl = resume;
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Manav_Kumar_QA_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  //   const certifications = [
  //     "ISTQB Foundation Level",
  //     "Selenium WebDriver Certification",
  //     "Agile Testing Certification",
  //     "API Testing Specialist",
  //   ]

  return (
    <div className="qa-page">
      <section className="qa-hero">
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
                Quality Assurance Engineer
              </motion.h1>
              <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Ensuring software quality through comprehensive testing
                strategies, automation, and continuous improvement
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

      <section className="qa-actions">
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
              <h3>Download QA Resume</h3>
              <p>
                Get my detailed QA resume with testing experience and
                certifications
              </p>
            </motion.button>

            <motion.a
              href="/projects"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCheckCircle className="action-icon" />
              <h3>Testing Projects</h3>
              <p>Explore my testing frameworks and automation projects</p>
            </motion.a>

            <motion.a
              href="/expertise"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSettings className="action-icon" />
              <h3>QA Skills & Tools</h3>
              <p>View my testing expertise and automation capabilities</p>
            </motion.a>

            <motion.a
              href="https://github.com/ManavKumar1"
              target="_blank"
              rel="noopener noreferrer"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <GrBug className="action-icon" />
              <h3>Test Automation</h3>
              <p>View my automated test suites and testing frameworks</p>
            </motion.a>

            <motion.a
              href="/contact"
              className="action-card"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail className="action-icon" />
              <h3>Discuss QA Needs</h3>
              <p>
                Let's talk about your testing requirements and quality goals
              </p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* <section className="qa-certifications">
        <div className="container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Certifications & Training
          </motion.h2>

          <motion.div
            className="certifications-grid"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="certification-item glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                <FiCheckCircle className="cert-icon" />
                {cert}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      <section className="qa-cta">
        <div className="container">
          <motion.div
            className="cta-content glass-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Ensure Quality Excellence?</h2>
            <p>
              I'm passionate about delivering high-quality software through
              comprehensive testing strategies, automation, and continuous
              improvement. Let's discuss how I can help ensure your product's
              success.
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

export default QA;
