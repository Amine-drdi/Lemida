import React from "react";
import { MdOutlineCheck } from "react-icons/md";

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col gap-6 max-w-5xl scroll-mt-52">
      <div className="">
        <p className="text-2xl font-medium text-gray-600 max-w-2xl">
          Compétences développées
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center">
          <MdOutlineCheck className="w-4 h-4 min-w-4" />
          <p className="text-sm font-medium">
            Identifier et décrire une lésion élémentaire
          </p>
        </div>
        <div className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center">
          <MdOutlineCheck className="w-4 h-4 min-w-4" />
          <p className="text-sm font-medium">
            Diagnostiquer une lésion élémentaire en fonction de sa topographie
          </p>
        </div>
        <div className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center">
          <MdOutlineCheck className="w-4 h-4 min-w-4" />
          <p className="text-sm font-medium">
            Diagnostiquer les dermatoses les plus courantes en fonction de l'âge
          </p>
        </div>
        <div className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center">
          <MdOutlineCheck className="w-4 h-4 min-w-4" />
          <p className="text-sm font-medium">
            Dépister et prendre en charge les tumeurs
          </p>
        </div>
        <div className="p-2 bg-sky-100 rounded-md w-fit flex flex-row gap-2 md:items-center">
          <MdOutlineCheck className="w-4 h-4 min-w-4" />
          <p className="text-sm font-medium">
            Déterminer si la manifestation d'une dermatose est liée à une
            maladie ou une urgence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
