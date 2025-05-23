"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./TechOrbit.scss";

// Import all tech icons
import reactIcon from "../../assets/react.svg";
import javascriptIcon from "../../assets/Javascript.svg";
import typescriptIcon from "../../assets/Typescript.svg";
import nodeIcon from "../../assets/Node.js.svg";
import expressIcon from "../../assets/Express.svg";
import mongodbIcon from "../../assets/MongoDB.svg";
import htmlIcon from "../../assets/HTML5.svg";
import cssIcon from "../../assets/CSS3.svg";
import sassIcon from "../../assets/Sass.svg";
import reduxIcon from "../../assets/Redux.svg";
import nextjsIcon from "../../assets/Next.js.svg";
import tailwindIcon from "../../assets/Tailwind.svg";
import gitIcon from "../../assets/GitHub.svg";
import awsIcon from "../../assets/AWS.svg";
import graphqlIcon from "../../assets/GraphQL.svg";
import pythonIcon from "../../assets/Python.svg";
import mysqlIcon from "../../assets/MySQL.svg";
import phpIcon from "../../assets/PHP.svg";

const TechOrbit = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define the technologies with their details
  const technologies = [
    {
      name: "React",
      icon: reactIcon,
      description: "Building interactive UIs with component-based architecture",
      orbit: 1,
      speed: 20,
      size: 60,
      startPosition: 0,
    },
    {
      name: "JavaScript",
      icon: javascriptIcon,
      description: "Core language for web development with ES6+ features",
      orbit: 1,
      speed: 25,
      size: 55,
      startPosition: 120,
    },
    {
      name: "TypeScript",
      icon: typescriptIcon,
      description: "Type-safe JavaScript for scalable applications",
      orbit: 1,
      speed: 22,
      size: 55,
      startPosition: 240,
    },
    {
      name: "Node.js",
      icon: nodeIcon,
      description: "Server-side JavaScript runtime environment",
      orbit: 2,
      speed: 30,
      size: 50,
      startPosition: 60,
    },
    {
      name: "Express",
      icon: expressIcon,
      description: "Fast, unopinionated web framework for Node.js",
      orbit: 2,
      speed: 28,
      size: 50,
      startPosition: 180,
    },
    {
      name: "MongoDB",
      icon: mongodbIcon,
      description: "NoSQL database for modern applications",
      orbit: 2,
      speed: 26,
      size: 50,
      startPosition: 300,
    },
    {
      name: "HTML5",
      icon: htmlIcon,
      description: "Semantic markup language for web pages",
      orbit: 3,
      speed: 35,
      size: 45,
      startPosition: 30,
    },
    {
      name: "CSS3",
      icon: cssIcon,
      description: "Styling language for web design",
      orbit: 3,
      speed: 32,
      size: 45,
      startPosition: 90,
    },
    {
      name: "Sass",
      icon: sassIcon,
      description: "CSS preprocessor for advanced styling capabilities",
      orbit: 3,
      speed: 33,
      size: 45,
      startPosition: 150,
    },
    {
      name: "Redux",
      icon: reduxIcon,
      description: "State management for JavaScript applications",
      orbit: 3,
      speed: 31,
      size: 45,
      startPosition: 210,
    },
    {
      name: "Next.js",
      icon: nextjsIcon,
      description: "React framework for production-grade applications",
      orbit: 3,
      speed: 34,
      size: 45,
      startPosition: 270,
    },
    {
      name: "Tailwind",
      icon: tailwindIcon,
      description: "Utility-first CSS framework",
      orbit: 3,
      speed: 36,
      size: 45,
      startPosition: 330,
    },
    {
      name: "Git",
      icon: gitIcon,
      description: "Version control system for code management",
      orbit: 4,
      speed: 40,
      size: 40,
      startPosition: 0,
    },
    {
      name: "AWS",
      icon: awsIcon,
      description: "Cloud computing services for modern applications",
      orbit: 4,
      speed: 38,
      size: 40,
      startPosition: 72,
    },
    {
      name: "GraphQL",
      icon: graphqlIcon,
      description: "Query language for APIs",
      orbit: 4,
      speed: 42,
      size: 40,
      startPosition: 144,
    },
    {
      name: "Python",
      icon: pythonIcon,
      description: "Versatile programming language for various applications",
      orbit: 4,
      speed: 39,
      size: 40,
      startPosition: 216,
    },
    {
      name: "MySQL",
      icon: mysqlIcon,
      description: "Relational database management system",
      orbit: 4,
      speed: 41,
      size: 40,
      startPosition: 288,
    },
  ];

  // Calculate orbit parameters
  const calculateOrbitSize = (orbitLevel, windowWidth) => {
    const baseSize = Math.min(windowWidth * 0.35, 250);
    return baseSize * (orbitLevel * 0.45);
  };

  // Function to calculate position based on orbit and angle
  const calculatePosition = (orbit, angle, windowWidth) => {
    const orbitSize = calculateOrbitSize(orbit, windowWidth);
    const centerX = 0;
    const centerY = 0;
    const x = centerX + orbitSize * Math.cos(angle);
    const y = centerY + orbitSize * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className='tech-orbit-container'>
      <div className='orbit-wrapper'>
        <div className='orbit-center'>
          <motion.div
            className='center-circle'
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                "0 0 20px rgba(99, 102, 241, 0.3)",
                "0 0 30px rgba(99, 102, 241, 0.5)",
                "0 0 20px rgba(99, 102, 241, 0.3)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <span>Tech Stack</span>
          </motion.div>
        </div>

        {/* Render orbit paths */}
        {[1, 2, 3, 4].map((orbit) => (
          <motion.div
            key={`orbit-${orbit}`}
            className='orbit-path'
            style={{
              width: calculateOrbitSize(orbit, windowSize.width) * 2,
              height: calculateOrbitSize(orbit, windowSize.width) * 2,
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 100 + orbit * 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Render tech icons */}
        {technologies.map((tech, index) => {
          const isHovered = hoveredTech === tech.name;

          return (
            <motion.div
              key={tech.name}
              className={`tech-icon ${isHovered ? "hovered" : ""}`}
              initial={{
                x: calculatePosition(
                  tech.orbit,
                  (tech.startPosition * Math.PI) / 180,
                  windowSize.width
                ).x,
                y: calculatePosition(
                  tech.orbit,
                  (tech.startPosition * Math.PI) / 180,
                  windowSize.width
                ).y,
              }}
              animate={{
                x: (progress) => {
                  const angle =
                    ((progress * 360 * 100) / tech.speed + tech.startPosition) *
                    (Math.PI / 180);
                  return calculatePosition(tech.orbit, angle, windowSize.width)
                    .x;
                },
                y: (progress) => {
                  const angle =
                    ((progress * 360 * 100) / tech.speed + tech.startPosition) *
                    (Math.PI / 180);
                  return calculatePosition(tech.orbit, angle, windowSize.width)
                    .y;
                },
                scale: isHovered ? 1.3 : 1,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{
                duration: 100,
                repeat: Infinity,
                ease: "linear",
                scale: { duration: 0.3, ease: "easeOut" },
              }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              style={{
                width: tech.size,
                height: tech.size,
              }}
            >
              <img src={tech.icon || "/placeholder.svg"} alt={tech.name} />

              {isHovered && (
                <motion.div
                  className='tech-tooltip'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <h4>{tech.name}</h4>
                  <p>{tech.description}</p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechOrbit;
