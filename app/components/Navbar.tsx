'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../components/ui/button";  
import { cn } from "@/lib/utils";

// Interface for Navbar button data
export interface NavbarButton { // Export this interface as it's used elsewhere
    label: string;
    href: string;
}

const ibsLogo = "/images/logo.png";



const Navbar: React.FC<{ buttons: NavbarButton[] }> = ({ buttons }) => {


    const [isVisible, setIsVisible] = useState(true); // State to control Navbar visibility
    const [lastScrollY, setLastScrollY] = useState(0); // State to track last scroll position

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position
            const currentScrollY = window.scrollY;

            // Determine scroll direction
            // Hide Navbar if scrolling down and past a small threshold (e.g., 50px)
            // Show Navbar if scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            // If at the very top, always show Navbar
            if (currentScrollY === 0) {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY); // Update last scroll position
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]); // Re-run effect when lastScrollY changes

    return (
    <nav
        className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-white border-b border-border',
        ' px-3 md:px-5 lg:px-7',
        'flex items-center justify-between',
            'shadow-sm',
        'transition-transform duration-300 ease-in-out', // Smooth transition for transform
         isVisible ? '-translate-y-0.5' : '-translate-y-full' // Apply transform based on visibility
        )}
    >

        <div className="flex items-center gap-2">
          {/* Use the Image component for the logo */}
        <Image
            src={ibsLogo}
            alt="IBS Logo"
            width={130} 
            height={130}
            className="rounded-full"   // Make it a circle if appropriate
        />

          {/* <span className="font-bold text-xl text-foreground">IBS</span> */}
        </div>

        <div className="space-x-4 md:space-x-6 lg:space-x-8 flex items-center">
        {buttons.map((button) => (
            <Button
            key={button.label}
            variant="outline"
            asChild
            >
            <a href={button.href} className="hover:text-primary transition-colors cursor-default">
                {button.label}
            </a>
            </Button>
        ))}
        </div>
    </nav>
    );
};

export default Navbar;