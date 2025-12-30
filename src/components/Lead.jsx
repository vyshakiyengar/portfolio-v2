import '../styles/Lead.css'
import { Briefcase, Heart, BookOpen } from 'lucide-react'

const Lead = () => {
    const pillars = [
        {
            icon: <Briefcase size={24} />,
            title: "Strategy",
            subtitle: "Global & Enterprise",
            items: ["Recent Consultant at BCG Dubai", "Accenture Strategy Alumnus", "Digital Transformation"]
        },
        {
            icon: <Heart size={24} />,
            title: "Philanthropy",
            subtitle: "Social Impact Leader",
            items: ["Co-Founder, Blufin Foundation", "Grassroots Sports Development", "Public Policy Initiatives"]
        },
        {
            icon: <BookOpen size={24} />,
            title: "Academic",
            subtitle: "Distinction & Excellence",
            items: ["MBA Class of 2025, London Business School", "Kellogg Exchange Program", "Engineering Distinction"]
        }
    ];

    return (
        <section className="lead-section" id="lead">
            <div className="container">
                <div className="lead-header text-center">
                    <h2 className="section-heading">The Lead</h2>
                    <p className="section-subheading">Three pillars defining the journey.</p>
                </div>

                <div className="lead-grid">
                    {pillars.map((pillar, index) => (
                        <div key={index} className="lead-card">
                            <div className="lead-icon">{pillar.icon}</div>
                            <h3 className="lead-title">{pillar.title}</h3>
                            <span className="lead-subtitle">{pillar.subtitle}</span>
                            <div className="lead-divider"></div>
                            <ul className="lead-list">
                                {pillar.items.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Lead
