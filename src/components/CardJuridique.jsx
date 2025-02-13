import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ title, imageUrl }) => {
  return (
    <div className="w-64 overflow-hidden rounded-lg bg-white shadow hover:shadow-lg transition-shadow duration-300">
      <NavLink to={`/formation/${title.toLowerCase().replace(/\s+/g, '-')}`}  className="block">
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 text-center">
          <h2 className="text-gray-800 text-xl font-bold">
            {title}
          </h2>
          <span className="text-gray-600 text-sm block mt-1">En savoir plus</span>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;