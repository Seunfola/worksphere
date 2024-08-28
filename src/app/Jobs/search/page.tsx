'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase, faCalendarAlt, faSortAmountUp, faSortAmountDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { jobData, Job } from '@/data/jobData';

const JobList: React.FC = () => {
  const [sortedJobs, setSortedJobs] = useState<Job[]>(jobData);
  const [sortCriteria, setSortCriteria] = useState<string>('location');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [locationFilter, setLocationFilter] = useState<string>('');
  const [jobTypeFilter, setJobTypeFilter] = useState<string>('');

  useEffect(() => {
    let sortedArray = [...jobData];

    if (locationFilter) {
      sortedArray = sortedArray.filter(job => job.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    if (jobTypeFilter) {
      sortedArray = sortedArray.filter(job => job.jobTypes.includes(jobTypeFilter));
    }

    if (sortCriteria === 'location') {
      sortedArray.sort((a, b) => sortOrder === 'asc' ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location));
    } else if (sortCriteria === 'jobType') {
      sortedArray.sort((a, b) => sortOrder === 'asc' ? a.jobTypes[0].localeCompare(b.jobTypes[0]) : b.jobTypes[0].localeCompare(a.jobTypes[0]));
    } else if (sortCriteria === 'updatedAt') {
      sortedArray.sort((a, b) => sortOrder === 'asc' ? a.updatedAt.getTime() - b.updatedAt.getTime() : b.updatedAt.getTime() - a.updatedAt.getTime());
    }

    setSortedJobs(sortedArray);
  }, [sortCriteria, sortOrder, locationFilter, jobTypeFilter]);

  const toggleSortOrder = () => {
    setSortOrder(prevOrder => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary mb-4">Job Listings</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              className={`px-3 py-2 text-sm sm:text-base rounded-md focus:outline-none ${sortCriteria === 'location' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => { setSortCriteria('location'); toggleSortOrder(); }}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Location {sortOrder === 'asc' ? <FontAwesomeIcon icon={faSortAmountUp} /> : <FontAwesomeIcon icon={faSortAmountDown} />}
            </button>
            <button
              className={`px-3 py-2 text-sm sm:text-base rounded-md focus:outline-none ${sortCriteria === 'jobType' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => { setSortCriteria('jobType'); toggleSortOrder(); }}
            >
              <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
              Job Type {sortOrder === 'asc' ? <FontAwesomeIcon icon={faSortAmountUp} /> : <FontAwesomeIcon icon={faSortAmountDown} />}
            </button>
            <button
              className={`px-3 py-2 text-sm sm:text-base rounded-md focus:outline-none ${sortCriteria === 'updatedAt' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}`}
              onClick={() => { setSortCriteria('updatedAt'); toggleSortOrder(); }}
            >
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Date Updated {sortOrder === 'asc' ? <FontAwesomeIcon icon={faSortAmountUp} /> : <FontAwesomeIcon icon={faSortAmountDown} />}
            </button>
          </div>

          <div className="flex justify-center mb-4">
            <div className="relative">
              {!locationFilter && (
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-primary cursor-pointer"
                  onClick={() => {
                    const input = document.getElementById('location-input');
                    if (input) {
                      input.style.display = 'inline-block';
                      input.focus();
                    }
                  }}
                />
              )}
              <input
                id="location-input"
                type="text"
                placeholder="Enter location..."
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="ml-2 p-2 sm:p-3 text-gray-800 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-xs"
                style={{ display: locationFilter ? 'inline-block' : 'none' }}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    e.target.style.display = 'none';
                  }
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <label className="block text-gray-800 mb-2">Filter by Job Type</label>
            <select
              value={jobTypeFilter}
              onChange={(e) => setJobTypeFilter(e.target.value)}
              className="px-3 py-2 text-sm sm:text-base rounded-md border bg-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary w-full max-w-xs"
            >
              <option value="">All Job Types</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Onsite">Onsite</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedJobs.map((job) => (
            <div key={job.id} className="p-4 sm:p-6 bg-white shadow-md rounded-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg sm:text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-700">{job.company}</p>
              <p className="text-gray-500">{job.location}</p>
              <p className="text-gray-500">Job Types: {job.jobTypes.join(', ')}</p>
              <p className="text-gray-500">Salary: {job.salaryRange}</p>
              <p className="text-gray-400 text-sm">Updated on: {job.updatedAt.toLocaleDateString()}</p>
              <p className="text-gray-600 mt-4">{job.description}</p>
              <p className="text-gray-600 mt-4">Required Skills: {job.requiredSkills}</p>
              <p className="text-gray-600 mt-4">Application Deadline: {job.applicationDeadline.toLocaleDateString()}</p>
              <p className="text-gray-600 mt-4">Contact Email: <a href={`mailto:${job.contactEmail}`} className="text-primary">{job.contactEmail}</a></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
