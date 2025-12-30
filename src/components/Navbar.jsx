import { useState, useEffect } from 'react'
import { Menu, X, User, Briefcase, Brain, MessageSquare, Linkedin } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import '../styles/Navbar.css'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    // Use Shared Hook
    const sectionIds = ['hero', 'narrative', 'experience', 'spotlight', 'recommendations', 'contact']
    const activeSection = useActiveSection(sectionIds)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'About', href: '#narrative', icon: <User size={18} strokeWidth={1} />, id: 'narrative' },
        { name: 'Experience', href: '#experience', icon: <Briefcase size={18} strokeWidth={1} />, id: 'experience' },
        { name: 'Spotlight', href: '#spotlight', icon: <Brain size={18} strokeWidth={1} />, id: 'spotlight' },
        { name: 'Network', href: '#recommendations', icon: <MessageSquare size={18} strokeWidth={1} />, id: 'recommendations' },
        { name: 'Contact', href: '#contact', icon: <MessageSquare size={18} strokeWidth={1} />, id: 'contact' },
    ]

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#hero" className="navbar-logo">
                    <span className="logo-text">Vyshak Iyengar</span>
                </a>

                {/* Desktop Navigation */}
                <div className="nav-links desktop-only">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`nav-link hover-underline ${activeSection === link.id ? 'active' : ''}`}
                        >
                            <span className="nav-icon">{link.icon}</span>
                            <span className="nav-text">{link.name}</span>
                        </a>
                    ))}
                    <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-resume">
                        <span>Visit LinkedIn</span>
                        <Linkedin size={16} />
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
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-resume mobile-resume">
                        Visit LinkedIn <Linkedin size={16} />
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
