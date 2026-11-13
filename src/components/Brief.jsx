import { useEffect, useRef } from 'react'
import SectionMark from './SectionMark'

// The whole profile in six sentences. Each one links to its evidence further down the page.
const statements = [
  { href: '#experience', text: 'Led product strategy and growth for Meta’s App Ads, helping double the business’s revenue.' },
  { href: '#experience', text: 'Before that, a strategy consultant at BCG and Accenture.' },
  { href: '#products', text: 'Builds his own products: a speech app used in 38 countries, a WhatsApp voice agent covered by Karnataka’s leading daily, and a free case interview course with 102 worked cases.' },
  { href: '#patent', text: 'Co-inventor on a granted US patent.' },
  { href: '#impact', text: 'Co-founder of BluFin Foundation, among India’s leading foundations building an inclusive sports ecosystem: 120+ children trained, seven para-athletes competing internationally.' },
  { href: '#impact', text: 'Advised a Member of Parliament on technology and startup policy.' },
]

export default function Brief() {
  const ref = useRef(null)

  // Words start pale and take ink as the reader scrolls through the paragraph.
  // Without JavaScript, or with reduced motion, the paragraph is simply fully inked.
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const words = [...el.querySelectorAll('.brief-word')]
    let lit = 0
    let frame = 0
    el.classList.add('is-live')
    const paint = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const progress = Math.min(1, Math.max(0, (vh * 0.86 - rect.top) / (rect.height + vh * 0.3)))
      const next = Math.round(progress * words.length)
      if (next === lit) return
      const on = next > lit
      for (let i = Math.min(lit, next); i < Math.max(lit, next); i++) words[i].classList.toggle('is-lit', on)
      lit = next
    }
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(paint) }
    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      el.classList.remove('is-live')
      words.forEach(word => word.classList.remove('is-lit'))
    }
  }, [])

  return (
    <section className="brief-section" id="brief" aria-label="In brief">
      <div className="container">
        <SectionMark label="In brief" />
        <p className="brief-text" ref={ref}>
          {statements.map((statement, s) => (
            <a key={s} href={statement.href}>
              {statement.text.split(' ').map((word, w) => (
                <span key={w}><span className="brief-word">{word}</span>{' '}</span>
              ))}
            </a>
          ))}
        </p>
      </div>
    </section>
  )
}
