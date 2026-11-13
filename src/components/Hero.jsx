import { ArrowUpRight } from 'lucide-react'
import metaLogo from '../assets/logos/meta.webp'
import lbsLogo from '../assets/logos/lbs.webp'
import bcgLogo from '../assets/logos/bcg-2026.webp'
import accentureLogo from '../assets/logos/accenture.webp'

// Four facts a first-time visitor should leave with. Each one links to its evidence further down.
const ledger = [
  { verb: 'Built', fact: 'SpeechOn, a speech exercise app used in 38 countries', href: '#products' },
  { verb: 'Co-invented', fact: 'A project visualization system, US\u00a0Patent\u00a012,020,352', href: '#patent' },
  { verb: 'Co-founded', fact: 'BluFin Foundation, which has trained 120+\u00a0children in sport', href: '#impact' },
  { verb: 'Cited', fact: 'By four research and industry publications', href: '#research' },
]

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-intro">
            <p className="eyebrow hero-settle" style={{ '--i': 0 }}>Product strategy · AI · Social impact</p>
            <h1>
              <span className="hero-line"><span>Vyshak</span></span>{' '}
              <span className="hero-line"><span>K Iyengar<span className="name-period">.</span></span></span>
            </h1>
            <p className="hero-role hero-settle" style={{ '--i': 1 }}>AI and product strategist.</p>
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
        <ul className="hero-ledger" aria-label="At a glance">
          {ledger.map((item, i) => (
            <li key={item.verb} className="hero-settle" style={{ '--i': 6 + i }}>
              <a href={item.href}>
                <span className="ledger-verb">{item.verb}</span>
                <span className="ledger-fact">{item.fact}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
