import { useRef, useEffect } from 'react'
import '../styles/Timeline.css'

const Timeline = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const nodes = document.querySelectorAll('.timeline-node');
        nodes.forEach(node => observer.observe(node));

        return () => observer.disconnect();
    }, []);

    const milestones = [
        {
            year: "The Foundation",
            title: "Engineering Roots",
            subtitle: "Distinction & Technical Excellence",
            description: "Built a robust foundation in Computer Science, mastering the logic that would later underpin strategic problem-solving. Graduated with distinction.",
            category: "Engineering"
        },
        {
            year: "The Pivot",
            title: "Accenture Strategy",
            subtitle: "Strategy Consultant",
            description: "Defied the norm by securing a rare direct transfer to Strategy without an MBA. Architected digital transformation strategies for global enterprises.",
            category: "Strategy"
        },
        {
            year: "The Purpose",
            title: "Blufin Foundation",
            subtitle: "Co-Founder & Social Impact Leader",
            description: "Founded a non-profit dedicated to para-sports and grassroots athletes. Demonstrated that leadership is about empowering others to succeed.",
            category: "Social Impact"
        },
        {
            year: "The Future",
            title: "London Business School",
            subtitle: "MBA Candidate & BCG Consultant",
            description: "Selected for the world's elite MBA program. Completed a high-impact summer consultancy at BCG Dubai, cementing a global strategic perspective.",
            category: "Global Leadership"
        }
    ];

    return (
        <section className="timeline-section" id="timeline">
            <div className="container">
                <h2 className="section-heading text-center">The Evolution</h2>
                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline-line"></div>

                    {milestones.map((milestone, index) => (
                        <div key={index} className="timeline-node">
                            <div className="node-marker"></div>
                            <div className="node-content">
                                <span className="node-year">{milestone.year}</span>
                                <h3 className="node-title">{milestone.title}</h3>
                                <h4 className="node-subtitle">{milestone.subtitle}</h4>
                                <p className="node-description">{milestone.description}</p>
                                <span className="node-category">{milestone.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Timeline
