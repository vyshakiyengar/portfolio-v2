import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import Terrain from './Terrain'
import metaLogo from '../assets/logos/meta.webp'
import lbsLogo from '../assets/logos/lbs.webp'
import bcgLogo from '../assets/logos/bcg-2026.webp'
import accentureLogo from '../assets/logos/accenture.webp'

const credentials = [
  { name: 'Meta', tip: 'Product Strategy & Growth, 2025–2026', className: 'cred-meta', logo: metaLogo, width: 220, height: 124 },
  { name: 'BCG', tip: 'Strategy consulting, 2024', className: 'cred-bcg', logo: bcgLogo, width: 220, height: 90 },
  { name: 'London Business School', tip: 'MBA, 2023–2025', className: 'cred-lbs', logo: lbsLogo, width: 220, height: 220 },
  { name: 'Accenture Strategy', tip: 'Strategy consultant, 2017–2022', className: 'cred-accenture', logo: accentureLogo, width: 220, height: 76 },
]

// The first line is the one search engines and the prerendered page carry. After the load
// sequence the lines roll continuously, one every ROLE_INTERVAL ms.
const roles = [
  'AI and product strategist.',
  'Builder of AI products.',
  'Co-founder, BluFin Foundation.',
  'Co-inventor on a US patent.',
]
const ROLE_INTERVAL = 1800

function RoleRoll() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    // Loops for as long as the page is open; holds still while the tab is in the background
    // so it does not skip ahead when you come back.
    const id = setInterval(() => {
      if (!document.hidden) setTick(n => n + 1)
    }, ROLE_INTERVAL)
    return () => clearInterval(id)
  }, [])
  const current = roles[tick % roles.length]
  const previous = tick > 0 ? roles[(tick - 1) % roles.length] : null
  return (
    <p className="hero-role hero-settle" style={{ '--i': 1 }}>
      <span className="role-roll">
        {previous && <span key={`out-${tick}`} className="role-item is-out" aria-hidden="true">{previous}</span>}
        <span key={`in-${tick}`} className={`role-item${tick > 0 ? ' is-in' : ''}`}>{current}</span>
      </span>
    </p>
  )
}

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <Terrain />
      <div className="container">
        <div className="hero-layout">
          <div className="hero-intro">
            <p className="eyebrow hero-settle" style={{ '--i': 0 }}>Product strategy · AI · Social impact</p>
            <h1>
              <span className="hero-line"><span>Vyshak</span></span>{' '}
              <span className="hero-line"><span>K Iyengar<span className="name-period">.</span></span></span>
            </h1>
            <RoleRoll />
            <p className="hero-description hero-settle" style={{ '--i': 2 }}>Most recently led product strategy and growth at Meta, building on strategy consulting at BCG and Accenture. An alumnus of London Business School and co-founder of the social enterprise BluFin Foundation.</p>
            <div className="hero-links hero-settle" style={{ '--i': 3 }}>
              <a className="hero-cta" href="#contact">Get in touch</a>
              <a href="#spotlight">See press &amp; work <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a href="https://x.com/vyshakkiyengar" target="_blank" rel="noopener noreferrer">X (Twitter) <ArrowUpRight size={17} aria-hidden="true" /></a>
            </div>
            <div className="hero-credentials hero-settle" style={{ '--i': 4 }} aria-label="Career and education">
              {credentials.map(item => (
                <a key={item.name} className="cred" href="#experience" data-tip={item.tip} aria-label={`${item.name}: ${item.tip}. Go to Experience`}>
                  <img className={item.className} src={item.logo} width={item.width} height={item.height} alt="" />
                </a>
              ))}
            </div>
            <p className="hero-location hero-settle" style={{ '--i': 5 }}>London · Bangalore · Dubai</p>
          </div>
          <figure className="hero-portrait">
            <div className="hero-portrait-frame">
              <img
                src="/images/vyshak-portrait.jpg"
                srcSet="/images/vyshak-portrait-520.webp 520w, /images/vyshak-portrait-860.webp 855w"
                sizes="(max-width: 760px) 92vw, 430px"
                width="855"
                height="1024"
                alt="Vyshak K Iyengar"
                fetchPriority="high"
              />
            </div>
          </figure>
        </div>
        <a className="scroll-cue hero-settle" style={{ '--i': 7 }} href="#brief">
          <span className="scroll-cue-line" aria-hidden="true" />
          In brief <ArrowDown size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
