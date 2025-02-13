import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { trainings } from "../../assets/data/trainings";
import Card from "../../components/Card";

const SearchTrainings = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const categorieQuery = searchParams.get("categorie");
  const searchQuery = searchParams.get("search");
  return (
    <div className="flex flex-col gap-5 pt-5 pb-16 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding">
      <div className="flex flex-row gap-2">
        <NavLink to="/" className="text-base font-normal text-gray-700">
          Accueil
        </NavLink>{" "}
        <span className="text-base font-normal text-gray-700">|</span>
        <p className="text-base font-normal text-gray-700">
          {categorieQuery || searchQuery}
        </p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="sm:text-3xl text-xl font-bold text-gray-700">
            {trainings.length} résultats pour{" "}
            <span>"{categorieQuery || searchQuery}"</span>
          </p>
          <p className="font-normal md:text-base text-sm text-left max-w-4xl">
            Découvrez les formations qui répondent précisément à vos besoins,
            avec des programmes adaptés pour vous aider à atteindre vos
            objectifs professionnels. Parcourez les options disponibles et
            trouvez celle qui correspond parfaitement à vos attentes.
          </p>
        </div>
        <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {trainings.map((training) => (
            <Card
              key={training.id}
              imageUrl={training.image}
              title={training.title}
              instructors={training.instructors}
              duration={training.duration}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchTrainings;
