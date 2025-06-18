// app/about-us/awards-certificates/page.tsx
'use client';
import React from 'react';
import Image from 'next/image';

const award1 = '/images/ISO-2019.png'
const award2 = '/images/ABC.png'
const award3 = '/images/red-crescent .png'
const award4 = '/images/Bavaria IBS - Certificate.png'

interface AwardCertificate {
    title: string;
    subtitle?: string;
    imageUrl: string;
    description: string;
}

const awardsAndCertificates: AwardCertificate[] = [
    {
        title: "ISO/IEC 27001:2019",
        subtitle:"certified by Certifica",
        imageUrl: award1,
        description: "Our ISO/IEC 27701:2019 certification reinforces IBS's commitment to protecting personal data and upholding global privacy standards. As an extension of our information security framework, this certification ensures that all personal information is managed with transparency, accountability, and strict compliance with privacy regulations — safeguarding the trust of both our clients and employees."
    },
    {
        title: "ISO/IEC 27001:2022",
        subtitle:"certified by ABC",
        imageUrl: award2,
        description: "IBS is proudly certified with ISO 27001:2022, a globally recognized standard for information security management systems. This certification highlights our rigorous approach to safeguarding data, managing risks, and ensuring the confidentiality, integrity, and availability of all information assets. It reflects our strong commitment to building trust through secure, compliant, and resilient operations."
    },
    {
        title: "Basic Life Support and First Aid by the Egyptian Red Crescent",
        imageUrl: award3,
        description: "The safety and well-being of our employees is at the heart of everything we do. Our First Aid certification ensures that trained personnel are always prepared to respond swiftly and effectively in case of emergencies. By maintaining a safe and secure work environment, we demonstrate our commitment to the health and protection of our team"
    },
    {
        title: "Bavaria for Fire Fighting Solutions ",
        imageUrl: award4,
        description: "At IBS, we take proactive measures to ensure a safe and prepared work environment. Through our partnership with Bavaria for Fire Fighting Solutions, we are equipped with trusted fire safety systems and trained personnel, ready to respond to emergencies. This reflects our ongoing dedication to protecting our people, workplaces, and operations from potential fire hazards."
    }
];

const AwardsCertificatesPage: React.FC = () => {
    return (
        <div className="container mx-auto  px-4 md:px-6 lg:px-8 py-8 bg-[#fafafa]">
            <h1 className="text-3xl font-bold text-[#000000] mb-8">Awards and Certificates</h1>
            <p className="text-[#828282] mb-12">
                Over the years, IBS has been recognized for its excellence in HR outsourcing and commitment to quality. 
                We are proud recipients of several industry awards and hold various certifications that attest to our high standards and reliable services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {awardsAndCertificates.map((award, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="relative h-145 w-full">
                            <Image
                                src={award.imageUrl}
                                alt={award.title}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="rounded-t-lg"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#ed253c] mb-2">{award.title}</h3>
                            <h2 className='text-xl font-light text-[#ed253c] mb-2'>{award.subtitle}</h2>
                            <p className="text-[#828282]">{award.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AwardsCertificatesPage;