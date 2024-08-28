'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const EnquireTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'feedback'>('contact');

  return (
    <div className=" bg-gray-100 flex items-center justify-center py-12 px-12">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-center mb-6">
          <button
            className={`w-1/2 px-4 py-2 font-semibold ${
              activeTab === 'contact'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
          <button
            className={`w-1/2 ml-2 px-4 py-2 font-semibold ${
              activeTab === 'feedback'
                ? 'text-white bg-primary rounded-md'
                : 'text-gray-600 bg-gray-200'
            }`}
            onClick={() => setActiveTab('feedback')}
          >
            Feedback
          </button>
        </div>

        <div>
          {activeTab === 'contact' ? (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                Have any questions or need support? Get in touch with us, and we'll assist you as soon as possible.
              </p>
              <Link href="/enquire/contact" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Contact Us
                </a>
              </Link>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">Give Us Your Feedback</h2>
              <p className="text-gray-700 mb-6">
                We value your feedback! Let us know what you think about our services and how we can improve.
              </p>
              <Link href="/enquire/feedback" legacyBehavior>
                <a className="bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-primary-dark transition-colors">
                  Leave Feedback
                </a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EnquireTabs;
