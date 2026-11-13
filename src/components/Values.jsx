import { Compass, Sliders, TrendingUp } from 'lucide-react'
import SectionMark from './SectionMark'

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
                    <SectionMark n="06" label="Philosophy" />
                    <h2 className="section-heading" data-reveal><span>What guides his work</span></h2>
                    <p className="section-subheading">Three principles behind the product work and the non-profit work.</p>
                    <div className="animated-divider"></div>
                </div>

                <div className="values-grid" data-reveal>
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
