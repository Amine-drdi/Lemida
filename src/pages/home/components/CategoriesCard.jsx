import React from "react";
import { NavLink } from "react-router-dom";

const CategoriesCard = ({ categories, label, route }) => {
  const truncate = (text, maxLength) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <div className="bg-white p-6 flex flex-col items-center gap-6">
      <p className="w-full text-left text-base font-semibold">{label}</p>
      <div className="grid grid-cols-2 gap-6">
        {categories.slice(0, 6).map((category) => (
          <NavLink
            to={`/formations/${route}`}
            key={category.name}
            className="relative flex items-center justify-center w-24 h-24 bg-primary hover:bg-primary/80"
          >
            <category.icon className="text-white w-6 h-6" />
            <p className="absolute bottom-0 w-full text-center text-white text-xs font-semibold p-1">
              {truncate(category.name, 10)}
            </p>
          </NavLink>
        ))}
      </div>
      <NavLink
        to={`/formations/${route}`}
        className="text-sm font-medium hover:underline text-primary"
      >
        Voir plus
      </NavLink>
    </div>
  );
};

export default CategoriesCard;
