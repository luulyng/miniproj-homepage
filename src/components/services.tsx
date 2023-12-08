import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";

const ImageComponent: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  return (
    <div className="w-1/3">
      <img src={imageUrl} className="rounded-lg" />
    </div>
  );
};


const TextComponent: React.FC<{ title: any; largetitle: string; content: string; }> = ({ title, largetitle, content }) => {
  return (
    <div className="w-2/3 ml-8">
      <p className="text-orange-500 text-xl font-bold mb-4">{title}</p>
      <p className="text-black text-2xl font-bold mb-4">{largetitle}</p>
      <p className="text-gray-700 mb-4">{content}</p>
    </div>
  );
};

const PhoneComponent: React.FC = () => {
    return (
      <p className="text-orange-500">
        <FaPhoneAlt className="inline-block mr-2" />
        1900-111000
      </p>
    );
  };



const Services: React.FC = () => {
  return (
    <div className="flex justify-center items-center p-8">
      <ImageComponent
        imageUrl="https://via.placeholder.com/300"
      />
      <div className="w-2/3 ml-8">
        <TextComponent
          title="Our Services"
          largetitle="Responsive & Professional"
          content="We go the extra mile on every project. The value we provide clients comes from our level of skill and performance, as well as our knowledge and professionalism. Rest assured, we put the same level of energy into every project we take on."
        />
        <TextComponent
          largetitle="Call us today"
          title={<PhoneComponent />}
          content="We're available 24/7, 365 days a year."
        />
      </div>
    </div>
  );
};

export default Services;
