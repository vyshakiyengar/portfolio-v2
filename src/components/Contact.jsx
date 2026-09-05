import { Linkedin, Mail, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react'
import XIcon from './ui/XIcon'

const footerNavLinks = [
    { label: 'Home', path: '/', id: 'hero' },
    { label: 'About', path: '/about', id: 'narrative' },
    { label: 'Timeline', path: '/experience', id: 'experience' },
    { label: 'Spotlight', path: '/spotlight', id: 'spotlight' },
    { label: 'Impact', path: '/impact', id: 'impact' },
];

const Contact = () => {

    return (
        <footer className="footer-section" id="contact">
            <div className="container contact-container">
                <div className="contact-card-box text-center fade-in-1">
                    <div className="contact-badge-pill">
                        <ShieldCheck size={14} />
                        <span>07 / Contact</span>
                    </div>

                    <h2 className="contact-heading">Let’s connect.</h2>
                    <p className="contact-subheading">
                        For conversations about product leadership, advisory, social impact initiatives, or working together.
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
                            <span>LinkedIn</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <a href="https://x.com/vyshakkiyengar" target="_blank" rel="noopener noreferrer" className="btn-contact-sub">
                            <XIcon size={16} />
                            <span>X Profile</span>
                            <ArrowUpRight size={16} />
                        </a>
                    </div>
                    <div className="profile-links"><a href="https://github.com/vyshakiyengar" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://medium.com/@vyshakiyengar" target="_blank" rel="noopener noreferrer">Medium</a><a href="https://scholar.google.com/citations?user=MKSlYmUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a><a href="https://www.wikidata.org/wiki/Q141014773" target="_blank" rel="noopener noreferrer">Wikidata</a></div>
                </div>

                {/* Footer Navigation & Copyright */}
                <div className="contact-bottom-bar">
                    <div className="footer-brand">
                        <Globe size={16} className="brand-globe" />
                        <span>Vyshak K Iyengar</span>
                    </div>

                    <div className="footer-links-row">
                        {footerNavLinks.map((link) => (
                            <a
                                key={link.label}
                                href={`#${link.id}`}
                            >
                                {link.label}
                            </a>
                        ))}
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
