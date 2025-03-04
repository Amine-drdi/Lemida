import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import FormationCard from "./components/CardFormation";

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col px-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4  sm:p-10 md:p-28">
        <FormationCard
           image="https://www.perspective-formation.fr/wp-content/uploads/2019/11/Logo-Mon-Compte-Formation-Appli-CPF.jpg"
           link="/CPF"
           name="CPF"
           description="Le financement CPF (Compte Personnel de Formation) permet aux salariés et demandeurs d'emploi de financer des formations professionnelles à partir des droits acquis sur leur compte. Ces fonds sont gérés par la Caisse des Dépôts et peuvent être utilisés pour des formations certifiantes ou qualifiantes."
        />
        <FormationCard
           image="https://e7w7t7d7.delivery.rocketcdn.me/wp-content/uploads/2024/04/city_pro_opco-2.png"
           link="/Opco"
           name="OPCO"
           description="Les OPCO (Opérateurs de Compétences) sont des organismes chargés d'accompagner les entreprises dans le financement de la formation professionnelle de leurs salariés. Ils soutiennent les TPE, PME et les secteurs spécifiques en assurant le financement et le conseil en matière de formation."
        />
        <FormationCard
           image="https://handicap.anfh.fr/sites/default/files/styles/16x9_640/public/ged/logo-fiphfp.png?itok=b4nriSLZ"
           link="/fiphfp"
           name="FIPHFP"
           description="Le FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) finance des actions permettant l'insertion, le maintien dans l'emploi et la formation des personnes handicapées dans la fonction publique. Il soutient les employeurs publics dans leurs démarches d'accessibilité et d'adaptation des postes de travail."
        />
        <FormationCard
           image="https://voila-le-travail.fr/wp-content/uploads/2021/07/Pole-Emploi.png"
           link="/poleEmploi"
           name="Pôle d'emploi"
           description="Pôle emploi accompagne les demandeurs d'emploi dans leur recherche d'emploi en proposant des services de conseil, de formation, et d'indemnisation. Il facilite l'accès à l'emploi en mettant en relation les candidats et les recruteurs tout en offrant des dispositifs de soutien à la reconversion professionnelle."
        />
        <FormationCard
           image="https://travail-emploi.gouv.fr/sites/travail-emploi/files/styles/w_1200/public/2024-06/logo-association-de-gestion-du-fonds-pour-linsertion-professionnelle-des-personnes-handicapees-agefiph.jpg.webp?itok=muymAzbD"
           link="/agefiph"
           name="Agefiph"
           description="L'AGEFIPH (Association de gestion du fonds pour l'insertion des personnes handicapées) finance des actions visant à favoriser l'insertion et le maintien dans l'emploi des personnes en situation de handicap. Elle soutient les entreprises et les travailleurs handicapés à travers des aides financières et des services d'accompagnement."
        />
      </div>

      <Timeline />
     
    </section>
  );
};

export default Home;
