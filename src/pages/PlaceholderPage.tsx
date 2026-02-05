import React from 'react';

const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
      <h1 className="text-4xl font-bold text-primary-dark mb-4">{title}</h1>
      <p className="text-gray-600">This page is currently under development.</p>
    </div>
  );
};

export default PlaceholderPage;
