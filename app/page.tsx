'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "./components/ui/button";  
import { cn } from "@/lib/utils";
/* import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "./components/ui/card"; */
import { motion } from "framer-motion";
import TextWithLink from "./components/TextWithLink";

// Declare the global 'google' object for TypeScript
declare global {
  interface Window {
    google: any; // You can make this more specific with google.maps types if you install @types/google.maps
    initMap: () => void; // Declare the global callback function for Google Maps API
  }
}

// Dummy image imports (replace with your actual image paths)
const coverImage = "/images/ibs website2.jpg"; // This should be the image with the building and "WE ASSIST, YOU SUCCEED"
const ubdteamImage = "/images/updatedTeam.jpg"; // This should be the image of the team
const aboutUsPaperBoatsImage = "/images/web10.jpg"; // This should be the image of the paper boats
const ibsLogo = "/images/logo.png"; // This should be the image of the IBS logo
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

// Interface for Navbar button data
interface NavbarButton {
  label: string;
  href: string;
}

// Interface for Cover component props
interface CoverProps {
  imageUrl: string;
  mainText: string; // Changed to mainText for clarity
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

// --- Placeholder for the missing Button Component ---
/* const Button: React.FC<any> = ({ children, variant, asChild, ...props }) => { 
  
    if (asChild) { 
      const child = React.Children.only(children) as React.ReactElement;
      return React.cloneElement(child, {...props, className: cn(child.props.className, getVariantClasses(variant))} );
    }
  return (
    <button {...props}
      className={cn(getVariantClasses(variant), props.className)}>
        {children}
      </button>
  );
}; */

/* const getVariantClasses = (variant: string) => { 
  switch (variant) { 
    case 'ghost':
      return 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700';
    default:
      return 'bg-blue-500 text-white hover:bg-blue-600'; // Basic button style
  }
}; */




// Navbar Component
const Navbar: React.FC<{ buttons: NavbarButton[] }> = ({ buttons }) => {
  return (
    <nav
      className={cn(
        'sticky top-0 z-50',
        'bg-background border-b border-border',
        'py-4 px-6 md:px-8 lg:px-12',
        'flex items-center justify-between',
        'shadow-sm',
      )}
    >

      <div className="flex items-center gap-2">
        {/* Use the Image component for the logo */}
        <Image
          src={ibsLogo}
          alt="IBS Logo"
          width={200} 
          height={200}
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

// Cover Component - Updated to include subText 
const Cover: React.FC<CoverProps> = ({ imageUrl, mainText, subText }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <Image
        src={imageUrl}
        alt="Cover Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full"
      />

      <div
        className={cn(
          'absolute inset-0 bg-grey/30', // Dark overlay for better text contrast
          'flex items-left justify-center',
        )}
      />

      <motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative z-10 text-center text-white p-4 md:p-8"
      >
        <h1
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-2',
            'drop-shadow-lg',
          )}
        >
          <span className="text-[#ed253c]">{mainText}</span>
        </h1>

        <p className="text-lg md:text-xl drop-shadow-lg max-w-2xl mx-auto text-[#828282]">
          {subText}
        </p>
      </motion.div>
    </div>
  );
};

// ImageSection Component - Updated to allow flexible height
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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

      <div className="absolute top-25 right-1 w-1/3 h-full z-0"> {/* Added min-h for image container */}
        
        <Image
          src={imageUrl}
          alt="About Us Illustration"
          fill={true}
          style={{objectFit: 'contain', objectPosition:'right'}}  //Use 'contain' to fit the whole image
          className="w-full h-full opacity-30"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

        <div className="relative z-10 px-4 md:px-6 lg:px-8 max-w-full md:max-w-[80%] lg:max-w-[90%]">  {/* Added text-left for text alignment */}
        <h2 className={cn(
          'text-2xl font-semibold mb-4 text-[#ed253c]'
        )}
        >
          ABOUT US
        </h2>

        <p className="text-[#828282] dark:text-gray-300 leading-relaxed text-justify">
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
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8 text-left text-[#ed253c]">OUR SERVICES</h2>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-y-4 gap-x-8">
        {services.map((service, index) => (
          <div key={index}
            className={cn(
              "flex items-start gap-2",
              { "border-b border-[#000000] pb-1 mb-1": index < services.length - 1 }  // Apply border-bottom to all but the last item
            )}
          >
            <span className="w-3 h-3 bg-[#ed253c] rounded-full flex-shrink-0 mt-2"></span> {/* Red dot */}

            <div>
              {/* Made the service title an anchor link */}
              <a
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}   // Example: /services/payroll
                className="text-lg font-semibold  hover:text-[#ed253c] cursor-default"
              >
                {service.title}
              </a>
              <p className="text-[#828282] dark:text-[#828282] text-justify">{service.description}</p>
              

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

// OurClients Component - Modified to conditionally show all or loop, and includes its own SINGLE toggle button
const OurClients: React.FC<{ seeAll: boolean; setShowAll: (value: boolean) => void }> = ({ seeAll, setShowAll }) => {
  // Reference the global unique clientLogos array defined at the top of the file.

  return (
      <div className="py-8">
          <h2 className="text-2xl font-semibold mb-8 text-left text-[#ed253c]">OUR CLIENTS</h2>
          {seeAll ? (
              // Display all logos in a responsive grid
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
                  {clientLogos.map((logo, index) => (
                      // Corrected width/height classes to be valid Tailwind or explicit
                      <div key={`full-logo-${index}`} className="relative w-[160px] h-[120px] ">
                          <Image
                              src={logo}
                              alt={`Client Logo ${index + 1}`}
                              fill={true}
                              style={{ objectFit: 'contain' }}
                          />
                      </div>
                  ))}
              </div>
          ) : (
              // Display looping logos
          <div className="relative w-full overflow-hidden py-4">
            {/* Add min-w-max here to ensure the flex container is wide enough for the animation */}
                  <div className="flex animate-marquee whitespace-nowrap min-w-max"> 
                      {/* Render logos multiple times to create a seamless loop.
                          Crucially, ensure UNIQUE keys for each rendered item.
                      */}
                      {clientLogos.map((logo, index) => (
                          // Corrected width/height classes and increased mx for more spacing
                          <div key={`loop-logo-a-${index}`} className="flex-shrink-0 mx-16 relative w-[200px] h-[160px]">
                              <Image
                                  src={logo}
                                  alt={`Client Logo ${index + 1}`}
                                  fill={true}
                                  style={{ objectFit: 'contain' }}
                              />
                          </div>
                      ))}
                      {clientLogos.map((logo, index) => (
                          // Corrected width/height classes and increased mx for more spacing
                          <div key={`loop-logo-b-${index + clientLogos.length}`} className="flex-shrink-0 mx-16 relative w-[200px] h-[160px]">
                              <Image
                                  src={logo}
                                  alt={`Client Logo ${index + 1 + clientLogos.length}`}
                                  fill={true}
                                  style={{ objectFit: 'contain' }}
                              />
                          </div>
                      ))}
                  </div>
              </div>
          )}

          {/* Single Toggle Button for "SEE ALL" / "SHOW FEWER" */}
          <div className="text-center mt-8 mb-1">
              <Button
                  variant={seeAll ? "outline" : "default"} // Change variant based on state
                  className="px-8 py-3 text-lg font-semibold" // Text color will be handled by the Button component's variant logic
                  onClick={() => setShowAll(!seeAll)} // Toggle the state
              >
                  {seeAll ? "SHOW FEWER CLIENTS" : "SEE ALL CLIENTS"}
              </Button>
          </div>
      </div>
  );
};

// New ContactUs Component
const ContactUs: React.FC = () => {
  const specificLocationCoordinates = { lat: 29.969692312109558, lng: 31.2750723178029 };
  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      // Check if google.maps is available (API loaded)
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(
          document.getElementById('map') as HTMLElement,
          {
            center: specificLocationCoordinates, // Use the specific coordinates
            zoom: 16, // Increased zoom level to be more specific
            mapId: "DEMO_MAP_ID", // Optional: Use a Map ID for custom styling from Cloud Console
          }
        );
        new window.google.maps.Marker({
          position: specificLocationCoordinates, // Place marker at specific coordinates
          map: map,
          title: 'ibs'
        });
      } else {
        console.warn('Google Maps API not loaded yet.');
      }
    };
    // Load Google Maps API script only if it's not already loaded
    if (!document.getElementById('google-maps-script')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBo7J0C5GNqt694roRnK8UXPcgtlvlkTQU&callback=initMap`; // REPLACE 'YOUR_GOOGLE_MAPS_API_KEY'
      script.async = true;
      script.defer = true;
      script.id = 'google-maps-script';
      // Assign initMap to the window object so it's globally accessible as a callback
      (window as any).initMap = initMap;
      document.head.appendChild(script);
    } else {
      // If script is already present, but map not initialized (e.g., component re-mount)
      // Call initMap directly if the API is ready
      if (window.google && window.google.maps) {
        initMap();
      }
    }

    // Cleanup function if component unmounts (optional for single page, good practice)
    return () => {
      // Remove the script if necessary, though for single-page apps it might not be critical
      const script = document.getElementById('google-maps-script');
      if (script) {
        script.remove();
      }
      delete (window as any).initMap; // Clean up the global callback
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="py-8 text-center ">
      {/* Wrapper div for the heading to apply borders */}
      {/* Added w-fit and mx-auto to control the line length and center it */}
      <div className="border-t border-b border-[#000000] py-4 mb-8 mt-0 w-fit mx-auto">
      <h2 className="text-2xl font-semibold text-foreground m-0 text-[#ed253c]">CONTACT US</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-center">
        {/* Map Container - Replaced Image with a div for the map */}
        <div id="map" className="relative w-full md:w-1/2 h-64 md:h-96 rounded-lg shadow-lg overflow-hidden bg-[#828282] flex items-center justify-center text-[#000000]">
          {/* Fallback text if map doesn't load */}
          Loading Map...
        </div> 

        {/* Working Hours & Address */}
        <div className="md:w-1/2 text-left p-4">
        <p className="text-xl font-bold text-[#000000] dark:text-[#000000] mb-8">
      CALL US ON <span className="text-xl font-bold text-[#ed253c] dark:text-[#ed253c]">19786</span>
      </p>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Working Hours</h3>
          <p className="text-[#828282]  mb-2">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
          <p className="text-[#828282]  mb-2">Friday - Saturday: Closed</p>
          <h3 className="text-xl font-semibold mt-6 mb-2 text-foreground">Address</h3>
          <p className="text-[#828282] ">2261 New Maadi, Cairo, Egypt</p>
          <p className="text-[#828282] ">Al Nahda Al Gadida, Maadi</p>

        </div>
      </div>
    </div>
  );
};

// Main Home Component
const Home: React.FC = () => {
  const NavbarButtons: NavbarButton[] = [
    { label: 'Home', href: '/' },
    { label: 'Our Services', href: '/services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const [seeAll, setSeeAll] = React.useState(false);

  return (
    <div className="bg-[#fafafa] min-h-screen relative overflow-hidden ">
      <Navbar buttons={NavbarButtons} />
      <Cover
        imageUrl={coverImage}
        mainText="WE ASSIST, YOU SUCCEED"
        subText="With over 35 years of experience, we're your local experts in delivering HR outsourcing solutions that drive success"
      />

      {/* New section with background color after Cover Image */}
      <div className="w-full bg-[#EFEFEF] py-2 my-3">    {/* Added background color and padding */}
        <div className="container mx-auto px-3 md:px-6 lg:px-8 text-left ">
          {/* Replaced placeholder text with TextWithLink */}
          <TextWithLink
            text="New This Week!: "
            text2="New Legal Amends effecting workforce just got announced"
            href="/about-us"   // Link to the blogs   abut us for trial
          />   
        </div>
      </div>

      {/* Team Photo Section - Directly embedded here */}
      <div className="my-8 relative w-full max-w-4xl mx-auto h-[170px] md:h-[170px]">
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


      {/* The new background rectangle for cards - adjusted top and height for new layout */}
      <div
        className="absolute bg-[#EFEFEF] z-0 hidden md:block" // Hidden on small screens, adjust as needed
        style={{
          width: '100%', // Make it responsive
          maxWidth: '1519px',  // Max width as per design
          height: '500px', // Adjusted height to cover services
          left: '-34px', 
          top: '1135px',  // Adjusted top based on visual flow, might need fine-tuning
          margin: '50px',
        }}
      ></div>

      <div
        className={cn(
        'container mx-auto py-3 -my-10 px-4 md:px-6 lg:px-8 relative z-10'
        )}
      >

        {/* Our Services Section - now a list */}
        <OurServices />
        </div>
        {/* Our Clients Section */}
        <OurClients seeAll={seeAll} setShowAll={setSeeAll} />

        {/* Contact Us Section */}
      <ContactUs />

      
    </div>
  );
};

export default Home;
