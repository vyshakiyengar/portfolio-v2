import { User, Award, Globe, Heart, ShieldCheck } from 'lucide-react'

const Narrative = () => {
    return (
        <section className="narrative-section" id="narrative">
            <div className="container">
                <div className="narrative-grid">
                    {/* Left Column: Image Card */}
                    <div className="narrative-image-col fade-in-1">
                        <div className="narrative-frame">
                            <img src="/images/lbs-campus.jpg" alt="London Business School campus at Regent’s Park" loading="lazy" className="narrative-img" />
                            <div className="narrative-badge">
                                <ShieldCheck size={16} />
                                <span>London Business School</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Third-Person Narrative Bio */}
                    <div className="narrative-content-col fade-in-2">
                        <div className="section-meta">
                            <User size={18} className="meta-icon" />
                            <span>01 / About</span>
                        </div>

                        <h2 className="narrative-heading">Strategy, technology &amp; purpose</h2>

                        <div className="animated-divider-left"></div>

                        <div className="narrative-body">
                            <p className="full-name">Vyshak Kannan Iyengar · Also known as Vyshak K Iyengar and Vyshak Iyengar · <span lang="kn">ವೈಶಾಖ್ ಐಯ್ಯಂಗಾರ್</span></p>
                            <p>
                                <strong>Vyshak K Iyengar</strong> is a product strategist working on AI products. Until October 2026 he was in <strong>Product Strategy &amp; Growth at Meta</strong>, working on mobile advertising (App Ads) products across global markets at the intersection of product innovation, growth, monetization and platform strategy. Before Meta, he was a strategy consultant at <strong>Accenture Strategy</strong> and <strong>Boston Consulting Group (BCG)</strong>, and earned his MBA from <strong>London Business School</strong>.
                            </p>
                            <p>
                                His career trajectory combines technical rigor with global strategic execution. After graduating with distinction in Computer Science Engineering from <strong>RNS Institute of Technology</strong>, Bengaluru, he secured a direct transfer into Accenture’s strategy practice without an MBA, advising Fortune 500 leadership on digital enterprise transformation.
                            </p>
                            <p>
                                In parallel with his technology career, Vyshak is co-founder of the <strong>BluFin Foundation</strong>, an organization dedicated to empowering disadvantaged youth and para-athletes. Under his leadership, the foundation has scaled from a grassroots initiative into an organization backed by institutional partners including Accel Partners and Kaleyra.
                            </p>
                            <p lang="kn" className="kannada-bio">
                                ವೈಶಾಖ್ ಕಣ್ಣನ್ ಐಯ್ಯಂಗಾರ್ (ವೈಶಾಖ್ ಐಯ್ಯಂಗಾರ್) ಕರ್ನಾಟಕ ಮೂಲದ, ಲಂಡನ್‌ನಲ್ಲಿ ನೆಲೆಸಿರುವ ತಂತ್ರಜ್ಞ ಮತ್ತು ಸಾಮಾಜಿಕ ಉದ್ಯಮಿ. ಅವರು ಮೆಟಾದಲ್ಲಿ ಪ್ರಾಡಕ್ಟ್ ಸ್ಟ್ರಾಟಜಿ ಮತ್ತು ಗ್ರೋತ್ ವಿಭಾಗದಲ್ಲಿ ಕೆಲಸ ಮಾಡಿದ್ದಾರೆ, ಲಂಡನ್ ಬಿಸಿನೆಸ್ ಸ್ಕೂಲ್‌ನಲ್ಲಿ ಎಂಬಿಎ ಪಡೆದಿದ್ದಾರೆ ಮತ್ತು ಬ್ಲೂಫಿನ್ ಫೌಂಡೇಶನ್‌ನ ಸಹ-ಸಂಸ್ಥಾಪಕರು. ತಾಯಿಗಾಗಿ ಅವರು ರೂಪಿಸಿದ ವಾಟ್ಸ್‌ಆ್ಯಪ್ ಎಐ ಶಾಪಿಂಗ್ ಏಜೆಂಟ್ ಕುರಿತು ಪ್ರಜಾವಾಣಿ ವರದಿ ಮಾಡಿದೆ.
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
