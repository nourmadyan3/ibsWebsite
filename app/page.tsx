/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  '/images/metlife_logo.jpg',
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

// New EmailContactForm Component
interface EmailContactFormProps {
  targetEmail: string;
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
    <div className="py-8 bg-white relative w-full overflow-hidden min-h-[350px]">
      <div className="absolute top-16 right-0 w-full md:w-1/2 h-full z-0">
        <Image
          src={imageUrl}
          alt="About Us Illustration"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          className="opacity-30 md:opacity-60"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12">
        <div className="md:w-3/3">
          <h2 className="text-2xl font-semibold mb-4 ml-7 text-[#ed253c]">
            ABOUT US
          </h2>
          <p className="text-[#828282] ml-7 leading-relaxed text-justify">
            {text}
          </p>
        </div>
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
      href: '/services'
    },
    {
      title: 'Social Insurance',
      description: 'IBS manages all employee social insurance, providing authorized documentation and ensuring continuous updates in line with government regulations.',
      href: '/services/social-insurance'
    },
    {
      title: 'Medical Insurance',
      description: 'IBS administers medical, life, and accident insurance plans based on client preferences through managing the issuance of the policies, renewals, claims and approvals.',
      href: '/services/medical-insurance'
    },
    {
      title: 'Personnel',
      description: 'We provide personnel with all onboarding and offboading process including; employment agreement, legal compliance, and vacation records, experience certificates and all necessary documents needed.',
      href: '/services/personnel-issues'
    },
    {
      title: 'Work Permit',
      description: 'We handle work permits for expatriates, managing the full process from entry approval to final issuance, with renewals.',
      href: '/services/work-permits'
    },
  ];

  return (
    <div className="py-7 mt-15">
      <h2 className="text-2xl font-semibold mb-8 text-[#ed253c]">OUR SERVICES</h2>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center md:items-center gap-4 pb-3 ${index < services.length - 1 ? 'border-b border-[#bdbdbd]' : ''}`}
          >
            <span className="w-4 h-4 bg-[#ed253c] rounded-full flex-shrink-0 mt-1 md:mt-0"></span>
            <div className="flex flex-col md:flex-row md:items-center w-full gap-6">
              <a
                href={service.href}
                className="text-lg font-semibold hover:text-[#ed253c] min-w-[140px] md:text-left cursor-default"
                style={{ flex: '0 0 160px' }}
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
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8 ml-12 lg:px-6 text-left text-[#ed253c]">OUR CLIENTS</h2>

      <div className="relative w-full overflow-hidden bg-white py-8">
        <div className="flex w-full">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`logo-${index}`} 
                className="mx-12 flex items-center justify-center"
                style={{ minWidth: '200px' }}
              >
                <Image
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  width={160}
                  height={80}
                  style={{ 
                    objectFit: 'contain',
                    maxHeight: '80px',
                    maxWidth: '160px',
                    filter: 'grayscale(0%)',
                    opacity: '0.8'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .animate-marquee {
          animation: marquee 80s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

// New EmailContactForm Component
const EmailContactForm: React.FC<EmailContactFormProps> = ({ targetEmail }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });
  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields (Name, Email, Subject, Message).');
      return;
    }

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const mailOptions = {
        from: formData.email, // this will be used as replyTo
        to: 'nmohamed2399@gmail.com',
        subject: formData.subject,
        text: formData.message,
        html: `
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Telephone:</strong> ${formData.telephone}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        `,
      };

      // Replace with your actual API endpoint or third-party service call
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mailOptions),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', telephone: '', subject: '', message: '' }); // Clear form
      } else {
        const errorData = await response.json();
        setStatus('error');
        setErrorMessage(errorData.message || 'Failed to send email. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-xl ml-5">{/* Added mx-auto for centering */}
      <h2 className="text-2xl font-bold mb-6 text-center text-[#ed253c]">Send An E-mail</h2>

      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#ed253c] mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ed253c] focus:border-[#ed253c] sm:text-sm"
            //placeholder="Your Name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#ed253c] mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ed253c] focus:border-[#ed253c] sm:text-sm"
            //placeholder="Your Email"
            required
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-[#ed253c] mb-1">Telephone</label>
          <input
            type="tel"  // Use type="tel" for telephone numbers
            id="telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ed253c] focus:border-[#ed253c] sm:text-sm"
            //placeholder="Telephone"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-[#ed253c] mb-1">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ed253c] focus:border-[#ed253c] sm:text-sm"
            //placeholder="Subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-[#ed253c] mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#ed253c] focus:border-[#ed253c] sm:text-sm"
            //placeholder="Your Message"
            required
          ></textarea>
        </div>

        {status === 'sending' && (
          <p className="text-blue-600 text-center">Sending...</p>
        )}

        {status === 'success' && (
          <p className="text-green-600 text-center">Message sent successfully!</p>
        )}
        
        {status === 'error' && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}
        
        <button
          type="submit"
          className="w-full bg-[#ed253c] text-white py-3 px-4 rounded-md font-semibold text-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
          disabled={status === 'sending'}
        >
          <svg className="w-5 h-5 transform rotate-45" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l4.41-1.103 5.076 2.839a1 1 0 001.262-1.262L10.894 2.553z"></path>
          </svg>
          Send
        </button>
      </form>
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
    <div className="py-8">
      {/* Wrapper div for the heading to apply borders */}
      {/* Added w-fit and mx-auto to control the line length and center it */}
      <div className="border-t border-b border-[#000000] py-4 mb-8 mt-0 w-fit mx-auto">
        <h2 className="text-2xl font-semibold text-foreground m-0 text-[#ed253c]">CONTACT US</h2>
      </div>

      {/* Flex row for form and map/info */}
      <div className="flex flex-col md:flex-row gap-8 items-start justify-center w-full">
        {/* Email Form */}
        <div className="w-full md:w-1/2">
          <EmailContactForm targetEmail = "nourmadyan3@gmail.com"/>
        </div>

        {/* Map and Info */}
        <div className="w-full md:w-1/3 flex flex-col gap-2">
          <div id="map" className="relative w-full h-64 rounded-lg shadow-lg overflow-hidden bg-[#828282] flex items-center justify-center text-[#000000]">
            Loading Map...
          </div>
          <div className="text-left p-2">
            <p className="text-xl font-bold text-[#000000] dark:text-[#000000] mb-5">
              CALL US ON <span className="text-xl font-bold text-[#ed253c] dark:text-[#ed253c] ">19786</span>
            </p>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Working Hours</h3>
            <p className="text-[#828282] text-sm">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
            <p className="text-[#828282] text-sm">Friday - Saturday: Closed</p>
            <h3 className="text-xl font-semibold mt-5 mb-2 text-foreground">Address</h3>
            <p className="text-[#828282] text-sm">New Maadi, 10 Street 261, Ezbet Fahmy</p>
            <p className="text-[#828282] text-sm">El Basatin, Cairo Governorate</p>
          </div>
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
            href="/blogs"   // Link to the blogs   about us for trial
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

      {/* Replaced OurClients component with a simple link/button to the dedicated Clients page */}
      <OurClients seeAll={seeAll} setShowAll={setSeeAll} />
      <div className="text-center py-2">
      <Link href="/about-us/our-clients" passHref>
                        <Button variant="default" className="px-8 py-1 text-lg font-semibold">
                            VIEW ALL CLIENTS
                        </Button>
                    </Link>
      </div>
      
      {/* Contact Us Section */}
      <div className="py-8">
      <ContactUs />
      </div>
      
      
    </div>
  );
};

export default Home;
