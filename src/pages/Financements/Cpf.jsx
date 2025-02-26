import React from 'react';
import TableDesMatieres from './components/TableDeMatiere';
import { finance } from '../../assets/data/trainings';

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
  <p className="text-4xl ml-40">
    <span className="text-yellow-500">_</span>CPF
  </p>
</div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center px-4">
        TOUT COMPRENDRE SUR LE COMPTE PERSONNEL DE FORMATION
      </h1>
      <p className="w-full  ml-60">
      Nos formations sont financées <b> jusqu'à 100% avec votre Compte Personnel <br/> de Formation</b> - CPF.
       Il suffit d'utiliser vos crédits pour suivre depuis chez vous des <br/> formations certifiantes
        et ainsi évoluer professionnellement.
        </p>
        <h1 class="text-3xl font-bold text-center text-blue-600 bg-gray-100 p-4 rounded-lg shadow-lg">
  FORMATION ÉLIGIBLE AU CPF
</h1>
<p class="text-lg text-gray-700 text-center mt-2">
  Organisme certifié Qualiopi et habilité à former sur diverses certifications enregistrées auprès de France Compétences. N’attendez plus et formez-vous avec votre Compte Formation.
</p>
<ul class="list-inside space-y-2 text-lg text-gray-700">
  <li class="flex items-center">
    <span class="inline-block w-4 h-4 mr-2 bg-blue-600 rounded-full"></span>
    Utilisez votre montant CPF pour financer votre formation​.
  </li>
  <li class="flex items-center">
    <span class="inline-block w-4 h-4 mr-2 bg-blue-600 rounded-full"></span>
    Profitez d’un financement allant jusqu’à 100% selon votre montant disponible​.
  </li>
  <li class="flex items-center">
    <span class="inline-block w-4 h-4 mr-2 bg-blue-600 rounded-full"></span>
    Nos formations sont disponibles sur l’application Mon Compte Formation​.
  </li>
</ul>

    </div>
  );
};

export default Tab;


