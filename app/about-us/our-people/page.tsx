'use client';

import React from 'react';
import AboutUsSection from '@/app/components/AboutUsSection';


// Dummy image imports
const ourPeopleImage = '/images/recovered.png';

const OurPeoplePage: React.FC = () => {
    return (
        <AboutUsSection
            id='our-people' // This ID is now more for internal reference than anchor linking 
            title='OUR PEOPLE'
            text='Our team is our greatest asset. Composed of dedicated professionals with diverse expertise, we are committed to delivering exceptional service and fostering a collaborative environment. We believe in continuous learning and growth, empowering our employees to achieve their full potential.'
            imageUrl={ourPeopleImage}
            imageAlt='Our Team'
        />
    );
};

export default OurPeoplePage;