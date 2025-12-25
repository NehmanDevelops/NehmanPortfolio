'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Confetti() {
  const [confetti, setConfetti] = useState([])

  useEffect(() => {
    const colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#ffe66d', '#ff8b94']
    const newConfetti = []

    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 10,
      })
    }

    setConfetti(newConfetti)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-full"
          style={{
            left: `${item.x}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            backgroundColor: item.color,
          }}
          initial={{ y: -20, opacity: 1 }}
          animate={{
            y: '100vh',
            opacity: [1, 1, 0],
            x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

