import React from "react";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative w-full bg-gradient-to-r from-gray-200 to-main_color md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16">
      <div className="w-full grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-xl flex flex-col gap-10 py-16">
          <p className="text-3xl font-bold text-gray-700">Découvrez LEMIDA</p>
          <p className="text-xl font-medium text-gray-900">
            Parcourez les options disponibles et trouvez celle qui correspond
            parfaitement à vos attentes.
          </p>
          <div className="flex xl:flex-row flex-col gap-6">
            <NavLink
              to="/contact"
              className="bg-primary px-6 py-3 rounded-full text-white hover:text-primary hover:bg-secondary border border-transparent hover:border-primary w-fit transition-all duration-500 ease-in-out"
            >
              Demander une information
            </NavLink>

          </div>
        </div>
        <div className="relative max-md:hidden">
          <div className="absolute 2xl:right-[calc(50%-250px)] xl:right-[calc(50%-300px)] right-[5%] top-[-10%]">
            <img
              src="/images/about-3.jpg"
              alt="about hero"
              className="2xl:w-80 w-64 h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
         <div className="absolute 2xl:left-0  xl:left-[calc(50%-256px)] left-[15%] top-[30%]">
            <img
              src="/images/btp.jpg"
              alt="about hero"
              className="w-auto 2xl:h-72 h-56 object-cover rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
