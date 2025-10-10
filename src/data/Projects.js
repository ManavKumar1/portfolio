import HRMS from "../assets/Projects/HRMS.png";
import OPS from "../assets/Projects/Ops-Panel.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import TMA from "../assets/Projects/TMA.png";
import WheatherApp from "../assets/Projects/WheatherApp.png";
import HostelBay from "../assets/Projects/HostelBay.png";
import HitechService2 from "../assets/Projects/HitechService2.png";

const projects = [
  {
    title: "HostelBay - Hostel Finding Platform",
    description:
      "A full-stack application that helps students find and book hostels near their universities. It offers advanced search filters, booking management, and a review system for a seamless experience.",
    image: HostelBay,
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    category: "fullstack",
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    title: "HR Management System (HRMS) - Freecharge",
    description:
      "An internal tool built for Freecharge that streamlines HR operations, including employee onboarding, performance reviews, and leave management. Built using React.js and Redux for efficient workflows.",
    image: HRMS,
    tags: ["Nextjs", "React.js", "Redux", "Express.js", "MongoDB", "SQL"],
    category: "fullstack",
    // liveUrl: "",
    // githubUrl: "https://github.com",
  },
  {
    title: "Operations Panel (OPS) - Freecharge",
    description:
      "A powerful admin dashboard built for Freecharge to streamline customer service operations. Used across 74+ offices in India, this platform provides master-level insights into customer data, leads, payments, and more. It enables Freecharge's customer support teams to manage and analyze information efficiently.",
    image: OPS,
    tags: ["Nextjs", "React.js", "Node.js", "AWS", "SQL"],
    category: "fullstack",
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website designed to showcase my coding skills and full-stack development expertise. Featuring a clean and interactive gallery of my projects, this site highlights my proficiency in web development, including both frontend and backend technologies, along with a contact form for potential opportunities.",
    image: Portfolio,
    tags: ["React.js", "SCSS", "Framer Motion"],
    category: "frontend",
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    title: "Task Management API",
    description:
      "A RESTful API for managing tasks with user authentication, task CRUD operations, and team collaboration features. Built using Node.js and Express.js to handle high concurrency and secure user data.",
    image: TMA,
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    category: "backend",
    // liveUrl: "",
    // githubUrl: "https://github.com",
  },
  {
    title: "Weather App",
    description:
      "A weather application that provides real-time weather conditions and forecasts for any location using a third-party API. Built with React.js and integrates smoothly with external weather data.",
    image: WheatherApp,
    tags: ["React.js", "API Integration", "CSS3"],
    category: "frontend",
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
  {
    title: "Hi-tech Service",
    description:
      "A professional website built for an electronics repair expert, showcasing services, expertise, and customer support options. Developed with React.js, it features a clean UI, responsive design, and smooth integration with external tools for enhanced user experience.",
    image: HitechService2,
    tags: ["React.js", "API Integration", "CSS3"],
    category: "frontend",
    // liveUrl: "https://example.com",
    // githubUrl: "https://github.com",
  },
];

export default projects;
