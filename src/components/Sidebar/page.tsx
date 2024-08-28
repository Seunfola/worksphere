'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faBriefcase, faUsers, faCertificate, faCommentDots, faEnvelope, faSignInAlt, faDonate } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

const sidebarItems = [
  {
    label: 'Home',
    href: '/',
    icon: faHome,
  },
  {
    label: 'Jobs',
    href: '/Jobs',
    icon: faBriefcase,
    subLinks: [
      { label: 'Find a Talent', href: '/Jobs/hire' },
      { label: 'Search for a Job', href: '/Jobs/search' },
      { label: 'Post a Job', href: '/Jobs/post' },
    ],
  },
  {
    label: 'Freelancers',
    href: '/freelancers',
    icon: faUsers,
    subLinks: [
      { label: 'Find a Freelancer', href: '/freelancers/find' },
      { label: 'Become a Freelancer', href: '/freelancers/become' },
    ],
  },
  {
    label: 'Certifications',
    href: '/Jobs/certifications',
    icon: faCertificate,
    subLinks: [
      { label: 'Coding Test', href: '/Jobs/certificate/coding' },
      { label: 'Language Test', href: '/Jobs/certificate/language' },
      { label: 'Soft Skill Test', href: '/Jobs/certificate/soft-skill' },
    ],
  },
  {
    label: 'Testimonials',
    href: '/testimonials',
    icon: faCommentDots,
    subLinks: [
      { label: 'Talent', href: '/testimonials/talent' },
      { label: 'Employer', href: '/testimonials/employer' },
    ],
  },
  {
    label: 'Enquiry',
    href: '/enquiry',
    icon: faEnvelope,
    subLinks: [
      { label: 'Feedback', href: '/enquiry/feedback' },
      { label: 'Contact Us', href: '/enquiry/contact' },
    ],
  },
  {
    label: 'Signup',
    href: '/signup',
    icon: faSignInAlt,
    subLinks: [
      { label: 'Talent', href: '/signup/talent' },
      { label: 'Employer', href: '/signup/employer' },
    ],
  },
  {
    label: 'Donate',
    href: '/donate',
    icon: faDonate,
  },
];

const Sidebar = ({ isOpen, onToggleSidebar }: SidebarProps) => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleToggleSection = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index]
    );
  };

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
                {item.subLinks && isOpen && (
                  <button
                    className="text-white hover:text-gray-300 ml-2"
                    onClick={() => handleToggleSection(index)}
                  >
                    {openSections.includes(index) ? '▲' : '▼'}
                  </button>
                )}
              </div>
              {item.subLinks && openSections.includes(index) && isOpen && (
                <ul className="ml-6 mt-2 space-y-2">
                  {item.subLinks.map((subLink, subIndex) => (
                    <li key={subIndex}>
                      <Link href={subLink.href} className="text-white hover:text-gray-300">
                        {subLink.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
