'use client';

import React from 'react';
import Image from 'next/image';

const WideRangeJobsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex justify-center items-center flex-col text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-primary">Explore a Wide Range of Jobs</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-full sm:max-w-lg">
            <Image src="/images/wide.png" alt="Wide Range of Jobs" width={120} height={120} className="mb-6" />
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              At WorkSphere, we understand that every professional journey is unique. That’s why we offer an extensive range of job opportunities across various industries, roles, and locations. Whether you're looking to advance your career, make a career change, or simply find your next challenge, we've got you covered.
            </p>
            <a href="/Jobs/search" className="mt-4 bg-primary text-white px-6 sm:px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Discover Jobs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideRangeJobsSection;
