import { useActiveSection } from '../hooks/useActiveSection';
import '../styles/ScrollProgress.css';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'narrative', label: 'About' },
    { id: 'experience', label: 'Timeline' },
    { id: 'spotlight', label: 'Spotlight' },
    { id: 'impact', label: 'Impact' },
    { id: 'philosophy', label: 'Philosophy' },
    { id: 'contact', label: 'Contact' }
];

const sectionIds = sections.map(s => s.id);

const ScrollProgress = () => {
    const activeSection = useActiveSection(sectionIds);

    return (
        <div className="scroll-progress-container fade-in-delayed">
            {/* Static line adjusted to be simple background */}
            <div className="scroll-line"></div>

            <div className="scroll-dots-column">
                {sections.map((section) => (
                    <a
                        key={section.id}
                        href={`#${section.id}`}
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
