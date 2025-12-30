import '../styles/HorizontalTimeline.css'
import ScrollIndicator from './ScrollIndicator'
import bcgLogo from '../assets/logos/bcg.png'
import lbsLogo from '../assets/logos/lbs.png'
import metaLogo from '../assets/logos/meta.png'
import accentureLogo from '../assets/logos/accenture.png'
import lbtcLogo from '../assets/logos/lbtc.png'
import blufinLogo from '../assets/logos/blufin.jpg'
import vtuLogo from '../assets/logos/vtu.png'

const HorizontalTimeline = () => {
    // Note: User requested "No All Caps", so we use Title Case for institutions
    const education = [
        {
            institution: "London Business School",
            degree: "MBA",
            period: "2023 – 2025",
            impact: "Strategy, leadership, and global business focus",
            type: "education",
            logo: lbsLogo
        },
        {
            institution: "Vishweshwaraya Technical University (VTU)",
            degree: "Computer Science Engineering",
            period: "2013 – 2017",
            impact: "Distinction. Top 10% of class. Strong foundations in systems and software engineering",
            type: "education",
            logo: vtuLogo
        }
    ]

    const work = [
        {
            role: "Product Strategy",
            institution: "Meta",
            period: "2025 – Present", /* Updated from 2024 */
            impact: "Product strategy for large-scale mobile ads and monetisation platforms",
            type: "work",
            isCurrent: true,
            logo: metaLogo
        },
        {
            role: "Summer Consultant",
            institution: "Boston Consulting Group (BCG)",
            period: "2024",
            /* location: "Dubai" - Removed as requested */
            impact: "Strategy for a Middle East government",
            type: "work",
            logo: bcgLogo
        },
        {
            role: "Strategy Consultant",
            institution: "Accenture Strategy",
            period: "2018 – 2023",
            impact: "Strategy across fintech, platforms, and emerging technologies",
            type: "work",
            logo: accentureLogo
        },
        {
            role: "Associate Engineer",
            institution: "Accenture Technology",
            period: "2017 – 2018",
            impact: "Enterprise systems engineering and large-scale delivery",
            type: "work",
            logo: accentureLogo
        }
    ]

    const socialImpact = [
        {
            role: "Co-Founder",
            institution: "BluFin Foundation",
            period: "2018 – Present",
            impact: "BluFin Foundation is a non-profit focused on enabling youngsters to explore alternative career through sports. We are backed by Accel Partners (Global VC fund), Kaleyra (NYSE listed CPaaS company), and Antraprerana Ventures (Philanthropic fund).",
            type: "impact",
            logo: blufinLogo
        },
        {
            role: "Board Member",
            institution: "Let's Be The Change",
            period: "2014 – Present", /* Updated from 2020-2022 */
            impact: "Governing council member for a non-profit focused on civic engagement and urban governance.",
            type: "impact",
            logo: lbtcLogo
        }
    ]

    const Section = ({ title, items, isEducation = false }) => (
        <div className="experience-group">
            <h3 className="group-title">{title}</h3>
            <div className="timeline-grid">
                {items.map((item, index) => (
                    <div key={index} className={`t-item fade-in type-${item.type} ${item.isCurrent ? 'current-role' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="t-header-row">
                            {item.logo && <img src={item.logo} alt={item.institution} className="t-card-logo" />}
                            <div className="t-header-content">
                                <div className="t-top">
                                    <h3 className="t-primary">{isEducation ? item.institution : item.role}</h3>
                                    <span className="t-period">{item.period}</span>
                                </div>
                                <h4 className="t-secondary">
                                    {isEducation ? item.degree : item.institution}
                                    {item.location && <span className="t-location"> | {item.location}</span>}
                                </h4>
                            </div>
                        </div>
                        <div className="t-divider"></div>
                        <p className="t-impact">{item.impact}</p>
                    </div>
                ))}
            </div>
        </div>
    )

    return (
        <section className="horizontal-section" id="experience">
            <div className="timeline-container">
                <h2 className="section-title fade-in">Journey</h2>

                <Section title="Education" items={education} isEducation={true} />
                <Section title="Work Experience" items={work} />
                <Section title="Social Impact" items={socialImpact} />
            </div>
        </section>
    )
}

export default HorizontalTimeline
