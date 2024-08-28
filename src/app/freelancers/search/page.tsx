'use client';

import React from 'react';
import { freelancers } from '@/data/freelancerData';

const FreelancerSearch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800 text-center">Find the Perfect Freelancer</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer) => (
            <div key={freelancer.id} className="bg-white shadow-md rounded-lg p-6">
              <img
                src={freelancer.imageUrl}
                alt={freelancer.name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h2 className="text-2xl font-semibold text-gray-800 text-center">{freelancer.name}</h2>
              <p className="text-gray-600 text-center mb-4">{freelancer.profession}</p>
              <p className="text-gray-700 mb-4">{freelancer.description}</p>
              <p className="text-gray-600 mb-2"><strong>Location:</strong> {freelancer.location}</p>
              <p className="text-gray-600 mb-2"><strong>Skills:</strong> {freelancer.skills.join(', ')}</p>
              <p className="text-gray-600 mb-2"><strong>Hourly Rate:</strong> {freelancer.hourlyRate}</p>
              <p className="text-yellow-500 mb-4"><strong>Rating:</strong> {freelancer.rating} ⭐</p>
              <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors">
                Hire {freelancer.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreelancerSearch;
