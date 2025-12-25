'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function PersonalitySwitch({ onSwitch }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.button
        onClick={() => {}}
        className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-dev-green to-sales-gold flex items-center justify-center cursor-pointer overflow-hidden"
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          boxShadow: isHovered
            ? [
                '0 0 20px rgba(0, 255, 65, 0.5)',
                '0 0 40px rgba(255, 215, 0, 0.5)',
                '0 0 20px rgba(0, 255, 65, 0.5)',
              ]
            : '0 0 20px rgba(0, 255, 65, 0.3)',
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated background */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(45deg, #00ff41, #ffd700)',
              'linear-gradient(135deg, #ffd700, #00ff41)',
              'linear-gradient(45deg, #00ff41, #ffd700)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon/Symbol */}
        <motion.div
          className="relative z-10 text-4xl md:text-5xl"
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.5 }}
        >
          ⚡
        </motion.div>

        {/* Pulsing rings */}
        {isHovered && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-dev-green"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-sales-gold"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2.5, opacity: 0 }}
              transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
            />
          </>
        )}
      </motion.button>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 whitespace-nowrap"
      >
        <div className="bg-black/80 text-white px-4 py-2 rounded-lg text-sm font-mono">
          Choose Your Side
        </div>
      </motion.div>
    </motion.div>
  )
}

