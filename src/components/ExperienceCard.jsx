import React from 'react';
import { FaShare } from 'react-icons/fa';

function ExperienceCard({ image, title, host, status }) {
  return (
    <div className="relative rounded-xl overflow-hidden">
      <img src={image} alt={title} className="w-full h-72 object-cover" />
      <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:scale-110 transition-transform duration-200">
        <FaShare className="text-gray-600" />
      </button>
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{host}</p>
        <p className="font-semibold mt-1">{status}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;