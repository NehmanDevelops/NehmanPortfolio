'use client'

import { motion } from 'framer-motion'

export default function DeveloperAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <motion.div variants={itemVariants} className="bg-black/40 border border-software-gold/30 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-software-gold mb-4">About Me</h2>
        <div className="text-gray-300 space-y-4 text-lg">
          <p>
            <span className="text-software-gold">const</span> developer = {'{'}
          </p>
          <div className="pl-8 space-y-2">
            <p>
              <span className="text-software-gold">name:</span> <span className="text-white">'Nehman Rahimi'</span>,
            </p>
            <p>
              <span className="text-software-gold">role:</span> <span className="text-white">'Full-Stack Developer'</span>,
            </p>
            <p>
              <span className="text-software-gold">passion:</span> <span className="text-white">'Building scalable solutions'</span>,
            </p>
            <p>
              <span className="text-software-gold">stack:</span> <span className="text-white">['React', 'Node.js', 'Python', 'Cloud']</span>,
            </p>
            <p>
              <span className="text-software-gold">philosophy:</span> <span className="text-white">'Code is poetry'</span>
            </p>
          </div>
          <p>{'}'}</p>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/40 border border-software-gold/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-software-gold mb-3">Experience</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-software-gold">→</span>
              <span>5+ years building web applications</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-software-gold">→</span>
              <span>Led multiple full-stack projects</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-software-gold">→</span>
              <span>Mentored junior developers</span>
            </li>
          </ul>
        </div>

        <div className="bg-black/40 border border-software-gold/30 rounded-lg p-6">
          <h3 className="text-xl font-bold text-software-gold mb-3">Achievements</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-software-gold">✓</span>
              <span>Open source contributor</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-software-gold">✓</span>
              <span>Tech blog writer</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-software-gold">✓</span>
              <span>Conference speaker</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

