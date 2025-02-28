import React, { useState } from "react";

const Main = () => {
  const [toggleParag1, setToggoleParag1] = useState(true);
  const [toggleParag2, setToggoleParag2] = useState(true);
  const [toggleParag3, setToggoleParag3] = useState(true);
  const [toggleParag4, setToggoleParag4] = useState(true);
  const [toggleParag5, setToggoleParag5] = useState(true);
  const [toggleParag6, setToggoleParag6] = useState(true);
  return (
    <section className="flex flex-col gap-[22px] w-full">
      <div className="flex flex-col gap-8">
        <h1 className="sm:font-bold font-semibold sm:text-[42px] text-[21px]">
          Politique de confidentialité
        </h1>
      </div>
      <div
        className={`${
          toggleParag1 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-1"
      >
        <div className="flex flex-row justify-between items-center">
          <p className="text-lg sm:font-bold font-semibold text-primary">
            Accord de confidentialité
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag1((prev) => !prev)}
          >
            {toggleParag1 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag1 && "hidden"}`}>
          <p>
            Cette politique de confidentialité décrit les informations que Lemidacollecte auprès des utilisateurs finaux de notre site web Lemida et les informations que nous collectons pour le compte de nos clients qui utilisent notre technologie pour utiliser nos services.
            <br />
            <br />
            Cette politique ne s'applique pas aux tiers que Lemida ne possède pas ou ne contrôle pas. Ces tiers ne sont pas sous le contrôle de Lemida et Lemida n'est pas responsable de leurs pratiques en matière de confidentialité ou de sécurité.
            <br />
            <br /> Tout formulaire de commande ou accord supplémentaire auquel les utilisateurs acceptent de se soumettre pour l'utilisation des fonctionnalités optionnelles de Lemida prévaudra sur les termes de cette politique de confidentialité en cas de divergence, veuillez donc lire attentivement ces formulaires de commande ou accords supplémentaires.
            <br />
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag2 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-2"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Introduction
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag2((prev) => !prev)}
          >
            {toggleParag2 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag2 && "hidden"}`}>
          <p>
          Dans le cadre de son activité, Lemida collecte et traite certaines données personnelles de ses utilisateurs. Cette Politique de Confidentialité vise à informer sur les données collectées, leur utilisation et les droits des utilisateurs.
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag3 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-3"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
            Cookies et publicité basée sur les centres d'intérêt
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag3((prev) => !prev)}
          >
            {toggleParag3 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag3 && "hidden"}`}>
          <p>
            Les cookies sont des identifiants alphanumériques transférés sur le disque dur de votre ordinateur via votre navigateur Web pour permettre à nos systèmes de reconnaître votre navigateur et de nous dire comment et quand les pages de notre Site sont visitées et par combien de personnes. Comme la plupart des sites Internet, nous utilisons des cookies pour améliorer l'expérience de nos utilisateurs sur Internet. Ces cookies ne collectent pas d'informations personnelles, et nous ne combinons pas les informations collectées via les cookies avec d'autres informations personnelles pour savoir qui vous êtes ou quel est votre nom ou votre adresse e-mail.
            <br />
            <br /> La plupart des navigateurs vous permettent d'empêcher le navigateur d'accepter de nouveaux cookies, d'être averti lorsque vous recevez un nouveau cookie ou de désactiver les cookies. Si vous supprimez vos cookies ou si vous configurez votre navigateur pour refuser les cookies, certaines fonctionnalités du Site peuvent ne pas fonctionner ou ne pas fonctionner comme prévu. Notez que si vous choisissez de supprimer les cookies, vous pouvez supprimer les cookies de désactivation qui affectent vos préférences publicitaires.
            <br />
            
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag4 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-4"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Données collectées
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag4((prev) => !prev)}
          >
            {toggleParag4 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag4 && "hidden"}`}>
          <p>
            Cette section décrit nos politiques concernant le traitement des informations des utilisateurs finaux fournies par nos clients utilisant nos Services ou d'autres sources de leur choix. Nous fournissons à nos clients la possibilité de créer des profils de leurs utilisateurs finaux afin de communiquer efficacement avec eux via des outils de communication marketing comme l'e-mail, les services d'analyse. Pour ce faire, nos clients intègrent notre technologie dans leurs applications, sites Web ou autres services en ligne.
            <br /> La collecte, l'utilisation et la divulgation des données par nos clients sont régies séparément par leurs politiques de confidentialité. Nos clients peuvent collecter des informations sur leurs utilisateurs directement ; dans ce cas, chacun de nos clients est responsable de s'assurer que leur collecte de données respecte leurs politiques de confidentialité et conditions d'utilisation.
            <br /><br />
            
           <span className="font-semibold">Informations d’identification :</span>  Nom, prénom, adresse e-mail, numéro de téléphone <br />
            <span className="font-semibold">Données de paiement :</span>  Informations bancaires (via un prestataire sécurisé) <br />
            <span className="font-semibold"> Données de navigation :</span>  Cookies, adresse IP, historique de connexion <br />
          </p>
        </div>
      </div>
      <div
        className={`${
          toggleParag5 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-5"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Finalités du traitement
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag5((prev) => !prev)}
          >
            {toggleParag5 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag5 && "hidden"}`}>
          <p>
          Les données sont utilisées pour :
          </p>
          <ol className="list-decimal list-inside font-normal text-black mt-3">
            <li>
            Gérer l’accès aux formations et aux comptes utilisateurs.
            </li>
            <li>
            Envoyer des informations commerciales et pédagogiques (avec consentement).
            </li>
            <li>
            Améliorer l’expérience utilisateur et la sécurité du site.

            </li>
          </ol>
          
          
        </div>
      </div>
      <div
        className={`${
          toggleParag6 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-6"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Partage des données
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag6((prev) => !prev)}
          >
            {toggleParag6 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag6 && "hidden"}`}>
          <p>
          Les données personnelles ne sont ni vendues ni cédées à des tiers. Toutefois, elles peuvent être partagées avec des prestataires techniques (hébergement, paiement en ligne).
          </p>
        </div>
      </div>

      <div
        className={`${
          toggleParag6 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-6"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Modifications de la Politique de Confidentialité
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag6((prev) => !prev)}
          >
            {toggleParag6 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag6 && "hidden"}`}>
          <p>
          Cette politique peut être mise à jour à tout moment. Nous informerons les utilisateurs en cas de modification importante.          </p>
        </div>
      </div>

      <div
        className={`${
          toggleParag6 ? "pb-8" : "pb-0"
        } flex flex-col gap-3 lg:pr-[53px] scroll-mt-16`}
        id="policy-6"
      >
        <div
          className="flex flex-row justify-between items-center"
          id="policy-1"
        >
          <p className="text-lg sm:font-bold font-semibold text-primary">
          Exercice des droits
          </p>
          <button
            className="flex items-center justify-center"
            onClick={() => setToggoleParag6((prev) => !prev)}
          >
            {toggleParag6 ? (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.75 8.375L8 1.625L1.25 8.375"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 1.625L8 8.375L14.75 1.625"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        <div className={`${!toggleParag6 && "hidden"}`}>
          <p>
          Pour exercer vos droits, vous pouvez nous contacter à :  <br/><br/>
          <span className="font-semibold">Email:</span> <span className="text-primary">contact@lemida.fr</span><br/>
          <span className="font-semibold">Adresse:</span> 229 RUE SAINT-HONORE, 75001 PARIS  <br/>
          Nous répondrons à votre demande sous 30 jours maximum.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;