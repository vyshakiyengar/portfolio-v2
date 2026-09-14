import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Linkedin, ArrowUpRight } from 'lucide-react'
import avatarRichard from '../assets/recommendations/avatars/richard-harpin.jpg'
import avatarPrateek from '../assets/recommendations/avatars/prateek-khandelwal.jpg'
import avatarSantosh from '../assets/recommendations/avatars/santosh-katti.jpg'
import avatarAniketh from '../assets/recommendations/avatars/aniketh-jain.jpg'
import avatarMurali from '../assets/recommendations/avatars/muralikrishna-mysore.jpg'
import avatarNikunj from '../assets/recommendations/avatars/nikunj-jhunjhunwala.jpg'

const PROFILE_URL = 'https://www.linkedin.com/in/vyshakiyengar/'

const recommendations = [
    {
        id: 'richard-harpin',
        name: 'Richard Harpin',
        punchline: 'Built a £4.1bn business',
        role: 'Founder of HomeServe · Owner, Business Leader',
        relationship: 'Senior to Vyshak, but did not manage directly',
        date: 'March 2025',
        linkedin: 'https://www.linkedin.com/in/rharpin/',
        avatar: avatarRichard,
        quote: [
            'Vyshak contributed to a project focused on scaling UK mid-sized businesses, during which he led an analysis as part of my broader mission to help these businesses scale.',
            'Vyshak is a bright, driven individual from London Business School who takes real ownership of his work. I’ve been impressed with his positive attitude—he’s proactive, analytical, and goes the extra mile. He even took the initiative to travel to meet founders in person to get first-hand insights.',
            'His positivity, work ethic, and strategic thinking make him a valuable asset to any team. I have no doubt that he will continue to excel and make a meaningful impact wherever he goes.'
        ]
    },
    {
        id: 'prateek-khandelwal',
        name: 'Prateek Khandelwal',
        punchline: 'President’s Award-winning social entrepreneur',
        role: 'Founder, RampMyCity · Building wheelchair-friendly cities across India',
        relationship: 'Worked with Vyshak on the same team',
        date: 'August 2022',
        linkedin: 'https://www.linkedin.com/in/prateekkhandelwal5/',
        avatar: avatarPrateek,
        quote: [
            'I had the pleasure of working with Vyshak on a project to make public and private establishments in Bangalore South wheelchair accessible for the inclusion of Persons with Disabilities and Elderly Population. Vyshak played a key role in bringing together public office of Member of Parliament Tejasvi Surya, Dunzo and our organization RampMyCity for the successful execution of the project.',
            'He showed astute leadership and management skills in a challenging environment, where we were able to seamlessly collaborate with different stakeholders in public and private spaces to make them disabled friendly. Vyshak’s zeal towards manifesting the idea of an inclusive and sustainable world is remarkable and he is leading by example to make it possible.'
        ]
    },
    {
        id: 'santosh-katti',
        name: 'Santosh Katti',
        punchline: 'Founder and CEO of Graphene AI',
        role: 'Founder of bootstrapped AI tech companies · AI for healthcare and CPG',
        relationship: 'Managed Vyshak directly',
        date: 'February 2017',
        linkedin: 'https://www.linkedin.com/in/santoshkatti/',
        avatar: avatarSantosh,
        quote: [
            'Vyshak interned with us in Graphene and I loved his initiative and street smart ways of getting things done. He also showed great ownership of things we entrusted him -and turned around some great work which has helped move our business further. I hope he will come back and work for us full time when he graduates !'
        ]
    },
    {
        id: 'aniketh-jain',
        name: 'Aniketh Jain',
        punchline: 'Built Kaleyra to an NYSE listing',
        role: 'Co-Founder and CEO at Fyno · Intelligent communication hub for BFSI',
        relationship: 'Was Vyshak’s mentor',
        date: 'August 2022',
        linkedin: 'https://www.linkedin.com/in/anikethjain/',
        avatar: avatarAniketh,
        quote: [
            'Vyshak and I have worked together on many projects since covid. He was involved in executing many social impact projects like the Covid helpline, Home delivery, Rampmycity and many more.',
            'Vyshak is someone who is constantly learning and upskilling. His curiosity level is high will not shy away from asking anything without hesitation. His most significant strength is his ability to collaborate with multiple stakeholders for any small to a big project.',
            'He is good at taking up new challenges and delivering with a high velocity embedded solution-oriented mindset. Looking for a win-win outcome and partnership is his constant endeavour.'
        ]
    },
    {
        id: 'muralikrishna-mysore',
        name: 'Muralikrishna Mysore',
        punchline: 'CTO of a leading institution, former industry VP',
        role: 'CTO, RNS Group of Institutions',
        relationship: 'Managed Vyshak directly',
        date: 'August 2019',
        linkedin: 'https://www.linkedin.com/in/muralikrishna-mysore-0577507/',
        avatar: avatarMurali,
        quote: [
            'I know Vyshak for the past 5 years. Excellent student, knowledgeable, articulate and most importantly humble. His PR skills, zeal to work on new things, his consulting capabilities and enthusiasm to support CSR activities are extremely amazing.',
            'A great student and friend to have..'
        ]
    },
    {
        id: 'nikunj-jhunjhunwala',
        name: 'Nikunj Jhunjhunwala',
        punchline: 'Product Leader at Meta',
        role: 'Product Leader · Adtech, social commerce, e-commerce · IIM alumnus',
        relationship: 'Worked with Vyshak on the same team',
        date: 'September 2026',
        linkedin: 'https://www.linkedin.com/in/nikunj-jhunjhunwala-8853b89/',
        avatar: avatarNikunj,
        quote: [
            'I worked closely with Vyshak on Meta’s App Ads products. As the PM working alongside him, I saw his impact firsthand. He was one of the top performers I worked with and played an important role in helping us double the business’s revenue.',
            'Vyshak helped shape key strategies for signal growth and advertiser value, translating complex advertiser challenges into clear product opportunities. He worked with product and engineering to develop solutions and with sales teams and advertisers to drive adoption.',
            'What stood out was his ownership. He proactively identified opportunities and drove them forward beyond the scope of his role. His product judgment and ability to execute made him a trusted partner.',
            'I would gladly work with Vyshak again and strongly recommend him for a challenging role where he can shape products and drive growth.'
        ]
    }
]

const RecommendationCard = ({ rec }) => {
    const [expanded, setExpanded] = useState(false)
    const bodyId = `rec-body-${rec.id}`
    const isLong = rec.quote.join(' ').length > 480

    return (
        <article className="rec-card">
            <p className="rec-punchline">{rec.punchline}</p>

            <blockquote
                id={bodyId}
                className={`rec-quote${isLong && !expanded ? ' is-clamped' : ''}`}
                cite={rec.linkedin}
            >
                {rec.quote.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
            </blockquote>

            {isLong && (
                <button
                    type="button"
                    className="rec-expand"
                    onClick={() => setExpanded((v) => !v)}
                    aria-expanded={expanded}
                    aria-controls={bodyId}
                >
                    {expanded ? 'Show less' : 'Read full recommendation'}
                </button>
            )}

            <footer className="rec-attribution">
                <img
                    className="rec-avatar"
                    src={rec.avatar}
                    alt={`${rec.name}, who recommended Vyshak Iyengar on LinkedIn`}
                    width="52"
                    height="52"
                    loading="lazy"
                />
                <div className="rec-identity">
                    <a
                        className="rec-name"
                        href={rec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        {rec.name}
                        <Linkedin size={13} aria-hidden="true" />
                    </a>
                    <span className="rec-role">{rec.role}</span>
                    <span className="rec-meta">{rec.date} · {rec.relationship}</span>
                </div>
            </footer>
        </article>
    )
}

const Recommendations = () => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const card = current.querySelector('.rec-card')
            const scrollAmount = card ? card.offsetWidth + 24 : 454
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="recommendations-section" id="recommendations">
            <div className="container">
                <p className="eyebrow">06 / Recommendations</p>
                <h2 className="section-heading text-center">Words from people I’ve worked with</h2>
                <p className="section-subheading">
                    Unedited LinkedIn recommendations from founders, operators and mentors I have
                    worked with over the past decade.{' '}
                    <a className="rec-cta" href={PROFILE_URL} target="_blank" rel="noopener noreferrer">
                        See them on LinkedIn
                        <ArrowUpRight size={13} aria-hidden="true" />
                    </a>
                </p>

                <div className="scroll-wrapper">
                    <button className="scroll-btn left" onClick={() => scroll('left')} aria-label="Previous recommendation">
                        <ChevronLeft size={20} />
                    </button>
                    <button className="scroll-btn right" onClick={() => scroll('right')} aria-label="Next recommendation">
                        <ChevronRight size={20} />
                    </button>

                    <div
                        className="recommendations-scroll"
                        ref={scrollRef}
                        tabIndex={0}
                        role="region"
                        aria-label="Six LinkedIn recommendations; scroll horizontally to read all"
                    >
                        <div className="recommendations-track">
                            {recommendations.map((rec) => (
                                <RecommendationCard key={rec.id} rec={rec} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recommendations
