import { Mic, Lightbulb, ExternalLink, FileText, Sparkles, Bot, Newspaper, BookOpen, GraduationCap, Building2, Scale } from 'lucide-react'
import '../styles/Recognition.css'
import patentPreview from '../assets/previews/patent-v3.png'
import podcastPreview from '../assets/previews/podcast-v2.png'
import yourstoryPreview from '../assets/previews/yourstory-v3.png'
import clearadmitPreview from '../assets/previews/clearadmit.png'
import tipranksPreview from '../assets/previews/tipranks.svg'
import prajavaniPreview from '../assets/previews/prajavani.svg'
import articlePreview from '../assets/previews/article.png'

// 1. Independent Editorial Press & Media (Prioritized Hierarchy)
const pressItems = [
    {
        id: 'press-prajavani',
        tag: "Editorial Feature",
        title: "WhatsApp AI Shopping Agent",
        subtitle: "Prajavani · Kannada Daily · 25 Aug 2026",
        description: "Featured by Prajavani, Karnataka’s leading Kannada daily, for developing an AI shopping agent on WhatsApp enabling voice and text daily-need ordering via Swiggy MCP and multimodal AI.",
        icon: Newspaper,
        link: "https://www.prajavani.net/technology/gadget-news/start-up-bengaluru-techie-ai-shopping-agent-whatsapp-mcp-swiggy-4218412",
        linkText: "Read Article on Prajavani",
        type: "media",
        image: prajavaniPreview
    },
    {
        id: 'press-clearadmit',
        tag: "Career Profile",
        title: "Real Humans of Meta",
        subtitle: "Clear Admit · Career Profile",
        description: "Featured in Clear Admit profiling Vyshak Kannan Iyengar's trajectory from London Business School to Product Strategy at Meta, highlighting tech leadership and strategy.",
        icon: FileText,
        link: "https://www.clearadmit.com/2026/03/real-humans-of-meta-lbs-mba-product-marketing-manager/",
        linkText: "Read Profile on Clear Admit",
        type: "media",
        image: clearadmitPreview
    },
    {
        id: 'press-yourstory',
        tag: "National Feature",
        title: "BluFin Foundation",
        subtitle: "YourStory · SocialStory National Profile",
        description: "Profiled in YourStory for co-founding an inclusive sporting ecosystem backing 120+ children and Asian Para Games athletes. Supported by Accel Partners and Kaleyra.",
        icon: FileText,
        link: "https://yourstory.com/socialstory/2024/08/blufin-foundation-led-by-paralympian-sharath-gayak",
        linkText: "Read Article on YourStory",
        type: "media",
        image: yourstoryPreview
    },
    {
        id: 'press-hedigest',
        tag: "Editorial Feature",
        title: "World-Class Institution in the Making",
        subtitle: "Higher Education Digest · Alumni Profile",
        description: "Featured as a distinguished alumnus in Higher Education Digest, highlighting academic grounding in engineering transitioning to Accenture Strategy, LBS, and Meta.",
        icon: GraduationCap,
        link: "https://www.highereducationdigest.com/rns-institute-of-technology-a-world-class-institution-in-making/",
        linkText: "Read Article on HE Digest",
        type: "media",
        image: articlePreview
    },
    {
        id: 'press-bangalore-mirror',
        tag: "Civic Feature",
        title: "Push to Build a Dream On",
        subtitle: "Bangalore Mirror · Feature",
        description: "Covered by Bangalore Mirror for community leadership and civic impact initiatives supporting para-athlete training infrastructure and accessibility.",
        icon: Newspaper,
        link: "https://bangaloremirror.indiatimes.com/bangalore/others/push-to-build-a-dream-on/articleshow/89931399.cms",
        linkText: "Read Article on Bangalore Mirror",
        type: "media",
        image: articlePreview
    },
    {
        id: 'press-podcast',
        tag: "Media Podcast",
        title: "Crack The MBA Interview",
        subtitle: "Strategic Leadership Podcast",
        description: "In-depth podcast interview featuring Vyshak Kannan Iyengar detailing the career transition from Computer Science Engineering to Accenture Strategy, London Business School, and social leadership.",
        icon: Mic,
        link: "https://www.youtube.com/watch?v=v4CaZ4xwotI",
        linkText: "Watch Podcast Interview",
        type: "media",
        image: podcastPreview
    },
    {
        id: 'press-tipranks',
        tag: "Industry Coverage",
        title: "Voice-Based Kannada AI Ordering",
        subtitle: "TipRanks · Tech News · 18 Aug 2026",
        description: "Covered by TipRanks for architecting an end-to-end WhatsApp AI voice ordering agent in Kannada, pioneering vernacular voice commerce integrated with Swiggy via Model Context Protocol (MCP).",
        icon: Bot,
        link: "https://www.tipranks.com/news/private-companies/voice-based-kannada-ordering-showcases-gnani-ai-speech-technology-in-swiggy-ecosystem",
        linkText: "Read Article on TipRanks",
        type: "media",
        image: tipranksPreview
    }
];

// 2. Intellectual Property (Patents)
const patentItems = [
    {
        id: 'patent-1',
        tag: "Granted US Patent",
        title: "US Patent 12,020,352",
        subtitle: "Project Visualization System · US12020352B2",
        description: "Co-inventor: Vyshak Kannan Iyengar · Assignee: Accenture Global Solutions. Granted for an automated system visualizing complex project dependencies and workflow logic.",
        subNote: "The patent family has subsequently appeared in examiner-added prior-art citation trails for later patent applications.",
        icon: Lightbulb,
        link: "https://patents.google.com/patent/US12020352B2/en",
        linkText: "Google Patents",
        secondaryLink: "https://scholar.google.com/citations?user=MKSlYmUAAAAJ&hl=en",
        secondaryLinkText: "Google Scholar Profile",
        type: "patent",
        image: patentPreview
    }
];

// 3. Verified Academic & Industry Research Citations
const citationItems = [
    {
        id: 'cite-idrc',
        tag: "Academic Citation",
        citingEntity: "African Minds + IDRC",
        citationSource: "The State of Open Data: Histories and Horizons (2019)",
        chapterRef: "Chapter: Algorithms and Artificial Intelligence (Reference #34)",
        citationQuote: "Referenced as ‘Iyengar, V. (2018)’ in the Algorithms and Artificial Intelligence chapter.",
        originalTitle: "Complete overview of the AI startup ecosystem in India",
        originalMeta: "Vyshak Iyengar (2018) · DataDrivenInvestor / Medium",
        icon: BookOpen,
        citingLink: "https://idrc-crdi.ca/en/books/state-open-data-histories-and-horizons",
        citingLinkText: "View IDRC Book",
        originalLink: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
        originalLinkText: "Original 2018 Article",
        type: "citation"
    },
    {
        id: 'cite-ijls',
        tag: "Law Journal Citation",
        citingEntity: "Indian Journal of Law and Society",
        citationSource: "Indian Journal of Law and Society (2024)",
        chapterRef: "Reference / Footnote #44",
        citationQuote: "The paper references the exact 2018 article URL in reference 44 and Vyshak’s LinkedIn profile immediately afterward.",
        originalTitle: "Complete overview of the AI startup ecosystem in India",
        originalMeta: "Vyshak Iyengar (2018) · DataDrivenInvestor / Medium",
        icon: Scale,
        citingLink: "https://zenodo.org/records/10644585/files/New%208.pdf",
        citingLinkText: "View Journal Paper (Zenodo)",
        originalLink: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
        originalLinkText: "Original 2018 Article",
        type: "citation"
    },
    {
        id: 'cite-infosys',
        tag: "Industry Whitepaper",
        citingEntity: "Infosys",
        citationSource: "FinTech Disruption in the Automotive Finance Industry (2020)",
        chapterRef: "Automotive & Financial Services Research (Reference #7)",
        citationQuote: "Referenced in an Infosys industry paper as reference #7.",
        originalTitle: "Robo Advisors: A disruption in Indian Wealth Management?",
        originalMeta: "Vyshak Iyengar (2019) · DataDrivenInvestor / Medium",
        icon: Building2,
        citingLink: "https://www.infosys.com/industries/automotive/documents/fintech-disruption.pdf",
        citingLinkText: "View Infosys Paper (PDF)",
        originalLink: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
        originalLinkText: "Original 2019 Article",
        type: "citation"
    },
    {
        id: 'cite-nliu',
        tag: "Legal & Commercial Research",
        citingEntity: "NLIU Bhopal",
        citationSource: "Contemporary Developments in Corporate and Commercial Laws (2023)",
        chapterRef: "Trilegal Summit Publication (Footnote #10)",
        citationQuote: "The publication provides a full citation naming Vyshak Iyengar, the article title, publication date and source.",
        originalTitle: "Robo Advisors: A disruption in Indian Wealth Management?",
        originalMeta: "Vyshak Iyengar (2019) · DataDrivenInvestor / Medium",
        icon: Scale,
        citingLink: "https://cbcl.nliu.ac.in/wp-content/uploads/2023/04/FINAL-Compiled-Manuscripts_Trilegal-Summit-Book-2023.pdf",
        citingLinkText: "View NLIU Publication (PDF)",
        originalLink: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
        originalLinkText: "Original 2019 Article",
        type: "citation"
    }
];

const Features = () => {
    return (
        <section className="recognition-section" id="spotlight">
            <div className="container">
                {/* Main Section Header */}
                <div className="text-center">
                    <span className="spotlight-section-tag">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        Verified Index &amp; Publications
                    </span>
                    <h2 className="section-heading">Spotlight &amp; Publications</h2>
                    <p className="section-subheading">
                        Selected editorial press coverage, media features, intellectual property, and verified research citations.
                    </p>
                    <div className="animated-divider"></div>
                </div>

                {/* Factual Credibility Banner */}
                <div className="credibility-banner fade-in-1">
                    <div className="credibility-icon-wrap">
                        <BookOpen size={20} className="credibility-icon" />
                    </div>
                    <p className="credibility-text">
                        Early writing on AI and fintech has subsequently been referenced in research and industry publications from <strong>African Minds / IDRC</strong>, <strong>Infosys</strong>, <strong>NLIU Bhopal</strong>, and the <strong>Indian Journal of Law and Society</strong>.
                    </p>
                </div>

                {/* 1. Verified Editorial Press Coverage */}
                <div className="spotlight-subgroup">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Editorial Press &amp; Media Coverage</h3>
                        <span className="subgroup-desc">Independent profiles, features, and broadcast interviews</span>
                    </div>

                    <div className="recognition-grid">
                        {pressItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="builder-card feature-media block-link"
                            >
                                {item.image ? (
                                    <div className="card-preview">
                                        <img src={item.image} alt={item.title} />
                                        <div className="preview-overlay"></div>
                                        <span className="feature-tag tag-media">{item.tag}</span>
                                    </div>
                                ) : (
                                    <div className="card-preview-placeholder">
                                        <span className="feature-tag tag-media">{item.tag}</span>
                                    </div>
                                )}

                                <div className="card-content-wrapper">
                                    <div className="card-header">
                                        <span className="card-category">{item.tag}</span>
                                        <item.icon size={18} className="card-icon" />
                                    </div>

                                    <h4 className="card-title">{item.title}</h4>
                                    {item.subtitle && <div className="card-subtitle">{item.subtitle}</div>}

                                    <p className="card-desc">{item.description}</p>

                                    <div className="card-link-text">
                                        <span>{item.linkText}</span>
                                        <ExternalLink size={14} />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* 2. Intellectual Property (Patents) */}
                <div className="spotlight-subgroup" id="patent">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Intellectual Property &amp; Inventions</h3>
                        <span className="subgroup-desc">Granted patent portfolio and technical architectures</span>
                    </div>

                    <div className="recognition-grid single-patent-grid">
                        {patentItems.map((item) => (
                            <div key={item.id} className="builder-card feature-patent patent-card-expanded">
                                <div className="card-preview patent-preview-wrap">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                                        <img src={item.image} alt={item.title} />
                                    </a>
                                    <div className="preview-overlay"></div>
                                    <span className="feature-tag tag-patent">{item.tag}</span>
                                </div>

                                <div className="card-content-wrapper">
                                    <div className="card-header">
                                        <span className="card-category">US Patent and Trademark Office (USPTO)</span>
                                        <Lightbulb size={18} className="card-icon" />
                                    </div>

                                    <h4 className="card-title">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                            {item.title}
                                        </a>
                                    </h4>
                                    <div className="card-subtitle">{item.subtitle}</div>

                                    <p className="card-desc">{item.description}</p>

                                    {item.subNote && (
                                        <div className="patent-subnote">
                                            <Sparkles size={14} className="subnote-icon" />
                                            <span>{item.subNote}</span>
                                        </div>
                                    )}

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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Research & Citations Subsection */}
                <div className="spotlight-subgroup" id="research">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Research &amp; Citations</h3>
                        <span className="subgroup-desc">Verified citations of early AI &amp; fintech writing across academic journals, policy institutes, and industry publications</span>
                    </div>

                    <div className="recognition-grid citations-grid">
                        {citationItems.map((item) => (
                            <div key={item.id} className="builder-card feature-citation">
                                <div className="card-content-wrapper">
                                    <div className="card-header">
                                        <span className="feature-tag tag-citation">{item.tag}</span>
                                        <item.icon size={18} className="card-icon citation-icon" />
                                    </div>

                                    <h4 className="card-title citation-title">{item.citingEntity}</h4>
                                    <div className="card-subtitle citation-source">{item.citationSource}</div>

                                    <div className="citation-ref-pill">
                                        <span>{item.chapterRef}</span>
                                    </div>

                                    <div className="citation-quote-box">
                                        <p className="citation-quote-text">“{item.citationQuote}”</p>
                                    </div>

                                    <div className="citation-original-box">
                                        <span className="original-label">Citing Original Work:</span>
                                        <p className="original-title">{item.originalTitle}</p>
                                        <span className="original-meta">{item.originalMeta}</span>
                                    </div>

                                    <div className="card-links-row citation-links-row">
                                        <a href={item.citingLink} target="_blank" rel="noopener noreferrer" className="card-link-item">
                                            <span>{item.citingLinkText}</span>
                                            <ExternalLink size={13} />
                                        </a>
                                        <a href={item.originalLink} target="_blank" rel="noopener noreferrer" className="card-link-item card-link-secondary">
                                            <span>{item.originalLinkText}</span>
                                            <ExternalLink size={13} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features
