'use client'

 import React from "react";
import OurClientsComponent from "../components/OurClientsComponent";

const ClientsPage: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-16">{/* Add padding top to clear Navbar */}
            <div className="container mx-auto py-8 px-4 md:px-6 lg:px-8">
                <OurClientsComponent />
            </div>
        </div>
    );
};

export default ClientsPage;