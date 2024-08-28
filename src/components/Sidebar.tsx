'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faBriefcase, faChartLine, faCog, faUser, faTimes, faBars, faCircle, faChevronDown, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  const [isJobsOpen, setIsJobsOpen] = useState(false);

  const toggleJobs = () => {
    setIsJobsOpen(!isJobsOpen);
  };

  return (
    <aside
      className={`bg-gray-800 text-white h-screen fixed transition-all duration-300 z-50 ${
        isOpen ? 'w-60' : 'w-20'
      } flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        <button onClick={onToggleSidebar} className="text-white focus:outline-none">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>
      <nav className="flex-1 mt-6">
        <ul className="space-y-4">
          <li className="flex items-center space-x-4 px-4">
            <FontAwesomeIcon icon={faHome} className="text-center w-5" />
            <a href="/profile/employerProfile/home" className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Home
            </a>
          </li>
          <li className="flex items-center space-x-4 px-4">
            <FontAwesomeIcon icon={faUsers} className="text-center w-5" />
            <a href="/profile/employerProfile/team" className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Team
            </a>
          </li>
          <li>
            <div className="flex items-center justify-between space-x-4 px-4 cursor-pointer" onClick={toggleJobs}>
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-center w-5" />
                <span className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                  Jobs
                </span>
              </div>
              <FontAwesomeIcon
                icon={isJobsOpen ? faChevronDown : faChevronRight}
                className={`text-center transition-transform duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
              />
            </div>
            {isJobsOpen && (
              <ul className="pl-8 mt-2 space-y-2">
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCircle} className="text-blue-500 text-xs" />
                  <a href="/profile/employerProfile/jobs/applied" className="hover:text-primary">
                    Applied
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCircle} className="text-red-500 text-xs" />
                  <a href="/profile/employerProfile/jobs/rejected" className="hover:text-primary">
                    Rejected
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={faCircle} className="text-green-500 text-xs" />
                  <a href="/profile/employerProfile/jobs/pending" className="hover:text-primary">
                    Pending
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li className="flex items-center space-x-4 px-4">
            <FontAwesomeIcon icon={faChartLine} className="text-center w-5" />
            <a href="/profile/employerProfile/analytics" className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Analytics
            </a>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <ul className="space-y-4 px-4 pb-4">
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faUser} className="text-center w-5" />
            <a href="/profile/employerProfile/user" className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              User Profile
            </a>
          </li>
          <li className="flex items-center space-x-4">
            <FontAwesomeIcon icon={faCog} className="text-center w-5" />
            <a href="/profile/employerProfile/settings" className={`hover:text-primary transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
              Settings
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
