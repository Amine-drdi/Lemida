import React from 'react';
import { useParams } from 'react-router-dom';
import {Commerce} from '../../assets/data/commerce'; // Assurez-vous d'importer correctement vos données

const FormationDetails = () => {
  const { id } = useParams(); // Récupère l'ID de l'URL
  const formation = Commerce.find((f) => f.id === parseInt(id)); // Conversion de l'ID en entier

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

  // Sélectionner une couleur basée sur l'ID
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

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <span className="mr-3">👋</span>
            OBJECTIFS DE LA FORMATION
          </h2>
          <ul className="space-y-3">
            {objectifsArray.length > 0 ? (
              objectifsArray.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  {objective}
                </li>
              ))
            ) : (
              <li className="text-gray-600">Aucun objectif spécifié.</li>
            )}
          </ul>
        </div>

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

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Durée :</span>
              <span className="font-medium">{formation.duration}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">Taux de satisfaction :</span>
              <span className="font-medium">9,0/10</span>
            </div>
          </div>
          <div className="font-bold">{formation.price}</div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetails;