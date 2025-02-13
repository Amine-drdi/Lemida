import React, { useState } from "react";

const Tab = ({ toggleResults, setToggleResults }) => {
  return (
    <div className="flex flex-row h-12 border-b border-[#F0F0F0] box-border gap-1 text-base font-normal max-w-full overflow-x-auto scrollbar-hide">
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
  );
};

export default Tab;
