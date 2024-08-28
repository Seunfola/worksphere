'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center h-32">
      <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-primary" />
    </div>
  ),
});

const PostJob: React.FC = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    location: '',
    jobType: 'Full-Time', // Default job type selection
    description: '',
    salaryRange: '',
    requiredSkills: '',
    applicationDeadline: '',
    contactEmail: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDescriptionChange = (value: string) => {
    setFormData({
      ...formData,
      description: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posted:', formData);
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-6 sm:mb-8">Post a Job</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="jobTitle" className="block text-left text-gray-800 mb-2">
              Job Title
            </label>
            <input
              type="text"
              id="jobTitle"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="company" className="block text-left text-gray-800 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="location" className="block text-left text-gray-800 mb-2">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-left text-gray-800 mb-2">Job Type</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="jobType"
                  value="Full-Time"
                  checked={formData.jobType === 'Full-Time'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Full-Time
              </label>
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="jobType"
                  value="Remote"
                  checked={formData.jobType === 'Remote'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remote
              </label>
              <label className="flex items-center text-gray-800">
                <input
                  type="radio"
                  name="jobType"
                  value="Hybrid"
                  checked={formData.jobType === 'Hybrid'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Hybrid
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-left text-gray-800 mb-2">
              Job Description
            </label>
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              className="text-gray-800"
              theme="snow"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="salaryRange" className="block text-left text-gray-800 mb-2">
              Salary Range
            </label>
            <input
              type="text"
              id="salaryRange"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., $50,000 - $70,000"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="requiredSkills" className="block text-left text-gray-800 mb-2">
              Required Skills
            </label>
            <input
              type="text"
              id="requiredSkills"
              name="requiredSkills"
              value={formData.requiredSkills}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 border text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., JavaScript, React, Node.js"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="applicationDeadline" className="block text-left text-gray-800 mb-2">
              Application Deadline
            </label>
            <input
              type="date"
              id="applicationDeadline"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contactEmail" className="block text-left text-gray-800 mb-2">
              Contact Email
            </label>
            <input
              type="email"
              id="contactEmail"
              name="contactEmail"
              value={formData.contactEmail}
              onChange={handleChange}
              className="w-full p-2 sm:p-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white p-3 rounded-md hover:bg-primary-dark transition-colors"
          >
            Post Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default PostJob;
