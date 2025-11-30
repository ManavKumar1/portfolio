"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import ScrollToTop from "./utils/ScrollToTop"
import SDE from "./pages/Roles/SDE/SDE"
import QA from "./pages/Roles/QA/QA"
import AIChat from "./components/AIChat/AIChat"
import "./App.scss"

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme")
    return savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  })

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/expertise" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sde" element={<SDE />} />
              <Route path="/qa" element={<QA />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AIChat />
      </div>
    </Router>
  )
}

export default App
