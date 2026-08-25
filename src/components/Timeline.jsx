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
        stageName: "Engineering Origin",
        year: "2013 - 2017",
        role: "Computer Science Engineering",
        institution: "Visvesvaraya Technological Univ. (VTU)",
        impact: "Graduated with Distinction. Strong foundation in software engineering, data structures, and algorithmic logic.",
        category: "Technical Foundation",
        icon: GraduationCap,
        logo: vtuLogo,
        flowLabel: "Stage 01",
        nextHint: "Step 01 of 06"
    },
    {
        step: "02",
        stageName: "Strategy Transition",
        year: "2017 - 2022",
        role: "Strategy Consultant",
        institution: "Accenture Strategy",
        impact: "Rare direct internal transfer from Tech to Strategy without an MBA. Advised on large-scale digital transformations.",
        category: "Enterprise Strategy",
        icon: Briefcase,
        logo: accentureLogo,
        flowLabel: "Stage 02",
        nextHint: "Step 02 of 06"
    },
    {
        step: "03",
        stageName: "Social Impact Venture",
        year: "2018 - Present",
        role: "Co-Founder & Board Member",
        institution: "BluFin Foundation",
        impact: "Co-founded an inclusive sports NGO backing 120+ children and 7 international para-athletes. Backed by Accel Partners.",
        category: "Social Impact",
        icon: Heart,
        logo: blufinLogo,
        flowLabel: "Stage 03",
        nextHint: "Step 03 of 06"
    },
    {
        step: "04",
        stageName: "Global Business MBA",
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global technology strategy, venture creation, and leadership.",
        category: "Global Business",
        icon: Award,
        logo: lbsLogo,
        flowLabel: "Stage 04",
        nextHint: "Step 04 of 06"
    },
    {
        step: "05",
        stageName: "Executive Advisory",
        year: "2024",
        role: "Strategy Consultant",
        institution: "Boston Consulting Group (BCG)",
        impact: "MBA Internship: Advised on high-impact strategic initiatives and digital transformation engagements in Dubai.",
        category: "Management Consulting",
        icon: Briefcase,
        logo: bcgLogo,
        flowLabel: "Stage 05",
        nextHint: "Step 05 of 06"
    },
    {
        step: "06",
        stageName: "Scale Leadership",
        year: "Current Role",
        role: "Product Strategy Lead",
        institution: "Meta",
        impact: "Drives product roadmap, monetization strategy, and platform growth for global mobile advertising products at scale.",
        category: "Product Leadership",
        icon: Building2,
        logo: metaLogo,
        flowLabel: "Stage 06 · Current",
        nextHint: "Current Role"
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

                {/* Visual Sequence Track: Guides the eye across the 01 → 06 chronology */}
                <div className="timeline-journey-track">
                    <span className="journey-track-label">CHRONOLOGICAL JOURNEY</span>
                    <div className="journey-steps-row">
                        {milestones.map((item, idx) => (
                            <div key={idx} className="journey-step-item">
                                <div className="journey-step-pill">
                                    <span className="journey-num">{item.step}</span>
                                    <span className="journey-name">{item.stageName}</span>
                                </div>
                                {idx < milestones.length - 1 && (
                                    <ArrowRight size={13} className="journey-arrow" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3-Column Milestone Cards Grid */}
                <div className="timeline-grid-container">
                    {milestones.map((item, index) => {
                        const isRowOneEnd = index === 2
                        const isFinal = index === 5

                        return (
                            <div key={index} className={`timeline-grid-card fade-in-${(index % 3) + 1}`}>
                                <div className="tcard-top">
                                    <div className="tcard-step-badge">
                                        <span className="tcard-num">{item.step}</span>
                                        <span className="tcard-cat">{item.category}</span>
                                    </div>
                                    <span className="tcard-year">{item.year}</span>
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
                                        <span>{item.flowLabel}</span>
                                    </div>

                                    {/* Directional Flow Pointers */}
                                    <div className="tcard-flow-pointer">
                                        {isRowOneEnd ? (
                                            <span className="flow-turn-tag">
                                                Next: Row 2 ⤵
                                            </span>
                                        ) : isFinal ? (
                                            <span className="flow-final-tag">
                                                ★ Active Role
                                            </span>
                                        ) : (
                                            <span className="flow-next-tag">
                                                Proceed <ArrowRight size={11} style={{ display: 'inline', verticalAlign: 'middle' }} />
                                            </span>
                                        )}
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
