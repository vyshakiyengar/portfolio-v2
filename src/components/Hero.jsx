import { useState, useEffect } from 'react'
import ScrollIndicator from './ScrollIndicator'
import '../styles/Hero.css'
import hero1 from '../assets/hero/hero-new-1.jpg'
import hero3 from '../assets/hero/hero-new-3.jpg'
import hero4 from '../assets/hero/hero-new-4.jpg'
import heroExtra1 from '../assets/hero/hero-extra-1.jpg'
import heroExtra2 from '../assets/hero/hero-extra-2.jpg'
import heroExtra3 from '../assets/hero/hero-extra-3.jpg'
import heroExtra4 from '../assets/hero/hero-extra-4.jpg'
import bcgLogo from '../assets/logos/bcg.png'
import lbsLogo from '../assets/logos/lbs.png'
import metaLogo from '../assets/logos/meta.png'
import accentureLogo from '../assets/logos/accenture.png'

const heroImages = [hero1, hero3, hero4, heroExtra1, heroExtra2, heroExtra3, heroExtra4]

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 1500) // Faster transition (1.5s)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero-split" id="hero">
            {/* Background Patent Watermark - Fade in first */}
            <div className="patent-watermark fade-in-1"></div>

            <div className="hero-left-col">
                <div className="hero-text-content">
                    <h1 className="hero-name fade-in-2">
                        Vyshak
                        <span className="hero-last-name">Kannan Iyengar</span>
                    </h1>

                    {/* Editorial Accent Line - 2px Hairline */}
                    <div className="hero-divider expand-width-long"></div>

                    {/* Location - Micro-Typography */}
                    <div className="hero-location fade-in-2">
                        BANGALORE <span className="separator">·</span> LONDON
                    </div>

                    {/* Minimal Logo Row */}
                    <div className="hero-logo-row fade-in-3">
                        <img src={metaLogo} alt="Meta" className="hero-logo-mono" />
                        <img src={bcgLogo} alt="BCG" className="hero-logo-mono" />
                        <img src={lbsLogo} alt="LBS" className="hero-logo-mono" />
                        <img src={accentureLogo} alt="Accenture" className="hero-logo-mono logo-accenture" />
                    </div>

                    <a href="#experience" className="hero-cta-text fade-in-4">
                        View Experience <span className="arrow-down">↓</span>
                    </a>
                </div>
            </div>

            <div className="hero-right-col fade-in-4">
                <div className="hero-card-stack">
                    {heroImages.map((img, index) => {
                        const offset = (index - currentImageIndex + heroImages.length) % heroImages.length;
                        return (
                            <div
                                key={index}
                                className={`card-slide offset-${offset}`}
                                style={{ backgroundImage: `url(${img})` }}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Hero
