'use client';

import React from 'react';
//import AboutUsSection from '@/app/components/AboutUsSection';
import Image from 'next/image';
import { cn } from '@/lib/utils';
//import { group } from 'console';

// Dummy image imports
const ourPeopleImage = '/images/recovered.png';

// Placeholder images for individual team members
const teamMember1 = '/images/mrs-nehad.jpg';
const teamMember2 = '/images/Rady1.jpg';
const teamMember3 = '/images/Eng.-Abdel-Aaty-Kabeel.jpg';
const teamMember4 = '/images/reem.jpg';
const teamMember5 = '/images/maha.jpg';
const teamMember6 = '/images/hisham-rashad.jpg';
const teamMember7 = '/images/amira-makram.jpg';
const teamMember8 = '/images/ehab-shawky.jpg';
const teamMember9 = '/images/mariam-osman.jpg';
const teamMember10 = '/images/nourhan-atef.jpg';
const teamMember11 = '/images/Moustafa-El-Helw1.jpg';
const teamMember12 = '/images/Amr-Said1.jpg';
const teamMember13 = '/images/Nourhan-Moustafa.jpg';
const teamMember14 = '/images/amr-fahmy.jpg';
const teamMember15 = '/images/Mohamed-Adel1.jpg';
const teamMember16 = '/images/hanan-helmy.jpg';
const teamMember17 = '/images/haidy-monir.jpg';
const teamMember18 = '/images/Maged-Arahman1.jpg';
const teamMember19 = '/images/hoda-mohsen.jpg';
const teamMember20 = '/images/ehab-abdallah.jpg';
const teamMember21 = '/images/Nermine.jpg';
const teamMember22 = '/images/Dina-Tarek.jpg';
const teamMember23 = '/images/Hala-Eissa.jpg';
const teamMember24 = '/images/Emad-Kabeel-425x425.jpg';
const teamMember25 = '/images/Remon-Kamal-425x425.jpg';
const teamMember26 = '/images/Bassem-Mohamed-425x425-1.jpg';
const teamMember27 = '/images/Nouran-Mousa.jpg';
const teamMember28 = '/images/Yehia-Sayed-1.jpg';
const teamMember29 = '/images/Ahmed-Fouad-1.jpg';
const teamMember30 = '/images/Nourhan-Osama-425x425-1.jpg';
const teamMember31 = '/images/Nourhan-Ayman-425x425.jpg';
const teamMember32 = '/images/Malak-Ghoneim-425x425-1.jpg';
const teamMember33 = '/images/nahla-mahmoud.jpg';
const teamMember34 = '/images/Mohamed-Saleh1.jpg';
const teamMember35 = '/images/Amr-Abo-El-Enein1.jpg';
const teamMember36 = '/images/Marian-Kadry.jpg';
const teamMember37 = '/images/Ragia-Thabet.jpg';
const teamMember38 = '/images/Bassant-Mohamed.jpg';
const teamMember39 = '/images/Seif-El-Leithy.jpg';
const teamMember40 = '/images/Mai-Mohsen-1.jpg';
const teamMember41 = '/images/Aida-Ashraf.jpg';
const teamMember42 = '/images/Omnia-Mabrouk-425x425.jpg';
const teamMember43 = '/images/Omar-Ashmawy.jpg';
const teamMember44 = '/images/Lama-Mohamed.jpg';
const teamMember45 = '/images/Amira-El-Kady.jpg';
const teamMember46 = '/images/Mohamed-Nabih-1.jpg';
const teamMember47 = '/images/Shaymaa-Hassan.jpg';
const teamMember48 = '/images/Ahmed-Karam.jpg';
const teamMember49 = '/images/Ahmed-Gabr.jpg';
const teamMember50 = '/images/Mahmoud-Fekry.jpg';
const teamMember51 = '/images/Ahmed-El-Badawy.jpg';
const teamMember52 = '/images/Hassanein1.jpg';
const teamMember53 = '/images/Amr-El-Kady.jpg';
const teamMember54 = '/images/Mohamed-Abdellatif.jpg';
const teamMember55 = '/images/Amer-Ashour.jpg';
const teamMember56 = '/images/Mohamed-Hafez.jpg';
const teamMember57 = '/images/Islam-Shaaban.jpg';
const teamMember58 = '/images/Radwa-Ibrahim-1.jpg';
const teamMember59 = '/images/Adel-Rashidy.jpg';
const teamMember60 = '/images/Michael-Abdalla1.jpg';
const teamMember61 = '/images/Mohamed-Mahmoud1.jpg';
const teamMember62 = '/images/Ahmed-Galal3.jpg';
const teamMember63 = '/images/Mohamed-Hashim-425x425.jpg';
const teamMember64 = '/images/Mohamed-Kamal-425x425.jpg';
const teamMember65 = '/images/Alaa1.jpg';
const teamMember66 = '/images/Nada-Moustafa.jpg';
const teamMember67 = '/images/Basma-Eid-425x425-copy.jpg';
const teamMember68 = '/images/Mariam-Lotfy-425x425.jpg';
const teamMember69 = '/images/Islam-Kamel.jpg';
const teamMember70 = '/images/Ehab-Wagdy.jpg';
const teamMember71 = '/images/Abdel-Rahman.jpg';
const teamMember72 = '/images/Peter-Adel-425x425.jpg';
const teamMember73 = '/images/Tarek.jpg';
const teamMember74 = '/images/Salah-Saeed-425x425-1.jpg';
const teamMember75 = '/images/Hany-Hammad.jpg';
const teamMember76 = '/images/Ahmed-Raafat-1.jpg';
const teamMember77 = '/images/Tamer-Abo-Zeid.jpg';
const teamMember78 = '/images/Aya-Emad-02-425x425.jpg';
const teamMember79 = '/images/Mohamed-El-Deeb.jpg';
const teamMember80 = '/images/Heba-Waly.jpg';
const teamMember81 = '/images/Dina-Abdalla.jpg';
const teamMember82 = '/images/Aya-Gamal-02-425x425-1.jpg';
const teamMember83 = '/images/Amira-Abdel-Moneim-02.jpg';
const teamMember84 = '/images/Dalia-Fakhr-El-Din-02-425x425.jpg';
const teamMember85 = '/images/Wafaa-Hanafy-425x425.jpg';
const teamMember86 = '/images/Shaimaa-Sobhy-425x425-1.jpg';
const teamMember87 = '/images/Aya-Shaher.jpg';
const teamMember88 = '/images/Ashrakat-Ibrahim-1.jpg';
const teamMember89 = '/images/Mariam-Ismail.jpg';
const teamMember90 = '/images/Marwa-Habib-425x425.jpg';
const teamMember91 = '/images/Mohamed-Medhat1.jpg';
const teamMember92 = '/images/Moustafa-Hassan1.jpg';
const teamMember93 = '/images/Mohamed-Gamal2.jpg';
const teamMember94 = '/images/Maged-Samir1.jpg';
const teamMember95 = '/images/Hisham-Nahas.jpg';
const teamMember96 = '/images/Christopher-Eunie.jpg';
const teamMember97 = '/images/Mahmoud-Hammad1.jpg';
const teamMember98 = '/images/Waleed-El-Sayed.jpg';
const teamMember99 = '/images/Abdalla-Gomaa.jpg';
const teamMember100 = '/images/Marwa-Ahmed.jpg';
const teamMember101 = '/images/Abdel-Salam-Saady.jpg';
const teamMember102 = '/images/Reda-Hafez.jpg';
const teamMember103 = '/images/Hamed-Mokhtar-425x425-1.jpg';
const teamMember104 = '/images/Salem-Saady-425x425.jpg';
const teamMember105 = '/images/Abdel-Halim-Khedry.jpg';

// Define the structure for a team member
interface TeamMember {
    
    name: string;
    title?: string;  // Title is optional as per new request (name under image)
    imageUrl: string;
}

// New interface for a group of team members
interface TeamGroup {
    groupTitle: string;
    members: TeamMember[];
}

// Dummy data for the initial "Meet Our Team" section (if still desired)
/* const initialTeamMembers: TeamMember[] = [
    
    { name: 'Nihad Katamish', title: 'CEO', imageUrl: teamMember1 },
    { name: 'Eng. Abdelaty Kabeel', imageUrl: teamMember3 },
    { name: 'Mohamed Rady', imageUrl: teamMember2 },
    { name: 'Reem Reda', imageUrl: teamMember4 },
    { name: 'Maha Katamish', imageUrl: teamMember5 },
]; */

// Dummy data for grouped team members
const groupTeamMembers: TeamGroup[] = [
    {
        groupTitle: 'Management',
        members: [
            { name: 'Nihad Katamish', imageUrl: teamMember1 },
            { name: 'Eng. Abdelaty Kabeel', imageUrl: teamMember3 },
            { name: 'Mohamed Rady', imageUrl: teamMember2 },
            { name: 'Reem Reda', imageUrl: teamMember4 },
            { name: 'Maha Katamish', imageUrl: teamMember5 },
        ],
    },
    {
        groupTitle: 'Payroll',
        members: [
            { name: 'Hisham Rashad', imageUrl: teamMember6 },
            { name: 'Amira Makram', imageUrl: teamMember7 },
            { name: 'Ehab Shawky', imageUrl: teamMember8 },
            { name: 'Mariam Osman', imageUrl: teamMember9 },
            { name: 'hoda mohsen', imageUrl: teamMember19 },
            { name: 'ehab abdallah', imageUrl: teamMember20 },
            { name: 'Nermine Hamdy', imageUrl: teamMember21 },
            { name: 'Nourhan Atef', imageUrl: teamMember10 },
            { name: 'Dina Tarek', imageUrl: teamMember22 },
            { name: 'Hala Eissa', imageUrl: teamMember23 },
            { name: 'Emad Kabeel', imageUrl: teamMember24 },
            { name: 'Remon Kamal', imageUrl: teamMember25 },
            { name: 'Bassem Mohamed', imageUrl: teamMember26 },
            { name: 'Nouran Mousa', imageUrl: teamMember27 },
            { name: 'Yehia Sayed', imageUrl: teamMember28 },
            { name: 'Ahmed Fouad', imageUrl: teamMember29 },
            { name: 'Nourhan Osama', imageUrl: teamMember30 },
            { name: 'Nourhan Ayman', imageUrl: teamMember31 },
        ],
    },
    {
        groupTitle: 'Payable',
        members: [
            { name: 'Moustafa El Helw', imageUrl: teamMember11 },
            { name: 'Amr Said', imageUrl: teamMember12 },
            { name: 'Nourhan Moustafa', imageUrl: teamMember13 },
        ],
    },
    {
        groupTitle: 'Personnel',
        members: [
            { name: 'Amr Fahmy', imageUrl: teamMember14 },
            { name: 'Mohamed Adel', imageUrl: teamMember15 },
            { name: 'Hanan Helmy', imageUrl: teamMember16 },
            { name: 'Haidy Mounir', imageUrl: teamMember17 },
            { name: 'Maged Abdelrahman', imageUrl: teamMember18 },
            { name: 'Malak Ghoneim', imageUrl: teamMember32 },
            { name: 'nahla mahmoud', imageUrl: teamMember33 },
            { name: 'Mohamed Saleh', imageUrl: teamMember34 },
            { name: 'Amr Ibrahim', imageUrl: teamMember35 },
            { name: 'Marian Kadry', imageUrl: teamMember36 },
            { name: 'Ragia-Thabet', imageUrl: teamMember37 },
            { name: 'Bassant-Mohamed', imageUrl: teamMember38 },
            { name: 'Seif ElLeithy', imageUrl: teamMember39 },
            { name: 'Mai Mohsen', imageUrl: teamMember40 },
            { name: 'Aida Ashraf', imageUrl: teamMember41 },
            { name: 'Omnia Mabrouk', imageUrl: teamMember42 },
            { name: 'Omar ElAshmawy', imageUrl: teamMember43 },
            { name: 'Lama Mohamed', imageUrl: teamMember44 },
            { name: 'Amira ElKady', imageUrl: teamMember45 },
            { name: 'Mohamed Nabih', imageUrl: teamMember46 },
            { name: 'Shaymaa Hassan', imageUrl: teamMember47 },
            { name: 'Ahmed Karam', imageUrl: teamMember48 },
            { name: 'Ahmed Gabr', imageUrl: teamMember49 },
        ],
    },
    {
        groupTitle: 'Health Insurance & Benefits',
        members: [
            { name: 'Mahmoud Fekry', imageUrl: teamMember50 },
            { name: 'Ahmed ElBadawy', imageUrl: teamMember51 },
            { name: 'Hassanein Morsy', imageUrl: teamMember52},
            { name: 'Amr ElKady', imageUrl: teamMember53},
            { name: 'Mohamed Abdellatif', imageUrl: teamMember54 },
            { name: 'Amer Ashour', imageUrl: teamMember55 },
            { name: 'Mohamed Hafez', imageUrl: teamMember56 },
            { name: 'Islam Shaaban', imageUrl: teamMember57 },
            { name: 'Radwa Ibrahim', imageUrl: teamMember58 },
        ],
    },
    {
        groupTitle: 'Operations',
        members: [
            { name: 'Adel Rashidy', imageUrl: teamMember59 },
            { name: 'Michael Abdalla', imageUrl: teamMember60 },
            { name: 'Mohamed Mahmoud', imageUrl: teamMember61 },
            { name: 'Ahmed Galal', imageUrl: teamMember62 },
            { name: 'Mohamed Hashim', imageUrl: teamMember63 },
            { name: 'Mohamed Kamal', imageUrl: teamMember64 },
        ],
    },
    {
        groupTitle: 'Work Permits',
        members: [
            { name: 'Alaa ElAzab', imageUrl: teamMember65 },
        ],
    },
    {
        groupTitle: 'Recruitment',
        members: [
            { name: 'Nada Moustafa', imageUrl: teamMember66 },
        ],
    },
    {
        groupTitle: 'Vacation',
        members: [
            { name: 'Basma Eid', imageUrl: teamMember67 },
            { name: 'Mariam Lotfy', imageUrl: teamMember68 },
        ],
    },
    {
        groupTitle: 'IT',
        members: [
            { name: 'Islam Kamel', imageUrl: teamMember69 },
            { name: 'Ehab Wagdy', imageUrl: teamMember70 },
            { name: 'Abdel Rahman Taha', imageUrl: teamMember71 },
            { name: 'Peter Adel', imageUrl: teamMember72 },
            { name: 'Tarek Kamal', imageUrl: teamMember73 },
            { name: 'Salah Saeed', imageUrl: teamMember74 },
        ],
    },
    {
        groupTitle: 'Legal',
        members: [
            { name: 'Hany-Hammad', imageUrl: teamMember75 },
            { name: 'Ahmed Raafat', imageUrl: teamMember76 },
            { name: 'Tamer Abo Zeid', imageUrl: teamMember77 },
        ],
    },
    {
        groupTitle: 'Audit',
        members: [
        ],
    },
    {
        groupTitle: 'Bank Accounts',
        members: [
            { name: 'Aya Emad', imageUrl: teamMember78 },
        ],
    },
    {
        groupTitle: 'Front Desk',
        members: [
            { name: 'Mohamed ElDeeb', imageUrl: teamMember79 },
            { name: 'Heba Waly', imageUrl: teamMember80 },
        ],
    },
    {
        groupTitle: 'Customer Service',
        members: [
            { name: 'Dina Abdalla', imageUrl: teamMember81 },
            { name: 'Aya Gamal', imageUrl: teamMember82 },
            { name: 'Amira Abdel Moneim', imageUrl: teamMember83 },
            { name: 'Dalia Fakhr ElDin', imageUrl: teamMember84 },
            { name: 'Wafaa Hanafy', imageUrl: teamMember85 },
            { name: 'Shaimaa Sobhy', imageUrl: teamMember86 },
            { name: 'Aya Shaher', imageUrl: teamMember87 },
            { name: 'Ashrakat Ibrahim', imageUrl: teamMember88 },
            { name: 'Mariam Ismail', imageUrl: teamMember89 },
            { name: 'Marwa Habib', imageUrl: teamMember90 },
            { name: 'Mohamed Medhat', imageUrl: teamMember91 },
            { name: 'Moustafa Hassan', imageUrl: teamMember92 },
            { name: 'Mohamed Gamal', imageUrl: teamMember93 },
            { name: 'Maged Samir', imageUrl: teamMember94 },
        ],
    },
    {
        groupTitle: 'Facilities',
        members: [
            { name: 'Hisham Nahas', imageUrl: teamMember95 },
            { name: 'Christopher Eunie', imageUrl: teamMember96 },
            { name: 'Mahmoud Hammad', imageUrl: teamMember97 },
            { name: 'Waleed ElSayed', imageUrl: teamMember98 },
            { name: 'Abdalla Gomaa', imageUrl: teamMember99 },
            { name: 'Marwa Ahmed', imageUrl: teamMember100 },
            { name: 'Abdel Salam Saady', imageUrl: teamMember101 },
            { name: 'Reda Hafez', imageUrl: teamMember102 },
            { name: 'Hamed Mokhtar', imageUrl: teamMember103 },
            { name: 'Salem Saady', imageUrl: teamMember104 },
            { name: 'Abdel Halim Khedry', imageUrl: teamMember105 },
        ],
    },
];



const OurPeoplePage: React.FC = () => {
    return (
        <>
            {/* Introductory section for Our People */}{/* Introductory section for Our People - Manual construction */}
            <div id="our-people-intro" className="py-8">
                <h2 className={cn(
                    'text-2xl font-semibold mb-4 text-[#ed253c]',
                    'text-foreground',
                )}>
                    OUR PEOPLE
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed ">
                    Our team is our greatest asset. Composed of dedicated professionals with diverse expertise, we are committed to delivering exceptional service and fostering a collaborative environment. We believe in continuous learning and growth, empowering our employees to achieve their full potential.
                </p>

                {/* Team Image - Centered and below the text */}
                <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden ">
                    <Image
                        src={ourPeopleImage}
                        alt="Our Team"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        className="w-full h-full"
                        sizes="100vw" // Take full width up to parent max-width
                    />
                </div>
            </div>
            <h2 className="font-bold text-4xl  text-left  text-[#ed253c]"> Our Team</h2>
            {/* Optional: Section for initial individual team members (if you want to keep this) */}
            

            {/* Section for grouped team members */}
            {groupTeamMembers.map((group, groupIndex) => (
                <div key={`group-${groupIndex}`} className='py-8'>
                    <h2 className='text-2xl font-semibold mb-8 text-center text-[#ed253c]'>{group.groupTitle}</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                        {group.members.map((member, memberIndex) => (
                            <div key={`group-member-${groupIndex}-${memberIndex}`} className='flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md'>
                                <div className='relative w-48 h-48 rounded-full overflow-hidden mb-4 border-1 border-[#fafafa]'>
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        fill={true}
                                        style={{ objectFit: 'cover' }}
                                        className='w-full h-full'
                                        sizes='(max-width: 768px) 128px, 128px'
                                        onError={(e) => {
                                            e.currentTarget.src = 'https://placehold.co/128x128/cccccc/333333?text=No+Image';
                                        }}
                                    />
                                </div>
                                {/* Display title only if it exists, otherwise just name */}
                                {member.title && <h3 className='text-lg font-semibold text-foreground mb-1'>{member.title}</h3>}
                                <p className='text-gray-700 dark:text-gray-300'>{member.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default OurPeoplePage;