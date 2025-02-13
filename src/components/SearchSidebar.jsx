import { useNavigate } from "react-router-dom";

import { useAppContext } from "../app/context/AppContext";
import { useState } from "react";

const SearchSidebar = () => {
  const { openSearchMenu, setOpenSearchMenu } = useAppContext();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (searchQuery.trim() !== "" && e.key === "Enter") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
      setOpenSearchMenu(!openSearchMenu);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      navigate(`/formations/recherches?search=${searchQuery}`);
      setSearchQuery("");
      setOpenSearchMenu(!openSearchMenu);
    }
  };

  const handleSearchItems = (key) => {
    navigate(`/formations/recherches?search=${key}`);
    setSearchQuery("");
    setOpenSearchMenu(!openSearchMenu);
  };

  return (
    <div className="w-screen h-screen flex bg-[#F3F2F6]">
      <div
        className={`relative flex flex-col overflow-y-scroll scrollbar-hide w-screen h-screen px-5 pt-[15px]`}
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col justify-between items-center gap-[13px]">
            <div className="flex flex-col gap-5 items-start h-[30px] w-full">
              <button
                className="flex flex-row items-center gap-[10px] cursor-pointer"
                onClick={() => setOpenSearchMenu(!openSearchMenu)}
              >
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.9282 7.32115H4.47999L10.7336 1.89258C10.8336 1.80508 10.7728 1.64258 10.6407 1.64258H9.06035C8.9907 1.64258 8.92463 1.66758 8.87285 1.71222L2.12463 7.56758C2.06283 7.62115 2.01326 7.68739 1.97929 7.76179C1.94532 7.8362 1.92773 7.91704 1.92773 7.99883C1.92773 8.08062 1.94532 8.16146 1.97929 8.23587C2.01326 8.31027 2.06283 8.3765 2.12463 8.43008L8.91213 14.3211C8.93892 14.3444 8.97106 14.3569 9.00499 14.3569H10.6389C10.7711 14.3569 10.8318 14.1926 10.7318 14.1069L4.47999 8.67829H14.9282C15.0068 8.67829 15.0711 8.61401 15.0711 8.53544V7.46401C15.0711 7.38544 15.0068 7.32115 14.9282 7.32115Z"
                    fill="black"
                    fillOpacity="0.85"
                  />
                </svg>

                <span>Retour</span>
              </button>
            </div>
            <div
              className="flex items-center justify-between px-[17px] h-[49px] w-full cursor-pointer rounded-[30px] border border-[#D9D9D9]"
              onClick={() => handleSearch()}
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Rechercher..."
                className="outline-none text-sm leading-[22px] font-medium w-full bg-inherit text-[#262626] placeholder:text-[#262626]"
              />
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.0369 17.5201L13.446 11.9293C14.3136 10.8076 14.7829 9.43628 14.7829 7.99388C14.7829 6.26732 14.1091 4.64839 12.8906 3.42774C11.6721 2.20708 10.0489 1.5354 8.32445 1.5354C6.60004 1.5354 4.9768 2.20924 3.7583 3.42774C2.53765 4.64624 1.86597 6.26732 1.86597 7.99388C1.86597 9.7183 2.5398 11.3415 3.7583 12.56C4.9768 13.7807 6.59788 14.4524 8.32445 14.4524C9.76685 14.4524 11.136 13.9831 12.2577 13.1176L17.8486 18.7064C17.865 18.7228 17.8844 18.7358 17.9058 18.7447C17.9273 18.7535 17.9502 18.7581 17.9734 18.7581C17.9966 18.7581 18.0196 18.7535 18.041 18.7447C18.0624 18.7358 18.0819 18.7228 18.0983 18.7064L19.0369 17.7699C19.0533 17.7535 19.0663 17.734 19.0752 17.7126C19.0841 17.6912 19.0887 17.6682 19.0887 17.645C19.0887 17.6218 19.0841 17.5989 19.0752 17.5774C19.0663 17.556 19.0533 17.5365 19.0369 17.5201ZM11.7345 11.404C10.8217 12.3146 9.61184 12.8162 8.32445 12.8162C7.03706 12.8162 5.82717 12.3146 4.91437 11.404C4.00373 10.4912 3.50212 9.28128 3.50212 7.99388C3.50212 6.70649 4.00373 5.49445 4.91437 4.58381C5.82717 3.67316 7.03706 3.17155 8.32445 3.17155C9.61184 3.17155 10.8239 3.67101 11.7345 4.58381C12.6452 5.4966 13.1468 6.70649 13.1468 7.99388C13.1468 9.28128 12.6452 10.4933 11.7345 11.404Z"
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[21px]">
            <div className="">
              <h1 className="font-bold text-base leading-[72px] font-[Poppins] h-[35px] flex items-center text-[#2234A8]">
                Recherches populaires
              </h1>
              <div className="w-[27px] border-2 border-[#2234A8]" />
            </div>
            <div className="">
              <ul className="flex flex-col gap-3 text-sm leading-[20px]">
                {[
                  {
                    label: "Gestion des patients",
                    key: "Gestion des patients",
                  },
                  {
                    label: "Informatique",
                    key: "Informatique",
                  },
                  { label: "Sécurité", key: "Sécurité" },
                  {
                    label: "Energétique",
                    key: "Energétique",
                  },
                  {
                    label: "Gestion des risques ",
                    key: "Gestion des risques ",
                  },
                ].map((item) => (
                  <li
                    key={item.key}
                    className="flex flex-row justify-between text-[#262626]"
                  >
                    <p className="font-medium text-sm leading-[22px]">
                      {item.label}
                    </p>
                    <button
                      onClick={() => handleSearchItems(item.key)}
                      className="text-[#141414] hover:text-[#3FADE5] cursor-pointer"
                    >
                      <svg
                        width="17"
                        height="18"
                        viewBox="0 0 17 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.2736 8.54067L8.10557 2.31936C8.05055 2.27192 7.98034 2.24536 7.90635 2.24536H6.22722C6.08682 2.24536 6.02231 2.41991 6.12856 2.51099L12.773 8.27884H1.66985C1.58637 8.27884 1.51807 8.34715 1.51807 8.43063V9.56902C1.51807 9.6525 1.58637 9.72081 1.66985 9.72081H12.7711L6.12666 15.4887C6.02041 15.5816 6.08492 15.7543 6.22532 15.7543H7.96137C7.99742 15.7543 8.03347 15.741 8.06003 15.7163L15.2736 9.45898C15.3393 9.40186 15.392 9.33132 15.4281 9.25211C15.4642 9.1729 15.4828 9.08687 15.4828 8.99983C15.4828 8.91278 15.4642 8.82675 15.4281 8.74754C15.392 8.66833 15.3393 8.59779 15.2736 8.54067Z"
                          fill="black"
                          fillOpacity="0.85"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSidebar;
