import { useEffect } from 'react'

// Scroll-triggered motion for the whole page: section rules that draw, headings that rise,
// numbers that count up, and a slight drift on the portrait. Everything here is an
// enhancement: the prerendered page is complete without it, and it is skipped entirely
// for visitors who ask for reduced motion.
export function useMotion() {
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

    // Portrait drifts a little slower than the page.
    const portrait = document.querySelector('.hero-portrait-frame img')
    if (portrait) {
      let frame = 0
      const drift = () => { frame = 0; portrait.style.setProperty('--drift', Math.min(1, window.scrollY / 700).toFixed(3)) }
      const onScroll = () => { if (!frame) frame = requestAnimationFrame(drift) }
      window.addEventListener('scroll', onScroll, { passive: true })
      cleanups.push(() => { window.removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame) })
    }

    return () => { cleanups.forEach(fn => fn()); root.classList.remove('motion') }
  }, [])
}
