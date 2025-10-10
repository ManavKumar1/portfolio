"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.scss";
import projects from "../../data/Projects"; 
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ];

  return (
    <div className='projects-page'>
      <section className='projects-hero'>
        <div className='container'>
          <motion.h1
            className='page-title'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className='page-subtitle'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A collection of my recent work, showcasing my skills and expertise
            in web development.
          </motion.p>

          <motion.div
            className='filter-tabs'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${
                  filter === category.id ? "active" : ""
                }`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
                {filter === category.id && (
                  <motion.div
                    className='tab-indicator'
                    layoutId='tab-indicator'
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className='projects-grid-section'>
        <div className='container'>
          <motion.div className='projects-grid' layout>
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
