'use client';

import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-b from-white to-gray-100">
      <h1 className="text-5xl font-bold text-primary mb-4">Welcome to WorkSphere</h1>
      <p className="text-lg mb-8">Your one-stop platform for job seekers and freelancers.</p>
      <div>
        <Link href="/jobs" legacyBehavior>
          <a className="bg-ws-muted-gold text-white px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
            Find a Job
          </a>
        </Link>
        <Link href="/freelancers" legacyBehavior>
          <a className="bg-secondary text-white px-6 py-3 rounded-md ml-4 hover:bg-gray-200 transition-colors">
            Hire a Freelancer
          </a>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
