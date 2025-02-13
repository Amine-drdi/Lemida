import React, { useState } from "react";

const Program = () => {
  const [showContent, setShowContent] = useState([]);

  const handleShowContent = (id) => {
    if (showContent.indexOf(id) !== -1) {
      setShowContent(showContent.filter((element) => element !== id));
    } else {
      setShowContent([...showContent, id]);
    }
  };

  return (
    <div id="program" className="flex flex-col gap-6 scroll-mt-52">
      <div className="">
        <p className="text-2xl font-medium text-gray-600 max-w-2xl">
          Programme détaillé
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4 w-full">
        <div className="flex flex-col px-6 py-2 divide-y-2 divide-gray-200 rounded-lg border-2 border-gray-200 h-fit lg:w-2/3 w-full">
          <div
            onClick={() => handleShowContent("1")}
            className="group flex flex-col gap-5 py-4 cursor-pointer"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <p className="group-hover:underline cursor-pointer group-hover:text-main_color font-medium sm:text-xl text-base text-gray-800">
                  Gestion de la douleur peropératoire
                </p>
                <p className="flex gap-2 text-xs text-gray-400">
                  <span>Partie 1</span>.<span>9 heures</span>
                </p>
              </div>
              <p className="flex items-center justify-center gap-4 text-main_color">
                <span
                  className={`${
                    showContent.includes("1") ? "flex" : "hidden"
                  } group-hover:flex font-medium sm:text-base text-sm`}
                >
                  Détails
                </span>
                {showContent.includes("1") ? (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 8.375L8 1.625L1.25 8.375"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.625L8 8.375L14.75 1.625"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </p>
            </div>
            <div className={`${!showContent.includes("1") && "hidden"}`}>
              <ol className="flex flex-col gap-2 list-decimal list-inside sm:text-base text-sm text-gray-500">
                <li>Les mécanismes de la douleur</li>
                <li>
                  Compréhension des mécanismes physiopathologiques de la
                  douleur.
                </li>
                <li>
                  Facteurs influençant la perception de la douleur chez les
                  patients.
                </li>
              </ol>
            </div>
          </div>
          <div
            onClick={() => handleShowContent("2")}
            className="group flex flex-col gap-5 py-4 cursor-pointer"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <p className="group-hover:underline cursor-pointer group-hover:text-main_color font-medium sm:text-xl text-base text-gray-800">
                  Gestion de la douleur peropératoire
                </p>
                <p className="flex gap-2 text-xs text-gray-400">
                  <span>Partie 1</span>.<span>9 heures</span>
                </p>
              </div>
              <p className="flex items-center justify-center gap-4 text-main_color">
                <span
                  className={`${
                    showContent.includes("2") ? "flex" : "hidden"
                  } group-hover:flex font-medium sm:text-base text-sm`}
                >
                  Détails
                </span>
                {showContent.includes("2") ? (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 8.375L8 1.625L1.25 8.375"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.625L8 8.375L14.75 1.625"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </p>
            </div>
            <div className={`${!showContent.includes("2") && "hidden"}`}>
              <ol className="flex flex-col gap-2 list-decimal list-inside sm:text-base text-sm text-gray-500">
                <li>Les mécanismes de la douleur</li>
                <li>
                  Compréhension des mécanismes physiopathologiques de la
                  douleur.
                </li>
                <li>
                  Facteurs influençant la perception de la douleur chez les
                  patients.
                </li>
              </ol>
            </div>
          </div>
          <div
            onClick={() => handleShowContent("3")}
            className="group flex flex-col gap-5 py-4 cursor-pointer"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <p className="group-hover:underline cursor-pointer group-hover:text-main_color font-medium sm:text-xl text-base text-gray-800">
                  Gestion de la douleur peropératoire
                </p>
                <p className="flex gap-2 text-xs text-gray-400">
                  <span>Partie 1</span>.<span>9 heures</span>
                </p>
              </div>
              <p className="flex items-center justify-center gap-4 text-main_color">
                <span
                  className={`${
                    showContent.includes("3") ? "flex" : "hidden"
                  } group-hover:flex font-medium sm:text-base text-sm`}
                >
                  Détails
                </span>
                {showContent.includes("3") ? (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 8.375L8 1.625L1.25 8.375"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.625L8 8.375L14.75 1.625"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </p>
            </div>
            <div className={`${!showContent.includes("3") && "hidden"}`}>
              <ol className="flex flex-col gap-2 list-decimal list-inside sm:text-base text-sm text-gray-500">
                <li>Les mécanismes de la douleur</li>
                <li>
                  Compréhension des mécanismes physiopathologiques de la
                  douleur.
                </li>
                <li>
                  Facteurs influençant la perception de la douleur chez les
                  patients.
                </li>
              </ol>
            </div>
          </div>
          <div
            onClick={() => handleShowContent("4")}
            className="group flex flex-col gap-5 py-4 cursor-pointer"
          >
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-1.5">
                <p className="group-hover:underline cursor-pointer group-hover:text-main_color font-medium sm:text-xl text-base text-gray-800">
                  Gestion de la douleur peropératoire
                </p>
                <p className="flex gap-2 text-xs text-gray-400">
                  <span>Partie 1</span>.<span>9 heures</span>
                </p>
              </div>
              <p className="flex items-center justify-center gap-4 text-main_color">
                <span
                  className={`${
                    showContent.includes("4") ? "flex" : "hidden"
                  } group-hover:flex font-medium sm:text-base text-sm`}
                >
                  Détails
                </span>
                {showContent.includes("4") ? (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.75 8.375L8 1.625L1.25 8.375"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.25 1.625L8 8.375L14.75 1.625"
                      stroke="#114d5b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </p>
            </div>
            <div className={`${!showContent.includes("4") && "hidden"}`}>
              <ol className="flex flex-col gap-2 list-decimal list-inside sm:text-base text-sm text-gray-500">
                <li>Les mécanismes de la douleur</li>
                <li>
                  Compréhension des mécanismes physiopathologiques de la
                  douleur.
                </li>
                <li>
                  Facteurs influençant la perception de la douleur chez les
                  patients.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-6 rounded-lg border-2 border-gray-200 h-fit lg:w-1/3 w-full">
          <div className="">
            <p className="text-2xl font-medium text-gray-600 max-w-2xl">
              Formateurs
            </p>
          </div>
          <div className="flex flex-col divide-y-2 divide-gray-200">
            <div className="flex flex-row items-center gap-4 py-4">
              <img
                src="https://lh3.googleusercontent.com/pw/AL9nZEUn0_Z__2yT_aZpFawJ_vi0ycdjOQQc-wtvTw2elNrVmzC4A8t5GrUaVe8qafjQJoK2xG2eqZCpaQY0fY_yx6IJBEtMJSHgDzxQvdQExK9I04HMw8B5hfjKC4tA0rxBcfg0fvv-zNiG7LLOaAQIhUY=w926-h617-no?authuser=0"
                alt="formateur"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="underline">Jon Doe</p>
                <p className="text-gray-400 text-sm">Vénéréologue</p>
                <p className="text-gray-400 text-sm">11 Formations</p>
              </div>
            </div>
            <div className="flex flex-row items-center gap-4 py-4">
              <img
                src="https://lh3.googleusercontent.com/pw/AL9nZEW3XlFCMD6Ce4UWIRarAJLqzzhXCxXuPbG21y_rowLXyG92XB9xy7LByUnqxd9ED9GxM5hr4OwQ_Yaa-ZFsdkdhVtaabTx1QZ-U_jA8eIylkDJ49Smmg9hN1i4xo-vzjpq4Tm1WAi-EERi8fdYACgc=w412-h617-no?authuser=0"
                alt="formateur"
                className="w-14 h-14 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <p className="underline">Jim Sullivan</p>
                <p className="text-gray-400 text-sm">Dermatologue</p>
                <p className="text-gray-400 text-sm">4 Formations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
