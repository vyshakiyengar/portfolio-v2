import { User, Award, Globe, Heart, ShieldCheck } from 'lucide-react'
import '../styles/Narrative.css'

const Narrative = () => {
    return (
        <section className="narrative-section" id="narrative">
            <div className="container">
                <div className="narrative-grid">
                    {/* Left Column: Image Card */}
                    <div className="narrative-image-col fade-in-1">
                        <div className="narrative-frame">
                            <img src="/images/vyshak-portrait.jpg" alt="Vyshak Kannan Iyengar" className="narrative-img" />
                            <div className="narrative-badge">
                                <ShieldCheck size={16} />
                                <span>Official Profile</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Third-Person Narrative Bio */}
                    <div className="narrative-content-col fade-in-2">
                        <div className="section-meta">
                            <User size={18} className="meta-icon" />
                            <span>Executive Profile</span>
                        </div>

                        <h2 className="narrative-heading">About Vyshak Iyengar</h2>

                        <div className="animated-divider-left"></div>

                        <div className="narrative-body">
                            <p>
                                <strong>Vyshak Iyengar</strong> leads product strategy for mobile advertising products at <strong>Meta</strong>, operating at the intersection of product innovation, growth, monetization, and platform strategy across global markets. Prior to Meta, he was a strategy consultant at <strong>Accenture Strategy</strong> and <strong>Boston Consulting Group (BCG)</strong>, and earned his MBA from <strong>London Business School</strong>.
                            </p>
                            <p>
                                His career trajectory combines technical rigor with global strategic execution. Starting with a distinction in Computer Science Engineering, he secured a direct transfer into Accenture’s strategy practice without an MBA, advising Fortune 500 leadership on digital enterprise transformation.
                            </p>
                            <p>
                                In parallel with his technology career, Vyshak is co-founder of the <strong>BluFin Foundation</strong>, an organization dedicated to empowering disadvantaged youth and para-athletes. Under his leadership, the foundation has scaled from a grassroots initiative into an organization backed by institutional partners including Accel Partners and Kaleyra.
                            </p>
                        </div>

                        {/* Highlight Key Pillars */}
                        <div className="narrative-pillars">
                            <div className="pillar-item">
                                <Globe size={20} className="pillar-icon" />
                                <div className="pillar-text">
                                    <strong>Global Strategy</strong>
                                    <span>Meta &amp; BCG Dubai</span>
                                </div>
                            </div>
                            <div className="pillar-item">
                                <Award size={20} className="pillar-icon" />
                                <div className="pillar-text">
                                    <strong>Academic Rigor</strong>
                                    <span>London Business School</span>
                                </div>
                            </div>
                            <div className="pillar-item">
                                <Heart size={20} className="pillar-icon" />
                                <div className="pillar-text">
                                    <strong>Social Impact</strong>
                                    <span>BluFin Foundation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Narrative
