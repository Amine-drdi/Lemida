import React, { useEffect, useState } from "react";
import TopRated from "./components/TopRated";
import Featured from "./components/Featured";
import AllTrainings from "./components/AllTrainings";
import { useLocation } from "react-router-dom";
import { trainings } from "../../assets/data/trainings";

const HealthAndConstructionTrainings = () => {
  const location = useLocation();
  const [trainingsList, setTrainingsList] = useState([]);
  //const [trainingsBtpList, setTrainingsBList] = useState([]);


  useEffect(() => {
    const trainingMapping = {
      "/formations/categorie/sante": trainings,
     // "/formations/categorie/btp": btpTrainings,
    };

   /* const trainingBtpMapping = {
    //  "/formations/categorie/sante": trainings,
      "/formations/categorie/btp": btpTrainings,
    };*/

    setTrainingsList(trainingMapping[location.pathname] || []);
    //setTrainingsBtpList(trainingBtpMapping[location.pathname] || []);

  }, [location]);

  const pageDetails = {
    "/formations/categorie/sante": {
      title: "Nos programmes de formation pour les professionnels de santé",
      description:
        "Adaptées aux besoins du secteur médical, elles visent à renforcer vos compétences tout en répondant aux exigences des évolutions professionnelles et technologiques.",
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

      {/*<TopRated trainings={trainingsList} />*/}
      {/*trainingsList.length > 0 && <Featured training={trainingsList[0]} />*/}
       <AllTrainings trainings={trainingsList} />
    </div>
  );
};

export default HealthAndConstructionTrainings;


