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
    // Orientation after a jump: the heading you arrive at is briefly marked.
    const arrive = event => {
      const link = event.target.closest && event.target.closest('a[href^="#"]')
      if (!link || link.getAttribute('href').length < 2) return
      const target = document.getElementById(link.getAttribute('href').slice(1))
      if (!target || target.id === 'hero') return
      const heading = target.matches('h2,h3') ? target : target.querySelector('h2, .subgroup-title, .impact-card-title')
      if (!heading) return
      heading.classList.remove('has-arrived')
      setTimeout(() => {
        heading.classList.add('has-arrived')
        setTimeout(() => heading.classList.remove('has-arrived'), 2200)
      }, 450)
    }
    document.addEventListener('click', arrive)

    // Hovering a press thumbnail lifts a larger copy of it beside the pointer.
    let removePreview = () => {}
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const box = document.createElement('div')
      box.className = 'hover-preview'
      box.setAttribute('aria-hidden', 'true')
      const image = document.createElement('img')
      image.alt = ''
      box.appendChild(image)
      document.body.appendChild(box)
      let active = null
      let x = 0, y = 0, tx = 0, ty = 0, raf = 0
      const follow = () => {
        x += (tx - x) * 0.18
        y += (ty - y) * 0.18
        box.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`
        raf = active ? requestAnimationFrame(follow) : 0
      }
      const place = event => {
        const width = 340
        tx = event.clientX + 26
        if (tx + width > window.innerWidth - 16) tx = event.clientX - width - 26
        ty = Math.max(90, Math.min(event.clientY - 60, window.innerHeight - 300))
      }
      const over = event => {
        const thumb = event.target.closest ? event.target.closest('[data-preview]') : null
        if (thumb === active) return
        active = thumb
        if (!thumb) { box.classList.remove('is-on'); return }
        place(event)
        image.src = thumb.dataset.preview
        box.classList.add('is-on')
        if (!raf) { x = tx; y = ty; raf = requestAnimationFrame(follow) }
      }
      const hide = () => { active = null; box.classList.remove('is-on') }
      document.addEventListener('pointerover', over)
      document.addEventListener('pointermove', place, { passive: true })
      window.addEventListener('scroll', hide, { passive: true })
      removePreview = () => {
        document.removeEventListener('pointerover', over)
        document.removeEventListener('pointermove', place)
        window.removeEventListener('scroll', hide)
        if (raf) cancelAnimationFrame(raf)
        box.remove()
      }
    }
    strip.addEventListener('pointerdown', down)
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
    strip.addEventListener('click', click, true)
    return () => {
      strip.removeEventListener('pointerdown', down)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
      strip.removeEventListener('click', click, true)
      document.removeEventListener('click', arrive)
      removePreview()
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
    }), { rootMargin: '0px 0px -6% 0px' })
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
    // the portrait drift and the Blufin photo opening up.
    const hero = document.querySelector('.hero-section')
    const photos = [...document.querySelectorAll('.impact-card-image, .narrative-frame')]
    let frame = 0
    const update = () => {
      frame = 0
      const vh = window.innerHeight
      if (hero) hero.style.setProperty('--drift', Math.min(1, window.scrollY / 700).toFixed(3))
      photos.forEach(photo => {
        const rect = photo.getBoundingClientRect()
        photo.style.setProperty('--r', Math.min(1, Math.max(0, (vh - rect.top) / (vh * 0.62))).toFixed(3))
      })
      // Safety net: nothing marked for reveal may stay hidden once it is on screen.
      document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(el => {
        if (el.getBoundingClientRect().top < vh * 0.94) el.classList.add('is-in')
      })
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

    // The portrait tilts a few degrees toward the mouse pointer and catches a soft light.
    const portrait = document.querySelector('.hero-portrait-frame')
    if (portrait && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const tilt = event => {
        const rect = portrait.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
        portrait.style.setProperty('--ty', ((x - 0.5) * 7).toFixed(2))
        portrait.style.setProperty('--tx', ((0.5 - y) * 7).toFixed(2))
        portrait.style.setProperty('--sx', `${(x * 100).toFixed(1)}%`)
        portrait.style.setProperty('--sy', `${(y * 100).toFixed(1)}%`)
        portrait.classList.add('is-lit')
      }
      const rest = () => {
        portrait.style.setProperty('--tx', '0')
        portrait.style.setProperty('--ty', '0')
        portrait.classList.remove('is-lit')
      }
      portrait.addEventListener('pointermove', tilt)
      portrait.addEventListener('pointerleave', rest)
      cleanups.push(() => { portrait.removeEventListener('pointermove', tilt); portrait.removeEventListener('pointerleave', rest); rest() })
    }

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
