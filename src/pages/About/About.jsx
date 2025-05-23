"use client";

import { motion } from "framer-motion";
import { FiDownload, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import "./About.scss";
import aboutimg from "../../assets/img2.jpg";
import resume from "../../assets/Manav_Kumar_eResume.pdf";

const About = () => {
  const experiences = [
    {
      company: "Freecharge",
      position: "Software Development Engineer",
      period: "2024 - Present",
      description:
        "Developing and maintaining HR management systems and internal operational panels. Building full-stack applications using React.js, Express.js, and MongoDB. Improved system performance by 40% through code optimization and database indexing.",
    },
    {
      company: "Compitcom",
      position: "Software Engineer",
      period: "2024",
      description:
        "Developed responsive web applications with React.js and implemented RESTful APIs. Collaborated with cross-functional teams to deliver projects on time and within scope. Reduced page load time by 30% through performance optimization techniques.",
    },
    {
      company: "Self-employed",
      position: "Junior Developer",
      period: "2018 - 2024",
      description:
        "Worked on various web development projects while completing my education. Gained hands-on experience with React.js, Node.js, and AWS. Developed strong problem-solving skills and ability to work independently.",
    },
  ];

  const education = [
    {
      institution: "Poornima Institute of Engineering & Technology",
      degree:
        "Bachelor of Technology in Computer Science specialization in Ai & Ds",
      period: "2020 - 2024",
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Graduated with honors.",
    },
  ];

  return (
    <div className='about-page'>
      <section className='about-hero'>
        <div className='container'>
          <motion.h1
            className='page-title'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h1>

          <div className='about-content'>
            <motion.div
              className='about-image'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                src={aboutimg || "/placeholder.svg"}
                alt='Manav - Full Stack Software Engineer'
              />
            </motion.div>

            <motion.div
              className='about-text'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2>Manav</h2>
              <h3>Full-Stack Software Engineer</h3>

              <p>
                I'm a dedicated Software Engineer with expertise in building
                scalable web applications. Currently working at Freecharge, I
                develop HR management systems and internal operational tools
                that improve business efficiency and user experience.
              </p>

              <p>
                With a strong foundation in both frontend and backend
                technologies, I specialize in creating robust applications using
                React.js, Node.js, and MongoDB. I'm passionate about writing
                clean, maintainable code and implementing best practices in
                software development.
              </p>

              <p>
                I thrive in collaborative environments where I can contribute to
                innovative projects and continue growing as a developer. My goal
                is to join a forward-thinking company where I can leverage my
                technical skills to solve complex problems and make a meaningful
                impact.
              </p>

              <div className='about-links'>
                <motion.a
                  href={resume}
                  className='btn btn-primary'
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  download
                >
                  Download Resume <FiDownload />
                </motion.a>

                <div className='social-links'>
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
                  <motion.a
                    href='https://twitter.com/yourusername'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label='Twitter Profile'
                  >
                    <FiTwitter />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className='experience-section'>
        <div className='container'>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Professional Experience
          </motion.h2>

          <div className='timeline'>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className='timeline-item'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='timeline-dot'></div>
                <div className='timeline-content glass-card'>
                  <h3>{exp.position}</h3>
                  <div className='timeline-meta'>
                    <span className='company'>{exp.company}</span>
                    <span className='period'>{exp.period}</span>
                  </div>
                  <p>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='education-section'>
        <div className='container'>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Education
          </motion.h2>

          <div className='timeline'>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className='timeline-item'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className='timeline-dot'></div>
                <div className='timeline-content glass-card'>
                  <h3>{edu.degree}</h3>
                  <div className='timeline-meta'>
                    <span className='company'>{edu.institution}</span>
                    <span className='period'>{edu.period}</span>
                  </div>
                  <p>{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className='skills-section'>
        <div className='container'>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Technical Skills
          </motion.h2>

          <div className='skills-container'>
            <motion.div
              className='skills-category glass-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3>Frontend</h3>
              <div className='skills-list'>
                <span>React.js</span>
                <span>Redux</span>
                <span>JavaScript (ES6+)</span>
                <span>TypeScript</span>
                <span>HTML5</span>
                <span>CSS3/SCSS</span>
                <span>Responsive Design</span>
                <span>Framer Motion</span>
              </div>
            </motion.div>

            <motion.div
              className='skills-category glass-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3>Backend</h3>
              <div className='skills-list'>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>RESTful APIs</span>
                <span>GraphQL</span>
                <span>Authentication</span>
                <span>Database Design</span>
                <span>SQL</span>
              </div>
            </motion.div>

            <motion.div
              className='skills-category glass-card'
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3>DevOps & Tools</h3>
              <div className='skills-list'>
                <span>Git/GitHub</span>
                <span>AWS</span>
                <span>Docker</span>
                <span>CI/CD</span>
                <span>Jest</span>
                <span>Webpack</span>
                <span>Agile/Scrum</span>
                <span>JIRA</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
