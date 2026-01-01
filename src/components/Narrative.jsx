import '../styles/Narrative.css'
import profileImg from '../assets/vyshak-portrait.jpg'

const Narrative = () => {
    return (
        <section className="narrative-section" id="narrative">
            <div className="container">
                <div className="narrative-grid">
                    <div className="narrative-image-col">
                        <div className="image-wrapper">
                            <img src={profileImg} alt="Vyshak Iyengar" className="narrative-img" />
                        </div>
                    </div>

                    <div className="narrative-content-col fade-in-2">
                        <h2 className="narrative-greeting">Hello, I'm Vyshak!</h2>

                        <div className="narrative-text">
                            <p>
                                I lead product strategy for a mobile advertising product at Meta, working at the intersection of growth, monetization, and platform strategy across global markets. Before Meta, I was a strategy consultant at Accenture and BCG (a background that taught me how to say "synergy" with a straight face), and I hold an MBA from London Business School.
                            </p>
                            <p>
                                Today I'm driven by two North Stars: building high-impact technology products at scale and diving deep into social impact work. As co-founder of Blufin Foundation (NGO based in Bangalore), I'm working to enable disadvantaged youth to pursue professional sports, scaling it from a local trust to an organization backed by partners like Accel Partners and Kaleyra.
                            </p>
                            <p>
                                When I'm not obsessing about startups or product strategy, you'll find me leaning into the classic "Tambram" trifecta: cricket, politics, and strong coffee. I like to think I'm on a serious spiritual journey, but memes keep distracting me from the path to enlightenment.
                            </p>
                        </div>

                        <div className="narrative-signature">
                            <img src={signatureImg} alt="Signature" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Narrative
