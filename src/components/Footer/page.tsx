'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone, faChevronRight, faChevronUp, faChevronDown, faQuestionCircle, faLock, faFileContract } from '@fortawesome/free-solid-svg-icons';

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
        { label: 'Find Talent', href: '/jobs/hire-a-talent' },
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
       { label: 'Coding Test', href: '/Jobs/certificate/coding' },
      { label: 'Language Test', href: '/Jobs/certificate/language' },
      { label: 'Soft Skill Test', href: '/Jobs/certificate/soft-skill' },
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
    <footer className="bg-gradient-to-b from-white to-gray-100 text-grey-700 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center md:text-left mb-8">
          <div className="w-full md:w-1/3 p-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 mr-2" />
            <a
              href="https://www.google.com/maps?q=1010+Avenue,+SW+54821,+Chandigarh"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              1010 Avenue, SW 54821, Chandigarh
            </a>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <FontAwesomeIcon icon={faPhone} className="text-orange-500 mr-2" />
            <a href="tel:+9876543210" className="hover:text-orange-500">
              9876543210
            </a>
          </div>
          <div  className="w-full md:w-1/3 p-4">
            <FontAwesomeIcon icon={faEnvelope} className="text-orange-500 mr-2" />
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=mail@workconnect.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
    mail@workconnect.com
  </Link>
          </div>
        </div>

        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 p-4">
            <div className="text-left">
              <h1 className="text-3xl font-bold text-grey-700 mb-4">WorkConnect</h1>
              <p className="text-gray-500 mb-4">
                Workconnect is the premier platform for jobseekers, employers, and freelancers to connect, collaborate, and find opportunities.
              </p>
              <ul className="text-left">
                <li className="mb-2">
                  <Link href="/FAQ" className="hover:text-orange-500">
                    <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
                    FAQs
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Privacy" className="hover:text-orange-500">
                    <FontAwesomeIcon icon={faLock} className="mr-2" />
                    Privacy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/Terms" className="hover:text-orange-500">
                    <FontAwesomeIcon icon={faFileContract} className="mr-2" />
                    Terms of Service
                  </Link>
                </li>
              </ul>
              <h5 className="uppercase text-lg font-bold text- mt-4 mb-2">Follow us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold text-grey-700 mb-4">Useful Links</h5>
            <ul className="text-left">
              {footerItems.map((item, index) => (
                <li key={index} className="mb-2">
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="hover:text-orange-500">
                      {item.label}
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
                          <Link href={subLink.href} className="text-sm hover:text-orange-500">
                            {subLink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/3 p-4">
            <h5 className="uppercase text-lg font-bold text-grey-700 mb-4">Subscribe</h5>
            <p className="mb-4">
              Join our <a href="https://slack.com/" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-600">Slack community</a> to connect with other professionals and stay updated with the latest opportunities.
            </p>
            <p className="mb-4">
              Don’t miss out on the latest opportunities and updates. Subscribe to our newsletter.
            </p>
            <form>
              <div className="flex">
                <input
                  type="email"
                  className="w-full p-2 rounded-l bg-gray-700 border border-gray-600 text-white focus:outline-none"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="bg-orange-500 p-2 rounded-r text-white"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Section with Links */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-600">&copy; 2024 Workconnect. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <Link href="/Terms" className="text-gray-400 hover:text-white">Terms</Link>
            <Link href="/Privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link href="/policy" className="text-gray-400 hover:text-white">Policy</Link>
            <Link href="/enquiry/contact" className="text-gray-400 hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
