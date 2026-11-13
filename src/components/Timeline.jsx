import { GraduationCap, Briefcase, Building2, Heart, Award } from 'lucide-react'
import SectionMark from './SectionMark'

import accentureLogo from '../assets/logos/accenture.webp'
import bcgLogo from '../assets/logos/bcg-2026.webp'
import lbsLogo from '../assets/logos/lbs.webp'
import metaLogo from '../assets/logos/meta.webp'
import vtuLogo from '../assets/logos/vtu.webp'
import blufinLogo from '../assets/logos/blufin.webp'

const milestones = [
    {
        step: "01",
        year: "2013–2017",
        role: "Computer Science Engineering",
        institution: "RNS Institute of Technology · Visvesvaraya Technological Univ. (VTU)",
        impact: "Graduated with Distinction from RNS Institute of Technology, Bengaluru (degree awarded by VTU). Founded Cookie Jar, a student media venture, and is listed in the RNSIT Hall of Fame.",
        category: "Technical Foundation",
        icon: GraduationCap,
        logo: vtuLogo,
        isEducation: true,
        credentialType: "B.E. Computer Science · Distinction"
    },
    {
        step: "02",
        year: "2017–2022",
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
        year: "2018–Present",
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
        year: "2023–2025",
        role: "MBA",
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
        year: "2025–2026",
        role: "Product Strategy & Growth",
        institution: "Meta",
        impact: "Shaped product strategy, monetization and growth for Meta's global App Ads products, working with product, engineering, sales and advertisers.",
        category: "Product Leadership",
        icon: Building2,
        logo: metaLogo,
        isEducation: false,
        isLatest: true,
        credentialType: "Platform Monetization & Scale"
    }
]

// The data above is kept in career order; the page shows the most recent role first.
const newestFirst = [...milestones].reverse()

const Timeline = () => {
    return (
        <section className="timeline-section" id="experience">
            <div className="container">
                <div className="text-center">
                    <SectionMark n="02" label="Experience" />
                    <h2 className="section-heading" data-reveal><span>The path so far</span></h2>
                    <p className="section-subheading">Most recent first.</p>
                    <div className="animated-divider"></div>
                </div>

                {/* Pure Vertical Timeline Stream (01 -> 02 -> 03 -> 04 -> 05 -> 06) */}
                <div className="timeline-v-container">
                    <div className="timeline-v-spine"></div>

                    {newestFirst.map((item, index) => {
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

                                        <h3 className={`v-role ${isEducation ? 'role-education' : ''}`}>{item.role}</h3>

                                        {/* Institution & Logo Bar */}
                                        <div className="v-institution-row">
                                            {item.logo && (
                                                <img src={item.logo} alt="" width="40" height="26" loading="lazy" decoding="async" className="v-logo-img" />
                                            )}
                                            <h4 className="v-institution">{item.institution}</h4>
                                        </div>

                                        {/* Impact Text */}
                                        <p className="v-impact">{item.impact}</p>
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
