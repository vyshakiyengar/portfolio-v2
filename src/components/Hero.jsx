import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import HeroField from './HeroField'
import metaLogo from '../assets/logos/meta.webp'
import lbsLogo from '../assets/logos/lbs.webp'
import bcgLogo from '../assets/logos/bcg-2026.webp'
import accentureLogo from '../assets/logos/accenture.webp'

// The first line is the one search engines and the prerendered page carry; the rest
// roll through after the load sequence to show the range in the first screen.
const roles = [
  'AI and product strategist.',
  'Builder of AI products.',
  'Co-founder, BluFin Foundation.',
  'Co-inventor on a US patent.',
]

function RoleRoll() {
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setTick(n => n + 1), 2800)
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
      <HeroField />
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
              <img className="cred-meta" src={metaLogo} width="220" height="124" alt="Meta" title="Meta · Product Strategy &amp; Growth" />
              <img className="cred-bcg" src={bcgLogo} width="220" height="90" alt="BCG" title="BCG · Strategy consulting" />
              <img className="cred-lbs" src={lbsLogo} width="220" height="220" alt="London Business School" title="London Business School · MBA" />
              <img className="cred-accenture" src={accentureLogo} width="220" height="76" alt="Accenture Strategy" title="Accenture Strategy" />
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
            <figcaption><span>Vyshak K Iyengar</span><span>Product strategy &amp; AI</span></figcaption>
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
