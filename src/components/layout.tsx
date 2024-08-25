'use client';

import { useState } from 'react';
import Sidebar from './Sidebar/page';
import Footer from './Footer/page';

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
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <main className="flex-grow bg-secondary text-accent">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
