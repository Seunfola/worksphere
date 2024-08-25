'use client';

import React from 'react';
import Image from 'next/image';

const SoftSkillTest: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto flex justify-center items-center flex-col text-center">
        <h2 className="text-4xl font-bold mb-8 text-primary">Soft Skill Certification</h2>
        <div className="flex justify-center">
          <div className="flex flex-col items-center p-8 bg-gray-100 shadow-md rounded-lg transition-transform transform hover:scale-105 max-w-lg">
            <Image src="/images/soft-skill.png" alt="Soft Skill Certification" width={120} height={120} className="mb-6" />
            <p className="text-lg text-gray-700 mb-6">
              Enhance your professional toolkit with a Soft Skill Certification from WorkSphere. This certification validates your ability to effectively communicate, collaborate, and manage tasks within any team setting, making you an invaluable asset in the workplace.
            </p>
            <a href="/certifications/soft-skill" className="mt-4 bg-primary text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors">
              Take the Test
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillTest;
