import React from "react";
import { features } from "../../../assets/data/features";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-100 mb-16 w-full py-16">
      <div className="xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding">
        <div className="flex flex-col items-center text-center">
          <p className="mt-2 font-bold md:text-3xl text-xl">
            Nos Engagements pour Votre Réussite
          </p>
          <p className="mt-6 max-w-6xl text-lg text-gray-600">
            Explorez ce qui fait la singularité de notre plateforme et pourquoi
            elle est choisie par des milliers d'apprenants pour atteindre leurs
            objectifs professionnels et personnels. Nous mettons à votre
            disposition une méthode d'apprentissage interactive, avec un accès
            flexible aux cours et des formateurs experts dans leur domaine.
            Notre mission est de vous fournir les outils et les compétences
            nécessaires pour réussir, tout en respectant votre emploi du temps
            et vos ambitions.
          </p>
        </div>

        <div className="md:mt-16 mt-8 w-full flex justify-center">
          <div className="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 md:gap-y-16 max-w-5xl">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className="relative flex flex-col items-center lg:gap-6 md:gap-4 sm:gap-6 gap-2 sm:flex-row sm:items-start md:flex-col md:items-center lg:flex-row lg:items-start"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl text-main_color sm:shrink-0">
                  <feature.icon className="h-8 w-8" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg lg:text-left md:text-center sm:text-left text-center font-semibold leading-8 text-gray-900">
                    {feature.name}
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600 lg:text-left md:text-center sm:text-left text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
