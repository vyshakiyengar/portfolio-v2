import { Mic, Lightbulb, ExternalLink, FileText } from 'lucide-react'
import '../styles/Recognition.css'
import patentPreview from '../assets/previews/patent-v3.png'
import podcastPreview from '../assets/previews/podcast-v2.png'
import yourstoryPreview from '../assets/previews/yourstory-v3.png'
import clearadmitPreview from '../assets/previews/clearadmit.png'

const spotlightItems = [
    {
        id: 4,
        tag: "Media Feature",
        title: "Real Humans of Meta",
        subtitle: "LBS MBA Product Marketing Manager",
        description: "Featured in Clear Admit discussing the journey from London Business School to Meta, product marketing strategy, and the MBA experience.",
        icon: FileText,
        link: "https://www.clearadmit.com/2026/03/real-humans-of-meta-lbs-mba-product-marketing-manager/",
        linkText: "Read in Clear Admit",
        type: "media",
        image: clearadmitPreview
    },
    {
        id: 1,
        tag: "Media Feature",
        title: "BluFin Foundation",
        subtitle: "YourStory Feature",
        description: "Profiled for co-founding an inclusive sporting ecosystem backing 120+ athletes. Supported by Accel Partners.",
        icon: FileText,
        link: "https://yourstory.com/socialstory/2024/08/blufin-foundation-led-by-paralympian-sharath-gayak",
        linkText: "Read in YourStory",
        type: "media",
        image: yourstoryPreview
    },
    {
        id: 2,
        tag: "Media Feature",
        title: "Crack The MBA",
        subtitle: "Podcast Interview",
        description: "A deep dive into the pivot from Engineering to Strategy, London Business School, and social leadership.",
        icon: Mic,
        link: "https://www.youtube.com/watch?v=v4CaZ4xwotI",
        linkText: "Listen Now",
        type: "media",
        image: podcastPreview
    },
    {
        id: 3,
        tag: "Patent",
        title: "Project Visualization",
        subtitle: "US Patent 12,020,352",
        description: "Invented a system for visualizing complex project dependencies. Granted in 2024, a key signal of technical product leadership.",
        icon: Lightbulb,
        link: "https://patents.google.com/patent/US12020352B2",
        linkText: "View Patent",
        type: "patent",
        image: patentPreview
    }
];

const Features = () => {
    return (
        <section className="recognition-section" id="spotlight">
            <div className="container">
                <h2 className="section-heading text-center">Spotlight</h2>

                <div className="recognition-grid">
                    {spotlightItems.map((item) => (
                        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={`builder-card feature-${item.type} block-link`}>
                            {item.image ? (
                                <div className="card-preview">
                                    <img src={item.image} alt={item.title} />
                                    <div className="preview-overlay"></div>
                                    <span className={`feature-tag tag-${item.type}`}>{item.tag}</span>
                                </div>
                            ) : (
                                <div className="card-preview-placeholder" style={{ padding: '10px 20px', backgroundColor: 'var(--card-bg, #f9f9f9)' }}>
                                    <span className={`feature-tag tag-${item.type}`}>{item.tag}</span>
                                </div>
                            )}

                            <div className="card-content-wrapper">
                                <div className="card-header">
                                    <span className="card-category">{item.category || item.tag}</span>
                                    <item.icon size={16} className="card-icon" />
                                </div>

                                <h3 className="card-title">{item.title}</h3>
                                {item.subtitle && <div className="card-subtitle">{item.subtitle}</div>}

                                <p className="card-desc">
                                    {item.description}
                                </p>

                                <div className="card-link-text">
                                    {item.linkText}
                                    <ExternalLink size={14} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features
