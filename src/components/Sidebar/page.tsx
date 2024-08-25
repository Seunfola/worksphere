'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faBriefcase, faUsers, faCertificate, faCommentDots, faEnvelope, faSignInAlt, faDonate } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

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
    href: '/jobs',
    icon: faBriefcase,
    subLinks: [
      { label: 'Hire a Talent', href: '/jobs/hire-a-talent' },
      { label: 'Search for a Job', href: '/jobs/search' },
      { label: 'Post a Job', href: '/jobs/post' },
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
    href: '/certifications',
    icon: faCertificate,
    subLinks: [
      { label: 'Coding Test', href: '/certifications/coding' },
      { label: 'Language Test', href: '/certifications/language' },
      { label: 'Soft Skill Test', href: '/certifications/soft-skill' },
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
      className={`bg-primary h-screen p-5 fixed transition-width duration-300 z-50 ${
        isOpen ? 'w-60' : 'w-20'
      } flex flex-col overflow-y-auto`}
    >
      <div className="flex items-center justify-between mb-6">
        {isOpen && (
          <button onClick={onToggleSidebar} className="text-accent absolute top-4 right-4 focus:outline-none">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        )}
        {!isOpen && (
          <button onClick={onToggleSidebar} className="text-accent focus:outline-none">
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
        )}
        {isOpen && (
          <Image
            src="/WorkSphere.png"
            alt="WorkSphere"
            width={90}
            height={40}
            className="ml-8 transition-all duration-300 self-center"
          />
        )}
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <div className="flex items-center justify-between">
                <Link href={item.href} className="text-accent hover:text-primary-light flex items-center">
                  <FontAwesomeIcon icon={item.icon} size="lg" className="mr-3" />
                  <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                    {item.label}
                  </span>
                </Link>
                {item.subLinks && isOpen && (
                  <button
                    className="text-accent hover:text-primary-light ml-2"
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
                      <Link href={subLink.href} className="text-accent hover:text-primary-light">
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
