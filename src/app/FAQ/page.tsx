'use client';

import { useState } from 'react';

interface FAQItem {
  category: string;
  questions: { question: string; answer: string }[];
}

const faqData: FAQItem[] = [
  {
    category: 'Getting Started',
    questions: [
      { question: 'How do I create an account?', answer: 'To create an account, click on the signup button and fill out the required details.' },
      { question: 'How do I find a job?', answer: 'Use the search bar to filter jobs by category, location, and other criteria.' },
      { question: 'How do I post a job?', answer: 'Employers can post jobs by going to the "Post a Job" section and filling in the job details.' },
    ],
  },
  {
    category: 'For Talents',
    questions: [
      { question: 'How do I showcase my skills?', answer: 'You can add your skills to your profile under the "Skills" section.' },
      { question: 'How do I apply for a freelance gig?', answer: 'Browse available freelance opportunities and apply directly from the job listing.' },
      { question: 'Can I work remotely?', answer: 'Yes, many employers offer remote job opportunities. Use the "Remote" filter to find them.' },
    ],
  },
  {
    category: 'Certifications',
    questions: [
      { question: 'What certifications are available?', answer: 'Talents can take certification tests in various fields like coding, design, and more. These certifications will be reflected on their profiles.' },
      { question: 'Who can take certification tests?', answer: 'Certification tests are only available for talents registered on the platform.' },
      { question: 'How do certifications help?', answer: 'Certifications help showcase your skills to potential employers and increase your chances of getting hired.' },
    ],
  },
  {
    category: 'Social Features',
    questions: [
      { question: 'How do I react to jobs and profiles?', answer: 'You can give a thumbs up or thumbs down to jobs and profiles. These reactions help improve the relevance of content on the platform.' },
      { question: 'How do I share a job or profile?', answer: 'Each job listing and profile has a share button that allows you to share it via social media or email.' },
    ],
  },
  {
    category: 'Community & Support',
    questions: [
      { question: 'How do I join the Slack community?', answer: 'Talents and employers can join our Slack channel to engage with the community and receive support. A Slack invite link is available on your dashboard.' },
      { question: 'How do I contact support?', answer: 'If you need help, you can contact our support team at support@workconnect.com or via the contact form on our website.' },
    ],
  },
  {
    category: 'Payments',
    questions: [
      { question: 'What payment methods are accepted?', answer: 'We accept all major credit cards, PayPal, and direct bank transfers.' },
      { question: 'How do I get paid for freelance work?', answer: 'Freelancers are paid through the platform upon project completion.' },
      { question: 'Is there a fee for withdrawing earnings?', answer: 'A small transaction fee applies to withdrawals. Check our fees page for more details.' },
    ],
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-gray-700 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8">Frequently Asked Questions</h1>
        {faqData.map((item, i) => (
          <div key={i} className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold border-b-2 border-gray-300 pb-2 mb-4">{item.category}</h2>
            <ul className="space-y-4">
              {item.questions.map((faq, index) => (
                <li key={index} className="border-b border-gray-300 pb-2">
                  <button
                    className="w-full text-left flex justify-between items-center focus:outline-none"
                    onClick={() => toggleAnswer(i * 100 + index)}
                  >
                    <span className="text-sm sm:text-base">{faq.question}</span>
                    <span className="text-sm sm:text-base">{openIndex === i * 100 + index ? '-' : '+'}</span>
                  </button>
                  {openIndex === i * 100 + index && (
                    <p className="mt-2 text-sm sm:text-base text-gray-600">{faq.answer}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
