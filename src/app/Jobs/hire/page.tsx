'use client';

import React from 'react';
import Image from 'next/image';

const HireTalentSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800 flex justify-center">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Hire Top Talent for Your Projects</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-8 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-md">
            <Image src="/images/topTalent.png" alt="Hire Top Talent" width={120} height={120} className="mb-6" />
            <p className="text-lg text-gray-700 mb-6">
              Finding the right talent can be a challenge, but at WorkSphere, we make it simple. Connect with skilled professionals who are ready to bring their expertise to your projects. Whether you need developers, designers, marketers, or any other specialists, we have a pool of top talent waiting to help your business thrive.
            </p>
            <a href="/freelancers" className="mt-4 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Find a Talent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTalentSection;
