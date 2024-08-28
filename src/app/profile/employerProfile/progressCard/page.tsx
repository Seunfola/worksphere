import React from 'react';

interface ProgressCardProps {
  completionPercentage: number;
  steps: string[];
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  completionPercentage,
  steps,
}) => {
  return (
    <section className="bg-white p-6 rounded-custom shadow-md flex flex-col items-center">
      <p className="mb-2 text-gray-500 space-y-1">Complete your profile</p>
      <div className="relative w-24 h-24">
        
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#eee"
            strokeWidth="3"
          />
          <path
            className="circle"
            strokeDasharray={`${completionPercentage}, 100`}
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#3490dc"
            strokeWidth="3"
          />
        </svg>
        <span className="absolute inset-0 flex justify-center items-center text-lg font-semibold">
          {completionPercentage}%
        </span>
      </div>
      <div className="mt-4 text-center">
        
        <ul className="mt-2 text-gray-500 space-y-1">
          {steps.map((step, index) => (
            <li key={index}>✔️ {step}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProgressCard;
