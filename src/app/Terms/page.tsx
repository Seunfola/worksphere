'use client';

import React from 'react';
import Link from 'next/link';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold mb-6 text-gray-900">Terms of Service</h1>
          <div className="flex">
            <div className="w-1/4 pr-8">
              <nav className="space-y-4 col text-gray-600">
                <p>
                    <Link href="#relationship" className="hover:text-gray-900">
                        1. Your Relationship with WorkConnect
                    </Link>
                </p>
                <p>
                    <Link href="#accepting-terms" className="hover:text-gray-900">
                        2. Accepting the Terms
                    </Link>
                </p>
                <p>
                <Link href="#changes-terms" className="hover:text-gray-900">
                  3. Changes to the Terms
                </Link>
                </p>
                <p>
                <Link href="#accounts" className="hover:text-gray-900">
                  4. WorkConnect Accounts
                </Link>
                </p>
                <p>
                <Link href="#restrictions" className="hover:text-gray-900">
                  5. General Restrictions on Use
                </Link>
                </p>
                <p>
                <Link href="#content-policy" className="hover:text-gray-900">
                  6. Content Policy
                </Link>
                </p>
                <p>
                <Link href="#rights" className="hover:text-gray-900">
                  7. Rights You Grant Us
                </Link>
                </p>
                <p>
                <Link href="#job-listings" className="hover:text-gray-900">
                  8. Job Listings and Freelance Projects
                </Link>
                </p>
                <p>
                <Link href="#ending-relationship" className="hover:text-gray-900">
                  9. Ending Your Relationship with WorkConnect
                </Link>
                </p>
                <p>
                <Link href="#liability" className="hover:text-gray-900">
                  10. Limitation of Liability
                </Link>
                </p>
                <p>
                <Link href="#warranties" className="hover:text-gray-900">
                  11. Exclusion of Warranties
                </Link>
                </p>
                <p>
                <Link href="#legal-terms" className="hover:text-gray-900">
                  12. General Legal Terms
                </Link>
                </p>
                <p>
                <Link href="#contact" className="hover:text-gray-900">
                  13. Contact Information
                </Link>
                </p>
              </nav>
            </div>
            <div className="w-3/4 text-gray-800">
              <section id="relationship" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Your Relationship with WorkConnect</h2>
                <p>
                  Welcome to WorkConnect, a platform designed to connect job seekers, employers, and freelancers. By using WorkConnect (the "Website"), you agree to these terms and conditions, which constitute a legally binding agreement between you and WorkConnect. These Terms of Service govern your access to and use of the services provided by WorkConnect, including job listings, freelance opportunities, and other related services (collectively, the "Service").
                </p>
                <p>
                  Your legal agreement with WorkConnect is made up of the following documents:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>These Terms of Service</li>
                  <li>WorkConnect's <Link href="/Privacy" className="text-orange-500 hover:underline">Privacy Policy</Link></li>
                  <li>Any other legal notices, guidelines, or rules that we may publish or provide in relation to the Service</li>
                </ul>
              </section>

              <section id="accepting-terms" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Accepting the Terms</h2>
                <p>
                  By accessing or using the Service, you signify your agreement to be bound by these Terms. If you do not agree to any of the terms, you should not use the Service.
                </p>
                <p>
                  You must be at least 16 years old to use the Service. By using the Service, you represent and warrant that you meet this age requirement.
                </p>
              </section>

              <section id="changes-terms" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Changes to the Terms</h2>
                <p>
                  WorkConnect reserves the right to modify these Terms at any time. We will notify you of any material changes by posting the new Terms on the Website. Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>

              <section id="accounts" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. WorkConnect Accounts</h2>
                <p>
                  To access certain features of the Service, you must create an account. You agree to provide accurate and complete information during the registration process and to keep this information up to date.
                </p>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify WorkConnect immediately of any unauthorized use of your account.
                </p>
              </section>

              <section id="restrictions" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. General Restrictions on Use</h2>
                <p>
                  You agree to use the Service in compliance with all applicable laws and regulations. You are solely responsible for your conduct while using the Service.
                </p>
                <p>
                  You agree not to:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Post false or misleading information in job listings or profiles</li>
                  <li>Use the Service to distribute unsolicited or unauthorized advertising or promotional material</li>
                  <li>Use the Service to harass, abuse, or harm another person</li>
                  <li>Engage in any activity that interferes with or disrupts the Service</li>
                </ul>
              </section>

              <section id="content-policy" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Content Policy</h2>
                <p>
                  You retain ownership of the content you post on the Service. By submitting content to WorkConnect, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, publish, transmit, and display your content.
                </p>
                <p>
                  WorkConnect reserves the right to review, flag, and remove content that violates these Terms or that we deem inappropriate for the Service.
                </p>
              </section>

              <section id="rights" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Rights You Grant Us</h2>
                <p>
                  By uploading or posting content to the Service, you grant WorkConnect a worldwide, non-exclusive, royalty-free license to use, copy, modify, distribute, and display your content in connection with the Service.
                </p>
              </section>

              <section id="job-listings" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Job Listings and Freelance Projects</h2>
                <p>
                  Employers and freelancers may post job listings and project opportunities on WorkConnect. You agree to provide accurate and complete information in all job listings and project postings.
                </p>
                <p>
                  Job seekers may apply for job listings and freelance projects through the Service. WorkConnect does not guarantee any specific outcomes for job seekers or employers.
                </p>
              </section>

              <section id="ending-relationship" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Ending Your Relationship with WorkConnect</h2>
                <p>
                  You may terminate your account at any time by following the instructions on the Service. If you terminate your account, these Terms will continue to apply to your past use of the Service.
                </p>
                <p>
                  WorkConnect may suspend or terminate your access to the Service at any time, with or without cause or notice. If we terminate your account, you may not create another account without our permission.
                </p>
              </section>

              <section id="liability" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                <p>
                  The Service is provided "as is" and "as available" without any warranties of any kind. WorkConnect disclaims all warranties, express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
                <p>
                  In no event shall WorkConnect be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
                </p>
                <ul className="list-disc ml-5 mt-2">
                  <li>Your access to or use of or inability to access or use the Service</li>
                  <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                  <li>Any bugs, viruses, or other harmful code that may be transmitted to or through our Service by any third party</li>
                  <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service</li>
                </ul>
              </section>

              <section id="warranties" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Exclusion of Warranties</h2>
                <p>
                  You expressly understand and agree that your use of the Service is at your sole risk and that the Service is provided "as is" and "as available."
                </p>
              </section>

              <section id="legal-terms" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">12. General Legal Terms</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
                <p>
                  These Terms constitute the entire agreement between you and WorkConnect concerning the Service.
                </p>
                <p>
                  If any provision of these Terms is found by a court of competent jurisdiction to be invalid or unenforceable, the remaining provisions shall remain in full force and effect.
                </p>
                <p>
                  WorkConnect's failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                </p>
              </section>

              <section id="contact" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">13. Contact Information</h2>
                <p>
                  For any questions regarding these Terms of Service, please contact us at:
                </p>
                <ul className="list-none mt-2">
                  <li>Email: <a href="mailto:support@workconnect.com" className="text-orange-500 hover:underline">support@workconnect.com</a></li>
                  <li>Phone: +123-456-789</li>
                </ul>
              </section>

              <div className="flex mt-8">
                <button className="px-4 py-2 text-white bg-ws-muted-gold rounded-md hover:bg-gray-200 focus:outline-none">Decline</button>
                <button className="px-4 py-2 ml-4 text-gray-500 bg-gray-200 rounded-md cursor-not-allowed" disabled>Accept</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
