'use client';

import React from 'react';
import Link from 'next/link';

const Jobs: React.FC = () => {
  return (
    <section className="py-16  text-gray-700 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Find Your Dream Job
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Explore our extensive list of job openings across various industries and locations.
        </p>
        <Link href="/Jobs/search" legacyBehavior>
          <a className="inline-block bg-orange-500 hover:text-gray-300 text-white font-semibold py-3 px-8 rounded-md transition-colors">
            Start Your Search
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Jobs;
