import { ArrowUpRight } from 'lucide-react'
import metaLogo from '../assets/logos/meta.png'
import lbsLogo from '../assets/logos/lbs.png'
import bcgLogo from '../assets/logos/bcg.png'
import accentureLogo from '../assets/logos/accenture.png'

const photographs = [
  { image: '/images/lbs-campus.jpg', caption: "London Business School Campus · Regent's Park, London", tag: 'MBA 2025' },
  { image: '/images/lbs-grad-gown.jpg', caption: 'London Business School MBA Congregation', tag: 'Global Alumni' },
  { image: '/images/lbs-grad-stage.jpg', caption: 'Degree Conferment Stage · London Business School', tag: 'Leadership' },
  { image: '/images/blufin-pool.jpg', caption: 'BluFin Foundation · Supporting 120+ Grassroots Athletes', tag: 'Social Impact' },
]

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-layout">
          <div className="hero-intro">
            <p className="eyebrow">Product strategy · AI · Social impact</p>
            <h1>Vyshak<br />K Iyengar<span className="name-period">.</span></h1>
            <p className="hero-role">Technology leader and social entrepreneur.</p>
            <p className="hero-description">Leading product strategy at Meta. Co-founder of BluFin Foundation. Alumnus of London Business School, BCG &amp; Accenture Strategy.</p>
            <div className="hero-links">
              <a href="#spotlight">Explore my work <ArrowUpRight size={17} /></a>
              <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} /></a>
              <a href="https://x.com/vyshakkiyengar" target="_blank" rel="noopener noreferrer">X (Twitter) <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-credentials" aria-label="Career and education">
              <img src={metaLogo} alt="Meta" title="Meta · Product Strategy" />
              <img src={lbsLogo} alt="London Business School" title="London Business School · MBA" />
              <img src={bcgLogo} alt="BCG" title="BCG · MBA internship" />
              <img src={accentureLogo} alt="Accenture Strategy" title="Accenture Strategy" />
            </div>
            <p className="hero-location">London · Bangalore · Dubai</p>
          </div>
          <figure className="hero-portrait">
            <img src="/images/vyshak-portrait.jpg" width="855" height="1024" alt="Vyshak K Iyengar" fetchPriority="high" />
            <figcaption><span>Vyshak K Iyengar</span><span>Product Strategy Lead at Meta</span></figcaption>
          </figure>
        </div>
        <div className="photo-journal" aria-label="Education and social impact photographs">
          {photographs.map(photo => <figure key={photo.image}>
            <img src={photo.image} alt={photo.caption} loading="lazy" width="600" height="400" />
            <figcaption><span>{photo.tag}</span>{photo.caption}</figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  )
}
