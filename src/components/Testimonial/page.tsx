'use client';

import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <Image
              src="/images/jane.png"
              alt="Jane"
              width={64}
              height={64}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Jane Crawling</h3>
            <div className="flex justify-center mt-2">
              {Array(5).fill(0).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
              ))}
            </div>
            <p className="mt-4 text-gray-600">"WorkSphere helped me land my dream job in just a few weeks!"</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
            <Image
              src="/images/fola.png"
              alt="John"
              width={64}
              height={64}
              className="rounded-full mx-auto"
            />
            <h3 className="text-xl font-bold mt-4">Folahan Curry</h3>
            <div className="flex justify-center mt-2">
              {Array(4).fill(0).map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />
              ))}
              <FontAwesomeIcon icon={faStar} className="text-gray-300" />
            </div>
            <p className="mt-4 text-gray-600">"Hiring freelancers on WorkSphere is fast and easy. Highly recommend!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
