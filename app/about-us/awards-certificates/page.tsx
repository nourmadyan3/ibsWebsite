// app/about-us/awards-certificates/page.tsx
'use client';
import React from 'react';
import AboutUsSection from '@/app/components/AboutUsSection';

const awardsCertificatesImage = '/images/award.png';

const AwardsCertificatesPage: React.FC = () => {
    return (
        <AboutUsSection
            id="awards-certificates"
            title="AWARDS AND CERTIFICATES"
            text="Over the years, IBS has been recognized for its excellence in HR outsourcing and commitment to quality. We are proud recipients of several industry awards and hold various certifications that attest to our high standards and reliable services."
            imageUrl={awardsCertificatesImage}
            imageAlt="Awards and Certificates"
        />
    );
};
export default AwardsCertificatesPage;