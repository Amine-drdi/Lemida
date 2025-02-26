import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import {finance } from '../../assets/data/trainings';

const Tab = () => {
  const found = finance.find((element) => element.id === 300);

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
    <span className="text-yellow-500">_</span> FAF
  </p>
</div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
      Qu'est-ce qu'un Fonds d’Assurance Formation (FAF) ?

      </h1>
      <p className="w-full  ml-60">
      Les Fonds d’Assurance Formation (FAF) assurent la gestion des fonds issus de la collecte de la Contribution <br/>
      à la Formation Professionnelle (CFP, perçue par l’intermédiaire des URSSAF ou la Sécurité Sociale des Indépendants)<br/> 
      et le financement des formations pour les Chefs d’entreprise / Dirigeants non- salariés et leurs Conjoints collaborateurs <br/>
      ou Conjoints associés de ces 3 secteurs d’activité.<br/>

Ils ont pour mission de favoriser la montée en compétence des Dirigeants non-salariés <br/> 
et de leurs Conjoints collaborateurs en permettant l’accès à la formation pour le plus grand nombre.
        </p>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Comment connaître son FAF ?
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        Le fonds d’assurance formation (FAF) diffère selon la nature de son activité, c’est-à-dire en fonction de son code NAF (ou code APE ).
      </p>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Tableau - Fonds d'assurance formation des travailleurs indépendants
      </h3>
      
      <table className="min-w-full table-auto border-separate border-spacing-2 mb-6">
        <thead>
          <tr className="bg-blue-100">
            <th className="px-4 py-2 text-left text-blue-600">Activité principale (selon le code NAF)</th>
            <th className="px-4 py-2 text-left text-blue-600">Fonds d'assurance formation</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Profession libérale</td>
            <td className="px-4 py-2">Fonds interprofessionnel de formation des professionnels libéraux (FIF-PL)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Profession libérale médicale</td>
            <td className="px-4 py-2">Fonds d’assurance formation de la profession médicale (FAF-PM)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Commerçant et dirigeant non salarié</td>
            <td className="px-4 py-2">Association de gestion du financement de la formation des chefs d’entreprise (Agefice)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Artiste auteur</td>
            <td className="px-4 py-2">Fonds d’assurance formation des secteurs de la culture, de la communication et des loisirs (AFDAS)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Artisan, micro-entrepreneur</td>
            <td className="px-4 py-2">Fonds d’assurance formation des chefs d’entreprises artisanales (FAFCEA)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Exploitant agricole</td>
            <td className="px-4 py-2">Fonds pour la formation des entrepreneurs du vivant (Vivéa)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-4 py-2">Professionnel de la pêche</td>
            <td className="px-4 py-2">OPCO Ocapiat</td>
          </tr>
        </tbody>
      </table>

      <p className="text-lg text-gray-700 mb-4">
        <strong>À savoir:</strong> Un micro-entrepreneur dont le chiffre d’affaires est de 0 € sur une durée de 12 mois consécutifs ne peut pas bénéficier de la prise en charge de ses dépenses de formation.
      </p>

      <p className="text-lg text-gray-700 mb-4">
        Le montant du financement des coûts de formation dépend du code NAF de chaque activité et des thèmes de formation retenus par les représentants de la profession.
        Seuls les coûts pédagogiques, y compris pour les formations à distance, sont remboursés. Les frais de repas, d’hôtel ou de transport sont exclus.
      </p>

      <h3 className="text-xl font-semibold text-gray-800 mb-3">
        Demande de prise en charge
      </h3>

      <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
        <li>
          Avant de faire sa demande, le travailleur indépendant doit avoir l’attestation de paiement de la CFP : Contribution à la formation professionnelle fournie par l’Urssaf sur son compte personnel.
        </li>
        <li>
          Il doit déposer une demande de prise en charge auprès du fonds d’assurance formation (FAF) dont il dépend.
        </li>
        <li>
          La demande se fait au minimum 1 mois avant le début de la formation prévue. Toute demande déposée hors délai sera refusée.
        </li>
        <li>
          S’il s’agit de plusieurs formations, il faut déposer une demande de prise en charge pour chacune d’elles.
        </li>
      </ol>
    </div>
 



    </div>
  );
};

export default Tab;
