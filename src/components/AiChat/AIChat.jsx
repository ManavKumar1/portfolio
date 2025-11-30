"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AiOutlineClose, AiOutlineSend } from "react-icons/ai"
import { BiMessageRounded } from "react-icons/bi"
import "./AIChat.scss"
import generateResponse from "../../utils/generateResponse"

// Sparkle animation
function SparkleParticle({ sparkle }) {
  return (
    <motion.div
      className="sparkle-nudger"
      initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      animate={{
        opacity: 0,
        scale: 0,
        x: sparkle.x,
        y: sparkle.y,
      }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      ✨✨✨✨✨✨✨✨✨
    </motion.div>
  )
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [sparkles, setSparkles] = useState([])
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "✨ Hi there! I'm Mandy, your personal portfolio assistant! Ask me anything about projects, experience, skills, or how to contact me! 🌟",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const triggerSparkle = () => {
    const sparkle = {
      id: Date.now(),
      x: (Math.random() - 0.5) * 120,
      y: (Math.random() - 0.5) * 120,
    }

    setSparkles(prev => [...prev, sparkle])

    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id))
    }, 700)
  }
  
  // // ⭐ NEW: auto sparkle every 2 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     triggerSparkle()
  //   }, 2000)

  //   return () => clearInterval(interval)
  // }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userInput = inputValue.trim()
    setInputValue("")
    triggerSparkle()

    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: prev.length + 1,
        text: userInput,
        sender: "user",
        timestamp: new Date(),
      }
    ])

    setIsLoading(true)

    // Generate bot reply ONLY from userInput
    setTimeout(() => {
      const botReply = generateResponse(userInput) || "I'm here to help! ✨"

      setMessages(prev => [
        ...prev,
        {
          id: prev.length + 1,
          text: botReply,
          sender: "bot",
          timestamp: new Date(),
        }
      ])

      setIsLoading(false)
    }, 400)
  }

  const handleToggleChat = (e) => {
    setIsOpen(!isOpen)
    triggerSparkle()
  }

  return (
    <div className="ai-chat-container">

      {/* {sparkles.map(s => (
        <SparkleParticle key={s.id} sparkle={s} />
      ))} */}

      {/* Floating button */}
      <motion.button
        className="chat-button"
        onClick={handleToggleChat}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close"><AiOutlineClose size={25} /></motion.div>
          ) : (
            <motion.div key="open"><BiMessageRounded size={25} /></motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
          >
            <div className="chat-header">
              <h3>Mandy ✨</h3>
              <p>Your guide to everything here</p>
            </div>

            <div className="chat-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`message ${msg.sender}`}>
                  <div className="message-content">
                    <p style={{ whiteSpace: "pre-wrap" }}>{msg.text}</p>
                    <span className="message-time">
                      {msg.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="message bot">
                  <div className="typing-indicator"><span></span><span></span><span></span></div>
                </div>
              )}

              <div ref={messagesEndRef}></div>
            </div>

            <form className="chat-input-form" onSubmit={handleSendMessage}>
              <input
                type="text"
                placeholder="Ask Mandy anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button type="submit"><AiOutlineSend size={20} /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
