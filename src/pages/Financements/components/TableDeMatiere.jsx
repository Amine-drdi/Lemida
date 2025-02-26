import React, { useState } from 'react';

const TableDesMatieres = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="border rounded-lg p-4 max-w-2xl shadow-md bg-white">
      <div className="flex justify-between items-center mb-4 border-b pb-2">
        <h2 className="text-lg font-bold">Table des matières</h2>
        <button onClick={() => setIsCollapsed(!isCollapsed)} className="border rounded p-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      
      {!isCollapsed && (
        <div className="text-sm space-y-2">
          <a href="#cpf" className="block pl-2 text-gray-500">0.0.1. cpf</a>
          <a href="#compte-cpf" className="block pl-2 font-medium">0.1. TOUT COMPRENDRE SUR LE COMPTE PERSONNEL DE FORMATION</a>
          
          <a href="#formation-cpf" className="block font-bold">1. FORMATION ÉLIGIBLE AU CPF</a>
          <a href="#organisme" className="block pl-4">1.0.0.1. Organisme certifié Qualiopi et habilité à former sur diverses certifications enregistrée auprès de France Compétences.</a>
          <a href="#avis-stagiaires" className="block pl-4">1.0.1. L'avis de nos stagiaires compte.</a>
          
          <a href="#comment-marche" className="block font-bold">2. COMMENT ÇA MARCHE ?</a>
          <a href="#se-connecter" className="block pl-4">2.1. 1 – Se connecter Accédez à votre profil via le site internet ou l'application Mon Compte Formation.</a>
          <a href="#se-former" className="block pl-4">2.2. 3 – Se former</a>
          <a href="#france-connect" className="block pl-8">2.2.1. France Connect +, comment ça fonctionne ?</a>
          <a href="#de-quoi" className="block pl-12">2.2.1.1. De quoi s'agit-il ?</a>
          
          <a href="#etapes" className="block pl-4">2.4. Les étapes pour créer son Identité Numérique La Poste</a>
          <a href="#identite-poste" className="block pl-4">2.5. Vous avez créé votre Identité Numérique La Poste et vous souhaitez vous inscrire à une formation</a>
          <a href="#lancer" className="block pl-4">2.6. Alors, souhaitez-vous vous lancer ?</a>
          
          <a href="#reserver" className="block pl-4 font-bold">2.7. N'ATTENDEZ PLUS POUR RÉSERVER VOTRE FORMATION.</a>
          <a href="#faq" className="block pl-8">2.7.0.1. FAQ</a>
          <a href="#questions" className="block pl-12">2.7.0.1.1. Vous avez des questions sur votre Compte Personnel de Formation ?</a>
          <a href="#cpf-quest-ce" className="block pl-12">2.7.0.1.2. QU'EST-CE QUE LE CPF ?</a>
          <a href="#calcul-cpf" className="block pl-12">2.7.0.1.3. COMMENT SE CALCULE LE CPF ?</a>
          <a href="#utiliser-cpf" className="block pl-12">2.7.0.1.4. QUAND UTILISER LE COMPTE PERSONNEL DE FORMATION ?</a>
          <a href="#alimenter-cpf" className="block pl-12">2.7.0.1.5. QUI ALIMENTE LE COMPTE CPF ?</a>
          <a href="#formations-loire" className="block pl-12">2.7.0.1.6. LES FORMATIONS LOIRE SONT-ELLES FINANCÉES PAR LE CPF ?</a>
          <a href="#public-cpf" className="block pl-12">2.7.0.1.7. À QUI S'ADRESSE LE CPF ?</a>
        </div>
      )}
    </div>
  );
};

export default TableDesMatieres;



