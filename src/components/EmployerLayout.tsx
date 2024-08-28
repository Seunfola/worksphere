import React from 'react';

interface EmployerProfileLayoutProps {
  children: React.ReactNode;
}

const EmployerProfileLayout: React.FC<EmployerProfileLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-full">
      {children}
    </div>
  );
};

export default EmployerProfileLayout;
