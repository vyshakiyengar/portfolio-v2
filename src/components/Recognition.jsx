import { ArrowRight } from 'lucide-react'
import '../styles/Recognition.css'

const thoughtLeadership = [
    {
        id: 5,
        category: "Industry Deep-Dive",
        title: "The Evolving Role of AI in Wealth Management",
        link: "https://medium.com/datadriveninvestor/the-evolving-role-of-ai-in-wealth-management-bcac791eeb64",
    },
    {
        id: 7,
        category: "Ecosystem Analysis",
        title: "AI Startup Ecosystem in India",
        link: "https://medium.com/datadriveninvestor/ai-startups-in-india-1c49e71a1ce5",
    },
    {
        id: 8,
        category: "Disruption",
        title: "Robo Advisors: Disruption in Indian Wealth Management",
        link: "https://medium.com/datadriveninvestor/robo-advisors-a-disruption-in-indian-wealth-management-70d2392a03a8",
    },
    {
        id: 4,
        category: "Market Research",
        title: "Consumer Behavior Towards Smartphones",
        link: "https://www.slideshare.net/slideshow/consumer-behavior-towards-smartphones-market-a-market-research-paper-by-vyshak-iyengar/251000747",
    }
];

const Recognition = () => {
    return (
        <section className="recognition-section" id="research">
            <div className="container">

                {/* Thought Leadership List */}
                <div className="thought-list-container">
                    <h3 className="thought-list-heading">Original Writing & Research</h3>
                    <div className="thought-list">
                        {thoughtLeadership.map((item) => (
                            <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="thought-item">
                                <span className="thought-category">{item.category}</span>
                                <span className="thought-title">{item.title}</span>
                                <span className="thought-arrow"><ArrowRight size={16} /></span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recognition
