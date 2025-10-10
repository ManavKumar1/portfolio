"use client";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import "./ProjectCard.scss";
import CardPhoto from "../../assets/photo.avif";

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl } = project;

  return (
    <motion.div
      className='project-card glass-card'
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className='project-image'>
        <img src={image || CardPhoto} alt={title} />

        <div className='project-links'>
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label='View live project'
            >
              <FiExternalLink />
            </motion.a>
          )}
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label='View GitHub repository'
            >
              <FiGithub />
            </motion.a>
          )}
        </div>
      </div>
      <div className='project-content'>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className='project-tags'>
          {tags.map((tag, index) => (
            <span key={index} className='tag'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
