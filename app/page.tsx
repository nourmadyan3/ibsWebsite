/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "./components/ui/button";  
import { cn } from "@/lib/utils";
import Head from "next/head";
/* import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "./components/ui/card"; */
//import { motion } from "framer-motion";
import TextWithLink from "./components/TextWithLink";
import { get } from "http";
import { title } from "process";


// Declare the global 'google' object for TypeScript
declare global {
  interface Window {
    google: any; // You can make this more specific with google.maps types if you install @types/google.maps
    initMap: () => void; // Declare the global callback function for Google Maps API
  }
}

// Dummy image imports (replace with your actual image paths)
const coverImage = "/images/ibs website2.jpg"; // This should be the image with the building and "WE ASSIST, YOU SUCCEED"
const ubdteamImage = "/images/recovered.png"; // This should be the image of the team
const aboutUsPaperBoatsImage = "/images/boat.png"; // This should be the image of the paper boats
//const ibsLogo = "/images/logo.png"; // This should be the image of the IBS logo
//const mapPlaceHolder = "/images/map.png"; // This should be the image of the map

// Client Logos (add your actual client logo paths here)
const clientLogos = [
  '/images/logo1.png',
  '/images/logo2.png',
  '/images/logo3.png',
  '/images/logo4.png',
  '/images/logo5.png',
  '/images/logo6.png',
  '/images/logo7.png',
  '/images/logo8.png',
  '/images/logo9.png',
  '/images/logo10.png',
  '/images/logo11.png',
  '/images/logo12.png',
  '/images/logo13.png',
  '/images/logo14.png',
  '/images/logo15.png',
  '/images/logo16.png',
  '/images/logo17.png',
  '/images/logo18.png',
  '/images/logo19.jpg',
  '/images/logo20.jpg',
  '/images/logo21.jpg',
  '/images/logo22.jpg',
  '/images/logo23.png',
  '/images/logo24.jpg',
]



// Interface for Cover component props
interface CoverProps {
  imageUrl: string;
  mainText: string; // Changed to mainText for clarity
  main: string
  subText: string; // New prop for the smaller text
}

// Interface for ImageSection component props ( retained for general image use, though not explicitly used for team photo anymore)
interface ImageSectionProps {
  imageUrl: string;
  altText: string;
  title?: string;
  description?: string;
  heightClass?: string;
}

// Interface for AboutUs component props - now includes image
interface AboutUsProps {
  text: string;
  imageUrl: string;  // Added image URL back for the paper boats
}

// Cover Component - Updated to include subText 
const Cover: React.FC<CoverProps> = ({ imageUrl, main, mainText, subText }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center pt-10">
      <Image
        src={imageUrl}
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />

      {/* <div
        className={cn(
          'absolute inset-0 bg-grey/30', // Dark overlay for better text contrast
          'flex items-left justify-center',
        )}
      /> */}

      <div
        className="relative z-10 flex items-left w-full mt-19"
      >
        <div 
          className="bg-[#FFFFFFCC]/80 m-5  text-center pt-10"
          style={{
            width: '571px',
            height: '325px',
            left: '115px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h1
            className={cn(
              'mb-1 drop-shadow-lg',
              'font-[\'Work Sans\'], font-sans',
              'text-[46px]',
              'leading-tight'
            )}
          >
            {mainText}
            <span className="block text-[#ed253c] font-[\'Work Sans\'] text-[46px] leading-tight">{main}</span>
          </h1>
          
          <p className="text-[14px] font-['Inter'] drop-shadow-lg max-w-2xl mx-auto text-[#fafafa] leading-tight">
            {subText}
          </p>
        </div>
      </div>
    </div>
  );
};

// ImageSection Component - Updated to allow flexible height

const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, altText, title, description, heightClass = "h-96" }) => {
  return (
    <div className={cn("my-8 relative w-full", heightClass)}>
      {title && <h2 className="text-2xl font-semibold mb-2 text-foreground">{title}</h2>}
      {description && <p className="text-[#EFEFEF] mb-4">{description}</p>}
      
      <Image
        src={imageUrl}
        alt={altText}
        fill={true}
        style={{ objectFit: 'cover' }}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

// AboutUs Component - Updated to include image and match new design
const AboutUs: React.FC<AboutUsProps> = ({ text, imageUrl }) => {
  return (
    <div className="py-10 relative w-full  overflow-hidden "> {/* md:flex-row-reverse to put image on right */}

      <div className="absolute top-12 right-1 w-full h-full z-0 mr-1"> {/* Added min-h for image container */}
        
        <Image
          src={imageUrl}
          alt="About Us Illustration"
          fill={true}
          style={{objectFit: 'contain', objectPosition:'right'}}  //Use 'contain' to fit the whole image
          className="w-full h-full opacity-30"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

        <div className="relative z-0 lg:px-6 max-w-full md:max-w-[80%] lg:max-w-[90%]">  {/* Added text-left for text alignment */}
        <h2 className={cn(
          'text-2xl font-semibold mb-4 text-[#ed253c]'
        )}
        >
          ABOUT US
        </h2>

        <p className="text-[#828282] dark:text-[#828282] leading-relaxed text-justify">
          {text}
        </p>
      </div>
    </div>
  );
};

// OurServices Component - Updated to match new design (list format)
const OurServices = () => {
  const services = [
    {
      title: 'Payroll',
      description: 'IBS manages the full payroll process, starting from the calculation of all earnings and deductions, to secure payment transfers to the employees and other official authorities. As well as providing detailed reports, invoices, and payment slips tailored to client needs, using a confidential digital system.',
    },
    {
      title: 'Personnel',
      description: 'We provide personnel with all onboarding and offboading process including; employment agreement, legal compliance, and vacation records, experience certificates and all necessary documents needed.',
    },
    {
      title: 'Social Insurance',
      description: 'IBS manages all employee social insurance, providing authorized documentation and ensuring continuous updates in line with government regulations.',
    },
    {
      title: 'Work Permit',
      description: 'We handle work permits for expatriates, managing the full process from entry approval to final issuance, with renewals.',
    },
    {
      title: 'Medical Insurance',
      description: 'IBS administers medical, life, and accident insurance plans based on client preferences through managing the issuance of the policies, renewals, claims and approvals.',
    },
  ];

  return (
    <div className="py-7 mt-15">
      <h2 className="text-2xl font-semibold mb-8 text-[#ed253c]">OUR SERVICES</h2>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-center gap-4 pb-6 ${index < services.length - 1 ? 'border-b border-[#bdbdbd]' : ''}`}
          >
            <span className="w-4 h-4 bg-[#ed253c] rounded-full flex-shrink-0 mt-1 md:mt-0"></span>
            <div className="flex flex-col md:flex-row md:items-center w-full gap-4">
              <a
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-lg font-semibold hover:text-[#ed253c] min-w-[140px] md:text-left md:pr-6 cursor-default"
                style={{ flex: '0 0 180px' }}
              >
                {service.title}
              </a>
              <p className="text-[#828282] dark:text-[#828282] text-justify md:text-left flex-1">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// OurClients Component - Modified to create a seamless infinite loop effect for the logos
const OurClients: React.FC<{ seeAll: boolean; setShowAll: (value: boolean) => void }> = ({ seeAll, setShowAll }) => {
  const totalLogos = clientLogos.length;

  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8 lg:px-6 text-left text-[#ed253c]">OUR CLIENTS</h2>
      {seeAll ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {clientLogos.map((logo, index) => (
            <div key={`full-logo-${index}`} className="relative w-[180px] h-[100px] flex items-center justify-center  rounded">
              <Image
                src={logo}
                alt={`Client Logo ${index + 1}`}
                width={140}
                height={60}
                style={{ objectFit: 'contain', padding: '8px' }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex items-center justify-center">
          

            <div className="flex flex-grow overflow-hidden justify-center items-center bg-white">
              <div
                className="flex logo-container"
                style={{
                  width: 'fit-content',
                  animation: 'scroll 100s linear infinite',
                
                }}
              >
                {[...clientLogos, ...clientLogos].map((logo, index) => (
                  <div key={`logo-${index}`} className="flex-shrink-0 mx-8 relative w-[200px] h-[100px] flex items-center justify-center">
                    <Image
                      src={logo}
                      alt={`Client Logo ${index + 1}`}
                      width={180}
                      height={80}
                      style={{ objectFit: 'contain', maxHeight: '80px', maxWidth: '180px' }}
                    />
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      )}

      <div className="text-center mt-13">
        <Button
          variant={seeAll ? "outline" : "default"}
          className="px-8 py-3 text-lg font-semibold"
          onClick={() => setShowAll(!seeAll)}
        >
          {seeAll ? "SHOW FEWER CLIENTS" : "SEE ALL CLIENTS"}
        </Button>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

// New ContactUs Component
const ContactUs: React.FC = () => {
  const specificLocationCoordinates = { lat: 29.969692312109558, lng: 31.2750723178029 };
  const addressString = "New Maadi،, 10 Street 261, Ezbet Fahmy, El Basatin, Cairo Governorate"
  
  useEffect(() => {
    let isMounted = true;

    // Function to initialize the map
    const initMap = () => {
      if (!isMounted) return;
      
      // Check if google.maps is available (API loaded)
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(
          document.getElementById('map') as HTMLElement,
          {
            center: specificLocationCoordinates,
            zoom: 16,
            mapId: "DEMO_MAP_ID",
          }
        );

        const marker = new window.google.maps.Marker({
          position: specificLocationCoordinates,
          map: map,
          title: 'IBS Office',
        });

        marker.addListener('click', () => {
          const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressString)}`;
          window.open(googleMapsUrl, '_blank');
        });
      }
    };

    // Only load the script if it hasn't been loaded yet
    if (!window.google?.maps) {
      const existingScript = document.getElementById('google-maps-script');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBo7J0C5GNqt694roRnK8UXPcgtlvlkTQU&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.id = 'google-maps-script';
        window.initMap = initMap;
        document.head.appendChild(script);
      } else if (window.google?.maps) {
        // If script exists and maps is loaded, initialize map
        initMap();
      }
    } else {
      // If maps is already loaded, initialize map
      initMap();
    }

    // Cleanup function
    return () => {
      isMounted = false;
      if ('initMap' in window) {
        // @ts-expect-error: Deleting property from window
        delete window.initMap;
      }
    };
  }, [specificLocationCoordinates, addressString]);

  return (
    <div className="py-8 text-center ">
      {/* Wrapper div for the heading to apply borders */}
      {/* Added w-fit and mx-auto to control the line length and center it */}
      <div className="border-t border-b border-[#000000] py-4 mb-8 mt-0 w-fit mx-auto">
      <h2 className="text-2xl font-semibold text-foreground m-0 text-[#ed253c]">CONTACT US</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-7 items-center md:items-start justify-center">
        {/* Map Container - Replaced Image with a div for the map */}
        <div id="map" className="relative mt-5 left-6 w-full md:w-1/3 h-42 md:h-57 rounded-lg shadow-lg overflow-hidden bg-[#828282] flex items-center justify-center text-[#000000]">
          {/* Fallback text if map doesn't load */}
          Loading Map...
        </div> 

        {/* Working Hours & Address */}
        <div className="md:w-1/3 text-left p-4">
        <p className="text-xl font-bold text-[#000000] dark:text-[#000000] mb-7">
      CALL US ON <span className="text-xl font-bold text-[#ed253c] dark:text-[#ed253c] ">19786</span>
      </p>
          <h3 className="text-xl font-semibold mb-2 text-foreground">Working Hours</h3>
          <p className="text-[#828282] text-sm">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
          <p className="text-[#828282] text-sm">Friday - Saturday: Closed</p>
          <h3 className="text-xl font-semibold mt-7 mb-2 text-foreground">Address</h3>
          {/* <p className="text-[#828282] ">2261 New Maadi, Cairo, Egypt</p>
          <p className="text-[#828282] ">Al Nahda Al Gadida, Maadi</p> */}
          <p className="text-[#828282] text-sm">New Maadi, 10 Street 261, Ezbet Fahmy</p>
          <p className="text-[#828282] text-sm">El Basatin, Cairo Governorate</p>
        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home: React.FC = () => {
  
  const [seeAll, setSeeAll] = React.useState(false);

  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-hidden pt-18">
      
      
      <Cover
        imageUrl={coverImage}
        mainText="WE ASSIST,"
        main="YOU SUCCEED"
        subText="With over 35 years of experience, we're your local experts in delivering HR outsourcing solutions that drive success"
      />

      {/* New section with background color after Cover Image */}
      <div className="w-full bg-[#EFEFEF]  py-2 my-3">    {/* Added background color and padding */}
        <div className="container mx-auto lg:px-6 text-left ">
          {/* Replaced placeholder text with TextWithLink */}
          <TextWithLink
            text="New This Week!: "
            text2="New Legal Amends effecting workforce just got announced"
            href="/about-us"   // Link to the blogs   abut us for trial
          />   
        </div>
      </div>

      {/* Team Photo Section - Directly embedded here */}
      <div className="my-8 relative w-full max-w-4xl mx-auto h-[270px] md:h-[270px]">
          <Image
            src={ubdteamImage}
            alt="Our Team"
            fill={true}
            style={{ objectFit: 'cover' }}
          className="w-[746px] items-center"/>
      </div>
      
       {/* About Us Section with Paper Boats Image */}
      <AboutUs
          text="Founded in 1984, IBS began by connecting multinational organizations with Egypt through communication and recruitment services. As the market evolved, so did we — shifting our focus to outsourcing, where we quickly became pioneers in the Egyptian market with our transparent, cost-plus model.  Today, with over 35 years of experience, IBS is a leading outsourcing provider serving 387+ local and international clients, supported by a team of 165+ professionals and a workforce of 53,000 across Egypt and beyond."
          imageUrl={aboutUsPaperBoatsImage}
        />

      {/* Our Services Section - now with its own container */}
      <div className="w-fit bg-[#EFEFEF] relative m-10">
        <div className="container w-fit m-10">
          <OurServices />
        </div>
      </div>

      {/* Our Clients Section */}
      <OurClients seeAll={seeAll} setShowAll={setSeeAll} />

      {/* Contact Us Section */}
      <ContactUs />

      
    </div>
  );
};

export default Home;
