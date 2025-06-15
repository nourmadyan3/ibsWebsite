'use client';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';


//import CenteredImageSection from '@/app/components/CenteredImageSection';

// Define interface for a client entry (just name for this list)
interface ClientEntry {
    name: string;
}

// Define interface for an industry group
interface IndustryGroup {
    title: string;
    clients: ClientEntry[];
}

const clientIndusrtries: IndustryGroup[] = [
    {
        title: 'Banking',
        clients: [
            {name: 'Abu Dhabi Commercial Bank'},
            {name: 'Abu Dhabi Islamic Bank (Adib)'},
            {name: 'Agricultural Bank Of Egypt (S.A.E)'},
            {name: 'Ahli United Bank'},
            {name: 'Al Ahli Bank Of Kuwait – Egypt'},
            {name: 'Arab African International Bank'},
            {name: 'Arab Banking Corporation (Abc)'},
            {name: 'Arab Investment Bank'},
            {name: 'Attijariwafa Bank'},
            {name: 'Banque Du Caire'},
            {name: 'Commercial International Bank'},
            {name: 'Credit Agircole Egypt'},
            {name: 'Ebe Bank'},
            {name: 'Emirates Nbd S.A.E'},
            {name: 'Housing & Development Bank'},
            {name: 'Hsbc Electronic Data Service Delivery'},
            {name: 'National Bank Of Egypt'},
            {name: 'National Bank Of Kuwait'},
            {name: 'Qnb Al Ahli'},
            {name: 'Saib Bank'},
        ],
    },

    {
        title: 'Oil & Gas ',
        clients: [
            {name: 'Arcius Energy Egypt Limited'},
            {name: 'Baker Hughes'},
            {name: 'British Petroleum (BP Egypt)'},
            {name: 'Chevron Egypt SAE'},
            {name: 'Dana Gas'},
            {name: 'Arab African International Bank'},
            {name: 'DEA Suez Branch'},
            {name: 'East Gas Company'},
            {name: 'Energean Egypt Limited'},
            {name: 'Enap Sipetrol'},
            {name: 'Exxon Mobil Egypt'},
            {name: 'Expro Group'},
            {name: 'Frank&apos;s International Middle East'},
            {name: 'GE Gas Power Systems'},
            {name: 'Housing & Development Bank'},
            {name: 'GE Oil & Gas Energy Services Egypt'},
            {name: 'National Bank Of Egypt'},
            {name: 'Halliburton Overseas'},
            {name: 'IPR Energy Suez Inc.'},
            {name: 'Lufkin Middle East'},
            {name: 'Master Gas'},
            {name: 'Nalco Energy Services Marketing Ltd'},
            {name: 'National Oilwell Varco LLC'},
            {name: 'Novomet NAP Petroleum Services'},
            {name: 'Nuovo Pignone International S.R.L.'},
            {name: 'Numerical Algorithms Group Ltd'},
            {name: 'Pan Marine International Inc.'},
            {name: 'Petromin Oils'},
            {name: 'Petrounion for Petroleum Products'},
            {name: 'Pharaonic Petroleum Company'},
            {name: 'Pan Marine International Inc.'},
            {name: 'Production Services Network (UK) Limited (PSN)'},
            {name: 'Qatar Gas Group'},
            {name: 'Rosetta Fro Energy Solutions'},
            {name: 'Schlumberger Logelco Inc'},
            {name: 'Scimitar Production Egypt Ltd'},
            {name: 'Shell Lubricants Egypt'},
            {name: 'Subsea'},
            {name: 'TAQA Gas Sector'},
            {name: 'TAQA Oil Marketing'},
            {name: 'Subsea'},
            {name: 'Technip Egypt'},
            {name: 'Total Marketing Egypt'},
            {name: 'TransGlobe Energy Egypt'},
            {name: 'Tuboscope Vetco International'},
            {name: 'United Gas Of Derivative Co. (UGDC)'},
            {name: 'Valve And Tools'},
            {name: 'Vegas Oil & Gas'},
            {name: 'Weatherford Oil Tool Services'},
            {name: 'Vegas Oil & Gas'},
            {name: 'WSP PB'},
        ],
    },

    {
        title: 'Construction',
        clients: [
            {name: 'AECOM Middle East'},
            {name: 'Amer Group'},
            {name: 'E-Construct FZ'},
            {name: 'ECPC - Consolis'},
            {name: 'Elamer for Construction'},
            {name: 'Misr Development Company'},
            {name: 'DEA Suez Branch'},
            {name: 'Porto Group'},
            {name: 'Saudi Readymix Concrete'},
            {name: 'Enap Sipetrol'},
            {name: 'TAQA for Engineering Construction'},
            {name: 'The Arab Contractor Co. for Operation & Maintenance'},
            {name: 'شركة تيتان للخرسانة والركام مصر'},
        ],
    },

    {
        title: 'Food & Beverage Sector:Afia Internation',
        clients: [
            
        ],
    },

    {
        title: 'Pharmaceutical Sector',
        clients: [
            
        ],
    },

    {
        title: 'IT Solutions ',
        clients: [
            
        ],
    },

    {
        title: 'Car Manufacturing ',
        clients: [
            
        ],
    },

    {
        title: 'Industrial & Manufacturing ',
        clients: [
            
        ],
    },

    {
        title: 'Education',
        clients: [
            
        ],
    },

    {
        title: 'Airlines and Travel',
        clients: [
            
        ],
    },

    {
        title: 'Advertising and Media',
        clients: [
            
        ],
    },

    {
        title: 'Telecommunication',
        clients: [
            
        ],
    },

    {
        title: 'Trading & Transportation',
        clients: [
            
        ],
    },

    {
        title: 'Insurance',
        clients: [
            
        ],
    },

    {
        title: 'Medical Supply and Solutions',
        clients: [
            
        ],
    },

    {
        title: 'Consumer Goods',
        clients: [
            
        ],
    },

    {
        title: 'Fashion and Creativity',
        clients: [
            
        ],
    },

    {
        title: 'Courier',
        clients: [
            
        ],
    },

    {
        title: 'Financial Solutions',
        clients: [
            
        ],
    },

    {
        title: 'E-commerce',
        clients: [
            
        ],
    },

    {
        title: 'Agricultural',
        clients: [
            
        ],
    },

    {
        title: 'Community',
        clients: [
            
        ],
    },

    {
        title: 'General Services',
        clients: [
            
        ],
    },

]
const OurClientsPage: React.FC = () => {
    // State to hold the currently selected industry filter
    const [selectedIndustry, setSelectedIndustry] = useState('All Industries');

    // Console log to check if the state is updating
    useEffect(() => {
        console.log("Selected Industry:", selectedIndustry);
    }, [selectedIndustry]); 

    // Filtered industries based on the selectedIndustry state
    const filterdIndustries = selectedIndustry === 'All Industries'
        ? clientIndusrtries
        : clientIndusrtries.filter(group => group.title === selectedIndustry);
    
    // Console log to check what data is being filtered
    useEffect(() => {
        console.log("Filtered Industries:", filterdIndustries.map(g => g.title));
    }, [filterdIndustries]);

    return (
    /*  <CenteredImageSection
            id="our-clients"
            title="OUR CLIENTS"
            text="Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day.Full and Updated Client List."
            //callToActionText="VIEW ALL CLIENTS"
            //callToActionHref="/clients"
        /> */

        <div className='py-8 container mx-auto px-4 md:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold mb-8 text-center text-[#ed253c]'>Our Valued Partners</h1>
            <p className='text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto'>
            Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day.Full and Updated Client List.
            </p>

            {/* Industry Filter Dropdown */}
            <div className='flex flex-col md:flex-row gap-8 items-start'>
                <div className='w-full md:w-1/4 lg:w-1/5 mb-8 md:mb-0'>
                    
                    <select
                    value={selectedIndustry}
                    onChange={(e) => setSelectedIndustry(e.target.value)}
                    className='p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ed253c] focus:border-transparent text-gray-700 bg-white'
                >
                    <option value='All Industries'>Show All Industries</option>
                    {clientIndusrtries.map((group) => (
                        <option key={group.title} value={group.title}>
                            {group.title}
                        </option>
                    ))}
                </select>
                </div>
                
            </div>

            {/* Grid container for the industry columns */}
            {filterdIndustries.length > 0 ? (
                <div className='w-full md:w-3/4 lg:w-4/5 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12'>
                {filterdIndustries.map((group) => (
                    <div key={group.title}>
                        {/* Industry Title */}
                        <h2 className='bg-[#ed253c] text-white text-lg font-semibold py-2 px-4 rounded-t-md mb-2'>
                            {group.title}
                        </h2>

                        {/* List of clients for this industry */}
                        <ul className='bg-white rounded-b-md shadow-md overflow-hidden'>
                            {group.clients.map((client, clientIndex) => (
                                <li
                                    key={clientIndex}
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
            ) : (
                    <div className='w-full md:w-3/4 lg:w-4/5'>
                        <p className='text-center text-gray-600 text-xl mt-12'>No clients found for the selected industry.</p>
                    </div>
                    
            )}
        </div>
    );
};
export default OurClientsPage;
