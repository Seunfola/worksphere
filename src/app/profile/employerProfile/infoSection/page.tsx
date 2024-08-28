import React from 'react';

interface InfoSectionProps {
  title: string;
  items: { label: string; value: string }[];
  onEditClick?: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, items, onEditClick }) => {
  return (
    <section className="bg-white p-6 rounded-custom shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">{title}</h2>
        {onEditClick && (
          <button className="text-primary" onClick={onEditClick}>Edit</button>
        )}
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-gray-500">{item.label}</span>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default InfoSection;
