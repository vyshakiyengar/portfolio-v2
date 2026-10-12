import { Mic, Lightbulb, ExternalLink, FileText, Sparkles, Bot, Newspaper, BookOpen, GraduationCap } from 'lucide-react'
import patentPreview from '../assets/patent_schematic.svg'
import podcastPreview from '../assets/previews/podcast-v2.png'
import yourstoryPreview from '../assets/previews/yourstory-v3.png'
import clearadmitPreview from '../assets/previews/clearadmit.png'
import tipranksPreview from '../assets/previews/tipranks-article.png'
import prajavaniPreview from '../assets/previews/prajavani-article.png'
import higherEducationPreview from '../assets/previews/higher-education-digest.png'
import bangaloreMirrorPreview from '../assets/previews/bangalore-mirror.png'
import rnsitHofPreview from '../assets/previews/rnsit-hall-of-fame.png'
import clearadmitTechPreview from '../assets/previews/clearadmit-tech-alumni.png'
import gnaniPreview from '../assets/previews/gnani-linkedin-post.jpg'

// 1. Independent Editorial Press & Media (Prioritized Hierarchy)
const pressItems = [
    {
        id: 'press-prajavani',
        tag: "Editorial Feature",
        title: "WhatsApp AI Shopping Agent",
        subtitle: "Prajavani · Kannada Daily · 25 Aug 2026",
        description: "Featured by Prajavani, Karnataka’s leading Kannada daily, for the WhatsApp AI shopping agent he designed and deployed for his mother, enabling voice and text daily-need ordering via Swiggy MCP and multimodal AI.",
        icon: Newspaper,
        link: "https://www.prajavani.net/technology/gadget-news/start-up-bengaluru-techie-ai-shopping-agent-whatsapp-mcp-swiggy-4218412",
        linkText: "Read Article on Prajavani",
        secondaryLink: "https://m.dailyhunt.in/news/india/kannada/prajavani-epaper-praj/staart+ap+taayigaagi+ai+shaaping+ejent+parichayisidha+bengalurina+teki-newsid-n724533211",
        secondaryLinkText: "Read free on Dailyhunt",
        type: "media",
        image: prajavaniPreview
    },
    {
        id: 'press-clearadmit',
        tag: "Career Profile",
        title: "Real Humans of Meta",
        subtitle: "Clear Admit · Career Profile · 18 Mar 2026",
        description: "Featured in Clear Admit profiling Vyshak Kannan Iyengar's trajectory from London Business School to Product Strategy at Meta, highlighting tech leadership and strategy.",
        icon: FileText,
        link: "https://www.clearadmit.com/2026/03/real-humans-of-meta-lbs-mba-product-marketing-manager/",
        linkText: "Read Profile on Clear Admit",
        type: "media",
        image: clearadmitPreview
    },
    {
        id: 'press-clearadmit-tech',
        tag: "Featured Alumni",
        title: "MBA Careers in Big Tech",
        subtitle: "Clear Admit · Feature · 7 Jul 2026",
        description: "Featured among MBA alumni from Meta, OpenAI, Google, Microsoft, Amazon and Adobe discussing how business school shaped careers in technology.",
        icon: FileText,
        link: "https://www.clearadmit.com/2026/07/what-tech-alumni-say-the-mba-is-really-worth/",
        linkText: "Read Feature on Clear Admit",
        type: "media",
        image: clearadmitTechPreview
    },
    {
        id: 'press-yourstory',
        tag: "National Feature",
        title: "BluFin Foundation",
        subtitle: "YourStory · SocialStory · 30 Aug 2024",
        description: "Profiled in YourStory for co-founding an inclusive sporting ecosystem backing 120+ children and Asian Para Games athletes. Supported by Accel Partners and Kaleyra.",
        icon: FileText,
        link: "https://yourstory.com/socialstory/2024/08/blufin-foundation-led-by-paralympian-sharath-gayak",
        linkText: "Read Article on YourStory",
        type: "media",
        image: yourstoryPreview
    },
    {
        id: 'press-rnsit-hof',
        tag: "Distinguished Alumni",
        title: "RNSIT Hall of Fame",
        subtitle: "Distinguished Alumni · RNS Institute of Technology",
        description: "Featured in RNSIT’s Hall of Fame recognising distinguished alumni across technology, public service and entrepreneurship.",
        icon: GraduationCap,
        link: "https://www.rnsit.ac.in/alumni/",
        linkText: "View RNSIT Hall of Fame",
        type: "media",
        image: rnsitHofPreview
    },
    {
        id: 'press-hedigest',
        tag: "Editorial Feature",
        title: "World-Class Institution in the Making",
        subtitle: "Higher Education Digest · Alumni Profile · 29 Jul 2019",
        description: "Featured in Higher Education Digest for founding Cookie Jar at RNSIT, a media tech venture whose events hosted over 1,000 people. An early chapter in a journey through Accenture Strategy, LBS, and Meta.",
        icon: GraduationCap,
        link: "https://www.highereducationdigest.com/rns-institute-of-technology-a-world-class-institution-in-making/",
        linkText: "Read Article on HE Digest",
        type: "media",
        image: higherEducationPreview
    },
    {
        id: 'press-bangalore-mirror',
        tag: "Civic Feature",
        title: "Push to Build a Dream On",
        subtitle: "Bangalore Mirror · Feature · 12 Mar 2022",
        description: "Covered by Bangalore Mirror for community leadership and civic impact initiatives supporting para-athlete training infrastructure and accessibility.",
        icon: Newspaper,
        link: "https://bangaloremirror.indiatimes.com/bangalore/others/push-to-build-a-dream-on/articleshow/89931399.cms",
        linkText: "Read Article on Bangalore Mirror",
        type: "media",
        image: bangaloreMirrorPreview
    },
    {
        id: 'press-podcast',
        tag: "Media Podcast",
        title: "Crack The MBA Show, Ep028",
        subtitle: "Podcast interview · 16 Feb 2025",
        description: "In-depth podcast interview featuring Vyshak Kannan Iyengar detailing the career transition from Computer Science Engineering to Accenture Strategy, London Business School, and social leadership.",
        icon: Mic,
        link: "https://www.youtube.com/watch?v=v4CaZ4xwotI",
        linkText: "Watch on YouTube",
        secondaryLink: "https://creators.spotify.com/pod/profile/nupur-gupta2/episodes/Ep028-Big-Four-Indian-Male-Engineer-Cracks-LBS--MBB--Crack-The-MBA-Show--Vyshak-Iyengar-e2uuhiq",
        secondaryLinkText: "Listen on Spotify",
        type: "media",
        image: podcastPreview
    },
    {
        id: 'press-tipranks',
        tag: "Newswire Mention",
        title: "Voice-Based Kannada AI Ordering",
        subtitle: "TipRanks · Auto-generated newswire · 18 Aug 2026",
        description: "Named in a TipRanks newswire item on Kannada voice ordering built on gnani.ai speech models and Swiggy's MCP, citing the WhatsApp agent Vyshak designed and deployed for his mother.",
        icon: Bot,
        link: "https://www.tipranks.com/news/private-companies/voice-based-kannada-ordering-showcases-gnani-ai-speech-technology-in-swiggy-ecosystem",
        linkText: "Read on TipRanks",
        type: "media",
        image: tipranksPreview
    },
    {
        id: 'press-gnani',
        tag: "Industry Endorsement",
        title: "Ordering dinner by voice note",
        subtitle: "gnani.ai · Official LinkedIn · 18 Aug 2026",
        description: "gnani.ai, the Bengaluru voice AI company whose Indic speech models power the agent, featured the Kannada WhatsApp ordering agent on its official LinkedIn page, with its CEO also posting about it.",
        icon: Mic,
        link: "https://www.linkedin.com/posts/gnani-ai_swiggy-someone-just-ordered-dinner-by-just-activity-7495448908274282496-V8Ua",
        linkText: "View gnani.ai's post",
        type: "media",
        image: gnaniPreview
    }
];

// 1b. Products shipped and launched publicly
const productItems = [
    {
        id: 'product-speechon',
        tag: "Product Launch",
        title: "SpeechOn",
        subtitle: "Product Hunt \u00b7 September 2026 \u00b7 speechon.app",
        description: "A free speech warm-up that runs entirely in the browser with no sign-up. Routines of 5, 8, 12 or roughly 20 minutes cover breath setup, jaw and lip relaxation, lip trills, exaggerated articulation and pause placement. Over 1,700 people used it within days of launch, and it now has users in 38 countries.",
        icon: Mic,
        link: "https://www.speechon.app/",
        linkText: "Open speechon.app",
        secondaryLink: "https://www.producthunt.com/products/speechon",
        secondaryLinkText: "Product Hunt",
        type: "product"
    },
    {
        id: 'product-whatsapp-agent',
        tag: "Product Launch",
        title: "Sahayaka: WhatsApp Voice Grocery Agent",
        subtitle: "Product Hunt \u00b7 September 2026 \u00b7 SSRN preprint",
        description: "Designed and deployed for Vyshak\u2019s mother, a WhatsApp agent that turns natural Kannada, English or \u2018Kanglish\u2019 voice notes into Swiggy grocery orders. Gnani AI speech models handle Indic voice, Gemini interprets the request, Swiggy MCP searches and orders, and the agent replies with a Kannada voice note.",
        icon: Bot,
        link: "https://www.producthunt.com/products/whatsapp-voice-groceries-ordering-agent",
        linkText: "View the agent on Product Hunt",
        secondaryLink: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7479580",
        secondaryLinkText: "Read the paper (SSRN)",
        type: "product"
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
        secondaryLink: "https://orcid.org/0009-0002-5098-6448",
        secondaryLinkText: "ORCID Record",
        type: "patent",
        image: patentPreview
    }
];

// 2b. Publications and preprints (newest first)
const publicationItems = [
    {
        id: 'pub-ssrn-2026',
        year: "2026",
        type: "Preprint",
        title: "Headless Commerce for the Last Mile: An Agent-Mediated, Voice-First Architecture for Code-Mixed, Low-Literacy Users, with a Deployment Account, Source Audit and Evaluation Protocol",
        meta: "Vyshak Kannan Iyengar · SSRN · Sept 2026 · DOI 10.2139/ssrn.7479580",
        link: "https://doi.org/10.2139/ssrn.7479580",
        linkText: "Read on SSRN"
    },
    {
        id: 'pub-medium-2024',
        year: "2024",
        type: "Article",
        title: "The Evolving Role of AI in Wealth Management",
        meta: "Vyshak Iyengar · DataDrivenInvestor · 18 Nov 2024",
        link: "https://medium.datadriveninvestor.com/the-evolving-role-of-ai-in-wealth-management-bcac791eeb64",
        linkText: "Read article"
    },
    {
        id: 'pub-medium-2019',
        year: "2019",
        type: "Article · cited twice",
        title: "Robo Advisors: A Disruption in Indian Wealth Management?",
        meta: "Vyshak Iyengar · DataDrivenInvestor · 23 Oct 2019 · DOI 10.5281/zenodo.22460494",
        link: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
        linkText: "Read article",
        secondaryLink: "https://doi.org/10.5281/zenodo.22460494",
        secondaryLinkText: "Zenodo archive"
    },
    {
        id: 'pub-medium-2018',
        year: "2018",
        type: "Article · cited twice",
        title: "Complete Overview of the AI Startup Ecosystem in India",
        meta: "Vyshak Iyengar · DataDrivenInvestor · 25 Sept 2018 · DOI 10.5281/zenodo.22459996",
        link: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
        linkText: "Read article",
        secondaryLink: "https://doi.org/10.5281/zenodo.22459996",
        secondaryLinkText: "Zenodo archive"
    },
    {
        id: 'pub-jgrcst-2016',
        year: "2016",
        type: "Journal paper",
        title: "Dependency on Family, Friends and Reviews: Consumer Behavior Towards Smartphones, A Study in Bangalore",
        meta: "Vyshak Kannan Iyengar · Journal of Global Research in Computer Science & Technology, 4(4), 28–44 · 2016",
        link: "https://www.slideshare.net/slideshow/consumer-behavior-towards-smartphones-market-a-market-research-paper-by-vyshak-iyengar/251000747",
        linkText: "Read paper"
    }
];

// 3. Research citations, grouped by the original article that was cited
const citedWorks = [
    {
        id: 'cited-ai-ecosystem',
        title: "Complete Overview of the AI Startup Ecosystem in India",
        meta: "DataDrivenInvestor · 25 Sept 2018",
        doi: "10.5281/zenodo.22459996",
        link: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
        citedBy: [
            {
                kind: "Book chapter",
                title: "The State of Open Data: Histories and Horizons",
                detail: "Tim Davies, chapter on Algorithms and Artificial Intelligence · African Minds & IDRC · 2019",
                where: "Reference 34",
                link: "https://idrc-crdi.ca/en/books/state-open-data-histories-and-horizons",
                linkText: "IDRC",
                extraLink: "https://library.oapen.org/bitstream/handle/20.500.12657/24884/1/The_State_of_Open_Data_9781928331957_web.pdf",
                extraLinkText: "Open-access PDF"
            },
            {
                kind: "Law journal",
                title: "Role of Artificial Intelligence in India: A Legal Study",
                detail: "Fatima & Singh · Indian Journal of Law and Society, I(8), 74–91 · 2024",
                where: "Reference 44",
                link: "https://doi.org/10.5281/zenodo.10644585",
                linkText: "Paper (DOI)"
            }
        ]
    },
    {
        id: 'cited-robo-advisors',
        title: "Robo Advisors: A Disruption in Indian Wealth Management?",
        meta: "DataDrivenInvestor · 23 Oct 2019",
        doi: "10.5281/zenodo.22460494",
        link: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
        citedBy: [
            {
                kind: "Industry whitepaper",
                title: "FinTech Disruption in the Automotive Finance Industry",
                detail: "Mehta, De & Bobby · Infosys View Point · 2020",
                where: "Reference 7",
                link: "https://www.infosys.com/industries/automotive/documents/fintech-disruption.pdf",
                linkText: "Infosys PDF"
            },
            {
                kind: "Legal research collection",
                title: "Contemporary Developments in Corporate and Commercial Laws in India",
                detail: "7th NLIU–Trilegal Summit · Eastern Book Company · 2023",
                where: "Footnote 10",
                link: "https://cbcl.nliu.ac.in/wp-content/uploads/2023/04/FINAL-Compiled-Manuscripts_Trilegal-Summit-Book-2023.pdf",
                linkText: "NLIU PDF"
            }
        ]
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
                        04 / Press &amp; work
                    </span>
                    <h2 className="section-heading">Media features, product launches &amp; research</h2>
                    <p className="section-subheading">
                        Media features and interviews, products Vyshak has shipped, a granted US patent, his publications, and who has cited them.
                    </p>
                    <div className="animated-divider"></div>
                </div>

                {/* Factual Credibility Banner */}
                <div className="credibility-banner fade-in-1">
                    <div className="credibility-icon-wrap">
                        <BookOpen size={20} className="credibility-icon" />
                    </div>
                    <p className="credibility-text">
                        Writing on AI and fintech since 2016 has been referenced in research and industry publications from <strong>African Minds / IDRC</strong>, <strong>Infosys</strong>, <strong>NLIU Bhopal</strong>, and the <strong>Indian Journal of Law and Society</strong>. The two cited articles are archived with DOIs on <strong>Zenodo</strong>, and all work is listed under <strong>ORCID 0009-0002-5098-6448</strong>.
                    </p>
                </div>

                {/* 1. Verified Editorial Press Coverage */}
                <div className="spotlight-subgroup">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Editorial Press &amp; Media Coverage</h3>
                        <span className="subgroup-desc">Profiles, features, interviews, and industry coverage</span>
                    </div>

                    <div className="recognition-grid">
                        {pressItems.map((item) => {
                            const preview = item.image ? (
                                <div className="card-preview">
                                    <img src={item.image} alt={item.title} loading="lazy" />
                                    <div className="preview-overlay"></div>
                                    <span className="feature-tag tag-media">{item.tag}</span>
                                </div>
                            ) : (
                                <div className="card-preview-placeholder">
                                    <span className="feature-tag tag-media">{item.tag}</span>
                                </div>
                            )
                            const body = (
                                <>
                                    <div className="card-header">
                                        <span className="card-category">{item.tag}</span>
                                        <item.icon size={18} className="card-icon" />
                                    </div>
                                    <h4 className="card-title">{item.title}</h4>
                                    {item.subtitle && <div className="card-subtitle">{item.subtitle}</div>}
                                    <p className="card-desc">{item.description}</p>
                                </>
                            )
                            if (item.secondaryLink) return (
                                <div key={item.id} className="builder-card feature-media">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.linkText}>{preview}</a>
                                    <div className="card-content-wrapper">
                                        {body}
                                        <div className="card-links-row">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link-item"><span>{item.linkText}</span><ExternalLink size={13} /></a>
                                            <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="card-link-item card-link-secondary"><span>{item.secondaryLinkText}</span><ExternalLink size={13} /></a>
                                        </div>
                                    </div>
                                </div>
                            )
                            return (
                                <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="builder-card feature-media block-link">
                                    {preview}
                                    <div className="card-content-wrapper">
                                        {body}
                                        <div className="card-link-text">
                                            <span>{item.linkText}</span>
                                            <ExternalLink size={14} />
                                        </div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>

                {/* 1b. Products & Launches */}
                <div className="spotlight-subgroup" id="products">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Products &amp; Launches</h3>
                        <span className="subgroup-desc">Designed, shipped and launched publicly</span>
                    </div>

                    <div className="recognition-grid">
                        {productItems.map((item) => (
                            <div key={item.id} className="builder-card">
                                <div className="card-content-wrapper">
                                    <div className="card-header">
                                        <span className="card-category">{item.tag}</span>
                                        <item.icon size={18} className="card-icon" />
                                    </div>

                                    <h4 className="card-title"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h4>
                                    {item.subtitle && <div className="card-subtitle">{item.subtitle}</div>}

                                    <p className="card-desc">{item.description}</p>

                                    <div className="card-links-row">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link-item"><span>{item.linkText}</span><ExternalLink size={13} /></a>
                                        {item.secondaryLink && <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="card-link-item card-link-secondary"><span>{item.secondaryLinkText}</span><ExternalLink size={13} /></a>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. Intellectual Property (Patents) */}
                <div className="spotlight-subgroup" id="patent">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Intellectual Property &amp; Inventions</h3>
                        <span className="subgroup-desc">Granted patent and technical architecture</span>
                    </div>

                    <div className="recognition-grid single-patent-grid">
                        {patentItems.map((item) => (
                            <div key={item.id} className="builder-card feature-patent patent-card-expanded">
                                <div className="card-preview patent-preview-wrap">
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
                                        <img src={item.image} alt={item.title} loading="lazy" />
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

                {/* 2b. Publications */}
                <div className="spotlight-subgroup" id="publications">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Publications</h3>
                        <span className="subgroup-desc">Preprints, journal papers and articles, newest first</span>
                    </div>

                    <ol className="publication-list">
                        {publicationItems.map((item) => (
                            <li key={item.id} className="publication-item">
                                <span className="publication-year">{item.year}</span>
                                <div>
                                    <span className="card-category publication-type">{item.type}</span>
                                    <h4 className="publication-title"><a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a></h4>
                                    <p className="original-meta">{item.meta}</p>
                                    <div className="card-links-row publication-links">
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="card-link-item"><span>{item.linkText}</span><ExternalLink size={13} /></a>
                                        {item.secondaryLink && <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="card-link-item card-link-secondary"><span>{item.secondaryLinkText}</span><ExternalLink size={13} /></a>}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                {/* 3. Research & Citations Subsection */}
                <div className="spotlight-subgroup" id="research">
                    <div className="subgroup-header">
                        <h3 className="subgroup-title">Research &amp; Citations</h3>
                        <span className="subgroup-desc">Who has cited Vyshak’s writing, and where</span>
                    </div>

                    <div className="cite-summary">
                        <div><strong>2</strong><span>articles cited</span></div>
                        <div><strong>4</strong><span>citing publications</span></div>
                        <div><strong>2019–2024</strong><span>years cited</span></div>
                    </div>

                    <div className="cite-groups">
                        {citedWorks.map((work) => (
                            <article key={work.id} className="cite-group">
                                <span className="cite-label">Article by Vyshak</span>
                                <h4 className="cite-work-title"><a href={work.link} target="_blank" rel="noopener noreferrer">{work.title}</a></h4>
                                <p className="cite-work-meta">{work.meta} · <a href={`https://doi.org/${work.doi}`} target="_blank" rel="noopener noreferrer">DOI {work.doi}</a></p>

                                <span className="cite-label cite-label-by">Cited by {work.citedBy.length}</span>
                                <ul className="cite-list">
                                    {work.citedBy.map((c) => (
                                        <li key={c.title} className="cite-item">
                                            <span className="cite-kind">{c.kind}</span>
                                            <p className="cite-title">{c.title}</p>
                                            <p className="cite-detail">{c.detail} · <strong>{c.where}</strong></p>
                                            <div className="cite-links">
                                                <a href={c.link} target="_blank" rel="noopener noreferrer">{c.linkText} <ExternalLink size={12} /></a>
                                                {c.extraLink && <a href={c.extraLink} target="_blank" rel="noopener noreferrer">{c.extraLinkText} <ExternalLink size={12} /></a>}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Features
