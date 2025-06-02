'use client'

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AboutUsSectionProps {
    id: string   // Added id prop for anchor linking
    title: string;
    text: string;
    imageUrl?: string; // Optional image for this section
    imageAlt?: string;
    reverseLayout?: boolean; // To alternate image/text layout
    // Add any other props specific to this section, like a 'call to action' button text and href
    callToActionText?: string;
    callToActionHref?: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({
    id,
    title,
    text,
    imageUrl,
    imageAlt,
    reverseLayout,
    callToActionText,
    callToActionHref,
}) => {
    return (
        <div id={id} className={cn(   // Apply id here
            "py-8 flex flex-col items-center gap-8",
            reverseLayout ? "md:flex-row-reverse" : "md:flex-row",
            // Background color logic can be more centralized if needed
            // For now, assume default background, or apply via parent page
        )}>
            <div className="md:w-1/2 text-left px-4 md:px-0">
                <h2
                    className={cn(
                        'text-2xl font-semibold mb-4',
                        title === "WHO IS IBS?" ? "text-[#ed253c]" : "text-foreground", // Main title color
                        'text-foreground',
                    )}
                >
                    {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {text}
                </p>
                {callToActionText && callToActionHref && (
                    <div className='mt-6'>
                        <a href={callToActionHref} className='inline-block bg-[#ed253c] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors'>
                            {callToActionText}
                        </a>
                    </div>
                )}
            </div>
            {imageUrl && (
                <div className="md:w-1/2 relative h-64 md:h-96 min-h-[200px]">
                    <Image
                        src={imageUrl}
                        alt={imageAlt || title}
                        fill={true}
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        className="w-full h-full opacity-90"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
            )}
        </div>
    );
};

export default AboutUsSection;