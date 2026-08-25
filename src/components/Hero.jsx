import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ArrowDown, MapPin, Sparkles, Linkedin } from 'lucide-react'
import XIcon from './ui/XIcon'
import '../styles/Hero.css'

import bcgLogo from '../assets/logos/bcg.png'
import lbsLogo from '../assets/logos/lbs.png'
import metaLogo from '../assets/logos/meta.png'
import accentureLogo from '../assets/logos/accenture.png'

const heroSlides = [
    {
        image: '/images/vyshak-portrait.jpg',
        caption: 'Vyshak K Iyengar · Product Strategy Lead at Meta',
        tag: 'Product Leader'
    },
    {
        image: '/images/lbs-campus.jpg',
        caption: 'London Business School Campus · Regent\'s Park, London',
        tag: 'MBA 2025'
    },
    {
        image: '/images/lbs-grad-gown.jpg',
        caption: 'London Business School MBA Congregation',
        tag: 'Global Alumni'
    },
    {
        image: '/images/lbs-grad-stage.jpg',
        caption: 'Degree Conferment Stage · London Business School',
        tag: 'Leadership'
    },
    {
        image: '/images/blufin-pool.jpg',
        caption: 'BluFin Foundation · Supporting 120+ Grassroots Athletes',
        tag: 'Social Impact'
    }
]

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    useEffect(() => {
        if (!isAutoPlaying) return
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
        }, 4500)
        return () => clearInterval(interval)
    }, [isAutoPlaying])

    const handlePrev = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))
    }

    const handleNext = () => {
        setIsAutoPlaying(false)
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length)
    }

    return (
        <section className="hero-section" id="hero">
            <div className="container hero-container">
                {/* Left Column: Third-Person Bio & Credentials */}
                <div className="hero-text-col fade-in-1">
                    <div className="badge-pill">
                        <Sparkles size={14} className="badge-icon" />
                        <span>Official Digital Footprint</span>
                    </div>

                    <h1 className="hero-name">
                        Vyshak
                        <span className="hero-surname">K Iyengar</span>
                    </h1>

                    <div className="hero-headline">
                        Product Strategy Lead at <strong>Meta</strong>. Alumnus of <strong>London Business School</strong> &amp; <strong>Accenture Strategy</strong>. Co-founder of <strong>BluFin Foundation</strong>.
                    </div>

                    <div className="hero-animated-line"></div>

                    <div className="hero-location-tag">
                        <MapPin size={15} className="pin-icon" />
                        <span>LONDON &nbsp;·&nbsp; BANGALORE &nbsp;·&nbsp; DUBAI</span>
                    </div>

                    {/* Authority Logos */}
                    <div className="hero-logos-wrapper fade-in-3">
                        <span className="logos-label">Career &amp; Educational Footprint</span>
                        <div className="hero-logos-row">
                            <div className="logo-box" title="Meta - Product Strategy">
                                <img src={metaLogo} alt="Meta" className="company-logo" />
                            </div>
                            <div className="logo-box" title="Boston Consulting Group">
                                <img src={bcgLogo} alt="BCG" className="company-logo" />
                            </div>
                            <div className="logo-box" title="London Business School">
                                <img src={lbsLogo} alt="London Business School" className="company-logo" />
                            </div>
                            <div className="logo-box" title="Accenture Strategy">
                                <img src={accentureLogo} alt="Accenture" className="company-logo" />
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta-wrapper">
                        <a 
                            href="/about" 
                            onClick={(e) => {
                                e.preventDefault()
                                const el = document.getElementById('narrative')
                                if (el) el.scrollIntoView({ behavior: 'smooth' })
                                window.history.pushState(null, '', '/about')
                            }} 
                            className="btn-hero-primary"
                        >
                            <span>Explore Profile</span>
                            <ArrowDown size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://x.com/vyshakkiyengar" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                            <XIcon size={15} />
                            <span>X (Twitter)</span>
                        </a>
                    </div>
                </div>

                {/* Right Column: World-Class Editorial Photo Carousel Slider */}
                <div className="hero-gallery-col fade-in-2">
                    <div className="gallery-card-frame">
                        {/* Slide Display */}
                        <div className="gallery-slide-container">
                            {heroSlides.map((slide, index) => (
                                <div
                                    key={index}
                                    className={`gallery-slide ${index === currentIndex ? 'active' : ''}`}
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="slide-overlay-gradient"></div>
                                    <div className="slide-badge">{slide.tag}</div>
                                    <div className="slide-caption">
                                        <p>{slide.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="gallery-controls">
                            <button onClick={handlePrev} className="gallery-nav-btn" aria-label="Previous Slide">
                                <ChevronLeft size={20} />
                            </button>
                            
                            <div className="gallery-dots">
                                {heroSlides.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setIsAutoPlaying(false)
                                            setCurrentIndex(index)
                                        }}
                                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button onClick={handleNext} className="gallery-nav-btn" aria-label="Next Slide">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
