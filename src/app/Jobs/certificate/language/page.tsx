'use client';

import React from 'react';
import Image from 'next/image';

const LanguageTest: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex justify-center items-center flex-col text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Language Certification</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-8 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-lg">
            <Image src="/images/language.png" alt="Language Certification" width={120} height={120} className="mb-6" />
            <p className="text-lg text-gray-700 mb-6">
              Showcase your language proficiency with a Language Certification from WorkSphere. This certification highlights your ability to communicate effectively in multiple languages, making you a valuable asset in any globalized workplace.
            </p>
            <a href="/certifications/language" className="mt-4 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Take the Test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageTest;
