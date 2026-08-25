import { GraduationCap, Briefcase, Building2, Heart, Award, CheckCircle2, Sparkles } from 'lucide-react'
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
        logo: vtuLogo
    },
    {
        step: "02",
        year: "2017 - 2022",
        role: "Strategy Consultant",
        institution: "Accenture Strategy",
        impact: "Rare direct internal transfer from Tech to Strategy without an MBA. Advised on large-scale digital transformations.",
        category: "Enterprise Strategy",
        icon: Briefcase,
        logo: accentureLogo
    },
    {
        step: "03",
        year: "2018 - Present",
        role: "Co-Founder & Board Member",
        institution: "BluFin Foundation",
        impact: "Co-founded an inclusive sports NGO backing 120+ children and 7 international para-athletes. Backed by Accel Partners.",
        category: "Social Impact",
        icon: Heart,
        logo: blufinLogo
    },
    {
        step: "04",
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global technology strategy, venture creation, and leadership.",
        category: "Global Business",
        icon: Award,
        logo: lbsLogo
    },
    {
        step: "05",
        year: "2024",
        role: "Strategy Consultant",
        institution: "Boston Consulting Group (BCG)",
        impact: "MBA Internship: Advised on high-impact strategic initiatives and digital transformation engagements in Dubai.",
        category: "Management Consulting",
        icon: Briefcase,
        logo: bcgLogo
    },
    {
        step: "06",
        year: "Current Role",
        role: "Product Strategy Lead",
        institution: "Meta",
        impact: "Drives product roadmap, monetization strategy, and platform growth for global mobile advertising products at scale.",
        category: "Product Leadership",
        icon: Building2,
        logo: metaLogo
    }
]

const Timeline = () => {
    return (
        <section className="timeline-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <span className="timeline-section-tag">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        Career Arc &amp; Milestones
                    </span>
                    <h2 className="section-heading">Career Evolution</h2>
                    <p className="section-subheading">A structured journey across engineering, enterprise strategy, global business, and product leadership.</p>
                    <div className="animated-divider"></div>
                </div>

                {/* Left-Spine Linear Timeline Stream - Gold Standard UX for Chronological Scanability */}
                <div className="timeline-linear-container">
                    <div className="timeline-linear-spine"></div>

                    {milestones.map((item, index) => {
                        const IconComponent = item.icon
                        const isLatest = index === milestones.length - 1

                        return (
                            <div 
                                key={index} 
                                className={`timeline-linear-row ${isLatest ? 'is-latest' : ''} fade-in-${(index % 3) + 1}`}
                            >
                                {/* Left Column: Year Pill (Desktop) */}
                                <div className="timeline-col-year">
                                    <span className="timeline-year-pill">{item.year}</span>
                                </div>

                                {/* Center Column: Sequential Node on continuous blue spine */}
                                <div className="timeline-col-node">
                                    <div className="timeline-linear-node">
                                        <span className="node-step-num">{item.step}</span>
                                    </div>
                                </div>

                                {/* Right Column: Clean, Compact Executive Card */}
                                <div className="timeline-col-content">
                                    <div className="timeline-stream-card">
                                        <div className="stream-card-header">
                                            <span className="stream-category-tag">{item.category}</span>
                                            <span className="stream-year-mobile">{item.year}</span>
                                        </div>

                                        <h3 className="stream-role">{item.role}</h3>

                                        <div className="stream-institution-row">
                                            {item.logo && (
                                                <img src={item.logo} alt={item.institution} className="stream-logo-img" />
                                            )}
                                            <h4 className="stream-institution">{item.institution}</h4>
                                        </div>

                                        <p className="stream-impact">{item.impact}</p>

                                        <div className="stream-card-footer">
                                            <div className="stream-verified">
                                                <CheckCircle2 size={13} className="check-icon" />
                                                <span>Verified Milestone</span>
                                            </div>
                                            <IconComponent size={16} className="stream-corner-icon" />
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
