/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar, { NavbarButton } from "./components/Navbar";

const inter = Inter({ subsets: ['latin'] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IBS",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
    const NavbarButtons: NavbarButton[] = [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Services', href: '/services' },
      { label: 'Blog', href: '/blog' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ];
  
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full overflow-x-hidden`}>
        <Navbar buttons={NavbarButtons} /> {/* Render Navbar here */}
        {children}   {/* This is where your page content (e.g., from app/page.tsx or app/about-us/page.tsx) will be rendered */}
      </body>  
    </html>
  );
}
