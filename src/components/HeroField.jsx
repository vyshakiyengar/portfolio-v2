import { useEffect, useRef } from 'react'

// Ambient motion behind the hero: fine lines that drift like slow water and lean
// away from the pointer. Drawn on a canvas, paused whenever the hero is off screen,
// and not started at all for visitors who ask for reduced motion.
export default function HeroField() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let frame = 0
    let visible = true
    const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 }
    const started = performance.now()

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(2, window.devicePixelRatio || 1)
      width = rect.width
      height = rect.height
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    const draw = now => {
      frame = requestAnimationFrame(draw)
      if (!visible || !width) return
      const t = (now - started) / 1000
      pointer.x += (pointer.tx - pointer.x) * 0.07
      pointer.y += (pointer.ty - pointer.y) * 0.07
      const lines = width < 760 ? 15 : 24
      const accent = Math.round(lines * 0.62)
      ctx.clearRect(0, 0, width, height)
      ctx.lineWidth = 1
      for (let i = 0; i < lines; i++) {
        const p = i / (lines - 1)
        const base = height * (0.06 + p * 0.88)
        ctx.beginPath()
        for (let x = -20; x <= width + 20; x += 12) {
          const nx = x / width
          let y = base
            + Math.sin(nx * 3.1 + t * 0.21 + p * 4.0) * 24 * (0.45 + p)
            + Math.sin(nx * 7.3 - t * 0.15 + p * 9.0) * 8
            + Math.sin(nx * 1.3 + t * 0.1 + p * 2.0) * 30
          const dx = x - pointer.x
          const dy = y - pointer.y
          y += 44 * Math.exp(-(dx * dx + dy * dy) / 45000) * (dy / (Math.abs(dy) + 28))
          if (x === -20) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.strokeStyle = i === accent
          ? 'rgba(131,80,56,0.42)'
          : `rgba(35,40,34,${(0.05 + 0.06 * Math.sin(p * Math.PI)).toFixed(3)})`
        ctx.stroke()
      }
    }

    const onPointer = event => {
      const rect = canvas.getBoundingClientRect()
      pointer.tx = event.clientX - rect.left
      pointer.ty = event.clientY - rect.top
    }
    const onLeave = () => { pointer.tx = -9999; pointer.ty = -9999 }
    const watch = new IntersectionObserver(entries => { visible = entries[0].isIntersecting })

    resize()
    watch.observe(canvas)
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointer, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      watch.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointer)
      document.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return <canvas ref={ref} className="hero-field" aria-hidden="true" />
}
