import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col md:items-start items-center md:pb-0 pb-2 lg:w-80 lg:min-w-80 md:w-60 md:min-w-60 w-full md:shadow-md md:rounded-md md:h-[70vh] bg-white md:border-none border-b border-gray-100">
      <div className="md:flex hidden">
        <p className="p-4 text-xl font-medium text-gray-800">Compte</p>
      </div>
      <div className="flex md:flex-col flex-row justify-between md:text-sm text-sm font-medium w-full">
        <NavLink
          to={"/compte/profil"}
          className={`${
            location.pathname === "/compte/profil" ? "bg-gray-100" : "bg-white"
          } md:px-4 px-2 py-3 hover:bg-gray-200 md:rounded-none rounded-md`}
        >
          Informations
        </NavLink>
        <NavLink
          to={"/compte/profil/mes-formations"}
          className={`${
            location.pathname === "/compte/profil/mes-formations"
              ? "bg-gray-100"
              : "bg-white"
          } md:px-4 px-2 py-3 hover:bg-gray-200 md:rounded-none rounded-md`}
        >
          Formations
        </NavLink>
        <NavLink
          to={"/compte/profil/modifier-mot-de-passe"}
          className={`${
            location.pathname === "/compte/profil/modifier-mot-de-passe"
              ? "bg-gray-100"
              : "bg-white"
          } md:px-4 px-2 py-3 hover:bg-gray-200 md:rounded-none rounded-md`}
        >
          Sécurité
        </NavLink>
      </div>
    </div>
  );
};

export default Menu;
