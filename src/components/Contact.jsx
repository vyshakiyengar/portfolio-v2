import { Linkedin, Mail } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <footer className="footer-section" id="contact">
            <div className="container contact-container">

                {/* Header Row: Typewriter Only */}
                <div className="contact-header-row">
                    <div className="typewriter-container">
                        <p className="contact-typewriter">Say Hello!</p>
                    </div>
                </div>

                {/* Minimal Links with Icons */}
                <div className="contact-links-minimal">
                    <a href="mailto:vyshakiyengar@gmail.com" className="minimal-link">
                        <Mail size={24} strokeWidth={1.5} className="minimal-icon" />
                        <span className="minimal-value">vyshakiyengar@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="minimal-link">
                        <Linkedin size={24} strokeWidth={1.5} className="minimal-icon" />
                        <span className="minimal-value">/in/vyshakiyengar</span>
                    </a>
                </div>

                {/* Footer Meta */}
                <div className="contact-footer-minimal">
                    <span className="copyright">© {new Date().getFullYear()} Vyshak Iyengar</span>
                </div>

            </div>
        </footer>
    )
}

export default Contact
