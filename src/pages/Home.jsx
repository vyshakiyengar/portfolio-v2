import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Hero from '../components/Hero'
import Narrative from '../components/Narrative'
import Timeline from '../components/Timeline'
import Features from '../components/Features'
import Impact from '../components/Impact'
import Values from '../components/Values'
import Recommendations from '../components/Recommendations'
import Contact from '../components/Contact'

function Home() {
    return (
        <div className="home-page">
            <Navbar />
            <ScrollProgress />
            <main>
                <Hero />
                <Narrative />
                <Timeline />
                <Features />
                <Impact />
                <Values />
                <Recommendations />
                <Contact />
            </main>
        </div>
    )
}

export default Home
