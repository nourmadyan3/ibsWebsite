'use client';
import React from 'react';
import CenteredImageSection from '@/app/components/CenteredImageSection';

const OurClientsPage: React.FC = () => {
    return (
        <CenteredImageSection
            id="our-clients"
            title="OUR CLIENTS"
            text="Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day.Full and Updated Client List."
            callToActionText="VIEW ALL CLIENTS"
            callToActionHref="/clients"
        />
    );
};
export default OurClientsPage;
