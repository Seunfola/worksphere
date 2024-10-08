'use client';

import React from 'react';
import HeroSection from '@/components/Hero/page';
import FeaturesSection from '@/components/Feature/page';
import TestimonialSection from '@/components/Testimonial/page';
import CallToActionSection from '@/components/CallToAction/page';
import Layout from '@/components/layout';

const Home: React.FC = () => {
  return (
    <Layout>
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
    </Layout>
  );
};

export default Home;
