import { Compass, Sliders, TrendingUp, Sparkles } from 'lucide-react'

const principles = [
    {
        title: "Build for scale, not applause.",
        desc: "Focusing on enduring technology architectures and institutional leverage rather than short-term optics.",
        icon: Compass
    },
    {
        title: "Systems matter more than slogans.",
        desc: "Rigorous frameworks, operational clarity, and data-driven discipline outperform surface-level trends.",
        icon: Sliders
    },
    {
        title: "Impact compounds over time.",
        desc: "Long-term commitment in product innovation and grassroots philanthropy creates exponential value.",
        icon: TrendingUp
    }
]

const Values = () => {
    return (
        <section className="values-section" id="philosophy">
            <div className="container">
                <div className="text-center">
                    <span className="values-section-tag">
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
                        05 / Philosophy
                    </span>
                    <h2 className="section-heading">What guides my work</h2>
                    <p className="section-subheading">Foundational tenets guiding product strategy, executive leadership, and social impact.</p>
                    <div className="animated-divider"></div>
                </div>

                <div className="values-grid">
                    {principles.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div key={index} className="value-card fade-in-1">
                                <div className="value-icon-box">
                                    <IconComponent size={24} />
                                </div>
                                <h3 className="value-title">{item.title}</h3>
                                <p className="value-desc">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Values
