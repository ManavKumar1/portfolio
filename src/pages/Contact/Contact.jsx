"use client";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.scss";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMapPin />,
      title: "Location",
      details: "Jaipur, Rajasthan, India",
    },
    {
      icon: <FiMail />,
      title: "Email",
      details: "Reachformanav@gmail.com",
    },
    {
      icon: <FiPhone />,
      title: "Phone",
      details: "+91 7014667988",
    },
  ];

  return (
    <div className='contact-page'>
      <section className='contact-hero'>
        <div className='container'>
          <motion.h1
            className='page-title'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h1>
          <motion.p
            className='page-subtitle'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I'm currently exploring new opportunities. Feel free to reach out if
            you'd like to discuss potential roles or have any questions about my
            experience.
          </motion.p>
        </div>
      </section>

      <section className='contact-content'>
        <div className='container'>
          <div className='contact-grid'>
            <motion.div
              className='contact-info'
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className='contact-info-content glass-card'>
                <h2>Contact Information</h2>
                <p>
                  I'm open to full-time software engineering positions and would
                  love to connect:
                </p>

                <div className='contact-details'>
                  {contactInfo.map((info, index) => (
                    <div key={index} className='contact-item'>
                      <div className='contact-icon'>{info.icon}</div>
                      <div className='contact-text'>
                        <h3>{info.title}</h3>
                        <p>{info.details}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='social-links'>
                  <h3>Professional Profiles</h3>
                  <div className='social-icons'>
                    <motion.a
                      href='https://linkedin.com/in/manav-kumar-0'
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label='LinkedIn Profile'
                    >
                      <FiLinkedin />
                    </motion.a>
                    <motion.a
                      href='https://github.com/manavkumar1'
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label='GitHub Profile'
                    >
                      <FiGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className='contact-form-container'
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <section className='map-section'>
        <div className='container'>
          <motion.div
            className='map-container glass-card'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112065.8376557341!2d76.96108602665392!3d28.4594964911754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1880bbd184e5%3A0x2bfcf24c0b5f7c34!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1716454347236!5m2!1sen!2sin'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Google Maps'
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
