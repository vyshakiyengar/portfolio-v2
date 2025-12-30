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

                    <div className="narrative-content-col">
                        <h2 className="narrative-greeting">Hello, I'm Vyshak!</h2>

                        <div className="narrative-text">
                            <p>
                                I’m a Computer Science Engineer by education and a former strategy consultant (a background that taught me how to say "synergy" with a straight face). Today I'm driven by two North Stars: building high-impact technology products at scale and diving deep into social impact work.
                            </p>
                            <p>
                                When I’m not obsessing about startups, you’ll find me leaning into the classic "Tambram" trifecta: cricket, politics, and strong coffee. I like to think I’m on a serious spiritual journey, but memes keep distracting me from the path to enlightenment.
                            </p>
                        </div>

                        {/* Signature removed as per request */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Narrative
