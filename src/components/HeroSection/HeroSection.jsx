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
import javascript from "../../assets/Javascript.svg";
import typescript from "../../assets/Typescript.svg";
import python from "../../assets/Python.svg";
import cpp from "../../assets/Cpp.svg";
import php from "../../assets/PHP.svg";
import html from "../../assets/HTML5.svg";
import css from "../../assets/CSS3.svg";
import git from "../../assets/Github.svg";
import mysql from "../../assets/Mysql.svg";
import tailwind from "../../assets/Tailwind.svg";
import graphql from "../../assets/Graphql.svg";
import resume from "../../assets/Manav_Kumar_eResume.pdf";
const techItems = [
  { icon: react, label: "React.js" },
  { icon: express, label: "Express.js" },
  { icon: mongodb, label: "MongoDB" },
  { icon: aws, label: "AWS Cloud" },
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
    <section className='hero-section'>
      <div className='hero-content'>
        <motion.div
          className='hero-text'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            <span className='greeting'>Hello, I'm Manav</span>
            <span className='title'>Full-Stack Software Engineer</span>
          </h1>
          <p>
            I build scalable, high-performance web applications with modern
            technologies. Currently working at Freecharge, I specialize in
            creating robust solutions that drive business growth and enhance
            user experience.
          </p>
          <div className='hero-buttons'>
            <motion.a
              href={resume}
              className='btn btn-primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              download
            >
              Download Resume <FiDownload />
            </motion.a>
            <motion.a
              href='/projects'
              className='btn btn-outline'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className='hero-image'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className='blob-animation'>
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
          </div>
          <img
            src={heroimg || "/placeholder.svg"}
            alt='Manav - Full Stack Software Engineer'
          />
        </motion.div>
      </div>

      <div className='tech-stack'>
        <motion.div
          className='tech-stack-content'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>Technical Expertise</p>
          <div className='tech-marquee'>
            <div className='marquee-track'>
              {[...techItems, ...techItems].map((tech, idx) => (
                <div className='tech-icon' key={idx}>
                  <img
                    src={tech.icon || "/placeholder.svg"}
                    alt={`${tech.label} Logo`}
                  />
                  <span>{tech.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
