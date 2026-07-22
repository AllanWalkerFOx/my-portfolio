import React, { useEffect, useRef } from 'react'

export default function CodeBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const characters = '01{}[]<>/=+$#@!%&?*python_import_react_const_async_await_gemini_api'
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)

    const draw = () => {
      // Effet d'estompage progressif
      ctx.fillStyle = 'rgba(9, 10, 15, 0.12)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length))
        
        // Couleur alternée indigo / violet / émeraude
        if (i % 5 === 0) {
          ctx.fillStyle = '#818cf8' // Indigo vif
        } else if (i % 3 === 0) {
          ctx.fillStyle = '#c084fc' // Purple
        } else {
          ctx.fillStyle = '#34d399' // Emerald
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-25"
    />
  )
}