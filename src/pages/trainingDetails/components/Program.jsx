import React, { useState } from "react";

const Program = ({ formation }) => {
  // État pour gérer l'affichage ou la dissimulation du contenu détaillé du programme
  const [showContent, setShowContent] = useState(true);

  // Fonction pour basculer l'état d'affichage du contenu
  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  // Récupération des données du programme à partir de l'objet formation
  const program = formation?.programme || {};

  return (
    <div id="program" className="flex flex-col gap-6 scroll-mt-52">
      {/* Titre de la section Programme détaillé */}
      <div>
        <p className="text-2xl font-medium text-gray-600 max-w-2xl">
          Programme détaillé
        </p>
      </div>

      {/* Conteneur principal du programme et des formateurs */}
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        {/* Section Programme */}
        <div className="flex flex-col px-6 py-2 divide-y-2 divide-gray-200 rounded-lg border-2 border-gray-200 h-fit lg:w-2/3 w-full">
          {/* En-tête du programme */}
          <div
            onClick={handleShowContent}
            className="group flex flex-col gap-5 py-4 cursor-pointer"
          >
            <div className="flex flex-row justify-between items-center">
              {/* Informations générales du programme */}
              <div className="flex flex-col gap-1.5">
                <p className="group-hover:underline cursor-pointer group-hover:text-main_color font-medium sm:text-xl text-base text-gray-800">
                  {program.title || 'Titre du programme non défini'}
                </p>
                <p className="flex gap-2 text-xs text-gray-400">
                  {/*<span>{program.duration || 'Durée non définie'}</span>*/}
                </p>
              </div>
              {/* Icône d'expansion et libellé "Détails" */}
              <p className="flex items-center justify-center gap-4 text-main_color">
                <span
                  className={`${
                    showContent ? "flex" : "hidden"
                  } group-hover:flex font-medium sm:text-base text-sm`}
                >
                  Détails
                </span>
                <svg
                  width="16"
                  height="10"
                  viewBox="0 0 16 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d={
                      showContent
                        ? "M14.75 8.375L8 1.625L1.25 8.375"
                        : "M1.25 1.625L8 8.375L14.75 1.625"
                    }
                    stroke="#114d5b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
            </div>
            {/* Détails du programme (affichés ou masqués selon l'état) */}
            {showContent && (
              <div className="mt-2">
                <ol className="flex flex-col gap-4 list-decimal list-inside sm:text-base text-sm text-gray-500">
                  {program.parts &&
                    program.parts.map((part, index) => (
                      <li key={index} className="flex flex-col gap-2">
                        {/* Affichage des parties du programme */}
                        <p className="font-semibold text-gray-700">{part.title}</p>
                        <p className="text-gray-500 text-sm mb-2">
                          Durée : {part.duration}
                        </p>
                        {/* Affichage des sections dans chaque partie */}
                        <ul className="list-disc pl-6">
                          {part.sections &&
                            part.sections.map((section, secIndex) => (
                              <li key={secIndex} className="text-gray-700">
                                {section}
                              </li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Section Formateurs */}
        <div className="flex flex-col gap-6 p-6 rounded-lg border-2 border-gray-200 h-fit lg:w-1/3 w-full">
          <div>
            <p className="text-2xl font-medium text-gray-600 max-w-2xl">Formateurs</p>
          </div>
          <div className="flex flex-col divide-y-2 divide-gray-200">
            {formation.instructors2 &&
              formation.instructors2.map((instructor, index) => (
                <div key={index} className="flex flex-row items-center gap-4 py-4">
                  <img
                    src={instructor.image || "https://via.placeholder.com/150"}
                    alt={`instructor-${index}`}
                    className="w-14 h-14 object-cover rounded-full"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="underline">{instructor.name || 'Nom non défini'}</p>
                    <p className="text-sm text-gray-600">{instructor.role || 'Fonction non définie'}</p>
                    <p className="text-xs text-gray-500">
                      {instructor.numOfTrainings || 0} formations enseignées
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

export default Program;

