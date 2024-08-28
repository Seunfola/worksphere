'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Feedback: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
    image: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData({
        ...formData,
        image: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6 sm:mb-8">Leave Your Feedback</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
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
              className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
              className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-left text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              rows={5}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-left text-gray-700 mb-2">Rating</label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`text-2xl sm:text-3xl ${formData.rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                  onClick={() => handleRatingChange(star)}
                >
                  <FontAwesomeIcon icon={faStar} />
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-left text-gray-700 mb-2">
              Upload Image (Optional)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {formData.image && (
              <div className="mt-4">
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Selected"
                  className="max-h-40 sm:max-h-48 mx-auto rounded-lg"
                />
              </div>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white p-2 sm:p-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
