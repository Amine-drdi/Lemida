import React from "react";
import FormationCard from "./components/CardFormation";
import Timeline from "./components/Timeline";

const Home = () => {
  return (
    <section className="flex flex-col px-28">
      {/* Grille de cartes avec des unités relatives et minmax */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-8 lg:p-16">
        <FormationCard
          image="/images/authentication.jpg"
          link="/formations/categorie/sante"
          name="Nos formations incontournables pour les professionnels de santé !"
          description="Découvrez une sélection de formations essentielles pour perfectionner vos compétences et atteindre vos objectifs professionnels."

        />
        <FormationCard
          image="/images/btp.jpg"
          link="/formations/categorie/btp"
          name="Nos formations essentielles pour les professionnels du bâtiment !"
          description="Explorez notre sélection de formations clés pour développer vos compétences techniques et mener à bien vos projets dans le secteur de la construction."
        />
        <FormationCard
          image="/images/administratif.jpg"
          link="/formations/juridique/juridique-et-administrative"
          name="Nos formations essentielles pour les professionnels du juridique et de l’administration !"
          description="Découvrez notre sélection de formations clés pour renforcer vos compétences en gestion, droit et administration."
        />
      </div>

      {/* Timeline */}
      <div className="px-4 sm:px-8 md:px-16">
        <Timeline />
      </div>
    </section>
  );
};

export default Home;