'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const TestimonialTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'talent' | 'employer'>('talent');

  return (
    <div className=" bg-gray-100 flex items-center justify-center px-12 py-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 px-4 py-2 font-semibold ${
              activeTab === 'talent'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('talent')}
          >
            Talent
          </button>
          <button
            className={`w-1/2 ml-2 px-4 py-2 font-semibold ${
              activeTab === 'employer'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('employer')}
          >
            Employer
          </button>
        </div>

        <div>
          {activeTab === 'talent' ? (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">What Our Talents Say</h2>
              <p className="text-gray-700 mb-6">
                Read inspiring stories from talents who have found their dream jobs through WorkConnect.
              </p>
              <Link href="/testimonials/talent" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  View Talent Testimonials
                </a>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">What Our Employers Say</h2>
              <p className="text-gray-700 mb-6">
                Discover how employers have successfully built their teams using WorkConnect.
              </p>
              <Link href="/testimonials/employer" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  View Employer Testimonials
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialTabs;
