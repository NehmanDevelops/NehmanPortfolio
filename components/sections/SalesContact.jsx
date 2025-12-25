'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SalesContact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Email', url: 'mailto:your@email.com', icon: '📧' },
    { name: 'Phone', url: 'tel:+1234567890', icon: '📞' },
    { name: 'Calendar', url: '#', icon: '📅' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h2 className="text-4xl font-bold text-sales-silver mb-8">
        Let's Start a Conversation
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-sales-silver mb-4">
            Ready to Close a Deal?
          </h3>
          <p className="text-white mb-6">
            Whether you're looking for a sales professional or need to discuss a potential partnership, 
            I'm here to help drive results.
          </p>

          <div className="space-y-4">
            {contactMethods.map((method) => (
              <motion.a
                key={method.name}
                href={method.url}
                whileHover={{ x: 10 }}
                className="flex items-center gap-3 text-white hover:text-sales-silver transition-colors"
              >
                <span className="text-2xl">{method.icon}</span>
                <span className="font-semibold">{method.name}</span>
                <span className="text-sales-silver ml-auto">→</span>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 p-4 bg-sales-silver/20 rounded-lg">
            <p className="text-white text-sm">
              <span className="font-bold text-sales-silver">Quick Response:</span> I typically respond within 24 hours.
            </p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur border border-sales-silver/30 rounded-lg p-6 space-y-4"
        >
          <div>
            <label className="block text-sales-silver font-semibold mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/10 border border-sales-silver/30 rounded px-4 py-2 text-white focus:border-sales-silver focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sales-silver font-semibold mb-2">Company</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full bg-white/10 border border-sales-silver/30 rounded px-4 py-2 text-white focus:border-sales-silver focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sales-silver font-semibold mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/10 border border-sales-silver/30 rounded px-4 py-2 text-white focus:border-sales-silver focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sales-silver font-semibold mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full bg-white/10 border border-sales-silver/30 rounded px-4 py-2 text-white focus:border-sales-silver focus:outline-none resize-none"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-sales-silver text-sales-dark font-bold py-3 rounded hover:opacity-90 transition-opacity"
          >
            Send Message →
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

