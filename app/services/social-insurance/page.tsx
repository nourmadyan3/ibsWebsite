'use client';

import React from 'react';
import OurServicesSection from '@/app/components/OurServicesSection';
//import { cn } from '@/lib/utils';



const socialInsurance: React.FC = () => {
    return (
        <OurServicesSection
            id='social-insurance' // This ID is now more for internal reference than anchor linking 
            title='Social Insurance'
            text={
                <>
                    <p>
                    IBS manages all social insurance obligations on behalf of clients, including registering personnel, assigning appropriate income-based insurance categories, and maintaining up-to-date employee records.
                    </p>
                    <br/>
                    <p>
                    We ensure full compliance with Egyptian Labor Law, Social Insurance Decrees, and Tax Law by continuously monitoring and applying regulatory updates as they are issued.
                    </p>
                    <br/>
                    <p>
                    All legally required documentation (e.g., insurance statements, labor forms) is generated and authorized by IBS, available to employees upon request for personal use (such as bank or embassy submissions).
                    </p>
                    <br/>
                    <p>
                    Vacation balances are tracked and updated consistently, provided the necessary data is shared by the client on a regular basis.
                    </p>
                    
                </>
            }
            
        />
    );
};

export default socialInsurance;

