'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-8">
          Why Choose WorkSphere?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Link href="/Jobs/job-range" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/wide.png"
                alt="Wide Range of Jobs"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-4">Wide Range of Jobs</h3>
            <p className="mt-2 text-gray-600">Explore job opportunities across multiple industries.</p>
          </Link>
          <Link href="/Jobs/hire" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/topTalent.png"
                alt="Top Talent"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-4">Top Talent</h3>
            <p className="mt-2 text-gray-600">Connect with skilled freelancers for your projects.</p>
          </Link>
          <Link href="/Jobs/certificate" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/Certificate.png"
                alt="Certifications"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mt-4">Certifications</h3>
            <p className="mt-2 text-gray-600">Get certified and increase your credibility.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
