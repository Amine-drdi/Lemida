import React , { useState } from 'react';
import { finance } from '../../assets/data/trainings';
import { FaUserTie, FaBriefcase, FaUserGraduate, FaUserClock, FaCheckCircle } from 'react-icons/fa';
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
   
            <div className="w-full">
        <p className="text-4xl ml-40 text-primary">
        AGEFIPH
        </p>
      
         {/* Section CPF */}
         <section className="bg-gray-100 shadow-lg rounded-2xl p-6 mb-10">
              <h2 className="text-2xl font-semibold text-primary text-center mb-4">Qu'est-ce que Agefiph ?</h2>
              <p className="text-gray-700 leading-relaxed ml-32">
                c'est <strong>L'Association de gestion du fonds pour l'insertion des personnes handicapées (Agefiph)</strong> est un organisme paritaire français institué par la loi du 10 juillet 1987 pour favoriser l'insertion professionnelle et le maintien dans l'emploi des personnes handicapées dans les entreprises du secteur privé.
               </p>
            </section>
      
            {/* Utiliser son CPF */}
            <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">Les avantages de la reconnaissance de la qualité de travailleur handicapé (RQTH)</h2>
              <p className="text-gray-700 leading-relaxed ml-32">
              Obtenir la reconnaissance en tant que travailleur handicapé permet d’accéder à divers dispositifs facilitant l’intégration <br/>
              et le maintien dans l’emploi des personnes en situation de handicap. Cette demande s’effectue auprès de la Commission  <br/>
              des droits et de l’autonomie des personnes handicapées (CDAPH).Un travailleur handicapé est défini comme toute personne <br/> dont l’accès à l’emploi est limité en raison d’une altération physique, sensorielle, mentale ou psychique.

La demande de <br/>
 reconnaissance de la qualité de travailleur handicapé (RQTH) vise à officialiser, auprès de la CDAPH, la capacité à travailler <br/>
 tout en prenant en compte les contraintes liées au handicap.

Cette reconnaissance ouvre droit à un accès prioritaire aux aides <br/>
à l’emploi et à la formation, ainsi qu’à des aménagements adaptés aux dispositifs existants.
              </p>
              
            </section>
      
            {/* Liste des bénéficiaires du CPF */}
            <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
                <h2 className="text-2xl font-semibold text-primary text-center mb-4">Notre Référente Handicap peut vous accompagner</h2>
                <h2 className="text-lg font-semibold text-black text-center mb-4">Ce que dit la loi</h2>

                <p className="text-gray-700 leading-relaxed ml-32">
                 La loi du 11 février 2005 pour l’égalité des droits et des chances des personnes handicapées définit le handicap comme <br/>
                  toute limitation d’activité ou restriction de participation à la vie en société subie dans son environnement.<br/>
                   Cette loi énonce également des principes fondamentaux, dont le droit à la compensation des conséquences du handicap <br/>
                   et le principe d’accessibilité généralisé, quel que soit le handicap. Depuis lors, des évolutions ont été opérées, tant au niveau <br/>
                   des exigences vis-à-vis des opérateurs de formation que des dispositifs proposés par l’AGEFIPH. Dans la loi Avenir professionnel <br/>
                    du 5 septembre 2018, les autorités ont exprimé leur volonté de faciliter l’accès aux formations pour les personnes en situation de handicap, plaçant ainsi cette démarche au cœur de la qualité des opérateurs de formation.</p>
                
              </section>
      
                {/* Avantages d'utiliser le CPF */}
                <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
                <h2 className="text-2xl font-semibold text-primary text-center mb-4">Pourquoi utiliser votre CPF pour nos formations ?</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Encourager l’identification précoce des personnes en situation de handicap dès leur arrivée au centre de formation.</li>
                  <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Garantir un traitement équitable tout au long du processus de recrutement, de sélection et de placement, assurant <br/> ainsi un accès égal aux opportunités de formation pour les personnes en situation de handicap.</li>
                  <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Proposer activement des améliorations pour rendre les formations dispensées plus accessibles sur le plan pédagogique, <br/> en identifiant les défis et les possibilités d’amélioration.</li>
                  <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Savoir mobiliser les ressources régionales disponibles pour soutenir la compensation du handicap en formation,<br/> le cas échéant, en faisant appel à des structures telles que Accea, Epatech, etc.</li>
                  <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Prévoir la transition vers la fin de la formation en fournissant aux partenaires les informations nécessaires <br/>pour faciliter l’intégration professionnelle des personnes handicapées.</li>

                </ul>
              </section>
      </div>

    </div>
  );
};

export default Tab;