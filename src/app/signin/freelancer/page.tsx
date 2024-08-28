'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const FreelancerSignin: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., authentication)
    console.log('Freelancer Signin submitted:', formData);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6 text-center">Freelancer Sign In</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 sm:p-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-left text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-left text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition-colors"
          >
            Sign In
          </button>
          <div className="mt-4 text-center text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup/freelancer" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="mt-2 text-center text-gray-700">
            Forgot your password?{' '}
            <Link href="/forgot-password/freelancer" className="text-primary hover:underline">
              Reset it here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FreelancerSignin;
