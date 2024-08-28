'use client';

import { useState, useEffect } from 'react';
import Sidebar from './Sidebar/page';
import Footer from './Footer/page';
import Navbar from './Navbar/page';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <div className={`fixed z-50 h-full ${isSidebarOpen ? 'w-60' : 'w-20'} transition-all duration-300`}>
        <Sidebar isOpen={isSidebarOpen} onToggleSidebar={toggleSidebar} />
      </div>
      
      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isSidebarOpen && !isMobile ? 'ml-60' : 'ml-20'
        } ${isMobile ? 'ml-0' : ''}`}
      >
        <Navbar />
        <main className="flex-grow  text-accent ">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
