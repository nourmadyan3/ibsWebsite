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
            {name: 'Titan Concrete and Aggregates Egypt'},
        ],
    },

    {
        title: 'Food & Beverage Sector:Afia Internation',
        clients: [
            {name: 'Afia International '},
            {name: 'Alexandria Sugar Company '},
            {name: 'Alyasmin for Import and Distribution '},
            {name: 'Bel Egypt '},
            {name: 'Best Cheese Company (BCC) '},
            {name: 'Café Greco '},
            {name: 'Canal Sugar'},
            {name: 'Chipsy for Food Industries'},
            {name: 'EkatERRA Tea Egypt'},
            {name: 'El Rashidi El Mizan'},
            {name: 'Froneri Ice Cream Egypt'},
            {name: 'Givaudan Egypt'},
            {name: 'Giza Seeds & Herbs'},
            {name: 'Green Land'},
            {name: 'Halwani Brothers'},
            {name: 'Hero Nutritional Food Industries'},
            {name: 'La Poire – Retail Pro'},
            {name: 'Monginis Foods and Services'},
            {name: 'Orca Bites'},
            {name: 'Pepsi-Cola Egypt'},
            {name: 'Rani for Import'},
            {name: 'United Sugar'},
            {name: 'United Sugar'},
            {name: 'Queen Food Industries'},
        ],
    },

    {
        title: 'Pharmaceutical Sector',
        clients: [
            {name: 'Amoun Pharmaceutical Co.'},
            {name: 'Astra Zeneca Global Commercial Organization'},
            {name: 'Eli Lilly Egypt'},
            {name: 'Gyptofarma'},
            {name: 'Janssen Egypt'},
            {name: 'Merck Serono Commercial Int.'},
            {name: 'Merck Serono Middle East FZ - Ltd'},
            {name: 'Minapharm'},
            {name: 'Penta Pharma Egypt'},
            {name: 'Pharma Mex Egypt'},
            {name: 'Sanofi-Aventis Egypt S.A.E.'},
            {name: 'Servier Egypt'},
            {name: 'Takeda Pharmaceuticals Egypt'},
        ],
    },

    {
        title: 'IT Solutions ',
        clients: [
            {name: 'ARPU Telecommunication Services'},
            {name: 'Axivas'},
            {name: 'Capgemini Egypt'},
            {name: 'Carve Partners LLC'},
            {name: 'DH Healthcare Provider Software Egypt'},
            {name: 'Electronic Data Systems Egypt_S.A.E (EDS Egypt)'},
            {name: 'HCL Technologies Egypt Limited'},
            {name: 'Hewlett Packard (HP)'},
            {name: 'IBM WTC Egypt'},
            {name: 'Intel Corporation Egypt LLC'},
            {name: 'ITSC EGYPT'},
            {name: 'Microsoft'},
            {name: 'Ndimo - Network Payments Solutions S.A.E.'},
            {name: 'Neusoft Cloud Technology'},
            {name: 'SAP Egypt'},
            {name: 'Seal Software Egypt LLC'},
            {name: 'SITA'},
            {name: 'Sonata Europe Limited'},
            {name: 'Jumbo Electronics Co. Ltd. LLC'},
            {name: 'InfoFort Egypt'},
            {name: 'vBlooming Technology co. Ltd'},
            {name: 'Xerox'},
        ],
    },

    {
        title: 'Car Manufacturing ',
        clients: [
            {name: 'Bavarian Auto Group (BMW)'},
            {name: 'Chrysler Group Egypt Ltd.'},
            {name: 'General Motors Egypt (GM)'},
            {name: 'Hyundai Rotem Company (Egypt Branch)'},
            {name: 'Mahindra & Mahindra S. Africa'},
            {name: 'Mercedes-Benz Egypt S.A.E'},
            {name: 'Nissan Egypt'},
        ],
    },

    {
        title: 'Industrial & Manufacturing ',
        clients: [
            {name: 'Alexandria Portland Cement Co'},
            {name: 'Alstom Egypt for Transport Projects'},
            {name: 'Arabian Cement Company'},
            {name: 'ArcelorMittal'},
            {name: 'ASEC Integrate Management Co. Ltd'},
            {name: 'Beni Suif Cement'},
            {name: 'Brava Services and Maintenance'},
            {name: 'Delaval'},
            {name: 'D&D Corporation'},
            {name: 'Egyptian German Industrial Corporate'},
            {name: 'Egyptian Group Company'},
            {name: 'Elsewedy Utilities'},
            {name: 'Emerson Egypt'},
            {name: 'FieldCore Service Solutions International LLC'},
            {name: 'France Export Cereals'},
            {name: 'GE Steam Power Systems'},
            {name: 'Guardian Egypt Company'},
            {name: 'Kandil Glass'},
            {name: 'Lafarge Cement Egypt'},
            {name: 'Lucy Middle East FZE'},
            {name: 'Nufarm Middle East Operations'},
            {name: 'Philip Morris Misr LLC'},
            {name: 'Rotem S R S Egypt'},
            {name: 'RTMS Mechanical Maintenance'},
            {name: 'Schneider Electric'},
            {name: 'Schneider Electric Engineering & Services'},
            {name: 'Schneider Electric System Egypt'},
            {name: 'Schindler'},
            {name: 'Siemens Industrial LLC'},
            {name: 'Siemens Technologies SAE'},
            {name: 'Siemens Wind Power LLC'},
            {name: 'Sika Egypt'},
            {name: 'Sinai Cement Co.'},
            {name: 'Sinai White Portland Cement S.A.E'},
            {name: 'Sirat'},
            {name: 'Vicat Egypt for Cement Manufacturing'},
        ],
    },

    {
        title: 'Education',
        clients: [
            {name: 'Amer for Sport and Education'},
            {name: 'Cairo American College (CAC Egypt)'},
            {name: 'Education Development Center'},
            {name: 'German Academic Exchange Service (DAAD)'},
            {name: 'Swiss Club Nursery'},
        ],
    },

    {
        title: 'Airlines and Travel',
        clients: [
            {name: 'Air France'},
            {name: 'Alitalia Compagnia Aerea Italiana'},
            {name: 'Amadeus Egypt'},
            {name: 'British Airways'},
            {name: 'KLM'},
            {name: 'Lufthansa'},
            {name: 'Porto Holidays'},
            {name: 'Porto Hotels '},
            {name: 'Swiss International Airlines'},
            {name: 'Trobby 2'},
        ],
    },

    {
        title: 'Advertising and Media',
        clients: [
            {name: 'Benchmark'},
            {name: 'Findings Research'},
            {name: 'Global Direct TV (OSN)'},
            {name: 'Modern Arab Company S.A.E'},
            {name: 'Sarmady Communications'},
            {name: 'TNS Global'},
        ],
    },

    {
        title: 'Telecommunication',
        clients: [
            {name: 'Digital Technology Company'},
            {name: 'Link Development'},
            {name: 'Mobiserve Contracting LLC'},
            {name: 'Orange'},
            {name: 'XEED Egyptian Company for Information Systems'},
        ],
    },

    {
        title: 'Trading & Transportation',
        clients: [
            {name: 'Cairo Airport Cargo Company (CACC)'},
            {name: 'Car-Eem Egypt for Smart Networks'},
            {name: 'CMA CGM Egypt'},
            {name: 'CMA CGM Egypt Inland Container Services'},
            {name: 'Hand Made for Trade and Distribution'},
            {name: 'Masheed for Trading and Transportation'},
            {name: 'Medsofts'},
            {name: 'Roots Group'},
            {name: 'The Arabian Company for Transportation Services'},
            {name: 'Vanderlande'},
        ],
    },

    {
        title: 'Insurance',
        clients: [
            {name: 'AIG Egypt Insurance Company SAE'},
            {name: 'AXA Africa Health S.A.E.'},
            {name: 'Globemed Egypt'},
            {name: 'MetLife Alico Co.'},
            {name: 'QNB AlAhli Life'},
            {name: 'Wafa Life Insurance Egypt'},
        ],
    },

    {
        title: 'Medical Supply and Solutions',
        clients: [
            {name: 'BioMérieux'},
            {name: 'Cardinal Health'},
            {name: 'Cochlear Middle East'},
            {name: 'Fresenius Kabi Deutschland GMBH'},
            {name: 'Fresenius Medical Care EG'},
            {name: 'GE Medical Systems Egypt LLC'},
            {name: 'IQVIA Technology Solutions Egypt'},
            {name: 'Medtronic LLC'},
            {name: 'Quintiles Egypt LLC'},
            {name: 'Servier Egypt Scientific Office'},
            {name: 'Siemens Healthcare'},
            {name: 'Total Care Misr'},
        ],
    },

    {
        title: 'Consumer Goods',
        clients: [
            {name: 'Reckitt Benckiser Egypt Ltd'},
            {name: 'Unilever'},
        ],
    },

    {
        title: 'Fashion and Creativity',
        clients: [
            {name: 'JeaNologia S.L'},
            {name: 'The Fashion Kingdom'},
        ],
    },

    {
        title: 'Courier',
        clients: [
            {name: 'Aramex Mashreq for Logistics Services'},
            {name: 'DHL'},
            {name: 'DHL Express Egypt'},
        ],
    },

    {
        title: 'Financial Solutions',
        clients: [
            {name: 'AlAhly Exchange'},
            {name: 'Al Ahly Kuwait Egypt Leasing Co'},
            {name: 'Al Ahly Leasing Company'},
            {name: 'Bayt El Khebra Group'},
            {name: 'Beltone Consumer Finance (Bel-Cash)'},
            {name: 'Beltone Financial'},
            {name: 'BM Lease'},
            {name: 'Citadel Capital'},
            {name: 'Edama'},
            {name: 'Edfapay'},
            {name: 'E-Finance'},
            {name: 'EFG Hermes Holding'},
            {name: 'Egypt Factors'},
            {name: 'Fine Eng'},
            {name: 'JJ Total Care'},
            {name: 'Khales'},
            {name: 'Landmark Retail Investment'},
            {name: 'Misr Digital Innovation'},
            {name: 'Shahry for Consumer Finance'},
            {name: 'Sonata Software North America Inc.'},
            {name: 'Treyd Services AB'},
            {name: 'Valu'},
        ],
    },

    {
        title: 'E-commerce',
        clients: [
            {name: 'E-Aswaaq Misr'},
            {name: 'E-Cards'},
            {name: 'Delivery Hero Dmart Egypt (Talabat)'},
            {name: 'Delivery Hero Egypt '},
            {name: 'PayTabs Egypt for Technology Solutions'},
            {name: 'Rabbit Egypt'},
        ],
    },

    {
        title: 'Agricultural',
        clients: [
            {name: 'Cimbria Unigrain A-S'},
            {name: 'ED&F Man'},
        ],
    },

    {
        title: 'Community',
        clients: [
            {name: 'CSA'},
            {name: 'Khaled Abdullah Foundation for Social Care'},
        ],
    },

    {
        title: 'General Services',
        clients: [
            {name: 'OPS for Market Research'},
            {name: 'Diversey Egypt'},
            {name: 'Ebutler'},
            {name: 'Majid Al Futtaim for Management'},
            {name: 'Milezmore for Logistics Services'},
            {name: 'NMDC'},
            {name: 'Peacock Concierge Misr'},
            {name: 'Quest'},
            {name: 'Quantum Solutions Trading DMCC'},
            {name: 'RSA Security Egypt Limited'},
            {name: 'Synthomer S.A.E'},
            {name: 'TAQA Water'},
            {name: 'Total FM'},
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

    // Split into left and right columns
    const leftColumnIndustries = filterdIndustries.slice(0, 8);
    const rightColumnIndustries = filterdIndustries.slice(5);
    
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

        <div className='py-8 container mx-auto px-4 md:px-6 lg:px-8 bg-[#fafafa]'>
            <h1 className='text-3xl font-bold mb-8 text-left text-[#000000]'>Our Valued Partners</h1>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed mb-15'>
            Meet the dedicated professionals powering IBS—our team&apos;s expertise and passion bring our core values to life every day.Full and Updated Client List.
            </p>

            {/* Tab/Button Navigation for Industry Filter - This comes AFTER the title and intro text */}
            <div className='flex flex-wrap justify-between gap-2 mb-8 border-b border-gray-200 pb-4'>
                <button
                    onClick={() => setSelectedIndustry('All Industries')}
                    className={cn(
                        'px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-200',
                        selectedIndustry === 'All Industries'
                            ? 'bg-[#ed253c] text-white shadow-md'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    )}
                >
                    Show All Industries
                </button>

                {clientIndusrtries.map((group) => (
                    <button
                        key={group.title}
                        onClick={() => setSelectedIndustry(group.title)}
                        className={cn(
                            'px-4 py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-200',
                            selectedIndustry === group.title
                                ? 'bg-[#ed253c] text-white shadow-md'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        )}
                    >
                        {group.title}
                    </button>
                ))}
            </div>

            
            {/* Industry Filter Dropdown */}
            {/* <div className='flex flex-col md:flex-row gap-8 items-start'>
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
                
            </div> */}

            {/* Grid container for the industry columns */}
            {filterdIndustries.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-8'>
                    <div className='md:border-r md:border-gray-200 pr-4'>
                        {leftColumnIndustries.map((group) => (
                            <div key={group.title} className='mb-8'>
                                <h2 className='bg-[#ed253c] text-white text-lg font-semibold py-2 px-4 rounded-t-md mb-2'>
                                    {group.title}
                                </h2>
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
                    <div className='pl-4'>
                        {rightColumnIndustries.map((group) => (
                            <div key={group.title} className='mb-8'>
                                <h2 className='bg-[#ed253c] text-white text-lg font-semibold py-2 px-4 rounded-t-md mb-2'>
                                    {group.title}
                                </h2>
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
