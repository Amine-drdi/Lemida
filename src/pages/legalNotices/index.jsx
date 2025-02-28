import React from "react";

const LegalNotices = () => {
  return (
    <div className="flex flex-col gap-[22px] md:px-desktop_padding sm:px-tablet_padding px-mobile_padding my-14 pb-8">
      <div className="flex flex-col gap-8">
        <h1 className="sm:font-bold font-semibold sm:text-[42px] text-[21px]">
          Mentions légales
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-lg font-bold text-primary">Editeur du site</p>
        </div>
        <div>
          <p className="text-base font-normal ">
          Le présent site est édité, hébergé et géré par la société Lemida, c'est un organisme de formation
          dédié à la montée en compétences
          des professionnels et des entreprises. <br/><br/>
          <span className="font-semibold">Adresse du siège social :</span> 229 Rue Saint-Honoré, 75001 Paris<br/>
          <span className="font-semibold">Téléphone :</span> 07 56 82 86 00<br/>
          <span className="font-semibold">E-mail :</span> contact@lemida.fr<br/>
         <span className="font-semibold">SIRET :</span> 932 315 914 00014
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-3 list-decimal list-inside">
            <li className="text-primary font-bold">
            Droits des utilisateurs
              <p className="text-black font-normal">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-outside ml-8 mt-3">
                <li >
                <span className="text-primary" >  Droit d’accès :</span> Vous pouvez demander une copie de vos données personnelles.
                </li>
              
            
            <li >
           <span className="text-primary" > Droit de rectification :</span> Vous pouvez corriger ou mettre à jour vos informations.

            </li>
            <li >
            <span className="text-primary">Droit à l’effacement :</span> Vous pouvez demander la suppression de vos données.
           
            </li>
            <li >
            <span className="text-primary">Droit d’opposition :</span> Vous pouvez refuser le traitement de certaines données.
            </li>
            <li >
            <span className="text-primary">Droit à la portabilité :</span> Vous pouvez récupérer vos données sous un format lisible.
            
            </li>
            </ul>
            </li>
          </ul>
        </div>
      
        <div>
          <p className="text-base font-normal">
          Pour toute question ou demande de clarification supplémentaire, veuillez nous contacter par courriel à (
            <span className="text-[#006D75] underline">
            contact@lemida.fr
            </span>
            ). 
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalNotices;
