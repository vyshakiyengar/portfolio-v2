import { useActiveSection } from '../hooks/useActiveSection';
import '../styles/ScrollProgress.css';

const sections = [
    { id: 'hero', label: 'Home', path: '/' },
    { id: 'narrative', label: 'About', path: '/about' },
    { id: 'experience', label: 'Timeline', path: '/experience' },
    { id: 'spotlight', label: 'Spotlight', path: '/spotlight' },
    { id: 'impact', label: 'Impact', path: '/impact' },
    { id: 'philosophy', label: 'Philosophy', path: '/philosophy' },
    { id: 'contact', label: 'Contact', path: '/contact' }
];

const sectionIds = sections.map(s => s.id);

const ScrollProgress = () => {
    const activeSection = useActiveSection(sectionIds);

    const handleDotClick = (e, section) => {
        e.preventDefault();
        const el = document.getElementById(section.id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        window.history.pushState(null, '', section.path);
    };

    return (
        <div className="scroll-progress-container fade-in-delayed">
            {/* Static line adjusted to be simple background */}
            <div className="scroll-line"></div>

            <div className="scroll-dots-column">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={section.path}
                        onClick={(e) => handleDotClick(e, section)}
                        className={`scroll-dot-wrapper ${activeSection === section.id ? 'active' : ''}`}
                        aria-label={`Scroll to ${section.label}`}
                    >
                        <div className="scroll-dot"></div>
                        <span className="scroll-label">{section.label}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ScrollProgress;
