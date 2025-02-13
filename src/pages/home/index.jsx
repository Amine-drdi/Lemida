import React from "react";
import MostSeenTrainings from "./components/MostSeenTrainings";
import MostSeenTrainingsBtp from "./components/MostSeenTrainingsBtp";
import MostSeenTrainingsJuri from "./components/MostSeenTrainingsJuri";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";
import Advisors from "./components/Advisors";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import { btpAdvisors, medicalAdvisors,juridiqueAdministrationAdvisors} from "../../assets/data/advisors";
import { trainings, btpTrainings,juridiqueTrainings } from "../../assets/data/trainings";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      <Slider />
      <Categories />
      <WhyChooseUs />
      <MostSeenTrainings
        title="Nos formations incontournables pour les professionnels de santé !"
        description="Découvrez une sélection de formations essentielles pour perfectionner vos compétences et atteindre vos objectifs professionnels."
        trainings={trainings}
      />
      <Advisors
        label="Un apprentissage d’excellence grâce à nos formateurs spécialisés"
        description="Ils sont au cœur du progrès médical et partagent leur vision pour
            inspirer et guider ceux qui sauvent des vies. Découvrez les
            témoignages de trois figures clés du domaine de la santé."
        advisorsList={medicalAdvisors}
      />
      <MostSeenTrainingsBtp
        title="Nos formations essentielles pour les professionnels du bâtiment !"
        description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        trainings={btpTrainings}
      />
      <Advisors
        label="Profitez de l’expertise de professionnels aguerris"
        description="Ils sont au cœur des grandes réalisations du secteur et partagent leur vision pour inspirer et guider ceux qui bâtissent le monde de demain. Découvrez les témoignages de trois figures clés de la construction et de l'architecture."
        advisorsList={btpAdvisors}
      />
       <MostSeenTrainingsJuri
        title=" Nos formations essentielles pour les professionnels du juridique et de l’administration !"
        description="Découvrez notre sélection de formations clés pour renforcer vos compétences en gestion, droit et administration, et assurer le bon fonctionnement des organisations et des institutions."
        trainings={juridiqueTrainings}
      />
      <Advisors
        label="Profitez de l’expertise de professionnels aguerris"
        description="Ils sont au cœur des grandes décisions du secteur et jouent un rôle clé dans la structuration et la gestion des organisations. Découvrez les témoignages de trois experts en juridique et administration, partageant leur vision pour accompagner et sécuriser l'évolution des entreprises et des institutions."
        advisorsList={juridiqueAdministrationAdvisors}
      />
      <Timeline />
      <Testimonial />
    </section>
  );
};

export default Home;
