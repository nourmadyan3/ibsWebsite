'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const UpArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
);

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={cn(
                'fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#ed253c] text-white shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed253c] transition-opacity duration-300',
                {
                    'opacity-100': isVisible,
                    'opacity-0': !isVisible,
                    'pointer-events-auto': isVisible,
                    'pointer-events-none': !isVisible,
                }
            )}
            aria-label="Scroll to top"
        >
            <UpArrowIcon />
        </button>
    );
};

export default ScrollToTopButton; 