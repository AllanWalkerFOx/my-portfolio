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

    const codeSnippets = [
      'const smartAutomator = async () => { await gemini.generate(); }',
      'import React, { useState, useEffect } from "react"',
      'function optimizePipeline(data) { return data.filter(Boolean); }',
      'git commit -m "feat: deploy automated content distribution"',
      'export default async function handler(req, res) { res.status(200); }',
      'const bentoLayout = { grid: "responsive", theme: "dark" };',
      'python3 -m venv env && source env/bin/activate',
      'npm run build && vite deploy --prod'
    ]

    const fontSize = 12
    const columns = Math.floor(canvas.width / 25)
    const drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(11, 12, 16, 0.15)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = 'rgba(99, 102, 241, 0.18)' // Indigo translucide
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = codeSnippets[i % codeSnippets.length]
        const char = text[Math.floor(Math.random() * text.length)]
        ctx.fillText(char, i * 25, drops[i] * fontSize)

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
      className="fixed inset-0 pointer-events-none -z-20 opacity-40"
    />
  )
}