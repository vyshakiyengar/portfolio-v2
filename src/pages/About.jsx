import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import '../styles/variables.css'

function About() {
    useEffect(() => {
        // JSON-LD Structured Data for Google Knowledge Panel
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Vyshak Iyengar",
            "url": "https://vyshak.me",
            "image": "https://vyshak.me/images/profile-v5.jpg",
            "sameAs": [
                "https://www.linkedin.com/in/vyshakiyengar/",
                "https://github.com/vyshak",
                "https://twitter.com/vyshak"
            ],
            "jobTitle": "Product Leader & Software Engineer",
            "worksFor": {
                "@type": "Organization",
                "name": "Portfolio"
            },
            "description": "Vyshak Iyengar is a technologist and product builder styled by a philosophy of quiet luxury and elite minimalism. With a background rooted in engineering excellence and strategic product thinking, Vyshak crafts digital experiences that stand the test of time."
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        }
    }, []);

    return (
        <div className="about-page" style={{
            backgroundColor: 'var(--bg-color)',
            color: 'var(--text-primary)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Navbar />
            <main style={{
                flex: 1,
                padding: '120px 24px',
                maxWidth: '800px',
                margin: '0 auto',
                fontFamily: 'var(--font-primary)'
            }}>
                <h1 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3rem',
                    marginBottom: '2rem',
                    fontWeight: 400
                }}>About Vyshak</h1>

                <div className="bio-content" style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Vyshak Iyengar is a technologist and product builder styled by a philosophy of quiet luxury and elite minimalism.
                        With a background rooted in engineering excellence and strategic product thinking, Vyshak crafts digital experiences
                        that stand the test of time.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Based in the technology hubs of the world, he has collaborated with top-tier organizations including Meta, BCG, and Accenture.
                        His work bridges the gap between complex systems and intuitive, text-forward design, prioritizing clarity over noise.
                    </p>
                    <p>
                        Vyshak's approach to software development effectively treats code as a form of editorial expression—precise,
                        intentional, and devoid of unnecessary embellishment.
                    </p>
                </div>
            </main>
            <Contact />
        </div>
    )
}

export default About
