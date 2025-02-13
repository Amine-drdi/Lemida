import React from "react";

const Testimonials = ({ formation }) => {
  return (
    <div id="testimonials" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Pourquoi les professionnels choisissent nos formations
      </p>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
        {formation.professionals.map((professional, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border-2 border-gray-200 w-full rounded-lg p-4 items-center text-center"
          >
            <img
              src={professional.image}
              alt={professional.name}
              className="w-20 h-20 object-cover rounded-full"
            />
               <p className="text-gray-400 text-sm font-semibold">{professional.name}</p>
            <p className="text-gray-400 text-sm font-semibold">{professional.profession}</p>
            <p className="text-gray-500 text-sm">{professional.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

