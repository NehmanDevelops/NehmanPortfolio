'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Only show cursor effect on desktop
    setIsDesktop(window.innerWidth > 768)
    
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768)
    }

    window.addEventListener('resize', handleResize)

    if (!isDesktop) return

    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    window.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isDesktop])

  if (!isDesktop) return null

  return (
    <>
      {/* Cursor glow effect */}
      <motion.div
        className="fixed pointer-events-none z-40 hidden md:block"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-dev-green to-sales-gold transform -translate-x-1/2 -translate-y-1/2 blur-xl" />
      </motion.div>
    </>
  )
}

