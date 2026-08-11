import { Linkedin, Mail, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react'
import '../styles/Contact.css'

const Contact = () => {
    return (
        <footer className="footer-section" id="contact">
            <div className="container contact-container">
                <div className="contact-card-box text-center fade-in-1">
                    <div className="contact-badge-pill">
                        <ShieldCheck size={14} />
                        <span>Executive Inquiries</span>
                    </div>

                    <h2 className="contact-heading">Connect with Vyshak Iyengar</h2>
                    <p className="contact-subheading">
                        For product leadership, advisory, social impact initiatives, or executive correspondence.
                    </p>

                    <div className="animated-divider"></div>

                    <div className="contact-actions-row">
                        <a href="mailto:vyshakiyengar@gmail.com" className="btn-contact-main">
                            <Mail size={18} />
                            <span>vyshakiyengar@gmail.com</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <a href="https://www.linkedin.com/in/vyshakiyengar/" target="_blank" rel="noopener noreferrer" className="btn-contact-sub">
                            <Linkedin size={18} />
                            <span>LinkedIn Profile</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>

                {/* Footer Navigation & Copyright */}
                <div className="contact-bottom-bar">
                    <div className="footer-brand">
                        <Globe size={16} className="brand-globe" />
                        <span>vyshak.me — Official Profile</span>
                    </div>

                    <div className="footer-links-row">
                        <a href="#hero">Home</a>
                        <a href="#narrative">About</a>
                        <a href="#experience">Timeline</a>
                        <a href="#spotlight">Spotlight</a>
                        <a href="#impact">Impact</a>
                    </div>

                    <div className="footer-copy">
                        © {new Date().getFullYear()} Vyshak Kannan Iyengar. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Contact
