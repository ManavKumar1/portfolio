"use client";

import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiGitBranch } from "react-icons/fi";
import HeroSection from "../../components/HeroSection/HeroSection";
import SkillCard from "../../components/SkillCard/SkillCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Home.scss";

const Home = () => {
  const skills = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React.js, Redux, and modern CSS frameworks.",
    },
    {
      icon: <FiServer />,
      title: "Backend Development",
      description:
        "Creating robust server-side applications with Express.js, Node.js, and MongoDB for scalable solutions.",
    },
    {
      icon: <FiDatabase />,
      title: "Database Architecture",
      description:
        "Designing efficient database schemas and implementing optimized queries for high-performance applications.",
    },
    {
      icon: <FiGitBranch />,
      title: "CI/CD & DevOps",
      description:
        "Implementing continuous integration and deployment pipelines for efficient software delivery.",
    },
  ];

  const featuredProjects = [
    {
      title: "HR Management System",
      description:
        "An internal operational tool built for Freecharge that streamlines HR processes including employee onboarding, performance reviews, and leave management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Redux", "Express.js", "MongoDB"],
      liveUrl: "",
      githubUrl: "https://github.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "A high-performance e-commerce platform with product catalog, shopping cart, user authentication, and payment integration handling 10,000+ daily users.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Node.js", "AWS", "Razorpay"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Student Housing Portal",
      description:
        "A full-stack application that helps students find and book hostels near their universities with search filters, booking management, and review system.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  return (
    <div className='home-page'>
      <HeroSection />

      <section className='skills-section'>
        <div className='container'>
          <motion.h2
            className='section-title'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Competencies
          </motion.h2>

          <div className='skills-grid'>
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className='projects-section'>
        <div className='container'>
          <motion.div
            className='section-header'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className='section-title'>Featured Projects</h2>
            <a href='/projects' className='view-all'>
              View All Projects
            </a>
          </motion.div>

          <div className='projects-grid'>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
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
            <h2>Looking for New Opportunities</h2>
            <p>
              I'm interested in challenging full-time roles where I can
              contribute my expertise in full-stack development to create
              impactful solutions.
            </p>
            <motion.a
              href='/contact'
              className='btn btn-primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
