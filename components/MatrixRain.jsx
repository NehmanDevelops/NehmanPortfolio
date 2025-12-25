'use client'

import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const charArray = chars.split('')
    const fontSize = 14
    let drops = []

    const updateCanvasSize = () => {
      const isDesktop = window.innerWidth > 768
      canvas.width = isDesktop ? window.innerWidth / 2 : window.innerWidth
      canvas.height = isDesktop ? window.innerHeight : window.innerHeight / 2
      
      const columns = Math.floor(canvas.width / fontSize)
      drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100
      }
    }
    
    updateCanvasSize()

    function draw() {
      ctx.fillStyle = 'rgba(10, 14, 39, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#00ff41'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-30"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}

