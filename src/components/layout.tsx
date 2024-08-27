'use client';

import { useState } from 'react';
import Sidebar from './Sidebar/page';
import Footer from './Footer/page';
import Navbar from './Navbar/page'; // Import the Navbar component

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      <div
        className={`flex flex-col w-full min-h-screen transition-all duration-300 ${
          isSidebarOpen ? 'ml-60' : 'ml-20'
        }`}
      >
        <Navbar />
        <main className="flex-grow bg-secondary text-accent">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
