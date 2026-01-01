import { Mic, Lightbulb, ExternalLink, FileText, ArrowRight } from 'lucide-react'
import ScrollIndicator from './ScrollIndicator'
import '../styles/Recognition.css'
import patentPreview from '../assets/previews/patent-v3.png'
import podcastPreview from '../assets/previews/podcast-v2.png'
import articlePreview from '../assets/previews/article.png'
import yourstoryPreview from '../assets/previews/yourstory-v3.png'
import slidesharePreview from '../assets/previews/slideshare.png'

const spotlightItems = [
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

const thoughtLeadership = [
    {
        id: 5,
        category: "Industry Deep-Dive",
        title: "The Evolving Role of AI in Wealth Management",
        link: "https://medium.com/datadriveninvestor/the-evolving-role-of-ai-in-wealth-management-bcac791eeb64",
    },
    {
        id: 7,
        category: "Ecosystem Analysis",
        title: "AI Startup Ecosystem in India",
        link: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
    },
    {
        id: 8,
        category: "Disruption",
        title: "Robo Advisors: Disruption in Indian Wealth Management",
        link: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
    },
    {
        id: 4,
        category: "Market Research",
        title: "Consumer Behavior Towards Smartphones",
        link: "https://www.slideshare.net/slideshow/consumer-behavior-towards-smartphones-market-a-market-research-paper-by-vyshak-iyengar/251000747",
    }
];

const Recognition = () => {
    return (
        <section className="recognition-section" id="spotlight">
            <div className="container">
                <h2 className="section-heading text-center">Spotlight</h2>

                {/* Main Cards: Media & Patent */}
                <div className="recognition-grid">
                    {spotlightItems.map((item) => (
                        <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className={`builder-card feature-${item.type} block-link`}>
                            {/* Image Preview */}
                            {item.image && (
                                <div className="card-preview">
                                    <img src={item.image} alt={item.title} />
                                    <div className="preview-overlay"></div>
                                    <span className={`feature-tag tag-${item.type}`}>{item.tag}</span>
                                </div>
                            )}

                            <div className="card-content-wrapper">
                                <div className="card-header">
                                    <span className="card-category">{item.category}</span>
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

                {/* Thought Leadership List */}
                <div className="thought-list-container">
                    <h3 className="thought-list-heading">Original Writing & Research</h3>
                    <div className="thought-list">
                        {thoughtLeadership.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="thought-item">
                                <span className="thought-category">{item.category}</span>
                                <span className="thought-title">{item.title}</span>
                                <span className="thought-arrow"><ArrowRight size={16} /></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recognition
