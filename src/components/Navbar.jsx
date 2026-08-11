import { useState, useEffect } from 'react'
import { Menu, X, User, Briefcase, Sparkles, Heart, Compass, Mail, Linkedin } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import '../styles/Navbar.css'

const SECTION_IDS = ['hero', 'narrative', 'experience', 'spotlight', 'impact', 'philosophy', 'contact'];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const activeSection = useActiveSection(SECTION_IDS)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#narrative', path: '/about', icon: <User size={16} />, id: 'narrative' },
        { name: 'Timeline', href: '#experience', path: '/experience', icon: <Briefcase size={16} />, id: 'experience' },
        { name: 'Spotlight', href: '#spotlight', path: '/spotlight', icon: <Sparkles size={16} />, id: 'spotlight' },
        { name: 'Impact', href: '#impact', path: '/impact', icon: <Heart size={16} />, id: 'impact' },
        { name: 'Philosophy', href: '#philosophy', path: '/philosophy', icon: <Compass size={16} />, id: 'philosophy' },
        { name: 'Contact', href: '#contact', path: '/contact', icon: <Mail size={16} />, id: 'contact' },
    ]

    const handleNavClick = (href, path) => {
        setIsMobileMenuOpen(false)
        if (window.location.pathname === '/' || window.location.pathname === '') {
            // Update address bar cleanly without page reload
            window.history.pushState(null, '', path)
        }
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#hero" onClick={() => handleNavClick('#hero', '/')} className="navbar-logo">
                    <span className="logo-box-mark">V</span>
                    <span className="logo-text">Vyshak Iyengar</span>
                </a>

                {/* Desktop Navigation */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => handleNavClick(link.href, link.path)}
                            className={`nav-link hover-underline ${activeSection === link.id ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-text">{link.name}</span>
                        </a>
                    ))}
                    <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-resume">
                        <span>LinkedIn</span>
                        <Linkedin size={15} />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                    <div className="mobile-menu-header">
                        <span className="mobile-logo-text">Vyshak Iyengar</span>
                    </div>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => handleNavClick(link.href, link.path)}
                        >
                            <span className="mobile-icon">{link.icon}</span>
                            <span>{link.name}</span>
                        </a>
                    ))}
                    <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-resume mobile-resume">
                        <span>LinkedIn Profile</span>
                        <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
