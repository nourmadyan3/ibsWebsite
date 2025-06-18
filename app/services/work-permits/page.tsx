'use client';

import React from 'react';
import OurServicesSection from '@/app/components/OurServicesSection';
//import { cn } from '@/lib/utils';



const workPermits: React.FC = () => {
    return (
        <div className='bg-[#fafafa] min-h-screen mx-auto px-4 md:px-6 lg:px-8'>
            <OurServicesSection
            id='work-permits' // This ID is now more for internal reference than anchor linking 
            title='Work Permits'
            text={
                <>
                    <p>
                    For clients employing foreign nationals, IBS manages the complete work permit process from start to finish, including ministry approvals and documentation.
                    </p>
                    <br/>
                    <span className="text-[#000000BF] font-bold">Key procedures include:</span><br />
                    <p className='ml-7'>
                    ○ Initiating the process while the expat is still outside Egypt<br/>
                    ○ Coordinating approvals for entry<br/>
                    ○ Continuing permit issuance steps upon arrival in Egypt
                    </p>
                    <br/>
                    <p>
                    Permits are valid for one year and renewed biannually; document requirements and processing times may vary depending on nationality and government regulations.
                    </p>
                    <br />
                    <p>
                    IBS ensures all procedures remain compliant with evolving labor and immigration policies, minimizing delays and complications.
                    </p>
                </>
            }
            
        />
        </div>
    );
};

export default workPermits;

