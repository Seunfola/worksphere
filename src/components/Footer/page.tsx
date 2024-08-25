'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faChevronDown, faChevronUp, faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections((prevOpenSections) =>
      prevOpenSections.includes(index)
        ? prevOpenSections.filter((i) => i !== index)
        : [...prevOpenSections, index]
    );
  };

  const footerItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Jobs',
      href: '/jobs',
      subLinks: [
        { label: 'Hire a Talent', href: '/jobs/hire-a-talent' },
        { label: 'Search for a Job', href: '/jobs/search' },
        { label: 'Post a Job', href: '/jobs/post' },
      ],
    },
    {
      label: 'Freelancers',
      href: '/freelancers',
      subLinks: [
        { label: 'Find a Freelancer', href: '/freelancers/find' },
        { label: 'Become a Freelancer', href: '/freelancers/become' },
      ],
    },
    {
      label: 'Certifications',
      href: '/certifications',
      subLinks: [
        { label: 'Coding Test', href: '/certifications/coding' },
        { label: 'Language Test', href: '/certifications/language' },
        { label: 'Soft Skill Test', href: '/certifications/soft-skill' },
      ],
    },
    {
      label: 'Testimonials',
      href: '/testimonials',
      subLinks: [
        { label: 'Talent', href: '/testimonials/talent' },
        { label: 'Employer', href: '/testimonials/employer' },
      ],
    },
    {
      label: 'Enquiry',
      href: '/enquiry',
      subLinks: [
        { label: 'Feedback', href: '/enquiry/feedback' },
        { label: 'Contact Us', href: '/enquiry/contact' },
      ],
    },
    {
      label: 'Signup',
      href: '/signup',
      subLinks: [
        { label: 'Talent', href: '/signup/talent' },
        { label: 'Employer', href: '/signup/employer' },
      ],
    },
    {
      label: 'Donate',
      href: '/donate',
    },
  ];

  return (
    <footer className="bg-background text-center text-primary py-8 mt-auto">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-8">
          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-4 text-primary">About Us</h5>
            <p className="text-secondary">
              WorkSphere is a platform that connects freelancers with businesses and entrepreneurs who need help with various projects and tasks.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-4 text-primary">Navigation</h5>
            <ul className="text-left">
              {footerItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} legacyBehavior>
                      <a className="hover:text-accent">{item.label}</a>
                    </Link>
                    {item.subLinks && (
                      <button
                        className="ml-2 text-accent focus:outline-none"
                        onClick={() => toggleSection(index)}
                      >
                        <FontAwesomeIcon
                          icon={
                            openSections.includes(index)
                              ? faChevronUp
                              : faChevronDown
                          }
                          className="text-primary hover:text-accent"
                        />
                      </button>
                    )}
                  </div>
                  {item.subLinks && openSections.includes(index) && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {item.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link href={subLink.href} legacyBehavior>
                            <a className="text-sm hover:text-accent">{subLink.label}</a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mb-2">
                <button className=" hover:text-primary">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> View Location
                </button>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold mb-4 text-primary">Get in Touch</h5>
            <p className="text-secondary flex items-center">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />  <a href="mailto:info@worksphere.com" className="ml-2">info@worksphere.com</a>
            </p>
            <p className="text-secondary flex items-center">
              <FontAwesomeIcon icon={faPhone} className="mr-2" /> <a href="tel:+1234567890" className="ml-2">+1 234 567 890</a>
            </p>
            <p className="text-secondary flex items-center">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" /> <a href="https://www.google.com/maps?q=123+Main+St,+Anytown,+USA+12345" target="_blank" rel="noopener noreferrer" className="ml-2">
                Atlanta, USA.
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4 space-x-6">
          <a
            href="https://twitter.com/worksphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://instagram.com/worksphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com/company/worksphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://facebook.com/worksphere"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-accent transition-colors"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <p className="text-secondary">&copy; {new Date().getFullYear()} WorkSphere. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
