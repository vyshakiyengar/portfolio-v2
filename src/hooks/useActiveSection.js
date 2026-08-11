import { useState, useEffect } from 'react';

const SECTION_PATH_MAP = {
    hero: '/',
    narrative: '/about',
    experience: '/experience',
    spotlight: '/spotlight',
    impact: '/impact',
    philosophy: '/philosophy',
    contact: '/contact',
};

export const useActiveSection = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            let current = sectionIds[0];

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    if (top < window.innerHeight * 0.4) {
                        current = id;
                    }
                }
            }

            setActiveSection((prev) => {
                if (prev !== current) {
                    const newPath = SECTION_PATH_MAP[current];
                    if (newPath && window.location.pathname !== newPath) {
                        window.history.replaceState(null, '', newPath);
                    }
                }
                return current;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};
