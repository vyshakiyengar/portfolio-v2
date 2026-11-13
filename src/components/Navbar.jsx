import { useEffect, useRef, useState } from 'react'
import { Menu, X, ArrowDown, ArrowUp } from 'lucide-react'

// Numbered sections, in page order. The tracker and nav highlight both read from this list.
const links = [
 ['About', 'narrative'], ['Experience', 'experience'], ['Recommendations', 'recommendations'], ['Press & Work', 'spotlight'],
 ['Impact', 'impact'], ['Philosophy', 'philosophy'], ['Contact', 'contact'],
]
const pad = n => String(n).padStart(2, '0')

function useScrollState() {
 const [state, setState] = useState({ active: -1, progress: 0, scrolled: false, away: false })
 useEffect(() => {
   let frame = 0
   let lastY = 0
   let away = false
   const measure = () => {
     frame = 0
     const doc = document.documentElement
     const max = doc.scrollHeight - window.innerHeight
     const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
     const line = window.innerHeight * 0.35
     let active = -1
     links.forEach(([, id], i) => {
       const el = document.getElementById(id)
       if (el && el.getBoundingClientRect().top <= line) active = i
     })
     if (max - window.scrollY < 4) active = links.length - 1
     const scrolled = window.scrollY > 24
     // On phones the header steps aside while reading down and returns on the first scroll up.
     const y = window.scrollY
     if (window.innerWidth > 760 || y < 160) away = false
     else if (y > lastY + 6) away = true
     else if (y < lastY - 6) away = false
     lastY = y
     setState(prev => (prev.active === active && prev.scrolled === scrolled && prev.away === away && Math.abs(prev.progress - progress) < 0.002 ? prev : { active, progress, scrolled, away }))
   }
   const onScroll = () => { if (!frame) frame = requestAnimationFrame(measure) }
   measure()
   window.addEventListener('scroll', onScroll, { passive: true })
   window.addEventListener('resize', onScroll)
   return () => {
     window.removeEventListener('scroll', onScroll)
     window.removeEventListener('resize', onScroll)
     if (frame) cancelAnimationFrame(frame)
   }
 }, [])
 return state
}

function SectionTracker({ active, scrolled }) {
 const total = links.length
 const atStart = active < 0
 const atEnd = active === total - 1
 const next = atStart ? links[0] : links[active + 1]
 const remaining = atStart ? total : total - active - 1
 const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

 return (
   <nav className={`section-tracker${atStart ? ' is-start' : ''}${scrolled ? '' : ' is-resting'}`} aria-label="Section progress">
     <div className="tracker-segments" aria-hidden="true">
       {links.map(([label, id], i) => (
         <button
           key={id}
           type="button"
           tabIndex={-1}
           title={`${pad(i + 1)} ${label}`}
           className={`tracker-seg${i < active ? ' is-done' : ''}${i === active ? ' is-current' : ''}`}
           onClick={() => go(id)}
         />
       ))}
     </div>
     <div className="tracker-text">
       {atStart ? (
         <span className="tracker-now"><strong>{total} sections</strong> <span className="tracker-name">on this page</span></span>
       ) : (
         <span className="tracker-now" key={active}><strong>{pad(active + 1)} / {pad(total)}</strong> <span className="tracker-name">{links[active][0]}</span></span>
       )}
       {atEnd ? (
         <button type="button" className="tracker-next" onClick={() => go('hero')}>Back to top <ArrowUp size={13} aria-hidden="true" /></button>
       ) : (
         <button type="button" className="tracker-next" onClick={() => go(next[1])}>
           <span className="tracker-left">{remaining} more ·</span> Next: {next[0]} <ArrowDown size={13} aria-hidden="true" />
         </button>
       )}
     </div>
   </nav>
 )
}

export default function Navbar() {
 const [open, setOpen] = useState(false)
 const toggle = useRef(null)
 const { active, progress, scrolled, away } = useScrollState()
 useEffect(() => {
   const close = event => { if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() } }
   document.addEventListener('keydown', close)
   return () => document.removeEventListener('keydown', close)
 }, [])
 return <>
   <a className="skip-link" href="#main-content">Skip to content</a>
   <header className={`site-header${away && !open ? ' is-away' : ''}`}>
     <nav className="container site-nav" aria-label="Main navigation">
       <a className="wordmark" href="#hero" onClick={() => setOpen(false)}>Vyshak K Iyengar<span>.</span></a>
       <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
       <div id="navigation-links" className={`navigation-links ${open ? 'is-open' : ''}`}>
         {links.map(([label, id], i) => (
           <a
             key={id}
             href={`#${id}`}
             className={i === active ? 'is-active' : ''}
             aria-current={i === active ? 'location' : undefined}
             onClick={() => setOpen(false)}
           >
             <span className="nav-num">{pad(i + 1)}</span>{label}
           </a>
         ))}
       </div>
     </nav>
     <div className="read-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
   </header>
   <SectionTracker active={active} scrolled={scrolled} />
 </>
}
