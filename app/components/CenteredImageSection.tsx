'use client'

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils'; // Assuming cn utility is available

interface CenteredImageSectionProps {
    id?: string; // Optional id prop for internal linking
    title: string;
    text: string;
    imageUrl?: string; // Optional image
    imageAlt?: string;
    callToActionText?: string;
    callToActionHref?: string;
}

const CenteredImageSection: React.FC<CenteredImageSectionProps> = ({
    id,
    title,
    text,
    imageUrl,
    imageAlt,
    callToActionText,
    callToActionHref,
}) => {
    return (
        <div id={id} className="py-8">
            {/* Text content - Adjusted for consistent page width */}
            <h2 className={cn(
                'text-2xl font-semibold mb-4 text-[#ed253c]',
                'text-foreground',
            )}>
                {title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 mr-0.5">
                {text}
            </p>

            {imageUrl && (
                <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={imageUrl}
                        alt={imageAlt || title}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full"
                        sizes="(max-width: 768px) 100vw, 800px" // Adjusted sizes for better optimization
                        onError={(e) => {
                            // Fallback to a placeholder if image fails to load
                            e.currentTarget.src = 'https://placehold.co/800x400/cccccc/333333?text=Image+Missing';
                        }}
                    />
                </div>
            )}

            {callToActionText && callToActionHref && (
                <div className="mt-6 text-center text-lg font-semibold"> {/* Centered Call to Action */}
                    <a href={callToActionHref} className="border-[#ed253c] text-[#ed253c] hover:bg-[#ed253c] hover:text-white px-8 py-3 text-lg font-semibold cursor-default">
                        {callToActionText}
                    </a>
                </div>
            )}
        </div>
    );
};

export default CenteredImageSection;