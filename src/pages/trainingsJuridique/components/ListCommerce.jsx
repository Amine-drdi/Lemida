import React from 'react';
import { NavLink } from 'react-router-dom';
import { Commerce } from '../../../assets/data/commerce';


const FormationCard = ({ image, title, duration, instructors ,id}) => {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      <NavLink to={`/formation/commerce/${id}`} className="block">
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
        <h3 
  style={{ fontSize: '16px', whiteSpace: 'normal', overflow: 'visible' }} 
  className="text-gray-900 font-bold mb-3"
>
  {title}
</h3>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12Z" fill="currentColor"/>
                <path d="M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
              </svg>
              <span className="text-gray-600">Formation à distance</span>
            </div>
            
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor"/>
                <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor"/>
              </svg>
              <span className="text-gray-600">Durée : {duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
                <path d="M12 17L17 12H14V8H10V12H7L12 17Z" fill="currentColor"/>
              </svg>
              <span className="text-gray-600">Accessible</span>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

const CommerceList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Commerce.map((formation) => (
          <FormationCard
            key={formation.id}
            image={formation.image}
            title={formation.title}
            duration={formation.duration}
            instructors={formation.instructors}
            id = {formation.id}
          />
        ))}
      </div>
    </div>
  );
};

export default CommerceList;