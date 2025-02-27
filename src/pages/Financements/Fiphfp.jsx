import React ,{useState} from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import {finance } from '../../assets/data/trainings';

const Tab = () => {
  const found = finance.find((element) => element.id === 300);
  const [activeTab, setActiveTab] = useState('aides');

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
      <div className="w-full">
  <p className="text-4xl ml-40">
    <span className="text-yellow-500">_</span> FIPHFP
  </p>
</div>
<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Le FIPHFP et les Aides pour la Formation</h1>
      <div className="flex border-b mb-4">
        <button 
          className={`py-2 px-4 ${activeTab === 'aides' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`} 
          onClick={() => setActiveTab('aides')}
        >
          Aides du FIPHFP
        </button>
        <button 
          className={`py-2 px-4 ${activeTab === 'rqth' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'}`} 
          onClick={() => setActiveTab('rqth')}
        >
          Reconnaissance RQTH
        </button>
      </div>
      <div>
        {activeTab === 'aides' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Quelles aides le FIPHFP peut-il vous octroyer ?</h2>
            <p className="mt-2 text-gray-600">Le FIPHFP propose des aides financières pour favoriser l'insertion professionnelle des personnes en situation de handicap :</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Aide à l'adaptation du poste de travail</li>
              <li>Aide à la formation individuelle</li>
              <li>Aide au transport et à la mobilité</li>
              <li>Aide humaine pour l'accompagnement professionnel</li>
            </ul>
          </div>
        )}
        {activeTab === 'rqth' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Comment obtenir une reconnaissance de la qualité de travailleur handicapé (RQTH) ?</h2>
            <p className="mt-2 text-gray-600">La demande de RQTH est à déposer auprès de la Maison Départementale des Personnes Handicapées (MDPH) à l'aide du formulaire Cerfa n°15692*01.</p>
            <p className="mt-2 text-gray-600">Les documents nécessaires incluent :</p>
            <ul className="list-disc pl-5 mt-2 text-gray-600">
              <li>Le formulaire Cerfa rempli</li>
              <li>Un certificat médical Cerfa n°13878*01</li>
              <li>Toutes pièces justificatives utiles</li>
            </ul>
          </div>
        )}
      </div>
    </div>



    </div>
  );
};

export default Tab;
