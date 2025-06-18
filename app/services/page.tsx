'use client';

import React from 'react';
import OurServicesSection from '../components/OurServicesSection';
//import { cn } from '@/lib/utils';



const payrollOutsourcing: React.FC = () => {
    return (
        <div className='bg-[#fafafa] min-h-screen mx-auto px-4 md:px-6 lg:px-8'>
<OurServicesSection
            id='payroll-outsourcing' // This ID is now more for internal reference than anchor linking 
            title='Payroll Outsourcing'
            text={
                <>
                    <p>
                    IBS provides full payroll administration, covering salary calculations, tax deductions, bonuses, overtime, incentives, and vacation accruals—ensuring accurate and timely payments each month.
                    </p>
                    <br/>
                    <p>
                    All payroll operations are processed through a confidential, fully digitized system, with a secure Oracle-based platform currently being integrated to further streamline performance and security.
                    </p>
                    <br/>
                    <p>
                    Payroll documents (including payslips, reports, and invoices) are stored digitally and shared with clients in their preferred format (e.g., email, hard copy), with custom formatting available to meet internal reporting needs.
                    </p>
                    <br/>
                    <p>
                    Salary disbursement is facilitated through partnerships with over 25 banks, ensuring efficient direct transfers to employees&apos; accounts.
                    </p>
                    <br/>
                    <p>
                    Detailed payment slips are issued to each employee via email. If unavailable, slips are securely sent to designated client representatives or delivered by an IBS liaison during site visits.
                    </p>
                    <br />
                </>
            }
            
        />

        </div>
         );
        };   

export default payrollOutsourcing;