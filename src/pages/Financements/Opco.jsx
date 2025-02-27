import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import { finance } from '../../assets/data/trainings';

const Tab = () => {
  const found = finance.find((element) => element.id === 200);

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
    <span className="text-yellow-500">_</span> OPCO
  </p>
</div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
      Qu'est-ce qu'un OPCO ?
      </h1>
      <p className="w-full  ml-60">
      Le 1er avril 2019, onze opérateurs de compétences (OPCO), chargés d’accompagner la formation professionnelle, ont été agréés. <br/>
       Ils ont remplacé les anciens organismes paritaires collecteurs agréées (OPCA).<br/>
      Ces opérateurs de compétences ont pour missions de financer l’apprentissage,<br/>
       d’aider les branches à construire les certifications professionnelles et d’accompagner<br/> 
       les PME pour définir leurs besoins en formation.
        </p>
        <div class="max-w-4xl mx-auto p-4">
  <h2 class="text-2xl font-bold text-center text-blue-600 mb-4">
    Comment connaître son opérateur de compétences (OPCO) ?
  </h2>
  <p class="text-lg text-gray-700 mb-6">
    Le regroupement des branches professionnelles autour d’un OPCO désigné, s’appuie sur les critères de cohérence des métiers et des compétences, de filières, d’enjeux communs de compétences, de formation, de mobilité, de services de proximité et de besoins des entreprises.
    <br/>
    Près de 329 branches sont réparties dans 11 OPCO, au lieu des 20 OPCA qui existaient auparavant.
  </p>
  <h3 class="text-xl font-semibold text-gray-800 mb-3">
    Il existe aujourd’hui 3 principales méthodes pour connaître son opérateur de compétences :
  </h3>
  <ol class="list-decimal list-inside space-y-4 text-lg text-gray-700">
    <li>
      <strong>Votre entreprise est déjà, selon vous, adhérente à un OPCO mais vous souhaitez le vérifier ?</strong>
      <p class="mt-2">Utiliser le site <a href="https://cfadock.fr" class="text-blue-600 underline" target="_blank">cfadock</a> : en entrant le SIRET de votre entreprise (sans aucun espace) sur le site, votre OPCO sera affiché.</p>
    </li>
    <li>
      <strong>Votre entreprise n’est pas encore adhérente à un OPCO ?</strong>
      <p class="mt-2">Utiliser cette table de correspondance pour trouver votre OPCO grâce à votre Identifiant de Convention Collective (IDCC). Le numéro IDCC se compose de 4 chiffres et est compris entre 0001 et 9999. Il est attribué par le ministère du travail lors de la création de la convention collective et est rattaché à l’intitulé de la convention collective. Vous le trouverez généralement sur les fiches de salaire.</p>
    </li>
    <li>
      <strong>Votre entreprise n’est pas encore adhérente à un OPCO et vous n’appliquez pas ou pas encore de convention collective ?</strong>
      <p class="mt-2">Vous pouvez le trouver grâce à votre secteur d’activité et la liste des opérateurs de compétences.</p>
    </li>
  </ol>
</div>


    </div>
  );
};

export default Tab;
