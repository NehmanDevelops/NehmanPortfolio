'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import SalesAbout from './sections/SalesAbout'
import SalesProjects from './sections/SalesProjects'
import SalesSkills from './sections/SalesSkills'
import SalesContact from './sections/SalesContact'

export default function SalesSide({ onSwitch }) {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', label: 'About', icon: '👔' },
    { id: 'projects', label: 'Deals', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'contact', label: 'Contact', icon: '📞' },
  ]

  return (
    <div className="relative min-h-screen bg-sales-dark overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="relative z-30 p-6 flex justify-between items-center">
        <motion.button
          onClick={onSwitch}
          className="px-6 py-3 bg-sales-silver/20 border border-sales-silver text-sales-silver font-semibold hover:bg-sales-silver/30 transition-colors rounded"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Split
        </motion.button>

        <div className="flex gap-4">
          {sections.map((section) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-4 py-2 font-semibold text-sm border rounded transition-colors ${
                activeSection === section.id
                  ? 'bg-sales-silver text-sales-dark border-sales-silver'
                  : 'bg-transparent text-sales-silver border-sales-silver/50 hover:border-sales-silver'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {section.icon} {section.label}
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 text-center py-20 px-6"
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{
            color: '#c0c0c0',
            textShadow: '0 0 20px rgba(192, 192, 192, 0.5), 0 0 40px rgba(192, 192, 192, 0.3)',
          }}
        >
          SALES MODE
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white font-semibold mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Relationship Builder | Revenue Driver | Deal Closer
          <br />
          <span className="text-gray-300 text-lg font-normal">Turning conversations into contracts</span>
        </motion.p>
      </motion.div>

      {/* Content Sections */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 pb-20">
        {activeSection === 'about' && <SalesAbout />}
        {activeSection === 'projects' && <SalesProjects />}
        {activeSection === 'skills' && <SalesSkills />}
        {activeSection === 'contact' && <SalesContact />}
      </div>

      {/* Shimmer overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 opacity-0 hover:opacity-100 transition-opacity">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sales-gold/10 to-transparent" />
      </div>
    </div>
  )
}

