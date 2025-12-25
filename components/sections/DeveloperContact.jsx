'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function DeveloperContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    { name: 'GitHub', url: '#', icon: '💻' },
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '📧' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-software-gold mb-8">
        Get In Touch
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-black/40 border border-dev-green/30 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-software-gold mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-300 mb-6">
            Ready to build something amazing? Let's discuss your next project.
          </p>

          <div className="space-y-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                whileHover={{ x: 10 }}
              className="flex items-center gap-3 text-gray-300 hover:text-software-gold transition-colors"
            >
              <span className="text-2xl">{link.icon}</span>
              <span>{link.name}</span>
              <span className="text-software-gold ml-auto">→</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-black/40 border border-dev-green/30 rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-software-gold font-semibold mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-black/50 border border-software-gold/30 rounded px-4 py-2 text-white focus:border-software-gold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-software-gold font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-black/50 border border-software-gold/30 rounded px-4 py-2 text-white focus:border-software-gold focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-software-gold font-semibold mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-black/50 border border-software-gold/30 rounded px-4 py-2 text-white focus:border-software-gold focus:outline-none resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-software-gold text-software-dark font-bold py-3 rounded hover:bg-software-gold/80 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

