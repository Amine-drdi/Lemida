import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Timeline from "./components/Timeline";
import FormationCard from "./components/CardFormation";

AOS.init({ duration: 1000 });
AOS.refresh();

const Home = () => {
  return (
    <section className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <FormationCard
           image="https://media.istockphoto.com/id/1403453245/fr/photo/les-financiers-calculent-les-imp%C3%B4ts-personnels-pour-leurs-clients.jpg?s=612x612&w=0&k=20&c=r9gMU55SrdSdiar7XcwIAAxOroZ6DoZSDwPAuUguR9c="

           link= "/CPF"
          name="CPF"
          description="Le financement CPF (Compte Personnel de Formation) permet aux salariés et demandeurs d'emploi de financer des formations professionnelles à partir des droits acquis sur leur compte. Ces fonds sont gérés par la Caisse des Dépôts et peuvent être utilisés pour des formations certifiantes ou qualifiantes."
        />
        <FormationCard
           image="https://www.matchers.fr/wp-content/uploads/2024/03/MACBOOK-PRO-2017-MOCK-UP-3-1536x926.jpg"
            link= "/Opco"
          name="OPCO"
          description="Les OPCO (Opérateurs de Compétences) sont des organismes chargés d'accompagner les entreprises dans le financement de la formation professionnelle de leurs salariés. Ils soutiennent les TPE, PME et les secteurs spécifiques en assurant le financement et le conseil en matière de formation."
        />
        <FormationCard
           image="https://www.learnthings.fr/wp-content/uploads/2024/08/Comment-se-faire-financer-une-formation-par-un-FAF--768x578.jpg.webp"
           link= "/fiphfp"
          name ="FIPHFP"
          description="Le FIPHFP (Fonds pour l'Insertion des Personnes Handicapées dans la Fonction Publique) finance des actions permettant l'insertion, le maintien dans l'emploi et la formation des personnes handicapées dans la fonction publique. Il soutient les employeurs publics dans leurs démarches d'accessibilité et d'adaptation des postes de travail."
        />
         <FormationCard
           image="https://eco-assurance.com/wp-content/uploads/2021/09/Call_to_Actions1.png"
           link= "/poleEmploi"
          name ="Pôle d'emploi"
          description="Pôle emploi accompagne les demandeurs d'emploi dans leur recherche d'emploi en proposant des services de conseil, de formation, et d'indemnisation. Il facilite l'accès à l'emploi en mettant en relation les candidats et les recruteurs tout en offrant des dispositifs de soutien à la reconversion professionnelle."
        />
          <FormationCard
           image="https://www.je-change-de-metier.com/images/se_former/financement/handicape/aide-reconversion-handicapes-agefiph-2.jpg"
           link= "/agefiph"
          name ="Agefiph"
          description="L'AGEFIPH (Association de gestion du fonds pour l'insertion des personnes handicapées) finance des actions visant à favoriser l'insertion et le maintien dans l'emploi des personnes en situation de handicap. Elle soutient les entreprises et les travailleurs handicapés à travers des aides financières et des services d'accompagnement."
        />
      </div>
      
      <Timeline />
     
    </section>
  );
};

export default Home;