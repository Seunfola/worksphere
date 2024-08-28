'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const FreelancerLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'signup'>('search');

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center px-12 py-12">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
          Welcome to the Freelancer Hub
        </h1>
        <p className="text-gray-700 mb-6">
          Explore top talent or become a part of our thriving freelancer community.
        </p>
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 px-4 py-2 font-semibold ${
              activeTab === 'search'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('search')}
          >
            Search for Freelancers
          </button>
          <button
            className={`w-1/2 ml-2 px-4 py-2 font-semibold ${
              activeTab === 'signup'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Become a Freelancer
          </button>
        </div>

        <div>
          {activeTab === 'search' ? (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Find the Right Freelancer for Your Project
              </h2>
              <p className="text-gray-700 mb-6">
                Browse through our pool of skilled freelancers and find the perfect match for your project needs.
              </p>
              <Link href="/freelancers/search" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Search Freelancers
                </a>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
                Join Our Freelancer Community
              </h2>
              <p className="text-gray-700 mb-6">
                Sign up to offer your services and connect with clients looking for your expertise.
              </p>
              <Link href="/freelancers/become-freelancer" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Become a Freelancer
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FreelancerLandingPage;
