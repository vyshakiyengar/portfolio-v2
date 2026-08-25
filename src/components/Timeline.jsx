import { GraduationCap, Briefcase, Building2, Heart, Award, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react'
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
        flowNext: "Accenture Strategy (02)"
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
        flowNext: "BluFin Foundation (03)"
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
        flowNext: "LBS MBA (04)"
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
        flowNext: "BCG Consulting (05)"
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
        flowNext: "Meta Strategy (06)"
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
        flowNext: "Current Leadership"
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
                    <p className="section-subheading">A structured chronological journey across engineering, enterprise strategy, global business, and product leadership (01 ➔ 06).</p>
                    <div className="animated-divider"></div>
                </div>

                {/* 3-Column Milestone Cards Grid with Embedded Connecting Lines & Flow Arrows */}
                <div className="timeline-grid-container">
                    {milestones.map((item, index) => {
                        const IconComponent = item.icon
                        const isRowOneEnd = index === 2
                        const isFinal = index === 5

                        return (
                            <div key={index} className={`timeline-grid-card fade-in-${(index % 3) + 1}`}>
                                {/* Card Progress Spine Header */}
                                <div className="tcard-spine-row">
                                    <div className="tcard-step-marker">
                                        <span className="step-circle">{item.step}</span>
                                    </div>
                                    
                                    <div className="tcard-spine-line-wrap">
                                        <div className="spine-line"></div>
                                        {!isRowOneEnd && !isFinal && (
                                            <ArrowRight size={14} className="spine-arrow" />
                                        )}
                                        {isRowOneEnd && (
                                            <span className="spine-turn-cue">
                                                <span>Row 2</span>
                                                <span className="turn-icon">⤵</span>
                                            </span>
                                        )}
                                        {isFinal && (
                                            <span className="spine-final-badge">Present</span>
                                        )}
                                    </div>

                                    <span className="tcard-year-badge">{item.year}</span>
                                </div>

                                <div className="tcard-category-bar">
                                    <span className="tcard-cat-label">{item.category}</span>
                                </div>

                                <h3 className="tcard-role">{item.role}</h3>

                                <div className="tcard-institution-row">
                                    {item.logo && (
                                        <img src={item.logo} alt={item.institution} className="tcard-logo-img" />
                                    )}
                                    <h4 className="tcard-institution">{item.institution}</h4>
                                </div>

                                <p className="tcard-impact">{item.impact}</p>

                                <div className="tcard-footer">
                                    <div className="tcard-verified">
                                        <CheckCircle2 size={13} className="check-icon" />
                                        <span>Verified Milestone</span>
                                    </div>
                                    <IconComponent size={16} className="tcard-corner-icon" />
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
