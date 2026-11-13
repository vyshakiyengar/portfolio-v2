import { useEffect } from 'react'

// Scroll-triggered motion for the whole page: section rules that draw, headings that rise,
// numbers that count up, and a slight drift on the portrait. Everything here is an
// enhancement: the prerendered page is complete without it, and it is skipped entirely
// for visitors who ask for reduced motion.
export function useMotion() {
  // Recommendations can be dragged sideways with a mouse, like a strip of cards on a table.
  useEffect(() => {
    const strip = document.querySelector('.recommendations-scroll')
    if (!strip) return
    let startX = 0
    let startLeft = 0
    let dragging = false
    let moved = false
    const down = event => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return
      dragging = true
      moved = false
      startX = event.clientX
      startLeft = strip.scrollLeft
    }
    const move = event => {
      if (!dragging) return
      const dx = event.clientX - startX
      if (!moved && Math.abs(dx) < 6) return
      moved = true
      strip.classList.add('is-dragging')
      strip.scrollLeft = startLeft - dx
    }
    const up = () => {
      if (!dragging) return
      dragging = false
      strip.classList.remove('is-dragging')
    }
    const click = event => { if (moved) { event.preventDefault(); event.stopPropagation(); moved = false } }
    strip.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    strip.addEventListener('click', click, true)
    return () => {
      strip.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      strip.removeEventListener('click', click, true)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return
    const root = document.documentElement
    const cleanups = []

    // Reveal once. Anything already on screen is marked before motion is switched on, so it never flashes.
    const targets = [...document.querySelectorAll('[data-reveal]')]
    targets.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-in') })
    root.classList.add('motion')
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-in')
      reveal.unobserve(entry.target)
    }), { rootMargin: '0px 0px -12% 0px' })
    targets.forEach(el => { if (!el.classList.contains('is-in')) reveal.observe(el) })
    cleanups.push(() => reveal.disconnect())

    // Count-up for figures marked with data-count; the final text is what was prerendered.
    const count = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return
      count.unobserve(entry.target)
      const el = entry.target
      const target = Number(el.dataset.count)
      const suffix = el.dataset.suffix || ''
      const start = performance.now()
      const tick = now => {
        const k = Math.min(1, (now - start) / 1400)
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 4))) + suffix
        if (k < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }), { rootMargin: '0px 0px -10% 0px' })
    document.querySelectorAll('[data-count]').forEach(el => count.observe(el))
    cleanups.push(() => count.disconnect())

    // One scroll listener drives the scroll-linked details:
    // the portrait drift, the line that draws down the Experience timeline, and the BluFin photo opening up.
    const hero = document.querySelector('.hero-section')
    const timeline = document.querySelector('.timeline-v-container')
    const rows = timeline ? [...timeline.querySelectorAll('.timeline-v-row')] : []
    const photo = document.querySelector('.impact-card-image')
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      if (hero) hero.style.setProperty('--drift', Math.min(1, window.scrollY / 700).toFixed(3))
      if (timeline) {
        const rect = timeline.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, (vh * 0.55 - rect.top) / rect.height))
        timeline.style.setProperty('--p', progress.toFixed(4))
        let current = -1
        rows.forEach((row, i) => { if (row.getBoundingClientRect().top <= vh * 0.55) current = i })
        rows.forEach((row, i) => row.classList.toggle('is-current', i === current && progress < 1))
      }
      if (photo) {
        const rect = photo.getBoundingClientRect()
        photo.style.setProperty('--r', Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.62))).toFixed(3))
      }
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    })

    // The primary button leans toward a nearby mouse pointer.
    const cta = document.querySelector('.hero-cta')
    if (cta && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const onMove = event => {
        const rect = cta.getBoundingClientRect()
        const dx = event.clientX - (rect.left + rect.width / 2)
        const dy = event.clientY - (rect.top + rect.height / 2)
        const near = Math.abs(dx) < rect.width / 2 + 60 && Math.abs(dy) < rect.height / 2 + 50
        cta.style.translate = near ? `${(dx * 0.22).toFixed(1)}px ${(dy * 0.3).toFixed(1)}px` : ''
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      cleanups.push(() => { window.removeEventListener('pointermove', onMove); cta.style.translate = '' })
    }

    return () => { cleanups.forEach(fn => fn()); root.classList.remove('motion') }
  }, [])
}
