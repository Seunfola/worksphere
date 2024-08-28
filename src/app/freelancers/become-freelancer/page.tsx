'use client';

import React from 'react';
import Link from 'next/link';

const BecomeFreelancer: React.FC = () => {
  return (
    <div className=" bg-gray-100 flex items-center justify-center px-12 py-12">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">Become a Freelancer</h1>
        <p className="text-gray-700 mb-6">
          Ready to offer your skills and services? Join our community of freelancers and connect with potential clients today.
        </p>
        <Link href="/signup/freelancer" legacyBehavior>
          <a className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors">
            Sign Up as a Freelancer
          </a>
        </Link>
      </div>
    </div>
  );
};

export default BecomeFreelancer;
