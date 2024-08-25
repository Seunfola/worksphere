'use client';

import Link from 'next/link';
import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="py-16 bg-ws-soft-white text-primary text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold">Get Started with WorkSphere</h2>
        <p className="mt-4 text-lg text-secondary">Join our community and start your journey today.</p>
        <div className="mt-8 flex justify-center">
          <Link href="/signup/talent" legacyBehavior>
            <a className="bg-ws-muted-gold text-primary px-6 py-3 rounded-md hover:bg-gray-200 transition-colors">
              Join as a Talent
            </a>
          </Link>
          <Link href="/signup/employer" legacyBehavior>
            <a className="ml-4 bg-secondary text-primary px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
              Join as an Employer
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
