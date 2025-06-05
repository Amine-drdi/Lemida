import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "../app/context/AppContext";
import {
  MdOutlineAccountCircle,
  MdSearch,
  MdMenu,
} from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import {
  administrativeCategories,
  btpCategories,
  medicalCategories,
} from "../assets/data/categories";

import {
  trainings,
} from "../assets/data/trainings";

const Header = () => {
  const { activeMenu, setActiveMenu, openSearchMenu, setOpenSearchMenu } =
    useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
  };

  const handleLogout = async () => {
    try {
    } catch (e) {}
  };

  const handleKeyPress = (e) => {
    if (searchQuery.trim() !== "" && e.key === "Enter") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[999] xl:px-desktop_padding md:px-laptop_padding sm:px-tablet_padding px-mobile_padding h-16 flex flex-row items-center justify-between w-full bg-header_background_color text-header_text_color shadow-headerShadow">
      <div className="max-lg:w-full max-lg:flex max-lg:justify-between max-lg:items-center">
        <div className="py-[17px] w-[139px] flex items-center gap-4">
          <button
            className="lg:hidden flex"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MdMenu className="w-8 h-8 text-[#141414]" />
          </button>
          <NavLink to="/" className="">
            <img
              className="h-10 w-auto"
              src="/images/logo_lemida.png"
              alt="Lemida"
            />
          </NavLink>
        </div>
        <div className="lg:hidden flex gap-4">
          <NavLink to="/connexion">
            <MdOutlineAccountCircle className="w-8 h-8 text-[#141414]" />
          </NavLink>
          {/*<button
            className="cursor-pointer"
            onClick={() => setOpenSearchMenu(!openSearchMenu)}
          >
            <MdSearch className="w-8 h-8 text-[#141414]" />
          </button>*/}
        </div>
      </div>

      <div className="lg:flex hidden justify-end items-center xl:gap-10 gap-7 w-full h-full text-sm font-medium leading-[22px]">
        <NavLink
          to="/"
          className={({ isActive }) =>
            [
              "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
              isActive ? " border-primary" : "",
              "group",
            ].join(" ")
          }
        >
          <span className="relative z-10 group-hover:text-white transition-all">Accueil</span>
          <span className="absolute inset-0 -mx-4 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
        </NavLink>

        <div className="group/main h-full ml-[20px]">

          <p
            className={`relative flex gap-1 items-center h-full cursor-pointer border-b-2 transition-all 
              ${
                location.pathname.includes("/formations")
                  ? "border-primary text-primary"
                  : "border-transparent text-nav_color/85"
              } group`}
          >
            <span className="relative z-10 group-hover:text-white transition-all">
              <NavLink
                to="/AllTrainings"
                className={({ isActive }) =>
                  [
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-nav_color/85 border-b-2 border-transparent",
                    "w-fit h-full flex items-center ",
                  ].join(" ")
                }
              >
                <span className="relative z-10 group-hover:text-white transition-all">
                  Formations
                </span>
              </NavLink>
            </span>
            <HiChevronDown className="w-5 h-5 relative z-10 transition-all group-hover:rotate-180 group-hover:text-white" />
            <span className="absolute inset-0 -mx-2 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
          </p>
          
          {/* Modified dropdown menu positioning */}
          <div className="flex hidden group-hover/main:flex absolute left-23 w-auto bg-white rounded-sm shadow-lg whitespace-nowrap">
            <div className="group/item relative px-8 py-5">
              <NavLink
                to="/formations/categorie/sante"
                className="  w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 group-hover/item:text-orange-500 transition-all">Santé</span>
              </NavLink>
              <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
              
              {/* Changed positioning to top-full */}
              <div className="absolute left-0 top-full hidden group-hover/item:grid grid-cols-6 px-8 py-5 w-[800px] max-h-[300px] gap-y-8 bg-primary whitespace-normal shadow-lg overflow-y-auto overscroll-contain pb-4">
  {medicalCategories.map((category) => (
    <div
      key={category.name}
      className="col-span-1 flex justify-center text-center hover:text-gray-400"
    >
      <NavLink
        to={`formations/${category.id}`}
        className="col-span-1 flex justify-center items-center text-center relative group/category w-full px-4 py-2"
      >
        <span className="relative z-10 text-white group-hover/category:text-orange-500 transition-all">
          {category.name}
        </span>
        <span className="absolute inset-0 bg-primary opacity-0 group-hover/category:opacity-100 transition-all"></span>
      </NavLink>
    </div>
  ))}
</div>


            </div>

            <div className="w-full h-[1px] bg-slate-400" />
            <div className="group/item relative px-8 py-5">
              <NavLink
                to="/formations/categorie/btp"
                className="w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 group-hover/item:text-orange-500 transition-all">BTP</span>
              </NavLink>
              <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
              
              {/* Changed positioning to top-full */}
              <div className="absolute left-0 top-full hidden group-hover/item:grid grid-cols-3 px-8 py-5 w-[700px] gap-y-8 bg-primary whitespace-normal shadow-lg">
                {btpCategories.map((category) => (
                  <div
                    key={category.name}
                    className="col-span-1 flex justify-center text-center hover:text-gray-400"
                  >
                    <NavLink
                      to={`formations/btp/${category.id}`}
                      className="col-span-1 flex justify-center items-center text-center relative group/category w-full px-4 py-2"
                    >
                      <span className="relative z-10 text-white group-hover/category:text-orange-500 transition-all">
                        {category.name}
                      </span>
                      <span className="absolute inset-0 bg-primary opacity-0 group-hover/category:opacity-100 transition-all"></span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-[1px] bg-slate-400" />
            <div className="group/item relative px-8 py-5">
              <NavLink
                to="/formations/juridique/juridique-et-administrative"
                className="w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
              >
                <span className="relative z-10 group-hover/item:text-orange-500 transition-all">
                  Juridique et Administrative
                </span>
              </NavLink>
              <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
              
              {/* Changed positioning to top-full */}
              <div className="absolute left-0 top-full hidden group-hover/item:grid grid-cols-3 px-8 py-5 w-[500px] gap-y-8 bg-primary whitespace-normal shadow-lg">
                {administrativeCategories.map((category) => (
                  <NavLink
                    key={category.name}
                    to={`formation/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="col-span-1 flex justify-center items-center text-center relative group/category w-full px-4 py-2"
                  >
                    <span className="relative z-10 text-white group-hover/category:text-orange-500 transition-all">
                      {category.name}
                    </span>
                    <span className="absolute inset-0 bg-primary opacity-0 group-hover/category:opacity-100 transition-all"></span>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>

        <NavLink
          to="/a-propos"
          className={({ isActive }) =>
            [
              "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
              isActive ? "text-primary border-primary" : "",
              "group",
            ].join(" ")
          }
        >
          <span className="relative z-10 group-hover:text-white transition-all">
            Qui sommes-nous?
          </span>
          <span className="absolute inset-0 -mx-2 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
        </NavLink>

        
         <div className="group/main h-full ml-[20px]">

<p
  className={`relative flex gap-1 items-center h-full cursor-pointer border-b-2 transition-all 
    ${
      location.pathname.includes("/financements")
        ? "border-primary text-primary"
        : "border-transparent text-nav_color/85"
    } group`}
>
  <span className="relative z-10 group-hover:text-white transition-all">
    <NavLink
      to="/AllFinance"
      className={({ isActive }) =>
        [
          isActive
            ? "text-primary border-b-2 border-primary"
            : "text-nav_color/85 border-b-2 border-transparent",
          "w-fit h-full flex items-center ",
        ].join(" ")
      }
    >
      <span className="relative z-10 group-hover:text-white transition-all">
      Financements
      </span>
      <HiChevronDown className="w-5 h-5 relative z-10 transition-all group-hover:rotate-180 group-hover:text-white" />
            <span className="absolute inset-0 -mx-2 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
    </NavLink>
  </span>
  <span className="absolute inset-0 -mx-2 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
</p>

{/* Modified dropdown menu positioning */}
<div className="flex hidden group-hover/main:flex absolute right-64 w-auto bg-white rounded-sm shadow-lg whitespace-nowrap">
  <div className="group/item relative px-8 py-5 left-70">
    <NavLink
      to="/CPF"
      className="  w-2 h-full flex items-center justify-between gap-2 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 group-hover/item:text-orange-500 transition-all">CPF</span>
    </NavLink>
    <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
    



  </div>
  <div className="group/item relative px-8 py-5">
    <NavLink
      to="/Opco"
      className="  w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 group-hover/item:text-orange-500 transition-all">OPCO</span>
    </NavLink>
    <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
    



  </div>

  <div className="group/item relative px-8 py-5">
    <NavLink
      to="/poleEmploi"
      className="  w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 group-hover/item:text-orange-500 transition-all">Pôle d'emploi</span>
    </NavLink>
    <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
  </div>

  <div className="group/item relative px-8 py-5">
    <NavLink
      to="/fiphfp"
      className="  w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 group-hover/item:text-orange-500 transition-all">FIPHFP</span>
    </NavLink>
    <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
  
  </div>
  
  <div className="group/item relative px-8 py-5">
    <NavLink
      to="/agefiph"
      className="  w-full h-full flex items-center justify-between gap-5 text-black relative group-hover/item:text-white transition-all duration-500 ease-in-out"
    >
      <span className="relative z-10 group-hover/item:text-orange-500 transition-all">AGEFIPH</span>
    </NavLink>
    <span className="absolute inset-0 bg-primary opacity-0 group-hover/item:opacity-100 transition-all"></span>
    



  </div>

</div>
</div>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            [
              "relative w-fit h-full flex items-center text-nav_color/85 border-b-2 border-transparent",
              isActive ? "text-nav_focus_color border-nav_focus_color" : "",
              "group",
            ].join(" ")
          }
        >
          <span className="relative z-10 group-hover:text-white transition-all">
            Contactez-nous
          </span>
          <span className="absolute inset-0 -mx-2 bg-primary opacity-0 group-hover:opacity-100 transition-all"></span>
        </NavLink>

        <NavLink
          to="/connexion"
          className="flex items-center justify-center rounded-full text-white font-medium text-sm px-4 py-2 bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all ease-in-out duration-500"
        >
          Connexion
        </NavLink>
      </div>
    </header>
  );
};

export default Header;