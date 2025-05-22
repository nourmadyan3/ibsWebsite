'use client'

import React from "react";
import Image from "next/image";
import { Button } from "./components/ui/button";  
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
  CardDescription,
} from "./components/ui/card";
import { motion } from "framer-motion";
//import { TextWithLink } from "./components/TextWithLink";

// Dummy image imports (replace with your actual image paths)
const coverImage = "/images/ibs website2.jpg";
const ubdteamImage = "/images/Ubdteam.png";
const serviceImage = "/images/web10.jbg";
const ibsLogo = "/images/logo.png";

// Interface for Navbar button data
interface NavbarButton {
  label: string;
  href: string;
}

// Interface for Cover component props
interface CoverProps {
  imageUrl: string;
  text: string;
}



// Interface for ImageSection component props
interface ImageSectionProps {
  imageUrl: string;
  altText: string;
  title?: string;
  description?: string;
}

// Interface for AboutUs component props
interface AboutUsProps {
  text: string;
  imageUrl: string;
}

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
          width={30}  // Adjust size as needed
          height={30}
          className="rounded-full" // Make it a circle if appropriate
        />

        <span className="font-bold text-xl text-foreground">IBS</span>
      </div>

      <div className="space-x-4 md:space-x-6 lg:space-x-8 flex items-center">
        {buttons.map((button) => (
          <Button
            key={button.label}
            variant="ghost"
            asChild
          >
            <a href={button.href} className="hover:text-primary transition-colors">
              {button.label}
            </a>
          </Button>
        ))}
      </div>
    </nav>
  );
};

// Cover Component
const Cover: React.FC<CoverProps> = ({ imageUrl, text }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
      <Image
        src={imageUrl}
        alt="Cover Image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className={cn(
          'absolute inset-0 bg-black/30',
          'flex items-center justify-center',
        )}
      />

      <motion.div initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        className="relative z-10 text-center text-white p-4 md:p-8"
      >
        <h1
          className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold',
            'drop-shadow-lg',
          )}
        >
          {text}
        </h1>
      </motion.div>
    </div>
  );
};

// ImageSection Component
const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, altText, title, description }) => {
  return (
    <div className="my-8">
      {title && <h2 className="text-2xl font-semibold mb-2 text-foreground">{title}</h2>}
      {description && <p className="text-gray-500 mb-4">{description}</p>}
      
      <Image
        src={imageUrl}
        alt={altText}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

// AboutUs Component
const AboutUs: React.FC<AboutUsProps> = ({ text, imageUrl }) => {
  return (
    <div className="py-8 flex flex-col md:flex-row items-center gap-8">

      <div className="md:w-1/2">
        
        <h2 className={cn(
          'text-2xl font-semibold mb-4',
          'text-foreground',
        )}
        >
          About Us
        </h2>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          {text}
        </p>

      </div>

      <div className="md:w-1/2">
        
        <Image
          src={imageUrl}
          alt="About Us"
          className="w-full rounded-lg shadow-lg"
        >
        </Image>
      </div>
    </div>
  );
};

// our sevice
const OurService = () => {
  return (
    <div className="py-8">

      <h2 className="text-2xl font-semibold mb-8 text-center text-foreground"> Our Services </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Sotial Insurance</CardTitle>
            <CardDescription>Describtion of Sotial Insurance service.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about the sevice.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Taxes</CardTitle>
            <CardDescription>Description of Tax services.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about tax services.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payroll</CardTitle>
            <CardDescription>Description of Payroll services.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Payroll service details.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financial Audit</CardTitle>
            <CardDescription>Description of Financial Audit services.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Financial Audit service details.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Zakat</CardTitle>
            <CardDescription>Description of Zakat services.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Zakat service details.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Consulting</CardTitle>
            <CardDescription>Description of Consulting services.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Consulting service details.</p>
          </CardContent>
          <CardFooter>
            <Button>Learn More</Button>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
};

// Main Home Component
const Home: React.FC = () => {
  const NavbarButtons: NavbarButton[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar buttons={NavbarButtons} />
      <Cover imageUrl={coverImage} text="WE ASSIST YOU TO SUCCEED" />

      <div
        className={cn(
          'container mx-auto py-8 px-4 md:px-6 lg:px-8',
        )}
      >
        <AboutUs text="IBS is a leading professional services firm providing a comprehensive range of solutions in Social Insurance, Taxes, Zakat, Financial Audit, and Consulting.  With a commitment to excellence and a client-centric approach, we deliver tailored solutions to meet the unique needs of businesses."
          imageUrl={ubdteamImage} />
        
        <OurService />

        <ImageSection
          imageUrl={serviceImage}
          altText="Our Services"
          title="Our Services"
          description="We offer a wide range of services to help your business succeed. " />
      </div>
    </div>
  );
};

export default Home;
