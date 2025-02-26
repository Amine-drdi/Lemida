import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import { finance } from '../../assets/data/trainings';

const Tab = () => {
  const found = finance.find((element) => element.id === 500);

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
      <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Demande d'Aide Agefiph</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Description du projet</label>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm"
            rows="4"
            placeholder="Décrivez le projet en détail..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Objectif poursuivi</label>
          <textarea
            name="objective"
            value={formData.objective}
            onChange={handleInputChange}
            className="mt-2 p-4 w-full border border-gray-300 rounded-md shadow-sm"
            rows="3"
            placeholder="Indiquez l'objectif que vous souhaitez atteindre..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Devis des prestataires</label>
          <input
            type="text"
            name="quotes"
            value={formData.quotes}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Ajoutez le devis des prestataires"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Liste des personnes concernées</label>
          <input
            type="text"
            name="personsAffected"
            value={formData.personsAffected}
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
            placeholder="Listez les personnes handicapées concernées"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Documents complémentaires</label>
          <input
            type="file"
            name="additionalDocuments"
            onChange={handleInputChange}
            className="mt-2 p-2 w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
          >
            Soumettre la demande
          </button>
        </div>
      </form>
    </div>


    </div>
  );
};

export default Tab;