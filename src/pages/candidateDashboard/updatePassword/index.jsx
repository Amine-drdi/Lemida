import React from "react";
import { useForm } from "react-hook-form";

const UpdatePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = async (values) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col shadow-md rounded-md md:w-3/4 w-full h-fit">
        <div className="p-4">
          <p className="text-xl font-medium text-main">
            Modifier mon mot de passe
          </p>
        </div>
        <div className="p-4">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(submit)}>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="username">
                Ancien mot de passe <span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  false ? "border-red-500" : "border-gray-200"
                }`}
                id="username"
                type="password"
                {...register("username", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Email non valide.",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="password">
                Nouveau Mot de passe <span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  false ? "border-red-500" : "border-gray-200"
                }`}
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9]{8,}/,
                    message: "minimum 08 caractères",
                  },
                })}
              />
            </div>
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="password">
                Confirmer nouveau mot de passe{" "}
                <span className="text-second">*</span>
              </label>
              <input
                className={`focus:outline-none h-10 p-3 text-main bg-gray-100 rounded-md border ${
                  false ? "border-red-500" : "border-gray-200"
                }`}
                id="password"
                type="password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z0-9]{8,}/,
                    message: "minimum 08 caractères",
                  },
                })}
              />
            </div>
            <div className="flex justify-end w-full mt-3">
              {false ? (
                <div className="flex items-center justify-center w-full gap-2 px-6 py-2 text-white font-bold">
                  <svg
                    aria-hidden="true"
                    className="inline w-8 h-8 text-white animate-spin fill-main"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="text-center">en cours...</span>
                </div>
              ) : (
                <input
                  className={`rounded-full w-fit px-6 py-[10px] text-white bg-main_color hover:bg-[#2a3fc7] transition-all duration-500 ease-in-out ${
                    false ? "cursor-not-allowed" : "cursor-pointer"
                  } `}
                  type="submit"
                  disabled={false ? true : false}
                  value="Valider"
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
