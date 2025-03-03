import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import { finance } from '../../assets/data/trainings';
import { FaBuilding, FaHandsHelping, FaCheckCircle } from 'react-icons/fa';
const Tab = () => {
  const found = finance.find((element) => element.id === 400);

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
      <p className="text-4xl  text-primary">
      Pôle Emploi
  </p>
      <div className="max-w-4xl mx-auto p-6  ">

      <h2 className="text-2xl font-bold text-center text-primary mb-4">
        Qu'est ce que Pôle Emploi
      </h2>

      <p className="text-lg text-gray-700 mb-6">
      Pôle Emploi propose plusieurs dispositifs de financement pour les demandeurs d’emploi souhaitant suivre une formation afin d’améliorer leur employabilité et favoriser leur retour à l’emploi.
      </p>


         {/* Qui peut en bénéficier ? */}
         <div className=" text-left mb-16 mt-16">
          <h2 className="text-2xl font-semibold text-center text-primary mb-4">Qui peut bénéficier du financement Pôle Emploi ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-1 ml-32">
            <div className="flex items-center text-gray-700"><FaBuilding className="text-blue-500 mr-2" /> Chômeurs inscrits à Pôle Emploi</div>
            <div className="flex items-center text-gray-700"><FaHandsHelping className="text-green-500 mr-2" /> Bénéficiaires de l’Aide Individuelle à la Formation (AIF)</div>
          </div>
        </div>
      <h3 className="text-2xl font-semibold text-primary text-center mb-3">
        Types de financements
      </h3>

      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-800">Dispositifs Collectifs</h4>
          <p className="text-lg text-gray-700">
            Gratuite pour les demandeurs d’emploi. Pour répondre aux besoins de recrutement des entreprises ou d’une branche professionnelle sur un territoire.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Action de Formation Conventionnée (AFC)</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">
            Renseignez-vous auprès de votre conseiller Pôle Emploi.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">Dispositifs Individuels</h4>
          <p className="text-lg text-gray-700">
            Sur devis pour faire une demande de prise en charge financière. Pour répondre à votre besoin individuel de formation en vue d’un retour à l’emploi rapide.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Compte Personnel de Formation</li>
            <li>Aide Individuelle à la Formation (AIF)</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">
            Consultez les formations et faites votre demande. Renseignez-vous auprès de votre conseiller Pôle Emploi.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800">Préalables au recrutement</h4>
          <p className="text-lg text-gray-700">
            Pour acquérir des compétences nécessaires et requises pour un poste en vue d’un recrutement.
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AFPR (Action de Formation Préalable au Recrutement)</li>
          </ul>
          <p className="text-lg text-gray-700 mt-2">
            Renseignez-vous auprès de votre conseiller Pôle Emploi.
          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default Tab;
