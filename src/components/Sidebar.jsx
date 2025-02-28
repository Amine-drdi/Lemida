import { NavLink } from "react-router-dom";

import { useAppContext } from "../app/context/AppContext";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useAppContext();
  return (
    <div className="w-screen h-screen flex bg-[#F3F2F6]">
      <div
        className={`relative flex flex-col overflow-y-scroll scrollbar-hide w-screen h-screen`}
      >
        <button
          className="absolute right-6 top-6 cursor-pointer"
          onClick={() => setActiveMenu(!activeMenu)}
        > 

          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.81754 18.6622L18.6668 3.81295C18.7501 3.72962 18.8865 3.72962 18.9698 3.81295L20.182 5.02514C20.2653 5.10847 20.2653 5.24485 20.182 5.32818L5.33277 20.1774C5.24943 20.2608 5.11306 20.2608 5.02972 20.1774L3.81754 18.9652C3.7342 18.8819 3.7342 18.7455 3.81754 18.6622Z"
              fill="black"
              fillOpacity="0.85"
            />
            <path
              d="M5.66715 4.15152L20.5164 19.0008C20.5997 19.0841 20.5997 19.2205 20.5164 19.3038L19.3042 20.516C19.2209 20.5993 19.0845 20.5993 19.0012 20.516L4.15192 5.66675C4.06858 5.58341 4.06858 5.44704 4.15192 5.36371L5.3641 4.15152C5.44744 4.06819 5.58381 4.06819 5.66715 4.15152Z"
              fill="black"
              fillOpacity="0.85"
            />
          </svg>
        </button>
        <div className="px-5 pt-6 text-primary text-xl font-semibold">
          <p>Lemida</p>
        </div>
        <div className="flex flex-col px-5 py-[50px] text-xl text-nav_color/85 font-semibold leading-[45px]">
          <div className="flex flex-col justify-center">
            <NavLink to="/" onClick={() => setActiveMenu(!activeMenu)}>
              Accueil
            </NavLink>
          </div>
          <div className="flex flex-col justify-center">
            <NavLink
              to="/AllTrainings"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              Formations
            </NavLink>
          </div>
          <div className="flex flex-col justify-center">
            <NavLink
              to="/AllFinance"
              onClick={() => setActiveMenu(!activeMenu)}
            >
              Financements
            </NavLink>
          </div>
          <div className="flex flex-col justify-center">
            <NavLink to="/a-propos" onClick={() => setActiveMenu(!activeMenu)}>
              Qui sommes-nous?
            </NavLink>
          </div>
          <div className="flex items-center">
            <NavLink to="/contact" onClick={() => setActiveMenu(!activeMenu)}>
              Contactez-nous
            </NavLink>
          </div>
        </div>

        <div className="absolute left-5 bottom-3 flex flex-wrap gap-[13px] text-[#000] text-base font-medium">
          <NavLink
            to="/politiques-de-confidentialite"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            Politique de confidentialité
          </NavLink>
          <NavLink
            to="/conditions-generales"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            Conditions générales
          </NavLink>
          <NavLink
            to="/mentions-legales"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            Mentions légales
          </NavLink>
          <p className="mt-6">&copy; 2025 Lemida.  Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
