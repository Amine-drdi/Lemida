import React from "react";

const Aids = ({ setShowEligibilityForm }) => {
  return (
    <div id="aids" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Financements
      </p>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement CPF</p>
          <p className="text-gray-600 text-sm">
          Le Financement CPF (Compte Personnel de Formation) permet aux salariés et demandeurs d'emploi de financer des formations professionnelles en utilisant les crédits accumulés sur leur compte. Ce système favorise l'acquisition de nouvelles compétences pour améliorer l'employabilité.
          </p>
        {/*  <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>*/}
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-lg font-medium">Financement Opco</p>
          <p className="text-gray-600 text-sm">
          Le Financement Opco (Opérateurs de Compétences) permet aux entreprises de financer la formation de leurs employés en partenariat avec un Opco. Ce dispositif soutient le développement des compétences des salariés, en particulier dans les PME et les branches professionnelles.
          </p>
         {/* <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>*/}
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement FIPHFP</p>
          <p className="text-gray-600 text-sm">
          Le Financement FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) soutient l'emploi des personnes handicapées dans la fonction publique en finançant des actions de formation, d'aménagement de poste ou d'adaptation des conditions de travail. Il permet de favoriser l'inclusion professionnelle des personnes en situation de handicap.
          </p>
         {/* <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>*/}
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement Pôle Emploi</p>
          <p className="text-gray-600 text-sm">
          Le Financement Pôle Emploi permet aux demandeurs d'emploi de financer des formations professionnelles pour améliorer leurs compétences et faciliter leur réinsertion sur le marché du travail. Ce dispositif inclut des aides pour des formations certifiantes ou qualifiantes.
          </p>
          {/*<div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>*/}
        </div>
        <div className="group flex flex-col gap-6 bg-gray-100 p-6 rounded-lg cursor-default hover:scale-[1.02] transition-all duration-300 ease-in-out">
          <p className="text-base font-medium">Financement AGEFIPH</p>
          <p className="text-gray-600 text-sm">
          Le Financement AGEFIPH (Association de gestion du fonds pour l'insertion des personnes handicapées) soutient l'insertion professionnelle des personnes handicapées dans le secteur privé. Il finance des actions de formation, d'adaptation de poste et de maintien dans l'emploi pour favoriser leur accès à l'emploi.
          </p>
        {/*  <div className="flex w-full h-full items-center justify-center transition-all duration-500 ease-in-out">
            <button
              className="px-8 py-2 bg-main_color text-white group-hover:text-main_color group-hover:bg-white border-2 border-gray-100 group-hover:border-main_color text-base font-medium rounded-full w-fit transition-all duration-300 ease-in-out"
              onClick={() => setShowEligibilityForm(true)}
            >
              vérifier mon éligibilité
            </button>
          </div>*/}
        </div>
        
      </div>
    </div>
  );
};

export default Aids;
