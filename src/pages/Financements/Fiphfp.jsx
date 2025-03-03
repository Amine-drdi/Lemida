import React ,{useState} from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import {finance } from '../../assets/data/trainings';
import { FaUserTie, FaBriefcase, FaUserGraduate, FaUserClock, FaCheckCircle } from 'react-icons/fa';
import { MdOutlineMonetizationOn } from "react-icons/md";
import { IoInformationCircleSharp } from "react-icons/io5";

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
         <p className="text-4xl ml-40 text-primary">
         FIPHFP
         </p>
       
          {/* Section CPF */}
          <section className="bg-gray-100 shadow-lg rounded-2xl p-6 mb-10">
               <h2 className="text-2xl font-semibold text-primary text-center mb-4">Qu'est-ce que FIPHFP ?</h2>
               <p className="text-gray-700 leading-relaxed ml-32">
                 Le <strong>Fonds pour l'insertion des personnes handicapées dans la fonction publique (FIPHFP)</strong>  accompagne les employeurs <br/>
                  publics dans leurs démarches pour favoriser l'insertion et le maintien dans l'emploi des personnes en situation de handicap. <br/>
                  Créé en 2006, le FIPHFP propose des aides financières, des conseils personnalisés et des outils pratiques pour atteindre <br/>
                  l'objectif de 6 % de taux d'emploi de personnes handicapées. Que vous soyez une administration, une collectivité territoriale <br/> 
                  ou un établissement public, le FIPHFP vous soutient dans la mise en œuvre de politiques inclusives, la formation des agents <br/> et l'aménagement des postes de travail. Découvrez comment le FIPHFP agit pour une fonction publique plus inclusive et équitable. <br/>
                  <br/>
                
                  Le FIPHFP collecte les contributions financières des employeurs publics qui ne respectent pas l'obligation légale d'employer <br/>
                   au moins 6 % de personnes en situation de handicap. Ces fonds sont ensuite utilisés pour financer diverses aides destinées <br/>
                    à compenser le handicap en milieu professionnel et en formation. 
MONPARCOURSHANDICAP.GOUV.FR
 Parmi les actions <br/>
  financées figurent des aides techniques et humaines, des aménagements de postes de travail, des formations spécifiques, <br/>
   ainsi que des actions de sensibilisation et d'information auprès des employeurs et des agents.<br/><br/>

   Le FIPHFP joue ainsi un rôle essentiel dans la promotion de l'emploi des personnes en situation de handicap dans la fonction <br/>
   publique, en soutenant les employeurs publics dans leurs démarches d'inclusion et en contribuant à l'accessibilité universelle.
                
                </p>
             </section>
       
             {/* Utiliser son CPF */}
             <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
             <h2 className="text-2xl font-semibold text-primary text-center mb-4">Les missions du FIPHFP</h2>
               <p className="text-gray-700 leading-relaxed ml-32">
               Le FIPHFP est un catalyseur de l'action publique en matière d'emploi des personnes en situation de handicap. Sa mission : impulser une dynamique et inciter les employeurs publics à agir en favorisant le recrutement, l'accompagnement et le maintien dans l'emploi au sein des trois Fonctions publiques.
               </p>

               <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Accessibilité numérique</li>
                   <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Aménagement de poste</li>
                   <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Formation</li>
                   <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" />Maintien dans l'emploi</li>
                   <li className="flex items-center text-gray-700 ml-32"><FaCheckCircle className="text-blue-500 mr-2" /> Recrutement</li>
               
             </section>
       
             {/* Liste des bénéficiaires du CPF */}
             <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
                      <h2 className="text-2xl font-semibold text-primary text-center mb-4">Objectifs du FIPHFP</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-32">
                        <div className="flex items-center text-gray-700"><FaUserTie className="text-blue-500 mr-2" /> Accompagner les employeurs publics</div>
                        <div className="flex items-center text-gray-700"><MdOutlineMonetizationOn className="text-green-700 mr-2" /> Financer des actions</div>
                        <div className="flex items-center text-gray-700"><IoInformationCircleSharp className="text-yellow-700 mr-2" /> Sensibiliser et informer</div>
  
                      </div>
                    </section>

                    <section className="bg-white shadow-lg rounded-2xl p-6 mb-10 ">
                    <p className="text-gray-700 leading-relaxed ml-32">
                    Le FIPHFP continue également de développer des partenariats pour promouvoir l'inclusion. Par exemple, une nouvelle <br/>
                    convention a été signée avec le Département de la Seine-Saint-Denis en février 2025, visant à proposer un accompagnement <br/>
                    personnalisé et à favoriser l'inclusion numérique des agents en situation de handicap. SEINESAINTDENIS.FR
Ces initiatives <br/> illustrent l'engagement constant du FIPHFP à promouvoir une fonction publique plus inclusive et à améliorer l'accompagnement des personnes en situation de handicap dans leur parcours professionnel.
                      </p>
                      
                    </section>
       
       </div>
 
     </div>
   );
};

export default Tab;
