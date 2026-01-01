import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import '../styles/Recommendations.css'
import ScrollIndicator from './ScrollIndicator'
import rec1 from '../assets/recommendations/rec1.jpg'
import rec2 from '../assets/recommendations/rec2.jpg'
import rec3 from '../assets/recommendations/rec3.jpg'
import rec4 from '../assets/recommendations/rec4.jpg'
import rec5 from '../assets/recommendations/rec5.jpg'

const recommendations = [
    { id: 1, img: rec1, alt: "Recommendation from Richard Harpin" },
    { id: 2, img: rec4, alt: "Recommendation from Prateek Khandelwal" },
    { id: 3, img: rec2, alt: "Recommendation from Santosh Katti" },
    { id: 4, img: rec3, alt: "Recommendation from Aniketh Jain" },
    { id: 5, img: rec5, alt: "Recommendation from Muralikrishna Mysore" }
]

const Recommendations = () => {
    // Duplicate the list 4 times for a smoother, longer infinite scroll effect
    const loopedRecommendations = [...recommendations, ...recommendations, ...recommendations, ...recommendations];
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 340 // Card width + gap
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="recommendations-section" id="recommendations">
            <div className="container">
                <h2 className="section-heading text-center">Words from the Network</h2>

                <div className="scroll-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Scroll left">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="recommendations-scroll" ref={scrollRef}>
                        <div className="recommendations-track">
                            {loopedRecommendations.map((rec, index) => (
                                <div key={`${rec.id}-${index}`} className="rec-card">
                                    <img src={rec.img} alt={rec.alt} loading="lazy" />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Scroll right">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Recommendations
