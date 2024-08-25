'use client';

import React, { useState } from 'react';

const Donate: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    paymentMethod: 'PayPal',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send the data to a server or payment gateway)
    console.log('Donation submitted:', formData);
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-primary mb-8">Support Our Product</h2>
        <p className="mb-8 text-gray-700">Your contributions help us continue to improve and expand our services.</p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-left text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
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
            <label htmlFor="amount" className="block text-left text-gray-700 mb-2">
              Donation Amount ($)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
              min="1"
              step="0.01"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="paymentMethod" className="block text-left text-gray-700 mb-2">
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="PayPal">PayPal</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Bank Transfer">Bank Transfer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Donate;
