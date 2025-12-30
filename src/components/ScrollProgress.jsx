import React, { useState, useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import '../styles/ScrollProgress.css';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'narrative', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'spotlight', label: 'Spotlight' },
    { id: 'recommendations', label: 'Network' },
    { id: 'contact', label: 'Contact' }
];

const ScrollProgress = () => {
    // Shared logic with Navbar for perfect sync
    const activeSection = useActiveSection(sections.map(s => s.id));

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
