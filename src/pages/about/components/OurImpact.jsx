import React from "react";

const OurImpact = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#EAEDF3] to-[#F5F7FA]">
      <div className="flex flex-col gap-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding max-w-5xl mx-auto py-16">
        <div className="flex flex-col gap-4">
          <p className="sm:text-3xl text-xl font-bold text-gray-700">
            Notre Impact
          </p>
          <p className="sm:text-base text-sm font-medium max-w-2xl">
            Depuis notre création, nous avons eu un impact significatif dans le
            domaine de la formation médicale en ligne.
          </p>
        </div>
        <div className="flex flex-wrap items-center sm:justify-between justify-center max-sm:gap-6 text-black">
          <div className="p-4 flex flex-col gap-6 text-center">
            <p className="text-7xl leading-10 font-semibold mb-4">+120</p>
            <p className="text-xl leading-3 font-medium">
              formations spécialisées
            </p>
            <p className="text-base leading-3 font-normal">
              couvrant divers domaines médicaux
            </p>
          </div>
          <div className="p-4 flex flex-col gap-6 text-center">
            <p className="text-7xl leading-10 font-semibold mb-4">+100k</p>
            <p className="text-xl leading-3 font-medium">Professionnels</p>
            <p className="text-base leading-3 font-normal">
              ont suivi nos formations
            </p>
          </div>
          <div className="p-4 flex flex-col gap-6 text-center">
            <p className="text-7xl leading-10 font-semibold mb-4">24</p>
            <p className="text-xl leading-3 font-medium">Experts</p>
            <p className="text-base leading-3 font-normal">
              offrant un contenu précis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
