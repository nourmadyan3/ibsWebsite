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
    const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);

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

    const displayedGroups = selectedGroupId
        ? industryGroups.filter((group) => group.id === selectedGroupId)
        : industryGroups;

    // --- Configuration for column split ---
    // To change the number of groups in the left column, modify the number below.
    // If you set it to null, it will split the groups as evenly as possible.
    const specifiedLeftCount: number | null = null;
    // --- End Configuration ---

    const leftColumnCount = specifiedLeftCount ?? Math.ceil(displayedGroups.length /3);

    // Split into left and right columns
    const leftColumnIndustries = displayedGroups.slice(0, leftColumnCount);
    const rightColumnIndustries = displayedGroups.slice(leftColumnCount);
    
    return (
        <div className='py-8 container mx-auto px-4 md:px-6 lg:px-8 bg-[#fafafa]'>
            <h1 className='text-3xl font-bold mb-8 text-left text-[#000000]'>Our Valued Partners</h1>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-8'>
                Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day. Full and Updated Client List.
            </p>

            <div className="flex flex-wrap justify-center gap-1.5 mb-12">
                <button
                    onClick={() => setSelectedGroupId(null)}
                    className={cn(
                        "px-4 py-2 rounded-full font-semibold transition",
                        selectedGroupId === null
                            ? "bg-[#ed253c] text-white"
                            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    )}
                >
                    All
                </button>
                {industryGroups.map((group) => (
                    <button
                        key={group.id}
                        onClick={() => setSelectedGroupId(group.id)}
                        className={cn(
                            "px-4 py-2 rounded-full font-semibold transition",
                            selectedGroupId === group.id
                                ? "bg-[#ed253c] text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                        )}
                    >
                        {group.name}
                    </button>
                ))}
            </div>

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
