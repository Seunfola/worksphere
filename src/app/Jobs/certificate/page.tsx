'use client';

import React from 'react';
import Image from 'next/image';

const CertificationSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex justify-center items-center flex-col text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Boost Your Credibility with Certifications</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-8 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-lg">
            <Image src="/images/Certificate.png" alt="Certifications" width={120} height={120} className="mb-6" />
            <p className="text-lg text-gray-700 mb-6">
              In today’s competitive job market, certifications can set you apart. At WorkSphere, we provide you with the opportunity to gain industry-recognized certifications that validate your expertise. Our certifications are designed to help you stand out by showcasing your skills to employers and clients with confidence.
            </p>
            <a href="/certifications" className="mt-4 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Explore Certifications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
