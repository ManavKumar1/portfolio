"use client";

import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import "./HeroSection.scss";
import heroimg from "../../assets/img1.jpg";
import react from "../../assets/react.svg";
import express from "../../assets/Express.svg";
import mongodb from "../../assets/MongoDB.svg";
import redux from "../../assets/Redux.svg";
import aws from "../../assets/AWS.svg";
import nextjs from "../../assets/Next.js.svg";
import scss from "../../assets/Sass.svg";
import nodejs from "../../assets/Node.js.svg";
import javascript from "../../assets/JavaScript.svg";
import typescript from "../../assets/TypeScript.svg";
import python from "../../assets/Python.svg";
import cpp from "../../assets/Cpp.svg";
import php from "../../assets/PHP.svg";
import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS3.svg";
import git from "../../assets/GitHub.svg";
import mysql from "../../assets/MySQL.svg";
import tailwind from "../../assets/Tailwind.svg";
import graphql from "../../assets/GraphQL.svg";

import selenium from "../../assets/Selenium.svg";
import maven from "../../assets/Apache Maven.svg";
import java from "../../assets/Java.svg";
import jenkins from "../../assets/Jenkins.svg";
import resume from "../../assets/Resumes/Manav_Kumar_RESUME.pdf";
import qaResume from "../../assets/Resumes/Manav_Resume_QA.pdf";

const techItems = [
  { icon: react, label: "React.js" },
  { icon: express, label: "Express.js" },
  { icon: mongodb, label: "MongoDB" },
  { icon: aws, label: "AWS Cloud" },
  { icon: selenium, label: "Selenium" },
  { icon: jenkins, label: "Jenkins" },
  { icon: maven, label: "Maven" },
  { icon: java, label: "Java" },
  { icon: redux, label: "Redux" },
  { icon: nextjs, label: "Next.js" },
  { icon: react, label: "React Native" },
  { icon: scss, label: "SCSS" },
  { icon: nodejs, label: "Node.js" },
  { icon: javascript, label: "JavaScript" },
  { icon: typescript, label: "TypeScript" },
  { icon: python, label: "Python" },
  { icon: cpp, label: "C/C++" },
  { icon: php, label: "PHP" },
  { icon: html, label: "HTML" },
  { icon: css, label: "CSS" },
  { icon: git, label: "Git" },
  { icon: mysql, label: "MySQL" },
  { icon: tailwind, label: "Tailwind CSS" },
  { icon: graphql, label: "GraphQL" },
];

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <span className="greeting">Hello, I'm Manav</span>
            <span className="title">
              Full-Stack Engineer & QA Automation Expert{" "}
            </span>
          </h1>
          <p>
            I build scalable, high-performance web applications with modern
            technologies and ensure quality through test automation. Currently
            working at Freecharge, I specialize in crafting robust solutions
            that drive business growth, enhance user experience, and guarantee
            software quality.
          </p>
          <div className="hero-buttons">
            <motion.a
              href={resume}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              SDE Resume <FiDownload />
            </motion.a>
            <motion.a
              href={qaResume}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              QA Resume<FiDownload />
            </motion.a>
            <motion.a
              href="/projects"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="blob-animation">
            <div className="blob"></div>
            <div className="blob"></div>
            <div className="blob"></div>
          </div>
          <img
            src={heroimg || "/placeholder.svg"}
            alt="Manav - Full Stack Software Engineer"
          />
        </motion.div>
      </div>

      <div className="tech-stack">
        <motion.div
          className="tech-stack-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Technical Expertise</p>
          <TechMarquee items={techItems} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

const TechMarquee = ({ items }) => {
  return (
    <div className="tech-marquee">
      <div className="marquee-track">
        {[...items, ...items].map((tech, idx) => (
          <div className="tech-icon" key={idx}>
            <img
              src={tech.icon || "/placeholder.svg"}
              alt={`${tech.label} Logo`}
            />
            <span>{tech.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
