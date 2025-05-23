"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../../components/ProjectCard/ProjectCard"
import "./Projects.scss"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Hostel-Finding Platform",
      description:
        "A full-stack application that helps students find and book hostels near their universities. Features include search filters, booking management, and review system.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "HR Management System",
      description:
        "An internal operational tool built for Freecharge that streamlines HR processes including employee onboarding, performance reviews, and leave management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Redux", "Express.js", "MongoDB"],
      category: "fullstack",
      liveUrl: "",
      githubUrl: "https://github.com",
    },
    {
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "Node.js", "AWS", "Stripe"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website for a graphic designer showcasing their work with a beautiful gallery and contact form.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "SCSS", "Framer Motion"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management API",
      description:
        "A RESTful API for task management with user authentication, task CRUD operations, and team collaboration features.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
      category: "backend",
      liveUrl: "",
      githubUrl: "https://github.com",
    },
    {
      title: "Weather App",
      description:
        "A weather application that provides current weather conditions and forecasts for any location using a third-party weather API.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React.js", "API Integration", "CSS3"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
  ]

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <motion.h1
            className="page-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.p
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A collection of my recent work, showcasing my skills and expertise in web development.
          </motion.p>

          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${filter === category.id ? "active" : ""}`}
                onClick={() => setFilter(category.id)}
              >
                {category.label}
                {filter === category.id && (
                  <motion.div
                    className="tab-indicator"
                    layoutId="tab-indicator"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="container">
          <motion.div className="projects-grid" layout>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
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
  )
}

export default Projects

