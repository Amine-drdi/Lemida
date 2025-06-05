import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {
  MdCheckBox,
  MdClose,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  username: yup
    .string()
    .min(4)
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Seules les lettres sont acceptées")
    .required("Nom et prénom requis"),
  email: yup
    .string()
    .email("Email invalide")
    .required("Email requis"),
  phone: yup.string().required("Téléphone requis"),
  policy: yup.boolean().oneOf([true], "Vous devez accepter la politique"),
});

const EligibilityForm = ({ setShowEligibilityForm, formation }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    watch,
    getValues,
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      policy: false,
    },
    resolver: yupResolver(schema),
  });

  const policySelected = watch("policy");

  const handleDownload = async () => {
    const fileName = `${formation.title}.docx`; // ou .pdf selon le format de ton fichier
    const values = getValues();

    try {
      // Enregistrement des infos de l'utilisateur
      const res = await fetch("https://backend-lemida.onrender.com/api/enregistrer-demande", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          formationTitle: formation.title,
        }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de l'enregistrement");
      }

      // Lancer le téléchargement
      const url = `https://backend-lemida.onrender.com/api/download/${fileName}`;
      window.open(url, "_blank");

      // Fermer le modal (optionnel)
      setShowEligibilityForm(false);
    } catch (err) {
      console.error("Erreur :", err);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="fixed inset-0 z-[2000] w-screen h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-[1999] bg-black/50"
        onClick={() => setShowEligibilityForm(false)}
      />
      <div className="relative z-[2001] flex xl:w-1/3 lg:w-[45%] md:w-[60%] w-[95%] bg-white rounded-lg p-8">
        <div
          className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-main_color hover:bg-[#20C997] cursor-pointer"
          onClick={() => setShowEligibilityForm(false)}
        >
          <MdClose className="text-white w-5 h-5" />
        </div>
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-3xl font-medium text-center">
           {formation.title}
          </h2>
          <form onSubmit={handleSubmit(handleDownload)} className="flex flex-col gap-6">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="username"
                className={`${
                  errors.username ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full border-b-2 focus:outline-none peer`}
                placeholder=" "
                {...register("username")}
              />
              <label htmlFor="username" className="absolute text-base top-3 text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-base">
                Nom et Prénom
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="email"
                id="email"
                className={`${
                  errors.email ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full border-b-2 focus:outline-none peer`}
                placeholder=" "
                {...register("email")}
              />
              <label htmlFor="email" className="absolute text-base top-3 text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-base">
                Email
              </label>
            </div>

            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="phone"
                className={`${
                  errors.phone ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full border-b-2 focus:outline-none peer`}
                placeholder=" "
                {...register("phone")}
              />
              <label htmlFor="phone" className="absolute text-base top-3 text-gray-600 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-base">
                Téléphone
              </label>
            </div>

            <div className="mt-0">
              <div className="flex gap-2">
                <input type="checkbox" id="policy" className="hidden" {...register("policy")} />
                <label htmlFor="policy" className="cursor-pointer flex items-center gap-1 text-xs font-medium">
                  {policySelected ? (
                    <MdCheckBox className="w-6 h-6 text-main_color" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 text-main_color" />
                  )}
                  <span>
                    J’accepte{" "}
                    <NavLink
                      to="/politiques-de-confidentialite"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      la Politique de Confidentialité
                    </NavLink>
                  </span>
                </label>
              </div>
              {errors.policy && (
                <p className="text-red-600 text-sm mt-1">{errors.policy.message}</p>
              )}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-main_color hover:bg-[#20C997] transition-all duration-500 py-3 px-32  text-white text-base font-medium flex items-center gap-2"
              >
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Télécharger
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EligibilityForm;
