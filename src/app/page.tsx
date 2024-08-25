'use client';

import React from 'react';
import HeroSection from '@/components/Hero/page';
import FeaturesSection from '@/components/Feature/page';
import TestimonialSection from '@/components/Testimonial/page';
import CallToActionSection from '@/components/CallToAction/page';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeroSection />
      {/* Uncomment the following sections as needed */}
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
};

export default Home;
