'use client';

import React, { useState, useEffect } from 'react';
import EmployerProfileLayout from './layout'; 
import Sidebar from './sidebar/page';  
import Navbar from '@/components/Navbar/page';   
import Footer from '@/components/Footer/page';  
import ProfileCard from './profileCard/page';
import ProgressCard from './progressCard/page';
import InfoSection from './infoSection/page';

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
      
      <div
        className={`flex flex-col w-full transition-all duration-300 ${
          isSidebarOpen ? 'ml-60' : 'ml-20'
        }`}
      >
        <Navbar />
        <EmployerProfileLayout>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileCard
                name="Ronald Richards"
                email="RonaldRich@example.com"
                phone="(219) 555-0114"
                profileImageUrl="/path/to/profile.jpg"
                location="California"
                bio="Hi 👋, I'm Ronald, a passionate UX designer with 10 years of experience..."
                onEditClick={() => console.log('Edit Profile')}
                onSaveLocation={(location) => console.log('Save Location:', location)}
                onSaveBio={(bio) => console.log('Save Bio:', bio)}
              />

              <InfoSection
                title="All Personal Informations"
                items={[
                  { label: 'Email', value: 'RonaldRich@example.com' },
                  { label: 'Phone', value: '(219) 555-0114' },
                  { label: 'Date of Birth', value: '03 September 2000' },
                  { label: 'Salary Expectation', value: '$24,000' },
                  { label: 'Work Type', value: 'Remote, Fulltime, Part-Time, Internship, Freelance' },
                ]}
                onEditClick={() => console.log('Edit Personal Info')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InfoSection
                title="All Experiences"
                items={[
                  { label: 'Trendyol.com', value: 'Fulltime - Oct 2021 - Dec 2022' },
                  { label: 'TikaGelsin', value: 'Front-End Developer - Oct 2020 - Dec 2021' },
                  { label: 'Pazarama', value: 'Internship - Oct 2019 - Oct 2020' },
                ]}
                onEditClick={() => console.log('Edit Experience')}
              />

              <ProgressCard
                completionPercentage={40}
                steps={[
                  'Setup account 10%',
                  'Upload your photo 5%',
                  'Personal Info 10%',
                  'Location 20%',
                  'Biography 15%',
                  'Notifications 10%',
                  'Bank details 30%',
                ]}
              />
            </div>
          </div>
        </EmployerProfileLayout>
        <Footer />
      </div>
    </div>
  );
};

export default EmployerProfilePage;
