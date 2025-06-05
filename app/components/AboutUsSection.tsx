'use client'

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AboutUsSectionProps {
    id: string   // Added id prop for anchor linking
    title: string;
    text: React.ReactNode; // Changed to accept ReactNode
    
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
            "py-8 flex flex-col items-left gap-8",
            reverseLayout ? "md:flex-row-reverse" : "md:flex-row",
            // Background color logic can be more centralized if needed
            // For now, assume default background, or apply via parent page
        )}>
            {/* Text container - Adjusted width */}
            <div className="md:w-1/3 text-left px-4 md:px-0 ">
                <h2
                    className={cn(
                        'text-3xl font-bold mb-4',
                        title === "WHO IS IBS?" ? "text-[#ed253c]" : "text-foreground", // Main title color
                        'text-foreground',
                    )}
                >
                    {title}
                </h2>
                <div className="text-[#000000BF] dark:text-gray-300 leading-relaxed text-justify">
                    {text}
                </div>
                {callToActionText && callToActionHref && (
                    <div className='mt-6'>
                        <a href={callToActionHref} className='inline-block bg-[#ed253c] text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors'>
                            {callToActionText}
                        </a>
                    </div>
                )}
            </div>
            {/* Image container - Adjusted width */}
            {imageUrl && (
                <div className="md:w-2/3 relative h-64 md:h-96 min-h-[200px] ">
                    <Image
                        src={imageUrl}
                        alt={imageAlt || title}
                        fill={true}
                        style={{ objectFit: 'contain', objectPosition: 'center' }}
                        className="w-full h-full"
                        sizes="(max-width: 768px) 100vw, 66vw" // Adjusted sizes to reflect md:w-2/3 (approx 66%)
                    />
                </div>
            )}
        </div>
    );
};

export default AboutUsSection;