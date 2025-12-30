import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            // Find the section that is currently active
            // We iterate backwards to find the first section that is above the scroll line
            // Or we check which section top is closest to 0

            // Robust logic: Find section whose top is <= viewport center and bottom is > viewport center
            // Simple logic: Find last section whose top is <= scrollPosition

            let current = sectionIds[0];

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    // If section top is within upper half of viewport (or close to it)
                    // We trigger when top crosses a threshold (like 1/3 viewport height)
                    if (top < window.innerHeight * 0.4) {
                        current = id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};
