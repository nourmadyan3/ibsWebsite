'use client';

import React from 'react';
import OurServicesSection from '@/app/components/OurServicesSection';
//import { cn } from '@/lib/utils';



const socialInsurance: React.FC = () => {
    return (
        <OurServicesSection
            id='medical-insurance' // This ID is now more for internal reference than anchor linking 
            title='Medical Insurance'
            text={
                <>
                    <p>
                    IBS facilitates medical, life, accident, and disability insurance coverage based on client requirements, offering flexible plans tailored to the size and needs of the organization.
                    </p>
                    <br/>
                    <p>
                    Clients have the freedom to select their preferred insurance provider based on pricing, coverage, and duration; IBS then manages the administrative process on their behalf.
                    </p>
                    <br/>
                    <span className="text-[#000000BF] font-bold">Our role includes:</span><br />
                    <p className='ml-7'>
                    ○ Handling policy issuance and claim processing<br/>
                    ○ Monitoring renewal timelines and managing yearly updates<br/>
                    ○ Settling premiums upfront and reimbursing costs from the client based on actual charges and provider increases
                    </p>
                    <br/>
                    <p>
                    Insurance services can begin independently of the main outsourcing contract and are treated separately in terms of timelines and financial adjustments.
                    </p>
                </>
            }
            
        />
    );
};

export default socialInsurance;

