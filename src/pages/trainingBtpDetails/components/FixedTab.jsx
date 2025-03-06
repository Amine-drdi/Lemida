import React, { useState } from "react";

const FixedTab = ({
  setShowInscriptionForm,
  toggleResults,
  setToggleResults,
  formation
}) => {
  return (
    <div className="w-full bg-white flex flex-col gap-4 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-5 shadow-xl">
      <div className="flex flex-row justify-between items-center pb-2 border-b-2 border-gray-200">
        <p className="sm:text-2xl text-lg font-bold text-gray-500">
          {formation.title}
        </p>
       {/*} <div className="flex items-center justify-center w-fit bg-main_color text-white hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out">
          <button
            className="px-10 py-5 text-base font-semibold"
            onClick={() => setShowInscriptionForm(true)}
          >
            S'inscrire
          </button>
        </div>*/}
      </div>
      <div className="flex flex-row h-12 border-b border-[#F0F0F0] box-border gap-1 text-base font-normal w-fit max-w-full overflow-x-auto scrollbar-hide">
        <a
          href="#description"
          className={`${
            toggleResults === "Description"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0] hover:bg-[#f8f6f6] hover:text-main_color"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-12 text-sm font-semibold whitespace-nowrap`}
          onClick={() => setToggleResults("Description")}
        >
          Description
        </a>
        <a
          href="#skills"
          className={`${
            toggleResults === "Compétences développées"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0] hover:bg-[#f8f6f6] hover:text-main_color"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-12 text-sm font-semibold whitespace-nowrap`}
          onClick={() => setToggleResults("Compétences développées")}
        >
          Compétences développées
        </a>
        <a
          href="#program"
          className={`${
            toggleResults === "Programmes"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0] hover:bg-[#f8f6f6] hover:text-main_color"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-12 text-sm font-semibold whitespace-nowrap`}
          onClick={() => setToggleResults("Programmes")}
        >
          Programmes
        </a>
        <a
          href="#aids"
          className={`${
            toggleResults === "Financements"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0] hover:bg-[#f8f6f6] hover:text-main_color"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-12 text-sm font-semibold whitespace-nowrap`}
          onClick={() => setToggleResults("Financements")}
        >
          Financements
        </a>
        <a
          href="#testimonials"
          className={`${
            toggleResults === "Témoignages"
              ? "text-main_color bg-white border border-[#F0F0F0] border-b-transparent"
              : "text-[#000]/80 bg-[#FAFAFA] border border-[#F0F0F0] hover:bg-[#f8f6f6] hover:text-main_color"
          } flex items-center justify-center px-4 py-2 rounded-t-sm h-12 text-sm font-semibold whitespace-nowrap`}
          onClick={() => setToggleResults("Témoignages")}
        >
          Témoignages
        </a>
      </div>
    </div>
  );
};

export default FixedTab;
