'use client';

import React from 'react';
import AboutUsSection from '../components/AboutUsSection';
//import { cn } from '@/lib/utils';


// Dummy image imports
const paperBoatsImage = '/images/boat.png';

const WhoIsIbsPage: React.FC = () => {
    return (
        <AboutUsSection
            id='who-is-ibs' // This ID is now more for internal reference than anchor linking 
            title='WHO IS IBS?'
            text={
                <>
                    <p>
                        Established in 1984, IBS began by helping multinational organizations connect with Egypt through international calls, faxes, and recruitment services. As technology evolved and client needs shifted, IBS transitioned into one of Egypt&apos;s first outsourcing pioneers, introducing a &quot;Transparency and Cost Plus&quot; model that set it apart from traditional labor contractors. Today, with over 35 years of experience, IBS is a leading outsourcing provider serving 350+ local and international clients, supported by a team of 100+ professionals and a workforce of 45,000 across Egypt and beyond.
                    </p>
                    <br/>
                    <p>
                        Outsourcing, often misunderstood, has become a vital growth strategy for businesses of all sizes. Simply put, it involves delegating specific functions to external experts instead of handling them in-house. At IBS, we specialize in Business Process Outsourcing (BPO), with a strong focus on Payroll and Insurance Outsourcing — helping organizations streamline operations and focus on what they do best.
                    </p>
                    <br/>
                    <p>
                        <span className="text-[#000000BF] font-bold">Mission:</span><br/>
                        To deliver exceptional, ethical, and tailored outsourcing and recruitment services by empowering our team, continuously innovating, and maintaining a client-focused approach that ensures the highest standards of quality and satisfaction.
                    </p>
                    <br/>
                    <p>
                        <span className="text-[#000000BF] font-bold">Vision Statement:</span><br/>
                        To be Egypt&apos;s leading outsourcing service provider by constantly evolving, setting new standards of excellence, and creating positive awareness around the value of outsourcing—for both clients and employees alike.
                    </p>
                    <br/>
                    <p>
                        <span className="text-[#000000BF] font-bold">IBS&apos; Values:</span><br />
                        We are committed to staying ahead by continuously evaluating and adapting to evolving client needs, workforce trends, and technological advancements <strong>(Modernization)</strong>. Our work ethic is built on <strong>Transparency</strong>, ensuring open
                    </p>
                    <br />
                    <p>
                    communication and trust with every client. We handle all client and personnel information with the utmost <strong>confidentiality</strong>, using secure digital systems to protect sensitive data. Staying fully informed of all relevant laws and regulations allows us to ensure complete <strong>Legal Compliance</strong> in everything we do. We also take our responsibility to the environment seriously, maintaining a safe, clean, and healthy workplace while minimizing our impact on the world around us <strong>(Environmental Responsibility)</strong>. At the core of our operations lies a strong foundation of <strong>Employee Ethics</strong>—rooted in integrity, respect, and professionalism across every level of our team.
                    </p>
                </>
            }
            imageUrl={paperBoatsImage}
            imageAlt='About Us Illustration'
        />
    );
};

export default WhoIsIbsPage;