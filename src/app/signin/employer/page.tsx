'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const EmployerSignin: React.FC = () => {
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
    console.log('Employer Signin submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">Employer Sign In</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
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
            className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Sign In
          </button>
          <div className="mt-4 text-gray-700">
            Don't have an account?{' '}
            <Link href="/signup/employer" className="text-primary hover:underline">
              Sign Up
            </Link>
          </div>
          <div className="mt-2 text-gray-700">
            Forgot your password?{' '}
            <Link href="/forgot-password/employer" className="text-primary hover:underline">
              Reset it here
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmployerSignin;
