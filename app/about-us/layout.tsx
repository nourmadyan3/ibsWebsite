'use client'  // This layout contains client-side logic (useState, useRouter) for active link styling

import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
//import { Children } from "react";

interface AboutUsLayoutProps {
    children: React.ReactNode;
}

const AboutUsLayOut: React.FC<AboutUsLayoutProps> = ({ children }) => {
    const pathname = usePathname(); // Get current pathname to highlight active link

    // Define sections for the side navigation
    const sections = [ 
        { id: 'who-is-ibs', title: 'Who is IBS?', href:'/about-us' }, // Default route for /about-us
        { id: 'our-people', title: 'Our People', href:'/about-us/our-people' },
        { id: 'our-clients', title: 'Our Clients', href:'/about-us/our-clients'  },
        { id: 'awards-certificates', title: 'Awards and Certificates', href:'/about-us/awards-certificates' },
        { id: 'our-career', title: 'Our Career', href:'/about-us/our-career' },
    ];

    return (
        <div className="bg-white min-h-screen flex flex-col"> 
            {/* The pt-16 is applied to this container to push content below the main Navbar */}
            <div className="pt-16 flex flex-1 flex-col md:flex-row container mx-auto"> {/* Added pt-16 here */}
                {/* Side Navigation Bar */}
                <aside className='w-full md:w-1/4 lg:w-1/5 py-8 md:pr-8 sticky top-16 flex flex-col min-h-full bg-[#EFEFEF]'>  {/* Adjusted top for fixed Navbar */}
                    <nav>
                        <h3 className='text-xl font-semibold py-8 md:pr-8 ml-5 text-[#ed253c]'>About US</h3>
                        <ul>
                            {sections.map((section) => (
                                <li key={section.id} className='mb-3 ml-3'>
                                    <Link
                                        href={section.href}
                                        className={cn(
                                            "block py-3 px-3 rounded-md", // Added padding for better click area
                                            "text-gray-700 dark:text-gray-300 hover:text-[#ed253c] transition-colors font-medium cursor-default",
                                            // Highlight active link
                                            pathname === section.href ? " text-[#ed253c] font-bold" : ""
                                        )}
                                    >
                                        {section.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                {/* Main Content Area - This is where the individual sub-pages will be rendered */}
                <main className="w-full md:w-3/4 lg:w-4/5 py-8 md:pl-8 flex-1">
                    {children} {/* This is where your page components will be rendered */}
                </main>
            </div>
        </div>
    );
};

export default AboutUsLayOut;