import React, { useEffect, useState } from "react";
import TopRated from "./components/TopRated";
import Featured from "./components/Featured";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { juridiqueTrainings } from "../../assets/data/trainings";

const LegalTrainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);
// Ajout du style global pour l'animation
const styles = document.createElement('style');
styles.innerHTML = `
  @keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
document.head.appendChild(styles);
  useEffect(() => {
    if (location.pathname === "/formations/juridique/juridique-et-administrative") {
      setTrainingsList(juridiqueTrainings);
      console.log("Données juridiques chargées :", juridiqueTrainings);

    }
  }, [location]);

  const pageDetails = {
    "/formations/categorie/juridique-et-administrative": {
      title: "Nos programmes de formation pour les professionnels juridiques",
      description:
        "Conçues pour le domaine juridique, ces formations vous aident à développer vos compétences dans un environnement en constante évolution.",
    },
  };
  const { title, description } = pageDetails[location.pathname] || {
    title: "Formations disponibles",
    description:
      "Découvrez nos programmes variés qui s'adaptent à différents secteurs professionnels.",
  };


  return (
    <div className="md:px-desktop_padding sm:px-tablet_padding px-mobile_padding py-16 flex flex-col gap-14">
      <div className="flex flex-col gap-3">
        <p className="font-semibold md:text-3xl text-xl text-left max-w-2xl">{title}</p>
        <p className="font-normal md:text-base text-sm text-left max-w-5xl">{description}</p>
      </div>
      <h1 style={{
  backgroundColor: 'rgba(255, 1, 0, 1.5)',  // Rouge avec opacité faible
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  fontSize: '24px',
  animation: 'blink 10s infinite',
  borderRadius: '30px',  // Coins arrondis
  display: 'flex',
  justifyContent: 'center',  // Centrer horizontalement
  alignItems: 'center',  // Centrer verticalement
  height: '100%',  // S'assurer que l'élément prend toute la hauteur disponible
}}
>
  Formation par visioconférence en one-to-one ou par groupe de 2 à 6 salariés
</h1>
     {/*<TopRated trainings={trainingsList} />*/}
      {/*trainingsList.length > 0 && <Featured training={trainingsList[0]} />*/}
      <AllTrainings trainings={trainingsList} />
    </div>
  );
};

export default LegalTrainings;

