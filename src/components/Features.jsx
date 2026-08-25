import { Mic, Lightbulb, ExternalLink, FileText, Sparkles, Bot, Newspaper } from 'lucide-react'
import '../styles/Recognition.css'
import patentPreview from '../assets/previews/patent-v3.png'
import podcastPreview from '../assets/previews/podcast-v2.png'
import yourstoryPreview from '../assets/previews/yourstory-v3.png'
import clearadmitPreview from '../assets/previews/clearadmit.png'
import tipranksPreview from '../assets/previews/tipranks.svg'
import prajavaniPreview from '../assets/previews/prajavani.svg'

const spotlightItems = [
    {
        id: 6,
        tag: "Media Feature",
        title: "WhatsApp AI Shopping Agent",
        subtitle: "Prajavani · Kannada · 25 Aug 2026",
        description: "Featured by Prajavani, Karnataka’s most popular Kannada daily, for developing an AI shopping agent on WhatsApp enabling voice & text daily need ordering via Swiggy MCP and multimodal AI.",
        icon: Newspaper,
        link: "https://www.prajavani.net/technology/gadget-news/start-up-bengaluru-techie-ai-shopping-agent-whatsapp-mcp-swiggy-4218412",
        linkText: "Read Article on Prajavani",
        type: "media",
        image: prajavaniPreview
    },
    {
        id: 5,
        tag: "Industry Mention",
        title: "Voice-Based Kannada AI Ordering",
        subtitle: "TipRanks · English · 18 Aug 2026",
        description: "TipRanks' auto-generated newsdesk highlighted a Gnani AI LinkedIn post about the Kannada voice-ordering agent built with PRISMA, TIMBRE and Swiggy MCP.",
        icon: Bot,
        link: "https://www.tipranks.com/news/private-companies/voice-based-kannada-ordering-showcases-gnani-ai-speech-technology-in-swiggy-ecosystem",
        linkText: "Read Article on TipRanks",
        type: "media",
        image: tipranksPreview
    },
    {
        id: 4,
        tag: "Media Feature",
        title: "Real Humans of Meta",
        subtitle: "Clear Admit Career Feature",
        description: "Featured in Clear Admit profiling Vyshak K Iyengar's trajectory from London Business School to Product Strategy at Meta, highlighting tech leadership and strategy.",
        icon: FileText,
        link: "https://www.clearadmit.com/2026/03/real-humans-of-meta-lbs-mba-product-marketing-manager/",
        linkText: "Read Profile on Clear Admit",
        type: "media",
        image: clearadmitPreview
    },
    {
        id: 1,
        tag: "Media Feature",
        title: "BluFin Foundation",
        subtitle: "YourStory National Profile",
        description: "Profiled in YourStory for co-founding an inclusive sporting ecosystem backing 120+ children and 2 Asian Para Games athletes. Supported by Accel Partners.",
        icon: FileText,
        link: "https://yourstory.com/socialstory/2024/08/blufin-foundation-led-by-paralympian-sharath-gayak",
        linkText: "Read Article on YourStory",
        type: "media",
        image: yourstoryPreview
    },
    {
        id: 2,
        tag: "Media Podcast",
        title: "Crack The MBA Interview",
        subtitle: "Strategic Leadership Podcast",
        description: "Podcast interview featuring Vyshak K Iyengar detailing the career transition from Computer Science Engineering to Accenture Strategy, London Business School, and social leadership.",
        icon: Mic,
        link: "https://www.youtube.com/watch?v=v4CaZ4xwotI",
        linkText: "Watch Podcast Interview",
        type: "media",
        image: podcastPreview
    },
    {
        id: 3,
        tag: "Granted Patent",
        title: "US Patent 12,020,352",
        subtitle: "Project Dependency Visualization",
        description: "Granted to inventor Vyshak K Iyengar for an automated system visualizing complex project dependencies, reflecting technical product architecture and innovation.",
        icon: Lightbulb,
        link: "https://patents.google.com/patent/US12020352B2",
        linkText: "Google Patent",
        secondaryLink: "https://scholar.google.com/citations?user=MKSlYmUAAAAJ&hl=en",
        secondaryLinkText: "Google Scholar Profile",
        type: "patent",
        image: patentPreview
    }
];

const Features = () => {
    return (
        <section className="recognition-section" id="spotlight">
            <div className="container">
                <div className="text-center">
                    <span className="spotlight-section-tag">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        Verified Index &amp; Press
                    </span>
                    <h2 className="section-heading">Spotlight &amp; Publications</h2>
                    <p className="section-subheading">Selected press coverage, media interviews, and granted patents establishing authority and industry footprint.</p>
                    <div className="animated-divider"></div>
                </div>

                <div className="recognition-grid">
                    {spotlightItems.map((item) => {
                        const CardWrapper = item.secondaryLink ? 'div' : 'a';
                        const wrapperProps = item.secondaryLink
                            ? { className: `builder-card feature-${item.type}` }
                            : { href: item.link, target: '_blank', rel: 'noopener noreferrer', className: `builder-card feature-${item.type} block-link` };

                        return (
                            <CardWrapper key={item.id} {...wrapperProps}>
                                {item.image ? (
                                    <div className="card-preview">
                                        {item.secondaryLink ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                                                <img src={item.image} alt={item.title} />
                                            </a>
                                        ) : (
                                            <img src={item.image} alt={item.title} />
                                        )}
                                        <div className="preview-overlay"></div>
                                        <span className={`feature-tag tag-${item.type}`}>{item.tag}</span>
                                    </div>
                                ) : (
                                    <div className="card-preview-placeholder">
                                        <span className={`feature-tag tag-${item.type}`}>{item.tag}</span>
                                    </div>
                                )}

                                <div className="card-content-wrapper">
                                    <div className="card-header">
                                        <span className="card-category">{item.category || item.tag}</span>
                                        <item.icon size={18} className="card-icon" />
                                    </div>

                                    <h3 className="card-title">
                                        {item.secondaryLink ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {item.title}
                                            </a>
                                        ) : (
                                            item.title
                                        )}
                                    </h3>
                                    {item.subtitle && <div className="card-subtitle">{item.subtitle}</div>}

                                    <p className="card-desc">
                                        {item.description}
                                    </p>

                                    {item.secondaryLink ? (
                                        <div className="card-links-row">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link-item">
                                                <span>{item.linkText}</span>
                                                <ExternalLink size={13} />
                                            </a>
                                            <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="card-link-item card-link-secondary">
                                                <span>{item.secondaryLinkText}</span>
                                                <ExternalLink size={13} />
                                            </a>
                                        </div>
                                    ) : (
                                        <div className="card-link-text">
                                            <span>{item.linkText}</span>
                                            <ExternalLink size={14} />
                                        </div>
                                    )}
                                </div>
                            </CardWrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features
