'use client';

import React, { useState, useEffect } from 'react';
import EmployerProfileLayout from '../../../components/EmployerLayout';
import Sidebar from '../../../components/Sidebar';
import Navbar from '@/components/Navbar/page';
import Footer from '@/components/Footer/page';
import ProfileCard from '../../../components/Profile';
import ProgressCard from '../../../components/ProgressCard';
import InfoSection from '../../../components/InfoSection';

const EmployerProfilePage: React.FC = () => {
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

      <div className={`flex flex-col w-full transition-all duration-300 ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <Navbar />
        <EmployerProfileLayout>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileCard />
              <InfoSection infoType="personal" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoSection infoType="experience" />
              <ProgressCard />
            </div>
          </div>
        </EmployerProfileLayout>
        <Footer />
      </div>
    </div>
  );
};

export default EmployerProfilePage;
