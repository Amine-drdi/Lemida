import React from "react";

const Description = ({ formation }) => {
  return (
    <div id="description" className="flex flex-col gap-6 scroll-mt-52">
      <p className="text-2xl font-medium text-gray-600 max-w-2xl">
        Ce que vous allez apprendre dans cette formation Diagnostic dermatologique
      </p>
      <div className="max-w-4xl">
        <p className="sm:text-base text-sm">{formation.description}</p>
      </div>

      {formation.objectifs?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Objectifs pédagogiques</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.objectifs.map((objectif, index) => (
              <li key={index}>{objectif}</li>
            ))}
          </ul>
        </>
      )}

      {formation.publicCible?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Public cible</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.publicCible.map((cible, index) => (
              <li key={index}>{cible}</li>
            ))}
          </ul>
        </>
      )}

      {formation.prerequis?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Prérequis</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.prerequis.map((prerequis, index) => (
              <li key={index}>{prerequis}</li>
            ))}
          </ul>
        </>
      )}

      {formation.equipePedagogique?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Équipe pédagogique</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.equipePedagogique.map((prof, index) => (
              <li key={index}>{prof}</li>
            ))}
          </ul>
        </>
      )}

      {formation.moyensPedagogiques?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Moyens pédagogiques</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.moyensPedagogiques.map((moyen, index) => (
              <li key={index}>{moyen}</li>
            ))}
          </ul>
        </>
      )}

      {formation.dispositifEvaluation?.length > 0 && (
        <>
          <h2 className="text-xl font-semibold text-gray-700">Dispositif d’évaluation</h2>
          <ul className="list-disc list-inside text-sm text-gray-600">
            {formation.dispositifEvaluation.map((evaluation, index) => (
              <li key={index}>{evaluation}</li>
            ))}
          </ul>
        </>
      )}

      <h2 className="text-xl font-semibold text-gray-700">Certification</h2>
      <p className="text-sm text-gray-600">{formation.certification}</p>
    </div>
  );
};

export default Description;
