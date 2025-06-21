'use client'

import React from 'react';
import Image from 'next/image';
//import { Button } from '../components/ui/button'; // Assuming this path is correct for Button
//import { cn } from '@/lib/utils';

// Client Logos
const clienLogos = [
    '/images/logo1.png',
    '/images/logo2.png',
    '/images/logo3.png',
    '/images/logo4.png',
    '/images/logo5.png',
    '/images/logo6.png',
    '/images/logo7.png',
    '/images/logo8.png',
    '/images/logo9.png',
    '/images/logo10.png',
    '/images/logo11.png',
    '/images/logo12.png',
    '/images/logo13.png',
    '/images/logo14.png',
    '/images/logo15.png',
    '/images/logo16.png',
    '/images/logo17.png',
    '/images/logo18.png',
    '/images/logo19.jpg',
    '/images/logo20.jpg',
    '/images/logo21.jpg',
    '/images/metlife_logo.jpg',
    '/images/logo23.png',
    '/images/logo24.jpg',
];

// OurClients Component - Displays all logos and handles view toggle
const OurClientsComponent: React.FC = () => {
    // We remove the 'seeAll' state and setSeeAll prop here because this page will always show all clients
    // The previous 'seeAll' functionality is now handled by navigating to this dedicated page.

    return (
        <div className='py-8'>
            <h2 className='text-2xl font-semibold text-center text-[#ed253c]'>Our Clients</h2>
            
            {/* Display all logos in a responsive grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-items-center'>
                {clienLogos.map((logo, index) => (
                    <div key={`client-logo-${index}`} className='relative w-[120px] h-[90px]  flex items-center justify-center'>
                        <Image
                            src={logo}
                            alt={`Client Logo ${index + 1}`}
                            fill={true}
                            style={{ objectFit: 'contain' }}
                            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/120x90/cccccc/333333?text=Logo'; }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurClientsComponent;
