import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
// import { useLoginMutation } from "../../app/api/public/auth";
import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setCurrentUser } from "../../app/store/authSlice";
import { useEffect, useState } from "react";
// import { useAuth } from "../../app/hooks/useAuth";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const Login = () => {
  // const auth = useAuth();
  // const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: { email: "" },
    resolver: yupResolver(schema),
  });

  const submit = async (values) => {
    try {
      console.log(values);
      // const user = await login(values).unwrap();
      // dispatch(setCurrentUser(user));
      // navigate("/");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };

  // useEffect(() => {
  //   if (auth.user) window.location.href = "/";
  // }, []);

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Créez un nouveau mot de passe
      </h2>
      <form onSubmit={handleSubmit(submit)} className="">
        <div className="relative z-0 w-full group mb-6">
          <input
            type="text"
            id="email"
            className={`${
              errors.email ? "border-red-600" : "border-main_color"
            } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#20C997] transition-colors duration-200 delay-0 ease-in-expo peer`}
            placeholder=" "
            {...register("email")}
          />
          <label
            htmlFor="email"
            className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={false}
            className={`w-full rounded-md bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out p-2 text-white text-base font-medium ${
              false && "cursor-not-allowed"
            }`}
          >
            {false ? "Chargement..." : "Envoyer"}
          </button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <NavLink
          to="/connexion"
          className="text-main_color hover:underline font-medium"
        >
          Retour
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
