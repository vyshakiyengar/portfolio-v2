import { GraduationCap, Briefcase, Building2, Heart, Award, Sparkles, ArrowRight } from 'lucide-react'
import '../styles/Timeline.css'

import accentureLogo from '../assets/logos/accenture.png'
import bcgLogo from '../assets/logos/bcg.png'
import lbsLogo from '../assets/logos/lbs.png'
import metaLogo from '../assets/logos/meta.png'
import vtuLogo from '../assets/logos/vtu.png'
import blufinLogo from '../assets/logos/blufin.jpg'

const milestonesTopRow = [
    {
        step: "01",
        year: "2013 - 2017",
        role: "Computer Science Engineering",
        institution: "Visvesvaraya Technological Univ. (VTU)",
        impact: "Graduated with Distinction. Strong foundation in software engineering, data structures, and algorithmic logic.",
        category: "Technical Foundation",
        icon: GraduationCap,
        logo: vtuLogo,
        isEducation: true
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
        isEducation: false
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
        isEducation: false
    }
]

const milestonesBottomRow = [
    {
        step: "04",
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global technology strategy, venture creation, and leadership.",
        category: "Global Business",
        icon: Award,
        logo: lbsLogo,
        isEducation: true
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
        isEducation: false
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
        isLatest: true
    }
]

const MilestoneCard = ({ item, index, totalInRow, rowPosition }) => {
    const IconComponent = item.icon
    const isEducation = item.isEducation
    const isLatest = item.isLatest

    return (
        <div 
            className={`timeline-oval-card ${isEducation ? 'card-education' : 'card-standard'} ${isLatest ? 'card-latest' : ''} fade-in-${(index % 3) + 1}`}
        >
            {/* Card Progress Header with Connected Spine Dot & Line */}
            <div className="oval-card-top">
                <div className="oval-node-group">
                    <span className="oval-step-circle">{item.step}</span>
                    <span className={`oval-category-tag ${isEducation ? 'cat-education' : ''}`}>
                        {item.category}
                    </span>
                </div>
                <span className="oval-year-badge">{item.year}</span>
            </div>

            {/* Role Title */}
            <h3 className="oval-role">{item.role}</h3>

            {/* Institution & Logo Bar */}
            <div className="oval-institution-row">
                {item.logo && (
                    <img src={item.logo} alt={item.institution} className="oval-logo-img" />
                )}
                <h4 className="oval-institution">{item.institution}</h4>
            </div>

            {/* Impact Text */}
            <p className="oval-impact">{item.impact}</p>

            {/* Micro Category Icon in Corner */}
            <div className="oval-card-footer">
                <span className="oval-card-type-label">
                    {isEducation ? 'Academic Credential' : isLatest ? 'Current Leadership' : 'Professional Arc'}
                </span>
                <IconComponent size={16} strokeWidth={1.5} className="oval-corner-icon" />
            </div>
        </div>
    )
}

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
                    <p className="section-subheading">A continuous horizontal journey across engineering, enterprise strategy, global business, and product leadership.</p>
                    <div className="animated-divider"></div>
                </div>

                {/* Horizontal Two-Line Oval Loop Timeline System */}
                <div className="timeline-oval-system">
                    {/* Continuous Oval Track Circuit */}
                    <div className="timeline-oval-track-frame">
                        <div className="oval-track-line top-track-line"></div>
                        <div className="oval-turn-arc-right">
                            <span className="turn-loop-indicator">
                                <span className="turn-loop-text">MBA Arc</span>
                                <span className="turn-loop-arrow">⤵</span>
                            </span>
                        </div>
                        <div className="oval-track-line bottom-track-line"></div>
                    </div>

                    {/* Top Row: Track Line 1 (01 -> 02 -> 03) */}
                    <div className="timeline-track-grid track-grid-top">
                        {milestonesTopRow.map((item, idx) => (
                            <MilestoneCard 
                                key={idx} 
                                item={item} 
                                index={idx} 
                                totalInRow={3} 
                                rowPosition="top" 
                            />
                        ))}
                    </div>

                    {/* Bottom Row: Track Line 2 (04 -> 05 -> 06) */}
                    <div className="timeline-track-grid track-grid-bottom">
                        {milestonesBottomRow.map((item, idx) => (
                            <MilestoneCard 
                                key={idx} 
                                item={item} 
                                index={idx} 
                                totalInRow={3} 
                                rowPosition="bottom" 
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline
