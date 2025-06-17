'use client';

import React from 'react';
import OurServicesSection from '@/app/components/OurServicesSection';
//import { cn } from '@/lib/utils';



const personnelIssues: React.FC = () => {
    return (
        <OurServicesSection
            id='personnel-issues' // This ID is now more for internal reference than anchor linking 
            title='Personnel Issues'
            text={
                <>
                    <p>
                        IBS provides employees with official HR documents and letters required for personal or legal matters, <strong>including:</strong>
                        
                    </p>
                    <p className='ml-7'>
                            ○ Bank statements for loan or credit applications<br/>
                            ○ Embassy letters for visa requests<br/>
                            ○ Employment confirmations for various official uses
                        </p>
                    <br/>
                    <p>
                    All documents are formatted, signed, and stamped by IBS and can be customized to align with the intended purpose, ensuring accuracy and credibility.
                    </p>
                    <br/>
                    
                </>
            }
            
        />
    );
};

export default personnelIssues;

