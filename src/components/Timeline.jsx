import { GraduationCap, Briefcase, Building2, Heart, Award, Sparkles } from 'lucide-react'
import '../styles/Timeline.css'

import accentureLogo from '../assets/logos/accenture.png'
import bcgLogo from '../assets/logos/bcg.png'
import lbsLogo from '../assets/logos/lbs.png'
import metaLogo from '../assets/logos/meta.png'
import vtuLogo from '../assets/logos/vtu.png'
import blufinLogo from '../assets/logos/blufin.jpg'

const milestones = [
    {
        step: "01",
        year: "2013 - 2017",
        role: "Computer Science Engineering",
        institution: "Visvesvaraya Technological Univ. (VTU)",
        impact: "Graduated with Distinction. Strong foundation in software engineering, data structures, and algorithmic logic.",
        category: "Technical Foundation",
        icon: GraduationCap,
        logo: vtuLogo,
        isEducation: true,
        credentialType: "B.E. Computer Science · Distinction"
    },
    {
        step: "02",
        year: "2017 - 2022",
        role: "Strategy Consultant",
        institution: "Accenture Strategy",
        impact: "Rare direct internal transfer from Tech to Strategy without an MBA. Advised on large-scale digital transformations.",
        category: "Enterprise Strategy",
        icon: Briefcase,
        logo: accentureLogo,
        isEducation: false,
        credentialType: "Management & Digital Strategy"
    },
    {
        step: "03",
        year: "2018 - Present",
        role: "Co-Founder & Board Member",
        institution: "BluFin Foundation",
        impact: "Co-founded an inclusive sports NGO backing 120+ children and 7 international para-athletes. Backed by Accel Partners.",
        category: "Social Impact",
        icon: Heart,
        logo: blufinLogo,
        isEducation: false,
        credentialType: "Non-Profit Venture"
    },
    {
        step: "04",
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global technology strategy, venture creation, and leadership.",
        category: "Global Business",
        icon: Award,
        logo: lbsLogo,
        isEducation: true,
        credentialType: "Master of Business Administration (MBA)"
    },
    {
        step: "05",
        year: "2024",
        role: "Strategy Consultant",
        institution: "Boston Consulting Group (BCG)",
        impact: "MBA Internship: Advised on high-impact strategic initiatives and digital transformation engagements in Dubai.",
        category: "Management Consulting",
        icon: Briefcase,
        logo: bcgLogo,
        isEducation: false,
        credentialType: "Executive Advisory"
    },
    {
        step: "06",
        year: "Current Role",
        role: "Product Strategy Lead",
        institution: "Meta",
        impact: "Drives product roadmap, monetization strategy, and platform growth for global mobile advertising products at scale.",
        category: "Product Leadership",
        icon: Building2,
        logo: metaLogo,
        isEducation: false,
        isLatest: true,
        credentialType: "Platform Monetization & Scale"
    }
]

const Timeline = () => {
    return (
        <section className="timeline-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <span className="timeline-section-tag">
                        <Sparkles size={14} strokeWidth={1.5} style={{ display: 'inline', marginRight: '6px' }} />
                        Career Arc &amp; Milestones
                    </span>
                    <h2 className="section-heading">Career Evolution</h2>
                    <p className="section-subheading">A structured chronological journey across engineering, enterprise strategy, global business, and product leadership.</p>
                    <div className="animated-divider"></div>
                </div>

                {/* Pure Vertical Timeline Stream (01 -> 02 -> 03 -> 04 -> 05 -> 06) */}
                <div className="timeline-v-container">
                    <div className="timeline-v-spine"></div>

                    {milestones.map((item, index) => {
                        const IconComponent = item.icon
                        const isEducation = item.isEducation
                        const isLatest = item.isLatest

                        return (
                            <div 
                                key={index} 
                                className={`timeline-v-row ${isEducation ? 'row-education' : 'row-standard'} ${isLatest ? 'row-latest' : ''} fade-in-${(index % 3) + 1}`}
                            >
                                {/* Left: Year Column (Desktop) */}
                                <div className="timeline-v-year-col">
                                    <span className={`timeline-v-year-badge ${isEducation ? 'year-education' : ''} ${isLatest ? 'year-latest' : ''}`}>
                                        {item.year}
                                    </span>
                                </div>

                                {/* Center: Continuous Node Marker */}
                                <div className="timeline-v-node-col">
                                    <div className={`timeline-v-node ${isEducation ? 'node-education' : ''} ${isLatest ? 'node-latest' : ''}`}>
                                        <span className="v-node-num">{item.step}</span>
                                    </div>
                                </div>

                                {/* Right: Card Body */}
                                <div className="timeline-v-card-col">
                                    <div className={`timeline-v-card ${isEducation ? 'card-education' : 'card-standard'} ${isLatest ? 'card-latest' : ''}`}>
                                        {/* Card Top Header */}
                                        <div className="v-card-header">
                                            <div className="v-tag-group">
                                                <span className={`v-category-tag ${isEducation ? 'cat-education' : ''}`}>
                                                    {item.category}
                                                </span>
                                                {isEducation && (
                                                    <span className="v-edu-credential-pill">
                                                        <GraduationCap size={12} strokeWidth={1.75} />
                                                        Academic Degree
                                                    </span>
                                                )}
                                            </div>
                                            <span className="v-year-mobile">{item.year}</span>
                                        </div>

                                        {/* Role Title */}
                                        <h3 className={`v-role ${isEducation ? 'role-education' : ''}`}>{item.role}</h3>

                                        {/* Institution & Logo Bar */}
                                        <div className="v-institution-row">
                                            {item.logo && (
                                                <img src={item.logo} alt={item.institution} className="v-logo-img" />
                                            )}
                                            <h4 className="v-institution">{item.institution}</h4>
                                        </div>

                                        {/* Impact Text */}
                                        <p className="v-impact">{item.impact}</p>

                                        {/* Card Bottom Meta Bar */}
                                        <div className="v-card-footer">
                                            <span className={`v-footer-label ${isEducation ? 'label-education' : ''}`}>
                                                {item.credentialType}
                                            </span>
                                            <IconComponent size={16} strokeWidth={1.5} className={`v-corner-icon ${isEducation ? 'icon-education' : ''}`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Timeline
