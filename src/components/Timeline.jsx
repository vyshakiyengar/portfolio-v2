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
        year: "2013 - 2017",
        role: "Computer Science Engineering",
        institution: "Visvesvaraya Technological University",
        impact: "Graduated with Distinction. Mastered core software engineering, data structures, and algorithmic logic.",
        category: "Technical Foundation",
        icon: GraduationCap,
        logo: vtuLogo,
        current: false
    },
    {
        year: "2017 - 2022",
        role: "Strategy Consultant",
        institution: "Accenture Strategy",
        impact: "Secured a rare direct internal transfer from Tech to Strategy without an MBA. Led digital enterprise transformations.",
        category: "Enterprise Strategy",
        icon: Briefcase,
        logo: accentureLogo,
        current: false
    },
    {
        year: "2018 - Present",
        role: "Co-Founder & Board Member",
        institution: "BluFin Foundation",
        impact: "Co-founded an inclusive sports non-profit supporting 120+ children and 7 international para-athletes. Backed by Accel Partners.",
        category: "Social Impact",
        icon: Heart,
        logo: blufinLogo,
        current: false
    },
    {
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global business leadership, technology strategy, and venture creation.",
        category: "Global Business",
        icon: Award,
        logo: lbsLogo,
        current: false
    },
    {
        year: "2024",
        role: "Strategy Consultant",
        institution: "Boston Consulting Group (BCG)",
        impact: "MBA Internship — Advised on strategic initiatives, digital transformations, and high-impact regional engagements in Dubai.",
        category: "Management Consulting",
        icon: Briefcase,
        logo: bcgLogo,
        current: false
    },
    {
        year: "Current Role",
        role: "Product Strategy Lead",
        institution: "Meta",
        impact: "Drives product roadmap, monetization strategy, and platform growth for global mobile advertising products at scale.",
        category: "Product Leadership",
        icon: Building2,
        logo: metaLogo,
        current: true
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

                <div className="timeline-vertical-container">
                    <div className="timeline-central-line"></div>

                    {milestones.map((item, index) => {
                        const IconComponent = item.icon
                        const isLeft = index % 2 === 0
                        return (
                            <div 
                                key={index} 
                                className={`timeline-row ${isLeft ? 'left' : 'right'} ${item.current ? 'is-current' : ''} fade-in-${(index % 3) + 1}`}
                            >
                                <div className="timeline-node-marker" title={item.category}>
                                    <IconComponent size={18} className="node-icon" />
                                </div>
                                <div className="timeline-connector"></div>

                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <div className="timeline-tag-group">
                                            <span className={`timeline-category-tag ${item.current ? 'current-cat-tag' : ''}`}>
                                                {item.category}
                                            </span>
                                            {item.current && (
                                                <span className="timeline-live-pill">
                                                    <span className="pulse-dot"></span>
                                                    Active
                                                </span>
                                            )}
                                        </div>
                                        <span className={`timeline-year-tag ${item.current ? 'current-year-tag' : ''}`}>
                                            {item.year}
                                        </span>
                                    </div>
                                    <h3 className="timeline-role">{item.role}</h3>
                                    <div className="timeline-institution-row">
                                        {item.logo && (
                                            <img src={item.logo} alt={item.institution} className="timeline-logo-img" />
                                        )}
                                        <h4 className="timeline-institution">{item.institution}</h4>
                                    </div>
                                    <p className="timeline-impact">{item.impact}</p>
                                    
                                    <div className="timeline-verified-footer">
                                        <CheckCircle2 size={14} className="check-icon" />
                                        <span>Verified Milestone</span>
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
