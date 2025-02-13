import React from "react";
import { MdFlag } from "react-icons/md";

const Card = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 lg:items-center justify-between w-full border border-gray-200 shadow-md p-4">
      <div className="flex md:flex-row flex-col md:items-center gap-4 lg:w-5/6 w-full">
        <div className="max-h-40 sm:min-h-40">
          <img
            src="https://fac.img.pmdstatic.net/fit/~1~fac~2022~02~09~ba7ece74-7b5f-4b21-bf2e-e6f39ddf5f35.jpeg/1200x900/quality/80/crop-from/center/perfusion-definition-utilite-et-les-differents-types-de-perfusion.jpeg"
            alt="card"
            className="object-cover max-h-40 sm:min-h-40 w-full"
          />
        </div>
        <div className="flex flex-col justify-between h-full w-full lg:gap-2 md:gap-1 gap-2">
          <p className="text-gray-800 font-semibold text-xl line-clamp-2">
            Formation Pathologies du coureur
          </p>
          <p>En cours</p>
          <div className="flex flex-col items-start w-full">
            <div className="mt-2 text-center text-gray-700 font-medium">
              Progression: 50%
            </div>
            <div className="flex gap-1 w-full items-center">
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `50%` }}
                />
              </div>
              <MdFlag className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center lg:justify-center justify-end h-full">
        <button className="px-4 py-3 rounded-full bg-main_color hover:bg-[#2a3fc7] transition-all duration-500 ease-in-out text-white">
          Reprendre
        </button>
      </div>
    </div>
  );
};

export default Card;
