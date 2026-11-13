import { useEffect, useState } from 'react'
import { Linkedin, Mail, Globe, ArrowUpRight, Copy, Check } from 'lucide-react'
import SectionMark from './SectionMark'
import XIcon from './ui/XIcon'
import Terrain from './Terrain'

// Same labels and order as the top navigation.
const footerNavLinks = [
    { label: 'About', id: 'narrative' },
    { label: 'Experience', id: 'experience' },
    { label: 'Recommendations', id: 'recommendations' },
    { label: 'Press & Work', id: 'spotlight' },
    { label: 'Impact', id: 'impact' },
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Back to top', id: 'hero' },
];

const EMAIL = 'vyshakiyengar@gmail.com'

// Current time in London, so visitors in other time zones know when to expect a reply.
// Rendered only in the browser, so the prerendered page never shows a stale time.
function LondonTime() {
    const [time, setTime] = useState(null)
    useEffect(() => {
        const format = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' })
        const tick = () => setTime(format.format(new Date()))
        tick()
        const id = setInterval(tick, 20000)
        return () => clearInterval(id)
    }, [])
    if (!time) return null
    return <p className="contact-time">Based in London, where it is now <time>{time}</time>.</p>
}

function CopyEmail() {
    const [copied, setCopied] = useState(false)
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL)
        } catch {
            const field = document.createElement('textarea')
            field.value = EMAIL
            field.setAttribute('readonly', '')
            field.style.cssText = 'position:fixed;opacity:0'
            document.body.appendChild(field)
            field.select()
            document.execCommand('copy')
            field.remove()
        }
        setCopied(true)
        setTimeout(() => setCopied(false), 2200)
    }
    return (
        <button type="button" className={`copy-email${copied ? ' is-copied' : ''}`} onClick={copy}>
            {copied ? <Check size={15} aria-hidden="true" /> : <Copy size={15} aria-hidden="true" />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
        </button>
    )
}

const Contact = () => {

    return (
        <footer className="footer-section" id="contact">
            <Terrain />
            <div className="container contact-container">
                <div className="contact-card-box text-center fade-in-1">
                    <SectionMark n="07" label="Contact" />

                    <h2 className="contact-heading" data-reveal><span>Get in touch.</span></h2>
                    <p className="contact-subheading">
                        For conversations with Vyshak about product leadership, advisory, social impact initiatives, or working together.
                    </p>

                    <LondonTime />

                    <div className="animated-divider"></div>

                    <div className="contact-actions-row">
                        <a href="mailto:vyshakiyengar@gmail.com" className="btn-contact-main">
                            <Mail size={18} />
                            <span>vyshakiyengar@gmail.com</span>
                            <ArrowUpRight size={16} />
                        </a>
                        <CopyEmail />
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
                    <div className="profile-links"><a href="https://github.com/vyshakiyengar" target="_blank" rel="noopener noreferrer">GitHub</a><a href="https://medium.com/@vyshakiyengar" target="_blank" rel="noopener noreferrer">Medium</a><a href="https://www.producthunt.com/@vyshakiyengar" target="_blank" rel="noopener noreferrer">Product Hunt</a><a href="https://scholar.google.com/citations?user=MKSlYmUAAAAJ&amp;hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a><a href="https://orcid.org/0009-0002-5098-6448" target="_blank" rel="noopener noreferrer">ORCID</a><a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7479580" target="_blank" rel="noopener noreferrer">SSRN</a><a href="https://www.instagram.com/vyshak_iyengar/" target="_blank" rel="noopener noreferrer">Instagram</a><a href="https://www.facebook.com/vyshakiyengar/" target="_blank" rel="noopener noreferrer">Facebook</a></div>
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
