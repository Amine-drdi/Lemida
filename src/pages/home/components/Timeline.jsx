import React from "react";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
} from "react-icons/tb";

const Timeline = () => {
  return (
    <div className="xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding mb-16 flex flex-col gap-14 md:items-center">
      <div className="flex flex-col items-center md:px-[80px] px-5 gap-[14px]">
        <p className="text-center font-bold md:text-3xl text-xl flex items-center">
          Comment démarrer avec nous ?
        </p>
        <p className="text-center text-base font-normal max-w-3xl">
          Dès le premier contact, nous sommes à vos côtés pour définir vos
          objectifs, vous guider dans vos démarches administratives et faciliter
          l'accès aux solutions de financement adaptées. Ensemble, nous
          transformons vos ambitions en réalité.
        </p>
      </div>
      <div className="max-w-5xl space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber1Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Prenez contact avec un expert de notre équipe
              </div>
            </div>
            <div className="text-slate-500">
              Nos conseillers sont là pour vous guider dans la définition de
              votre projet de formation et vous accompagner dans l'obtention de
              votre financement. N'hésitez pas à solliciter leur expertise pour
              démarrer dans les meilleures conditions.
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber2Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Accédez à votre espace personnel
              </div>
            </div>
            <div className="text-slate-500">
              Après votre inscription, vous recevrez un email avec une
              invitation pour accéder à votre espace personnel sur notre
              plateforme. C'est ici que vous pourrez démarrer et suivre
              l'évolution de votre formation.
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber3Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Apprenez à votre propre rythme
              </div>
            </div>
            <div className="text-slate-500">
              Notre plateforme vous permet de progresser à votre convenance,
              sans pression ni contraintes de temps. Que ce soit sur votre
              ordinateur, tablette ou smartphone, vous avez la liberté
              d'apprendre où vous le souhaitez, quand vous le souhaitez.
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber4Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Interagissez avec la communauté et les formateurs
              </div>
            </div>
            <div className="text-slate-500">
              Si vous avez des questions ou souhaitez partager vos réflexions,
              profitez du forum et des sections de commentaires pour échanger
              avec vos pairs et les formateurs. C'est l'occasion d'enrichir
              votre expérience d'apprentissage.
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber5Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Recevez votre attestation de formation
              </div>
            </div>
            <div className="text-slate-500">
              À l'issue de votre parcours, une attestation de suivi vous sera
              délivrée, attestant de votre engagement et de la validation de
              votre formation.
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white group-[.is-active]:bg-primary text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <TbCircleNumber6Filled className="w-10 h-10" />
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1">
              <div className="font-bold text-slate-900">
                Percevez vos indemnités de financement
              </div>
            </div>
            <div className="text-slate-500">
              Si vous avez suivi une formation financée par le DPC, une fois
              celle-ci validée, l'ANDPC procédera au versement des indemnités
              directement sur votre compte bancaire, comme indiqué sur votre
              profil sur mondpc.fr.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
