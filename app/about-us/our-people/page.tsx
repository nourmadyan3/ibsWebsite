'use client';

import React, { useState, useEffect } from 'react';
//import AboutUsSection from '@/app/components/AboutUsSection';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';
//import { group } from 'console';

// Dummy image imports
const ourPeopleImage = '/images/recovered.png';

// Placeholder images for individual team members
/* const teamMember1 = '/images/mrs-nehad.jpg';
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
 */
// Define the structure for a team member
interface TeamMember {
    id: number;
    name: string;
    title?: string;
    imageUrl: string;
}

// New interface for a group of team members
interface TeamGroup {
    id: number;
    name: string;
    members: TeamMember[];
}

const OurPeoplePage: React.FC = () => {
    const [teamGroups, setTeamGroups] = useState<TeamGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeamGroups = async () => {
            try {
                const response = await fetch('/api/admin/team-groups');
                const data = await response.json();
                setTeamGroups(data);
            } catch (error) {
                console.error('Failed to fetch team groups', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeamGroups();
    }, []);

    return (
        <>
            {/* Introductory section for Our People */}{/* Introductory section for Our People - Manual construction */}
            <div id="our-people-intro" className="py-8 bg-[#fafafa] mx-auto px-4 md:px-6 lg:px-8">
                <h2 className={cn(
                    'text-2xl font-semibold mb-4 text-[#ed253c]' ,
                    'text-foreground',
                )}>
                    OUR PEOPLE
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-justify">
                    Our team is our greatest asset. Composed of dedicated professionals with diverse expertise, we are committed to delivering exceptional service and fostering a collaborative environment. We believe in continuous learning and growth, empowering our employees to achieve their full potential.
                </p>

                {/* Team Image - Centered and below the text */}
                <div className="relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] lg:h-[250px] rounded-lg">
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
            
            {loading ? (
                <div className="text-center py-8">Loading...</div>
            ) : (
                teamGroups.map((group) => (
                    <div key={`group-${group.id}`} className='py-8 bg-[#fafafa]'>
                        <h2 className='text-2xl font-semibold mb-8 text-center text-[#ed253c]'>{group.name}</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {group.members.map((member) => (
                                <div key={`group-member-${group.id}-${member.id}`} className='flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md'>
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
                ))
            )}
            <ScrollToTopButton />
        </>
    );
};

export default OurPeoplePage;