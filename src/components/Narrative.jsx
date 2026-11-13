import { ShieldCheck } from 'lucide-react'
import SectionMark from './SectionMark'
import IntroLanguages from './IntroLanguages'

const Narrative = () => {
    return (
        <section className="narrative-section" id="narrative">
            <div className="container">
                <SectionMark n="01" label="About" />
                <div className="narrative-grid">
                    {/* Left Column: Image Card */}
                    <div className="narrative-image-col fade-in-1">
                        <div className="narrative-frame">
                            <img src="/images/lbs-campus-800.webp" alt="Vyshak at the London Business School campus, Regent’s Park" width="758" height="1024" loading="lazy" decoding="async" className="narrative-img" />
                            <div className="narrative-badge">
                                <ShieldCheck size={16} />
                                <span>London Business School</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Third-Person Narrative Bio */}
                    <div className="narrative-content-col fade-in-2">

                        <h2 className="narrative-heading" data-reveal><span>Strategy, technology &amp; purpose</span></h2>

                        <div className="animated-divider-left"></div>

                        <div className="narrative-body">
                            <p className="full-name">Vyshak Kannan Iyengar · Also known as Vyshak K Iyengar and Vyshak Iyengar · <span lang="kn">ವೈಶಾಖ್ ಐಯ್ಯಂಗಾರ್</span></p>
                            <p>
                                <strong>Vyshak K Iyengar</strong> is an AI and product strategist. From 2025 to 2026 he led product strategy and growth at <strong>Meta</strong>, working on mobile advertising (App Ads) products across global markets at the intersection of product innovation, growth, monetization and platform strategy. Before Meta, he was a strategy consultant at <strong>Accenture Strategy</strong> and <strong>Boston Consulting Group (BCG)</strong>, and earned his MBA from <strong>London Business School</strong>.
                            </p>
                            <p>
                                His career trajectory combines technical rigor with global strategic execution. After graduating with distinction in Computer Science Engineering from <strong>RNS Institute of Technology</strong>, Bengaluru, he secured a direct transfer into Accenture’s strategy practice without an MBA, advising Fortune 500 leadership on digital enterprise transformation.
                            </p>
                            <p>
                                In parallel with his technology career, Vyshak is co-founder of the <strong>BluFin Foundation</strong>, an organization dedicated to empowering disadvantaged youth and para-athletes. Under his leadership, the foundation has scaled from a grassroots initiative into an organization backed by institutional partners including Accel Partners and Kaleyra.
                            </p>
                        </div>

                        <IntroLanguages />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Narrative
