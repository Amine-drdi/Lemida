import React from "react";

const Aids = ({ setShowEligibilityForm , formation }) => {
  return (
    <div id="aids" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Financements
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
         
          <p className="text-base font-medium">{formation.Financements}</p>
         
        </div>
      
        
      </div>
    </div>
  );
};

export default Aids;
