import { Building2, GraduationCap, Waves, Briefcase, Award, ExternalLink } from 'lucide-react'
import '../styles/Experience.css'

const experiences = [
    {
        id: 'meta',
        role: 'Product Lead',
        organization: 'Meta',
        period: 'Current',
        icon: Building2,
        description: 'Product strategy and roadmap development. Community-centered product innovation. Cross-functional team leadership. Data-driven growth experiments.',
        quote: '"Products should solve real problems for real people, not create needs that never existed."'
    },
    {
        id: 'lbs',
        role: 'MBA Candidate',
        organization: 'London Business School',
        period: 'Class of 2025',
        icon: GraduationCap,
        description: 'Executive Committee: Venture Capital Club & Cricket Club. Exchange Program: Kellogg School of Management. Global Business Experience: South America. Summer Consulting: BCG Dubai.',
        quote: '"How strategic frameworks translate across industries and cultures"'
    },
    {
        id: 'blufin',
        role: 'Co-founder & Board Member',
        organization: 'BluFin Foundation',
        period: '2017 - Present',
        icon: Waves,
        description: 'Creating an inclusive sporting ecosystem. 100+ children trained. 2 athletes at Asian Para Games 2023. Partnerships with Accel Partners, PayPal.',
        quote: '"Started with Rs 2 lakh from friends and family. Today, changing lives through sport."',
        link: 'https://www.blufinfoundation.com'
    },
    {
        id: 'accenture',
        role: 'Strategy Consultant',
        organization: 'Accenture Strategy',
        period: '6 years',
        icon: Briefcase,
        description: 'Technology strategy and digital transformation. Business process optimization. Change management. Transferred from Tech to Strategy without MBA.',
        quote: 'Secured rare transfer demonstrating strategic aptitude.'
    },
    {
        id: 'other',
        role: 'Additional Initiatives',
        organization: 'Various',
        period: '2017 - Present',
        icon: Award,
        description: 'Technology Advisor to MP Bangalore South. Early Career Volunteering: Be The Change. Covid-19 Response: Helpline, Delivery Coordination, RampMyCity.',
        quote: 'Impact beyond the office.'
    }
]

const Experience = () => {
    return (
        <section className="experience-section" id="experience">
            <div className="container">
                <h2 className="section-heading text-center">Experience Deep Dive</h2>

                <div className="experience-grid">
                    {experiences.map((exp) => {
                        const Icon = exp.icon
                        return (
                            <div key={exp.id} className="experience-card">
                                <div className="card-header">
                                    <div className="card-icon">
                                        <Icon size={24} />
                                    </div>
                                    <div className="card-meta">
                                        <span className="card-period">{exp.period}</span>
                                        <h3 className="card-org">{exp.organization}</h3>
                                    </div>
                                </div>

                                <h4 className="card-role">{exp.role}</h4>

                                <p className="card-desc">{exp.description}</p>

                                <div className="card-footer">
                                    <p className="card-quote">{exp.quote}</p>
                                    {exp.link && (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="card-link">
                                            Learn more <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Experience
