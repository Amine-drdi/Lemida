import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import { finance } from '../../assets/data/trainings';
import { FaUserTie, FaBriefcase, FaUserGraduate, FaUserClock, FaCheckCircle } from 'react-icons/fa';
const Tab = () => {
  const found = finance.find((element) => element.id === 0);

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
  <p className="text-4xl ml-40 text-primary">
    CPF
  </p>

   {/* Section CPF */}
   <section className="bg-gray-100 shadow-lg rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold text-primary text-center mb-4">Qu'est-ce que le CPF ?</h2>
        <p className="text-gray-700 leading-relaxed ml-32">
          Le <strong>Compte Personnel de Formation (CPF)</strong> permet à toute personne active d’accumuler des droits à la formation. <br/>
          Chaque année, vous cumulez des crédits qui peuvent financer une formation certifiante.
        </p>
      </section>

      {/* Utiliser son CPF */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
      <h2 className="text-2xl font-semibold text-primary text-center mb-4">Comment utiliser votre CPF ?</h2>
       <div className='ml-32'>
        <ol className="list-decimal list-inside text-gray-700  ">
          <li>Se connecter sur <a href="https://www.moncompteformation.gouv.fr/" target="_blank" className="text-blue-500 underline">MonCompteFormation</a></li>
          <li>Choisir une formation éligible</li>
          <li>S'inscrire directement en ligne</li>
          <li>Compléter le financement si nécessaire</li>
        </ol>
        </div>
      </section>

      {/* Liste des bénéficiaires du CPF */}
      <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
          <h2 className="text-2xl font-semibold text-primary text-center mb-4">Qui peut bénéficier du CPF ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-32">
            <div className="flex items-center text-gray-700"><FaUserTie className="text-blue-500 mr-2" /> Salariés du secteur privé et public</div>
            <div className="flex items-center text-gray-700"><FaBriefcase className="text-green-500 mr-2" /> Travailleurs indépendants et professions libérales</div>
            <div className="flex items-center text-gray-700"><FaUserClock className="text-yellow-500 mr-2" /> Demandeurs d’emploi (sous certaines conditions)</div>
            <div className="flex items-center text-gray-700"><FaUserGraduate className="text-purple-500 mr-2" /> Jeunes sortis du système scolaire et en recherche d’emploi</div>
          </div>
        </section>

          {/* Avantages d'utiliser le CPF */}
          <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
          <h2 className="text-2xl font-semibold text-primary text-center mb-4">Pourquoi utiliser votre CPF pour nos formations ?</h2>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Financement accessible sans avance de frais</li>
            <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-green-500 mr-2" /> Formations adaptées aux besoins des professionnels du bâtiment et de la santé</li>
            <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-yellow-500 mr-2" /> Diplômes et certifications reconnues par l’État</li>
            <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-purple-500 mr-2" /> Apprentissage en ligne ou en présentiel selon vos préférences</li>
          </ul>
        </section>
</div>
      

    </div>
  );
};

export default Tab;


