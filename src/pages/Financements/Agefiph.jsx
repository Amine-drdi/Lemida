import React , { useState } from 'react';
import { finance } from '../../assets/data/trainings';

const Tab = () => {
  const found = finance.find((element) => element.id === 500);
  const [activeTab, setActiveTab] = useState("aides");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-center space-x-6">
        {/*<TableDesMatieres />*/}
        {found && (
          <img
            className="object-cover w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-lg border-4 border-white bg-gray-300 transform -translate-y-100"
            src={found.image}
            alt={found.title}
            referrerPolicy="no-referrer"
          />
        )}
      </div>
   
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
        Aides de l'AGEFIPH pour les Personnes en Situation de Handicap
      </h1>

      <div className="flex justify-center mb-4">
        <button
          className={`px-4 py-2 mx-2 rounded-md font-semibold ${
            activeTab === "aides" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("aides")}
        >
          Aides de l'AGEFIPH
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded-md font-semibold ${
            activeTab === "rqth" ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("rqth")}
        >
          Reconnaissance RQTH
        </button>
      </div>

      {activeTab === "aides" ? (
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Quelles aides peut-on obtenir ?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Aide au parcours vers l’emploi</li>
            <li>Aide à la création d’activité</li>
            <li>Aide à la formation individuelle</li>
            <li>Aide aux frais de transport, restauration et garde</li>
            <li>Aide technique pour équipements spécifiques</li>
            <li>Aide aux déplacements et aménagement du véhicule</li>
            <li>Aide humaine : preneur de notes, lecteur, soutien spécifique</li>
            <li>Audioprothèses pour déficients auditifs</li>
            <li>Soutien à la formation Inclu’Pro</li>
          </ul>
          <p className="mt-4 text-gray-700 text-sm">
            Pour demander une aide, un formulaire détaillant le projet et les justificatifs doivent être envoyés à l'Agefiph avant toute action.
          </p>
        </div>
      ) : (
        <div className="bg-white p-4 rounded-md shadow-sm">
          <h2 className="text-xl font-semibold mb-2 text-blue-600">Comment obtenir la RQTH ?</h2>
          <p className="text-gray-700 mb-2">
            La reconnaissance de la qualité de travailleur handicapé (RQTH) permet d'accéder à des mesures favorisant l'insertion et le maintien en emploi.
          </p>
          <p className="text-gray-700 mb-2">
            La demande est à déposer auprès de la MDPH avec le formulaire Cerfa n°15692*01, un certificat médical et les pièces justificatives nécessaires.
          </p>
          <p className="text-gray-700 text-sm">
            Certaines personnes bénéficient automatiquement des mêmes droits (victimes d’accidents du travail, titulaires de pension d’invalidité, AAH...)
          </p>
        </div>
      )}
    </div>

    </div>
  );
};

export default Tab;