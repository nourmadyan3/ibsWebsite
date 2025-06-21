'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';

// Define interface for a client entry
interface ClientEntry {
    id: number;
    name: string;
}

// Define interface for an industry group
interface IndustryGroup {
    id: number;
    name: string;
    clients: ClientEntry[];
}

const OurClientsPage: React.FC = () => {
    const [industryGroups, setIndustryGroups] = useState<IndustryGroup[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchIndustryGroups = async () => {
            try {
                const response = await fetch('/api/admin/industry-groups');
                const data = await response.json();
                setIndustryGroups(data);
            } catch (error)
            {
                console.error('Failed to fetch industry groups:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchIndustryGroups();
    }, []);

    // Split into left and right columns
    const leftColumnIndustries = industryGroups.slice(0, Math.ceil(industryGroups.length / 2));
    const rightColumnIndustries = industryGroups.slice(Math.ceil(industryGroups.length / 2));
    
    return (
        <div className='py-8 container mx-auto px-4 md:px-6 lg:px-8 bg-[#fafafa]'>
            <h1 className='text-3xl font-bold mb-8 text-left text-[#000000]'>Our Valued Partners</h1>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-15'>
                Meet the dedicated professionals powering IBS—our team`apos;s` expertise and passion bring our core values to life every day. Full and Updated Client List.
            </p>

            {loading ? (
                <p className='text-center text-gray-600 text-xl mt-12'>Loading clients...</p>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8'>
                    {/* Left Column */}
                    <div>
                        {leftColumnIndustries.map((group) => (
                            <div key={group.id} className='mb-8'>
                                <div className="flex flex-col items-center mb-2">
                                    <div className="w-full h-0.5 bg-[#ed253c] mb-1"></div>
                                    <h2 className="text-lg font-bold text-[#ed253c] text-center">{group.name}</h2>
                                    <div className="w-full h-0.5 bg-[#ed253c] mt-1"></div>
                                </div>
                                <ul className='bg-white rounded-b-md shadow-md overflow-hidden'>
                                    {group.clients.map((client, clientIndex) => (
                                        <li
                                            key={client.id}
                                            className={cn(
                                                "py-2 px-4 text-gray-800",
                                                { "border-b border-gray-200": clientIndex < group.clients.length - 1 }
                                            )}
                                        >
                                            {client.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div>
                        {rightColumnIndustries.map((group) => (
                            <div key={group.id} className='mb-8'>
                                <div className="flex flex-col items-center mb-2">
                                    <div className="w-full h-0.5 bg-[#ed253c] mb-1"></div>
                                    <h2 className="text-lg font-bold text-[#ed253c] text-center">{group.name}</h2>
                                    <div className="w-full h-0.5 bg-[#ed253c] mt-1"></div>
                                </div>
                                <ul className='bg-white rounded-b-md shadow-md overflow-hidden'>
                                    {group.clients.map((client, clientIndex) => (
                                        <li
                                            key={client.id}
                                            className={cn(
                                                "py-2 px-4 text-gray-800",
                                                { "border-b border-gray-200": clientIndex < group.clients.length - 1 }
                                            )}
                                        >
                                            {client.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <ScrollToTopButton />
        </div>
    );
};
export default OurClientsPage;
