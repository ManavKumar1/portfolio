"use client";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiSmartphone,
  FiServer,
  FiDatabase,
  FiCloud,
} from "react-icons/fi";
import "./Services.scss";

import TechOrbit from "../../components/TechOrbit/TechOrbit";

const Services = () => {
  const services = [
    {
      icon: <FiCode />,
      title: "Web Development",
      description:
        "Custom websites built with modern technologies like React.js, ensuring responsive design and optimal performance.",
      features: [
        "Responsive design for all devices",
        "Interactive UI/UX",
        "SEO optimization",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
    },
    {
      icon: <FiSmartphone />,
      title: "Mobile App Development",
      description:
        "Cross-platform mobile applications that provide native-like experience using React Native.",
      features: [
        "iOS and Android development",
        "Offline functionality",
        "Push notifications",
        "App store submission",
        "Maintenance and updates",
      ],
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description:
        "Robust server-side applications with Node.js and Express.js to power your web and mobile apps.",
      features: [
        "RESTful API development",
        "Authentication & authorization",
        "Database integration",
        "Performance optimization",
        "Security implementation",
      ],
    },
    {
      icon: <FiLayout />,
      title: "UI/UX Design",
      description:
        "User-centered design that focuses on creating intuitive and engaging user experiences.",
      features: [
        "Wireframing and prototyping",
        "User research",
        "Visual design",
        "Interaction design",
        "Usability testing",
      ],
    },
    {
      icon: <FiDatabase />,
      title: "Database Design",
      description:
        "Efficient database architecture that ensures data integrity, security, and performance.",
      features: [
        "Schema design",
        "Data modeling",
        "Query optimization",
        "Migration strategies",
        "Backup and recovery",
      ],
    },
    {
      icon: <FiCloud />,
      title: "Cloud Services",
      description:
        "Deployment and management of applications on cloud platforms like AWS.",
      features: [
        "Server setup and configuration",
        "CI/CD pipeline implementation",
        "Scalability planning",
        "Performance monitoring",
        "Cost optimization",
      ],
    },
  ];

  return (
    <div className='services-page'>
      <section className='services-hero'>
        <div className='container'>
          <motion.h1
            className='page-title'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h1>
          <motion.p
            className='page-subtitle'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I bring experience across the full stack, with a focus on delivering
            scalable, user-centric applications for the web and mobile
            platforms.
          </motion.p>
        </div>
      </section>

      <section className='services-grid-section'>
        <div className='container'>
          <div className='services-grid'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                className='service-card glass-card'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className='service-icon'>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className='service-features'>
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='process-section'>
        <div className='container'>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work Process
          </motion.h2>

          <div className='process-steps'>
            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className='step-number'>01</div>
              <h3>Discovery</h3>
              <p>
                I start by understanding your business, goals, and requirements
                through detailed discussions and research.
              </p>
            </motion.div>

            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className='step-number'>02</div>
              <h3>Planning</h3>
              <p>
                Based on the discovery phase, I create a detailed plan including
                project scope, timeline, and deliverables.
              </p>
            </motion.div>

            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='step-number'>03</div>
              <h3>Design</h3>
              <p>
                I design the user interface and experience, focusing on
                usability, aesthetics, and your brand identity.
              </p>
            </motion.div>

            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className='step-number'>04</div>
              <h3>Development</h3>
              <p>
                I build the solution using modern technologies and best
                practices, ensuring quality and performance.
              </p>
            </motion.div>

            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className='step-number'>05</div>
              <h3>Testing</h3>
              <p>
                I thoroughly test the solution to ensure it works flawlessly
                across all devices and browsers.
              </p>
            </motion.div>

            <motion.div
              className='process-step glass-card'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className='step-number'>06</div>
              <h3>Deployment</h3>
              <p>
                I deploy the solution to your preferred hosting platform and
                ensure everything is working correctly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className='tech-orbit-section'>
        <motion.div
          className='section-title-wrapper'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='section-title'>Technical Proficiency</h2>
          <p className='section-subtitle'>
            Hover over the technologies to learn more about my experience with
            each one
          </p>
        </motion.div>
        <TechOrbit />
      </section>

      <section className='cta-section'>
        <div className='container'>
          <motion.div
            className='cta-content glass-card'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your project requirements and how I can help you
              achieve your goals. Contact me today to schedule a free
              consultation.
            </p>
            <motion.a
              href='/contact'
              className='btn btn-primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
