// app/about-us/our-clients/page.tsx
'use client';
import React from 'react';
import AboutUsSection from '@/app/components/AboutUsSection';

const OurClientsPage: React.FC = () => {
    return (
        <AboutUsSection
            id="our-clients"
            title="OUR CLIENTS"
            text="We proudly partner with a diverse portfolio of leading local and international companies. Our long-standing relationships are a testament to our commitment to delivering exceptional value and fostering mutual success. For a comprehensive list of our clients, please visit our Clients page."
            callToActionText="View All Clients"
            callToActionHref="/clients"
        />
    );
};
export default OurClientsPage;