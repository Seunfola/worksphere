'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faLanguage, faBell, faCreditCard, faLock, faTrashAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

const sidebarItems = [
  {
    label: 'Edit Profile',
    href: '/profile/edit',
    icon: faUser,
  },
  {
    label: 'Language',
    href: '/profile/language',
    icon: faLanguage,
  },
  {
    label: 'Notifications',
    href: '/profile/notifications',
    icon: faBell,
  },
  {
    label: 'Payments',
    href: '/profile/payments',
    icon: faCreditCard,
  },
  {
    label: 'Jobs',
    href: '/jobs',
    icon: faBriefcase,
  },
  {
    label: 'Password',
    href: '/profile/password',
    icon: faLock,
  },
  {
    label: 'Delete Account',
    href: '/profile/delete',
    icon: faTrashAlt,
  },
];

const TalentProfileSidebar: React.FC<SidebarProps> = ({ isOpen, onToggleSidebar }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
      onToggleSidebar(); 
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <aside
      ref={sidebarRef}
      className={`bg-gray-800 text-white h-screen p-5 fixed transition-width duration-200 z-50 ${
        isOpen ? 'w-60' : 'w-20'
      } flex flex-col overflow-y-auto`}
    >
      <div className="flex items-center justify-between mt-6 mb-6">
        {isOpen && (
          <button onClick={onToggleSidebar} className="text-white absolute top-5 right-5 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        )}
        {!isOpen && (
          <button onClick={onToggleSidebar} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        )}
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                <Link href={item.href} className="text-white hover:text-gray-300 flex items-center pb-3">
                  <FontAwesomeIcon icon={item.icon} size="lg" className="mr-3" />
                  <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {item.label}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default TalentProfileSidebar;
