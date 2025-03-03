import React from 'react';

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
  <p className="text-4xl ml-40 text-primary">
    OPCO
  </p>
</div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4 text-primary">
      Qu'est-ce qu'un OPCO ?
      </h1>
      <p className="w-full  ml-80">
      Les OPCO (Opérateurs de Compétences) sont des organismes agréés par l'État qui ont pour mission d’accompagner <br/>
      les entreprises dans la formation professionnelle de leurs salariés. Ils remplacent les anciens OPCA <br/>
     (Organismes Paritaires Collecteurs Agréés) depuis 2019 et jouent un rôle clé dans le financement et l’optimisation des <br/>
      dispositifs de formation.<br/>
Leur objectif est de faciliter l’accès à la formation en prenant en charge tout ou partie des frais pédagogiques, en conseillant <br/>
 les entreprises sur le développement des compétences et en favorisant l’apprentissage.
        </p>

        <div class="max-w-4xl mx-auto p-4">
  <h2 class="text-2xl font-bold text-center text-primary mb-4">
  Les différents opérateurs OPCO
  </h2>
  <p class="text-lg text-gray-700 mb-6">
  Il existe 11 OPCO, chacun étant rattaché à un secteur d’activité spécifique. Voici les principaux OPCO et leurs domaines d’intervention.
  </p>
  <div className="flex flex-col gap-6">

              <div className="flex flex-col gap-4">
                {/* Engagement 1 : Parcours pédagogiques de qualité */}
                <div className="flex items-center gap-4">
                
                  <div>
                    <p className="text-lg font-semibold">AFDAS</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des secteurs de la culture, des industries créatives, des médias, de la communication, des télécommunications, du sport, du tourisme, des loisirs et du divertissement.
                    </p>
                  </div>
                </div>
                  {/* Engagement 2 : Accessibles partout et à tout moment */}
                  <div className="flex items-center gap-4">

                  <div>
                    <p className="text-lg font-semibold">OPCOMMERCE</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétence des secteurs conventionnels des branches du commerce.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">

                  <div>
                    <p className="text-lg font-semibold">CONSTRUCTYS</p>
                    <p className="text-sm text-gray-600">
                   Opérateur de compétences  du bâtiment, des travaux publics, du négoce des matériaux de construction et de bois.
                    </p>
                  </div>
                </div>


                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">Ocapiat</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des entreprises et exploitations agricoles, des acteurs du territoire, des entreprises du secteur alimentaire, des professionnels des activités maritimes.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">ATLAS</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences dans le champ des assurances, des services financiers et du conseil.                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">OPCO EP</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des Entreprises de Proximité (EP). Pour les artisans, les professions libérales et les petites entreprises de proximité.                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">AKTO</p>
                    <p className="text-sm text-gray-600">
                    Opérateur des entreprises et des salariés des services à forte intensité de main-d'oeuvre.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">OPCO 2i</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des secteurs des industries chimiques, pharmaceutiques, du papiers-carton et de la métallurgie.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">OPCO Cohésion Sociale (Uniformation)</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des secteurs du champ social, services aux personnes, insertion, sport, enseignement et formation.                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">OPCO Mobilité</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétences des secteurs du transport routier, maritime et des services de l’automobile.                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div>
                    <p className="text-lg font-semibold">OPCO Santé</p>
                    <p className="text-sm text-gray-600">
                    Opérateur de compétence des secteurs des professions de la santé et médico-social                    </p>
                  </div>
                </div>
                
              </div>
              </div>
</div>

        <div class="max-w-4xl mx-auto p-4">
  <h2 class="text-2xl font-bold text-center text-primary mb-4">
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
      <p class="mt-2">Utiliser le site <a href="https://www.cfadock.fr/" class="text-blue-600 underline" target="_blank">cfadock</a> : en entrant le SIRET de votre entreprise (sans aucun espace) sur le site, votre OPCO sera affiché.</p>
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
