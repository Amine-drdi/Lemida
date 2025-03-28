import React from "react";

const Recap = ({formation}) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:divide-x w-fit py-4 px-2 md:px-8 z-10 -mt-12 mx-auto rounded-md bg-white shadow-xl">
      <div className="flex flex-col gap-2 sm:px-4 px-2 justify-center items-center text-center text-gray-600">
        <p className="lg:text-lg sm:text-base text-sm font-bold">
          Prochaine session
        </p>
        <p className="sm:text-base text-sm">{formation.ProchaineSession}</p>
      </div>
      <div className="flex flex-col gap-2 sm:px-4 px-2 justify-center text-center text-gray-600">
        <p className="lg:text-lg sm:text-base text-sm font-bold">
          Référence action DPC
        </p>
        <p className="sm:text-base text-sm">{formation.DPC}</p>
      </div>
      <div className="flex flex-col gap-2 sm:px-4 px-2 justify-center text-center text-gray-600">
        <p className="lg:text-lg sm:text-base text-sm font-bold">Durée</p>
        <p className="sm:text-base text-sm">{formation.Duree}</p>
      </div>
      <div className="flex flex-col gap-2 sm:px-4 px-2 justify-center text-center text-gray-600">
        <p className="lg:text-lg sm:text-base text-sm font-bold">
          Financements
        </p>
        <p className="sm:text-base text-sm">{formation.Financements}</p>
      </div>
    </div>
  );
};

export default Recap;
