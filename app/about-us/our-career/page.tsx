// app/about-us/our-career/page.tsx
'use client';
import React from 'react';
import AboutUsSection from '@/app/components/AboutUsSection';

const careerImage = '/images/career.png'; 

const OurCareerPage: React.FC = () => {
    return (
        <AboutUsSection
            id="our-career"
            title="OUR CAREER"
            text="At IBS, we offer dynamic career opportunities for individuals passionate about HR and business solutions. Join a growing team where innovation is encouraged, and professional development is a priority. Explore our current openings and become part of our success story."
            imageUrl={careerImage}
            imageAlt="Career Opportunities"
            reverseLayout={true}
        />
    );
};
export default OurCareerPage;