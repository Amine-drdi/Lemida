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


// ✅ Formulaire d'inscription
const InscriptionForm = ({ setShowInscriptionForm, formation }) => {
  const sessions = formation?.Session || [];
// ✅ Schéma de validation
const schema = yup.object().shape({
  username: yup.string().min(4).matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "only letters accepted").required(),
  email: yup.string().email("Email non valide").required(),
  phone: yup.string().required(),
  job: yup.string().required(),
  policy: yup.boolean().oneOf([true], "Vous devez accepter la politique"),
  sessionDate: sessions.length > 0
    ? yup.string().required("Veuillez sélectionner une session")
    : yup.string().notRequired(),
});

 const {
  formState: { errors },
  handleSubmit,
  register,
  setError,
  watch,
} = useForm({
  mode: "onSubmit", // ou "onChange" pour test en live
  defaultValues: {
    username: "",
    email: "",
    phone: "",
    job: "",
    policy: false,
    sessionDate: "",
  },
  resolver: yupResolver(schema),
});


  const policySelected = watch("policy");

 const submit = async (values) => {
  console.log("Formulaire soumis avec : ", values);
  try {
    const response = await fetch("https://backend-lemida.onrender.com/api/inscription", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    alert("Inscription réussie !");
    setShowInscriptionForm(false);
  } catch (error) {
    alert("Erreur lors de l'envoi : " + error.message);
  }
};


  return (
    <div className="fixed inset-0 z-[2000] w-screen h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-[1999] w-screen h-screen bg-black/50"
        onClick={() => setShowInscriptionForm(false)}
      />
      <div className="relative z-[2001] flex xl:w-1/3 lg:w-[45%] md:w-[60%] w-[95%] h-fit bg-white rounded-lg p-8">
        <div
          className="absolute top-5 right-5 h-8 w-8 flex items-center justify-center rounded-full bg-main_color hover:bg-[#20C997] transition-all duration-500 ease-in-out cursor-pointer"
          onClick={() => setShowInscriptionForm(false)}
        >
          <MdClose className="text-white w-5 h-5" />
        </div>
        <div className="w-full flex flex-col gap-8">
          <h2 className="text-3xl font-medium text-center">Inscription </h2>
          <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-6">
            {/* Nom et prénom */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="username"
                {...register("username")}
                className={`${
                  errors.username ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:border-[#20C997]`}
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
                Nom et Prénom
              </label>
            </div>

            {/* Profession */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="job"
                {...register("job")}
                className={`${
                  errors.job ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:border-[#20C997]`}
                placeholder=" "
              />
              <label
                htmlFor="job"
                className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
                Profession
              </label>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full group">
              <input
                type="text"
                id="email"
                {...register("email")}
                className={`${
                  errors.email ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:border-[#20C997]`}
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
                Email
              </label>
            </div>

            {/* Téléphone */}
            <div className="relative z-0 w-full group">
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className={`${
                  errors.phone ? "border-red-600" : "border-main_color"
                } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:border-[#20C997]`}
                placeholder=" "
              />
              <label
                htmlFor="phone"
                className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
                Numéro de téléphone
              </label>
            </div>

             {/* ✅ Sélecteur de session */}
    {sessions.length > 0 && (
           
            <div className="relative z-0 w-full group">
              <select
               id="sessionDate"
               {...register("sessionDate")}
               className={`${
               errors.sessionDate ? "border-red-600" : "border-main_color"
               } block w-full py-2.5 px-6 text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:border-[#20C997]`}
              >
               <option value="">Sélectionner une session</option>
               {sessions.map((session) => (
               <option key={session.id} value={session.DateSession}>
               {session.DateSession}
               </option>
            ))}
              </select>
     

              <label
                htmlFor="sessionDate"
                className="absolute text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]"
              >
                Date de la session
              </label>
              {errors.sessionDate && (
                <p className="text-red-600 text-sm">{errors.sessionDate.message}</p>
              )}
              
            </div>
    )}

            {/* Politique de confidentialité */}
            <div className="mt-0">
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  id="policy"
                  className="hidden"
                  {...register("policy")}
                />
                <label
                  htmlFor="policy"
                  className="cursor-pointer flex items-center gap-1 text-xs font-medium"
                >
                  {policySelected ? (
                    <MdCheckBox className="w-6 h-6 text-main_color" />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank className="w-6 h-6 text-main_color" />
                  )}
                  <span>
                    J’accepte{" "}
                    <NavLink
                      to="/"
                      className="underline underline-offset-4 hover:no-underline"
                    >
                      la Politique de Confidentialité des Données
                    </NavLink>
                  </span>
                </label>
              </div>
            </div>

            {/* Bouton d'envoi */}
            <div className="mt-2">
              <button
                type="submit"
                className="w-full rounded-full bg-main_color hover:bg-[#20C997] transition-all duration-500 ease-in-out p-3 text-white text-base font-medium"
              >
                S'inscrire
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionForm;
