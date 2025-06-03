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
            text={
                <>
                    <p>
                        Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day.
                    </p>
                </>
            }
            imageUrl={ourPeopleImage}
            imageAlt='Our Team'
        />
    );
};

export default OurPeoplePage;