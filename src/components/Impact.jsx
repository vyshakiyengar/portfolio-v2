import { Heart, Landmark, Trophy, ExternalLink, CheckCircle } from 'lucide-react'
import '../styles/Impact.css'

const Impact = () => {
    return (
        <section className="impact-section" id="impact">
            <div className="container">
                <div className="text-center">
                    <span className="impact-section-tag">Social Leadership &amp; Governance</span>
                    <h2 className="section-heading">Social Impact &amp; Civic Engagement</h2>
                    <p className="section-subheading">
                        Beyond corporate strategy, Vyshak Iyengar co-founded a non-profit backing grassroots athletes and leads civic tech initiatives.
                    </p>
                    <div className="animated-divider"></div>
                </div>

                <div className="impact-grid">
                    {/* Social Impact: BluFin Foundation */}
                    <div className="impact-card social-card fade-in-1">
                        <div className="impact-card-image">
                            <img src="/images/blufin-pool.jpg" alt="BluFin Foundation Athletes & Team" />
                            <div className="image-overlay-badge">
                                <Heart size={14} />
                                <span>Co-Founder &amp; Board Member</span>
                            </div>
                        </div>

                        <div className="impact-card-body">
                            <div className="card-header-flex">
                                <h3 className="impact-card-title">BluFin Foundation</h3>
                                <a href="https://yourstory.com/socialstory/2024/08/blufin-foundation-led-by-paralympian-sharath-gayak" target="_blank" rel="noopener noreferrer" className="impact-external-link">
                                    <span>YourStory Profile</span>
                                    <ExternalLink size={14} />
                                </a>
                            </div>

                            <p className="impact-description">
                                Co-founded in 2018, BluFin Foundation is a Bangalore-based NGO building an inclusive sports ecosystem for underprivileged children and para-athletes.
                            </p>

                            <div className="impact-metrics-row">
                                <div className="metric-box">
                                    <span className="metric-num">120+</span>
                                    <span className="metric-lbl">Children Trained</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-num">7</span>
                                    <span className="metric-lbl">Intl. Para Athletes</span>
                                </div>
                                <div className="metric-box">
                                    <span className="metric-num">2</span>
                                    <span className="metric-lbl">Asian Para Games '23</span>
                                </div>
                            </div>

                            <div className="impact-partners">
                                <span>Institutional Partners:</span>
                                <div className="partner-tags">
                                    <span className="partner-pill">Accel Partners</span>
                                    <span className="partner-pill">Kaleyra</span>
                                    <span className="partner-pill">PayPal</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Civic Engagement & Public Work */}
                    <div className="impact-card civic-card fade-in-2">
                        <div className="civic-card-header">
                            <div className="civic-icon-box">
                                <Landmark size={24} />
                            </div>
                            <div>
                                <h3 className="impact-card-title">Civic &amp; Governance Work</h3>
                                <span className="civic-subtitle">Public Policy &amp; Tech Initiatives</span>
                            </div>
                        </div>

                        <div className="civic-initiatives-list">
                            <div className="civic-item">
                                <CheckCircle size={18} className="civic-check" />
                                <div>
                                    <strong>Member of Parliament Initiatives (Bangalore South)</strong>
                                    <p>Advised on technology, startup ecosystems, and youth entrepreneurship initiatives.</p>
                                </div>
                            </div>

                            <div className="civic-item">
                                <CheckCircle size={18} className="civic-check" />
                                <div>
                                    <strong>Governing Council Member — "Let's Be The Change"</strong>
                                    <p>Served on the leadership council driving urban cleanliness and civic engagement across Karnataka.</p>
                                </div>
                            </div>

                            <div className="civic-item">
                                <CheckCircle size={18} className="civic-check" />
                                <div>
                                    <strong>Disaster Response &amp; Accessibility</strong>
                                    <p>Coordinated Covid-19 helpline logistics and backed RampMyCity for wheelchair accessibility.</p>
                                </div>
                            </div>
                        </div>

                        <div className="civic-quote-box">
                            <Trophy size={16} className="trophy-icon" />
                            <span>"Building enduring systems that empower communities at grassroots scale."</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Impact
