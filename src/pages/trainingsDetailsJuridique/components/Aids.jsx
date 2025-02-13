import React from "react";

const Aids = ({ setShowEligibilityForm }) => {
  return (
    <div id="aids" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Financements
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement DPC</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-lg font-medium">Financement FIF PL</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement FAF PM</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement Pôle Emploi</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement Employeur et OPCO</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement Personnel</p>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            consectetur, quam vel elementum ultrices, urna nunc ultricies ipsum,
            at bibendum urna dolor sit amet diam.
          </p>
          <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aids;
