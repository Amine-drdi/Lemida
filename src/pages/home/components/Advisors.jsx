import React from "react";

const Advisors = ({ label, description, advisorsList }) => {
  return (
    <div className="flex items-center justify-center xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding mb-16 bg-tertiary py-16">
      <div className="flex flex-col items-center gap-10 max-lg:gap-6">
        <div className="flex flex-col items-center md:px-[80px] px-5 gap-[14px]">
          <p className="text-center font-bold md:text-3xl text-xl flex items-center">
            {label}
          </p>
          <p className="text-center text-base font-normal max-w-2xl">
            {description}
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 max-w-[1400px]">
          {advisorsList.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-3 border-2 border-white w-full rounded-lg p-4"
            >
              <div className="flex flex-row items-center gap-4">
                <img
                  src={item.image}
                  alt="formateur"
                  className="sm:w-28 sm:h-28 w-20 h-20 object-cover rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-700 text-sm">{item.title}</p>
                </div>
              </div>
              <p className="text-gray-800 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advisors;
