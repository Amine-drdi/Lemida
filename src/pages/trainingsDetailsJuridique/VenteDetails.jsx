import { Vente } from '../../assets/data/vente'; // Assurez-vous d'importer correctement vos données
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';




const FormationDetails = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const formation = Vente.find((f) => f.id === parseInt(id)); // Conversion de l'ID en entier
   // State pour gérer l'ouverture des sections du programme
   const [openSections, setOpenSections] = useState({});

   // Fonction pour ouvrir/fermer une section
   const toggleSection = (index) => {
     setOpenSections((prev) => ({
       ...prev,
       [index]: !prev[index],
     }));
   };
 
  if (!formation) {
    return <div>Formation non trouvée</div>;
  }


 
  // Définir les couleurs en fonction de l'ID
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
  ];

  const colorClass = colors[formation.id % colors.length] || "bg-gray-500";

  const objectifsArray = formation.Objectifs ? formation.Objectifs.split("\n") : [];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Affichage de l'image avec le titre en bas */}
      {formation.image && (
        <div className={`relative mb-6 ${colorClass} rounded-lg`}>
          <img
            src={formation.image}
            alt={formation.title}
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
            <h1 className="text-lg font-bold">{formation.title.toUpperCase()}</h1>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">PROGRAMME DE LA FORMATION</h2>
        <p className="text-gray-600 mb-6">{formation.description}</p>

        {/* Objectifs de la formation */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-3">🎯</span>
            OBJECTIFS DE LA FORMATION
          </h2>
          <ul className="space-y-3">
            {objectifsArray.length > 0 ? (
              objectifsArray.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✔</span>
                  {objective}
                </li>
              ))
            ) : (
              <li className="text-gray-600">Aucun objectif spécifié.</li>
            )}
          </ul>
        </div>

        {/* Programme de la formation */}
        <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">PROGRAMME DE LA FORMATION</h2>

        {/* Programme de la formation avec accordéon */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-3">📚</span>
            PROGRAMME DÉTAILLÉ
          </h2>

          {formation.programme && formation.programme.length > 0 ? (
            <div className="space-y-4">
              {formation.programme.map((section, index) => (
                <div key={index} className="border p-4 rounded-lg shadow-sm">
                  {/* Titre cliquable */}
                  <div
                    className="flex justify-between items-center cursor-pointer bg-gray-100 p-3 rounded-md"
                    onClick={() => toggleSection(index)}
                  >
                    <h3 className="text-lg font-medium text-blue-700">{section.title}</h3>
                    <span className="text-gray-500">{openSections[index] ? '🔼' : '🔽'}</span>
                  </div>

                  {/* Contenu de la section (s'affiche si ouvert) */}
                  {openSections[index] && (
                    <div className="mt-3">
                      {section.items.length > 0 ? (
                        <ul className="list-disc list-inside space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="text-gray-700">{item}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-500 italic">Aucun contenu disponible.</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">Aucun programme défini.</p>
          )}
        </div>
      </div>
    </div>
        {/* Profil des bénéficiaires */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-3">👥</span>
            PROFIL DES BÉNÉFICIAIRES
          </h2>
          <div className="mb-4">
            <h3 className="font-medium mb-2">Pour qui</h3>
            <p className="text-gray-600">Formation ouverte à tout public</p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Prérequis</h3>
            <p className="text-gray-600">
              Savoir rédiger sur clavier pour l'envoi d'e-mails ou traitement de texte.
            </p>
          </div>
        </div>

        {/* Infos supplémentaires */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Durée :</span>
              <span className="font-medium">{formation.duration}</span>
            </div>
            {/*<div className="flex flex-col">
              <span className="text-sm text-gray-600">Formateur :</span>
              <span className="font-medium">{formation.instructors}</span>
            </div>*/}
          </div>
          <div className="font-bold text-lg text-blue-600">{formation.price || "Tarif non spécifié"}</div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetails;
