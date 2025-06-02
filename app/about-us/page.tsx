'use client';

import React from 'react';
import AboutUsSection from '../components/AboutUsSection';


// Dummy image imports
const paperBoatsImage = '/images/web10.jpg';

const WhoIsIbsPage: React.FC = () => {
    return (
        <AboutUsSection
            id='who-is-ibs' // This ID is now more for internal reference than anchor linking 
            title='WHO IS IBS?'
            text='Founded in 1984, IBS began by connecting multinational organizations with Egypt through communication and recruitment services. As the market evolved, so did we — shifting our focus to outsourcing, where we quickly became pioneers in the Egyptian market with our transparent, cost-plus model. Today, with over 35 years of experience, IBS is a leading outsourcing provider serving 387+ local and international clients, supported by a team of 165+ professionals and a workforce of 53,000 across Egypt and beyond.'
            imageUrl={paperBoatsImage}
            imageAlt='About Us Illustration'
        />
    );
};

export default WhoIsIbsPage;