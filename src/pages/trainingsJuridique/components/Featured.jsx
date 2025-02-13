import React from "react";
import { FaEuroSign, FaChalkboardTeacher } from "react-icons/fa";
import { MdTimer, MdOutlineSupportAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Featured = ({ training }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="">
        <p className="font-medium md:text-xl text-base text-left">À la une</p>
        <p className="font-normal md:text-base text-sm text-left text-gray-500">
          De nombreux professionels ont apprécié cette formation très bien noté
          pour son contenu captivant.
        </p>
      </div>
      <div className="group w-full border border-gray-200 md:p-8 p-4 grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4 cursor-pointer hover:bg-gray-100">
        <div className="col-span-1 w-full h-full min-h-72 flex overflow-hidden relative">
          <img
            src={training?.image}
            alt="Placeholder"
            className="absolute inset-0 col-span-1 object-cover w-full h-full min-h-80"
          />
        </div>
        <div className="col-span-1 max-h-max">
          <div className="flex flex-col gap-4 p-4 transition-transform ease-in-out duration-300 transform group-hover:scale-[1.03]">
            <NavLink
              to="/"
              className="md:text-xl text-base font-semibold max-w-96 mb-2 text-gray-600 text-left"
            >
              {training?.title}
            </NavLink>
            <div className="flex flex-col gap-4 justify-between mb-3 text-gray-600 text-sm">
              <div className="flex flex-row gap-2 items-center">
                <FaEuroSign className="w-5 h-5 text-gray-600" />
                <span className="font-medium">100% financé par DPC</span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdTimer className="w-5 h-5 text-gray-600" />
                <span className="font-medium">
                  Durée : <span>15h</span>
                </span>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <MdOutlineSupportAgent className="w-5 h-5 text-gray-600" />
                <p className="font-medium">En ligne</p>
              </div>
              <div className="flex flex-row gap-2">
                <FaChalkboardTeacher className="w-5 h-5 text-gray-600" />
                <p className="font-medium">
                  Formateur : <span>Jean-François Renucci</span>
                </p>
              </div>
            </div>
            <div className="flex justify-start">
              <button className="w-fit rounded-full py-3 px-10 sm:text-sm text-xs bg-main_color text-white">
                En savoir +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
