import React from "react";

const Program = ({ formation }) => {
  const programme = formation.programme[0]; // On suppose qu’il y a un seul objet programme

  return (
    <div id="program" className="flex flex-col gap-6 scroll-mt-52">
      {/* Titre global */}
      <h2 className="text-xl font-semibold text-primary">Programme</h2>

      {/* Introduction */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="whitespace-pre-line text-gray-700">
          {programme.introduction}
        </p>
      </div>

      {/* Liste des modules */}
      <div className="space-y-4">
        {programme.module.map((mod, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow border-l-4 border-primary"
          >
            {/* Module (ex: Module 1 : 45 minutes) */}
            <p className="font-bold text-primary">{mod}</p>

            {/* Titre du module */}
            <p className="text-gray-700 italic">
              {programme.Presentation_module[index]}
            </p>

            {/* Objectif(s) */}
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <p className="text-gray-900 italic">Objectif :</p>
              {Array.isArray(programme.objectif[index]) ? (
                programme.objectif[index].map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))
              ) : (
                <li>{programme.objectif[index]}</li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Program;
