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
            { name: 'Nourhan Atef', imageUrl: teamMember10 },
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