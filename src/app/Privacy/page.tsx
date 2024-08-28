'use client';

import React from 'react';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 p-12">


      <div className="container mx-auto px-4 py-12">
        <div className="flex items-start">
          <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="mb-4">
              Welcome to WorkConnect. Your privacy is of utmost importance to us, and this policy outlines how we collect, use, and protect your information. By using our platform, you agree to the terms of this Privacy Policy.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">
              We collect personal information that you provide directly, such as your name, email address, resume details, and other relevant information required for job applications or profile creation. We also gather information about your interactions with our platform, including your job search preferences, applied jobs, and communication with employers.
            </p>
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">
              The information collected is used to match talents with employers and freelancers with projects. Your profile information helps us suggest relevant job opportunities, share your profile with potential employers, and provide you with updates and notifications. Additionally, we use this information to improve the functionality and user experience of our platform.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Sharing Your Information</h2>
            <p className="mb-4">
              We may share your information with employers, recruiters, and third-party service providers who assist us in operating our platform. These parties adhere to strict confidentiality agreements and use your information solely for job matching and platform enhancement.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="mb-4">
              You have the right to access, modify, or delete your personal information at any time. You can update your profile through your account settings or contact our support team for assistance. You also have the option to opt out of non-essential communications.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Security</h2>
            <p className="mb-4">
              We employ industry-standard security measures to protect your data from unauthorized access, disclosure, alteration, and destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none mb-4">
              <li>Email: <a href="mailto:support@workconnect.com" className="text-orange-500 hover:underline">support@workconnect.com</a></li>
              <li>Phone:<a href="tel:+1 (339) 746-3369" className="text-orange-500 hover:underline">+13397463369</a></li>
            </ul>
            <p className="mb-4">
              For more information, please refer to our <Link href="/Terms" className="text-orange-500 hover:underline">Terms of Use</Link> and <Link href="/FAQ" className="text-orange-500 hover:underline">FAQ</Link>.
            </p>
          </div>
        <div className="w-1/3 pl-8 mt-4 mx-auto">
          <img
           src="/images/privacy.png" 
           alt="Privacy Policy" 
           className="w-full rounded-lg"
          />
        </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
