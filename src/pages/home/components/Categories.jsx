import React from "react";
import CategoriesCard from "./CategoriesCard";
import {
  administrativeCategories,
  btpCategories,
  medicalCategories,
} from "../../../assets/data/categories";

const Categories = () => {
  return (
    <div className="py-16 bg-primary flex flex-col gap-10 items-center xl:px-desktop_padding lg:px-laptop_padding sm:px-tablet_padding px-mobile_padding">
      <div className="flex flex-row gap-4 items-end lg:mb-6 mb-4">
        <h1 className="font-bold md:text-3xl text-lg text-left text-white">
          Catégories de formations
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        <CategoriesCard
          label="Santé"
          categories={medicalCategories}
          route= "categorie/sante"
          
        />
        <CategoriesCard
          label="Bâtiment"
          categories={btpCategories}
          route="categorie/btp"
        />
        <CategoriesCard
          label="Juridique et administrative"
          categories={administrativeCategories}
          route="juridique/juridique-et-administrative"
        />
      </div>
    </div>
  );
};

export default Categories;
