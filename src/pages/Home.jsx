import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Brief from '../components/Brief'
import { useMotion } from '../hooks/useMotion'
import Narrative from '../components/Narrative'
import Timeline from '../components/Timeline'
import Features from '../components/Features'
import Impact from '../components/Impact'
import Values from '../components/Values'
import Recommendations from '../components/Recommendations'
import Contact from '../components/Contact'

function Home() {
    useMotion()
    return (
        <div className="home-page">
            <Navbar />
            <main id="main-content">
                <Hero />
                <Brief />
                <Narrative />
                <Timeline />
                <Recommendations />
                <Features />
                <Impact />
                <Values />
                <Contact />
            </main>
        </div>
    )
}

export default Home
