import { useEffect } from 'react'

// The 3D layer (see styles/depth.css). It turns the hero toward the mouse, tilts cards and
// pictures toward the pointer with a soft light, and, in browsers that cannot tie animation
// to scrolling, stands each block up once as it arrives. Like the rest of the motion it is
// an enhancement: the prerendered page is complete without it, and it is skipped entirely
// for visitors who ask for reduced motion.

const RISE = '.timeline-v-row,.builder-card,.publication-item,.civic-item,.cite-item,.cite-summary,.impact-metrics-row,.credibility-banner,.subgroup-header,.brief-grid li'
const TILT = '.rec-card,.card-preview,.impact-card-image,.narrative-frame,.brief-grid a'
// Only pictures catch the light; on white cards and text a highlight would only wash out the words.
const LIGHT = '.card-preview,.impact-card-image,.narrative-frame'

export function useDepth() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = document.documentElement
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const cleanups = []

    // Fallback for browsers without scroll-linked animation: the same stand-up move, once per block.
    const scrollLinked = window.CSS && CSS.supports && CSS.supports('animation-timeline: view()')
    if (!scrollLinked && 'IntersectionObserver' in window) {
      root.classList.add('no-sda')
      const arrive = new IntersectionObserver(entries => entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.dataset.d3 = 'in'
        arrive.unobserve(entry.target)
      }), { rootMargin: '0px 0px -8% 0px' })
      document.querySelectorAll(RISE).forEach(el => {
        if (el.getBoundingClientRect().top > window.innerHeight) {
          el.dataset.d3 = 'wait'
          arrive.observe(el)
        } else {
          el.dataset.d3 = 'in'
        }
      })
      cleanups.push(() => { arrive.disconnect(); root.classList.remove('no-sda') })
    }

    if (fine) {
      // Hero: the scene turns a few degrees toward the mouse and its layers separate in depth.
      const hero = document.querySelector('.hero-section')
      if (hero) {
        const turn = event => {
          if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
          const rect = hero.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width - 0.5
          const y = (event.clientY - rect.top) / rect.height - 0.5
          hero.style.setProperty('--hy', (x * 4).toFixed(2))
          hero.style.setProperty('--hx', (-y * 3).toFixed(2))
          hero.classList.add('is-turning')
        }
        const settle = () => {
          hero.style.setProperty('--hx', '0')
          hero.style.setProperty('--hy', '0')
          hero.classList.remove('is-turning')
        }
        hero.addEventListener('pointermove', turn)
        hero.addEventListener('pointerleave', settle)
        cleanups.push(() => { hero.removeEventListener('pointermove', turn); hero.removeEventListener('pointerleave', settle); settle() })
      }

      // Cards and pictures tilt toward the pointer and catch a soft light where it rests.
      const lit = [...document.querySelectorAll(LIGHT)]
      lit.forEach(el => el.classList.add('tilt-light'))
      let active = null
      const rest = el => {
        el.style.setProperty('--tilt-x', '0deg')
        el.style.setProperty('--tilt-y', '0deg')
        el.classList.remove('is-tilting')
      }
      const strength = el => (el.classList.contains('card-preview') ? 16 : el.tagName === 'A' ? 7 : 6)
      const tilt = event => {
        if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
        const el = event.target.closest ? event.target.closest(TILT) : null
        if (active && active !== el) rest(active)
        active = el
        if (!el || el.closest('.is-dragging')) return
        if (el.matches(LIGHT)) el.classList.add('tilt-light')
        // Measured from the centre and the untransformed size, so the tilt itself never feeds back.
        const rect = el.getBoundingClientRect()
        const x = Math.max(0, Math.min(1, (event.clientX - (rect.left + rect.width / 2)) / el.offsetWidth + 0.5))
        const y = Math.max(0, Math.min(1, (event.clientY - (rect.top + rect.height / 2)) / el.offsetHeight + 0.5))
        const s = strength(el)
        el.style.setProperty('--tilt-y', `${((x - 0.5) * s).toFixed(2)}deg`)
        el.style.setProperty('--tilt-x', `${((0.5 - y) * s).toFixed(2)}deg`)
        el.style.setProperty('--glare-x', `${(x * 100).toFixed(1)}%`)
        el.style.setProperty('--glare-y', `${(y * 100).toFixed(1)}%`)
        el.classList.add('is-tilting')
      }
      const leave = () => { if (active) { rest(active); active = null } }
      document.addEventListener('pointermove', tilt, { passive: true })
      document.addEventListener('pointerleave', leave)
      cleanups.push(() => {
        document.removeEventListener('pointermove', tilt)
        document.removeEventListener('pointerleave', leave)
        if (active) rest(active)
        lit.forEach(el => el.classList.remove('tilt-light'))
      })
    }

    return () => cleanups.forEach(fn => fn())
  }, [])
}
