import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import Hero from '../components/Hero'
import Narrative from '../components/Narrative'

import HorizontalTimeline from '../components/HorizontalTimeline'
import Recognition from '../components/Recognition'
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

                <HorizontalTimeline />
                <Recognition />
                <Recommendations />
                <Contact />
            </main>
        </div>
    )
}

export default Home
