'use client'

import { FormEvent, useState } from 'react'
import { motion } from 'framer-motion'

export function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Create consultation brief
    const consultationBrief = `
BEAM APPARELS - VIP CONSULTATION REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate}

Message:
${formData.message}

---
Ready to schedule your personalized atelier consultation.
    `.trim()

    // Open WhatsApp with pre-filled message
    const encodedMessage = encodeURIComponent(consultationBrief)
    const whatsappUrl = `https://wa.me/2347039949052?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      eventDate: '',
      message: '',
    })
    setSubmitted(true)
    
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="booking-section" className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-light mb-4 text-balance">
            VIP Consultation
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Begin your bespoke journey with our master designers
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                placeholder="+234 703 994 9052"
              />
            </div>

            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-sm font-semibold mb-2">
                Event Type
              </label>
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              >
                <option value="">Select occasion...</option>
                <option value="Wedding">Wedding</option>
                <option value="Prom">Prom</option>
                <option value="Gala">Gala & Red Carpet</option>
                <option value="Engagement">Engagement</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div className="md:col-span-2">
              <label htmlFor="eventDate" className="block text-sm font-semibold mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Design Vision & Details
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
              placeholder="Share your vision, style preferences, inspiration, and any special requirements..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full px-8 py-4 bg-accent text-background font-semibold text-lg hover:bg-accent/90 transition-colors"
          >
            {submitted ? '✓ Message Sent via WhatsApp' : 'Begin Your Consultation'}
          </motion.button>

          <p className="text-center text-sm text-muted-foreground font-light">
            Our team will respond within 24 hours. For urgent inquiries, please call directly.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
