'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const SignupTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'talent' | 'employer'>('talent');

  return (
    <div className="bg-gray-100 flex items-center justify-center py-12 sm:py-16">
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
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Join as a Talent</h2>
              <p className="text-gray-700 mb-6">
                Showcase your skills, connect with top employers, and find the job that matches your career aspirations.
              </p>
              <Link href="/signup/talent" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Sign Up as Talent
                </a>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Join as an Employer</h2>
              <p className="text-gray-700 mb-6">
                Find top talent, post job listings, and manage applications to build your dream team.
              </p>
              <Link href="/signup/employer" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Sign Up as Employer
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupTabs;
