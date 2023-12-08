import React from 'react';

const Article: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="flex-1 m-4 p-4 border rounded bg-white">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-black block mt-2 transition-colors duration-300 hover:text-orange-500">
        Read more
      </a>
    </div>
  );
};

const Offer: React.FC = () => {
  return (
    <div className="bg-gray-200 py-8">
      <h2 className="text-3xl font-bold text-center py-8">What We Offer</h2>
      <div className="flex justify-between">
        <Article
          title="Lighting Upgrades"
          description="Electrical panel maintenance, therefore, should be part of your regular routine."
        />
        <Article
          title="Electrical repairs"
          description="Electrical repairs should always be handled by a professional electrician"
        />
        <Article
          title="Surge Protection"
          description="An electrical surge can happen for a number of reasons, including lightning strikes."
        />
      </div>
    </div>
  );
};

export default Offer;
