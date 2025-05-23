"use client"
import { motion } from "framer-motion"
import "./SkillCard.scss"

const SkillCard = ({ skill }) => {
  const { icon, title, description } = skill

  return (
    <motion.div
      className="skill-card glass-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
    >
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}

export default SkillCard

