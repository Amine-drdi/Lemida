import React from "react";

const OurApproach = () => {
  return (
    <div className="relative w-full h-full min-h-[400px] py-8 sm:py-16">
      {/* Overlay */}
      <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/10" />

      {/* Image de fond RESPONSIVE */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src="/images/approche3.jpg"
          alt="Notre approche"
          className="w-full h-[750px] sm:h-[400px] lg:h-[500px] object-cover"
        />
      </div>

      {/* Contenu */}
      <div className="relative z-20 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col gap-8 sm:gap-16 text-white text-center">
        <p className="text-2xl sm:text-3xl font-bold">Notre approche</p>

        {/* Grid Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
          {[
            { title: "Accessibilité", text: "Des formations en ligne disponibles partout et à tout moment, adaptées aux besoins des professionnels de la santé." },
            { title: "Qualité", text: "Contenus créés et validés par des médecins et experts, garantissant des informations fiables et actuelles." },
            { title: "Innovation", text: "Utilisation d’outils interactifs et de technologies modernes pour un apprentissage pratique et engageant." },
            { title: "Accompagnement", text: "Un suivi personnalisé pour guider les apprenants tout au long de leur parcours et répondre à leurs questions." }
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 flex flex-col gap-2 text-center w-full max-w-[300px] mx-auto h-full border border-white rounded-lg bg-white/10 backdrop-blur-md"
            >
              <p className="text-lg sm:text-xl font-semibold">{item.title}</p>
              <p className="text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurApproach;