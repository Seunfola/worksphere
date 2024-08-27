'use client';

import Link from 'next/link';
import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-ws-soft-white text-primary text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Get Started with WorkSphere
        </h2>
        <p className="mt-4 text-base sm:text-lg text-secondary">
          Join our community and start your journey today.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/signup/talent" legacyBehavior>
            <a className="bg-ws-muted-gold text-primary px-6 py-3 rounded-md hover:bg-gray-200 transition-colors w-full sm:w-auto text-center">
              Join as a Talent
            </a>
          </Link>
          <Link href="/signup/employer" legacyBehavior>
            <a className="bg-secondary text-primary px-6 py-3 rounded-md hover:bg-gray-300 transition-colors w-full sm:w-auto text-center">
              Join as an Employer
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
