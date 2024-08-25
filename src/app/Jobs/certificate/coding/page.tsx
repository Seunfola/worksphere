'use client';

import React from 'react';
import Image from 'next/image';

const CodingTest: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex justify-center items-center flex-col text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Coding Certification</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-8 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-lg">
            <Image src="/images/coding.png" alt="Coding Certification" width={120} height={120} className="mb-6" />
            <p className="text-lg text-gray-700 mb-6">
              Validate your technical prowess with a Coding Certification from WorkSphere. Whether you're a developer, engineer, or aspiring tech professional, this certification demonstrates your ability to write clean, efficient code and solve complex problems with ease.
            </p>
            <a href="/certifications/coding" className="mt-4 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Take the Test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingTest;
