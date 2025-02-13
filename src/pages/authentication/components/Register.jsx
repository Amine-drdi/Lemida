import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useRegisterMutation } from "../../../app/api/public/auth";
import { setCurrentUser } from "../../../app/store/auth";
import { useDispatch } from "react-redux";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(4)
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "only letters accepted")
    .required(),
  lastName: yup
    .string()
    .min(4)
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "only letters accepted")
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email not valid"
    )
    .required(),
  password: yup
    .string()
    .min(8)
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@_/*\-+])[A-Za-zÀ-ÖØ-öø-ÿ0-9@_/*\-+!?]+$/,
      "password rules not accepted"
    )
    .required(),
  confirmPassword: yup.string().required(),
});

const Register = () => {
  // const auth = useAuth();
  const [signup, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const submit = async (values) => {
    try {
      console.log(values);
      const user = await signup(values).unwrap();
      dispatch(setCurrentUser(user));
      // navigate("/");
    } catch (error) {
      setError("email", {
        type: "manual",
        message: "Invalid email or password",
      });
      setError("password", {
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
        Créer un compte
      </h2>
      <form onSubmit={handleSubmit(submit)} className="">
        <div className="relative z-0 w-full group mb-6">
          <input
            type="text"
            id="firstName"
            className={`${
              errors.firstName ? "border-red-600" : "border-main_color"
            } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#20C997] transition-colors duration-200 delay-0 ease-in-expo peer`}
            placeholder=" "
            {...register("firstName")}
          />
          <label
            htmlFor="firstName"
            className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Prénom
          </label>
        </div>

        <div className="relative z-0 w-full group mb-6">
          <input
            type="text"
            id="lastName"
            className={`${
              errors.lastName ? "border-red-600" : "border-main_color"
            } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#20C997] transition-colors duration-200 delay-0 ease-in-expo peer`}
            placeholder=" "
            {...register("lastName")}
          />
          <label
            htmlFor="lastName"
            className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom
          </label>
        </div>

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

        <div className="relative z-0 w-full group mb-6">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className={`${
              errors.password ? "border-red-600" : "border-main_color"
            } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#20C997] transition-colors duration-200 delay-0 ease-in-expo peer`}
            placeholder=" "
            {...register("password")}
          />
          <label
            htmlFor="password"
            className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mot de passe
          </label>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-1 top-0 h-full flex items-center justify-center z-30"
          >
            {showPassword ? (
              <IoMdEyeOff className="w-5 h-5 text-main_color" />
            ) : (
              <IoMdEye className="w-5 h-5 text-main_color" />
            )}
          </button>
        </div>

        <div className="relative z-0 w-full group mb-6">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            className={`${
              errors.password ? "border-red-600" : "border-main_color"
            } block py-2.5 px-0 w-full text-base text-gray-700 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-[#20C997] transition-colors duration-200 delay-0 ease-in-expo peer`}
            placeholder=" "
            {...register("confirmPassword")}
          />
          <label
            htmlFor="confirmPassword"
            className="absolute text-base peer-focus:font-[500] peer-focus:text-base text-gray-600 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mot de passe (Confirmation)
          </label>
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-1 top-0 h-full flex items-center justify-center z-30"
          >
            {showConfirmPassword ? (
              <IoMdEyeOff className="w-5 h-5 text-main_color" />
            ) : (
              <IoMdEye className="w-5 h-5 text-main_color" />
            )}
          </button>
        </div>

        <div>
          <button
            type="submit"
            disabled={false}
            className={`w-full rounded-md text-white bg-primary hover:bg-secondary hover:text-primary border border-transparent hover:border-primary transition-all duration-500 ease-in-out p-2  text-base font-medium ${
              false && "cursor-not-allowed"
            }`}
          >
            {false ? "Chargement..." : "S'enregistrer"}
          </button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm">
          Déjà avez-vous un compte?{" "}
          <NavLink
            to="/connexion"
            className="text-main_color hover:underline font-medium"
          >
            Se connecter
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
