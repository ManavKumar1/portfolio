"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { FiSend } from "react-icons/fi"
import emailjs from "@emailjs/browser"
import "./ContactForm.scss"

const ContactForm = () => {
  const formRef = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "",
    position: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Validation function
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters."
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters."
    }

    setErrors(newErrors)
    // If no errors, return true
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Clear error for the field on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: null,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return // stop submit if validation fails
    }

    setIsSubmitting(true)

    try {
      await emailjs.sendForm("service_b9vtrqz", "template_fgq7bug", formRef.current, "-tsBCtcJJu_HBp50l")

      setSubmitStatus({
        success: true,
        message: "Thank you for reaching out! I'll get back to you as soon as possible.",
      })

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
        position: "",
      })
      setErrors({})
    } catch (error) {
      console.error(error)
      setSubmitStatus({
        success: false,
        message: "Something went wrong. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  return (
    <div className='contact-form glass-card'>
      <h3>Send Me a Message</h3>

      {submitStatus && (
        <motion.div
          className={`form-status ${
            submitStatus.success ? "success" : "error"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <form ref={formRef} onSubmit={handleSubmit} noValidate>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your name'
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby='name-error'
          />
          {errors.name && (
            <span className='error-message' id='name-error'>
              {errors.name}
            </span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Your email address'
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby='email-error'
          />
          {errors.email && (
            <span className='error-message' id='email-error'>
              {errors.email}
            </span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            id='subject'
            name='subject'
            value={formData.subject}
            onChange={handleChange}
            placeholder='Subject of your message'
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby='subject-error'
          />
          {errors.subject && (
            <span className='error-message' id='subject-error'>
              {errors.subject}
            </span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='message'>Message</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Your message'
            rows='5'
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby='message-error'
          ></textarea>
          {errors.message && (
            <span className='error-message' id='message-error'>
              {errors.message}
            </span>
          )}
        </div>

        <motion.button
          type='submit'
          className='btn btn-primary'
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message <FiSend />
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}

export default ContactForm
