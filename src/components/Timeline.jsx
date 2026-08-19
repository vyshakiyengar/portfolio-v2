import { GraduationCap, Briefcase, Building2, Heart, Award, CheckCircle2 } from 'lucide-react'
import '../styles/Timeline.css'

const milestones = [
    {
        year: "2013 - 2017",
        role: "Computer Science Engineering",
        institution: "Visvesvaraya Technological University",
        impact: "Graduated with Distinction. Mastered core software engineering, data structures, and algorithmic logic.",
        category: "Technical Foundation",
        icon: GraduationCap
    },
    {
        year: "2017 - 2022",
        role: "Strategy Consultant",
        institution: "Accenture Strategy",
        impact: "Secured a rare direct internal transfer from Tech to Strategy without an MBA. Led digital enterprise transformations.",
        category: "Enterprise Strategy",
        icon: Briefcase
    },
    {
        year: "2018 - Present",
        role: "Co-Founder & Board Member",
        institution: "BluFin Foundation",
        impact: "Co-founded an inclusive sports non-profit supporting 120+ children and 7 international para-athletes. Backed by Accel Partners.",
        category: "Social Impact",
        icon: Heart
    },
    {
        year: "2023 - 2025",
        role: "MBA Candidate",
        institution: "London Business School",
        impact: "Selected for LBS MBA (Class of 2025). Focus on global business leadership, technology strategy, and venture creation.",
        category: "Global Business",
        icon: Award
    },
    {
        year: "2024",
        role: "Strategy Consultant",
        institution: "Boston Consulting Group (BCG)",
        impact: "MBA Internship — Advised on strategic initiatives, digital transformations, and high-impact regional engagements in Dubai.",
        category: "Management Consulting",
        icon: Briefcase
    },
    {
        year: "Current Role",
        role: "Product Strategy Lead",
        institution: "Meta",
        impact: "Drives product roadmap, monetization strategy, and platform growth for global mobile advertising products at scale.",
        category: "Product Leadership",
        icon: Building2
    }
]

const Timeline = () => {
    return (
        <section className="timeline-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <span className="timeline-section-tag">Career Arc &amp; Milestones</span>
                    <h2 className="section-heading">Career Evolution</h2>
                    <p className="section-subheading">A structured journey across engineering, enterprise strategy, global business, and product leadership.</p>
                    <div className="animated-divider"></div>
                </div>

                <div className="timeline-vertical-container">
                    <div className="timeline-central-line"></div>

                    {milestones.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div key={index} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'} fade-in-${(index % 3) + 1}`}>
                                <div className="timeline-node-marker">
                                    <IconComponent size={18} className="node-icon" />
                                </div>

                                <div className="timeline-card">
                                    <div className="timeline-card-header">
                                        <span className="timeline-category-tag">{item.category}</span>
                                        <span className="timeline-year-tag">{item.year}</span>
                                    </div>
                                    <h3 className="timeline-role">{item.role}</h3>
                                    <h4 className="timeline-institution">{item.institution}</h4>
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
