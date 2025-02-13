import React from "react";

const OurApproach = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] py-16">
      <div className= "absolute top-0 left-0 z-10 w-full h-full bg-black/5" />
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/images/our-approach.jpg"
          alt="our story"
          className="w-full h-[calc(100vh-64px)] object-cover filter brightness-800"
        />
      </div>
      <div className="relative z-20 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding flex flex-col gap-16">
        <p className="text-white sm:text-3xl text-xl font-bold max-sm:py-4">
          Notre approche
        </p>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 items-center sm:justify-between justify-center text-white">
          <div className="p-4 flex flex-col gap-4 text-center lg:max-w-72 h-full border border-white rounded-lg">
            <p className="text-xl font-semibold mb-4">Accessibilité</p>
            <p className="text-base font-normal">
              Des formations en ligne disponibles partout et à tout moment,
              adaptées aux besoins des professionnels de la santé.
            </p>
          </div>
          <div className="p-4 flex flex-col gap-4 text-center lg:max-w-72 h-full border border-white rounded-lg">
            <p className="text-xl font-semibold mb-4">Qualité</p>
            <p className="text-base font-normal">
              Contenus créés et validés par des médecins et experts,
              garantissant des informations fiables et actuelles.
            </p>
          </div>
          <div className="p-4 flex flex-col gap-4 text-center lg:max-w-72 h-full border border-white rounded-lg">
            <p className="text-xl font-semibold mb-4">Innovation</p>
            <p className="text-base font-normal">
              Utilisation d’outils interactifs et de technologies modernes pour
              un apprentissage pratique et engageant.
            </p>
          </div>
          <div className="p-4 flex flex-col gap-4 text-center lg:max-w-72 h-full border border-white rounded-lg">
            <p className="text-xl font-semibold mb-4">Accompagnement</p>
            <p className="text-base font-normal">
              Un suivi personnalisé pour guider les apprenants tout au long de
              leur parcours et répondre à leurs questions.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OurApproach;
