'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">Why Choose WorkSphere?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/Jobs/job-range" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/wide.png"
                alt="Wide Range of Jobs"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">Wide Range of Jobs</h3>
            <p className="mt-2 text-gray-600">Explore job opportunities across multiple industries.</p>
          </Link>
          <Link href="/Jobs/hire" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/topTalent.png"
                alt="Top Talent"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">Top Talent</h3>
            <p className="mt-2 text-gray-600">Connect with skilled freelancers for your projects.</p>
          </Link>
          <Link href="/Jobs/certificate" className="p-6 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 block">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg overflow-hidden">
              <Image
                src="/images/Certificate.png"
                alt="Certifications"
                layout="responsive"
                width={128}
                height={128}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">Certifications</h3>
            <p className="mt-2 text-gray-600">Get certified and increase your credibility.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
