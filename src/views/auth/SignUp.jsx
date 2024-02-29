import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start 2xl:mt-0 2xl:mb-2.5">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] xl:mt-[3vh]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Registro de Sesión
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600 xl:mb-2.5">
          ¡Regístrate con tu cuenta de Google o con un correo y contraseña!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800 xl:mb-2">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Regístrate con Google
          </h5>
        </div>
        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>

        {/* Nombre Completo*/}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Nombre Completo*"
          placeholder="Juan Montilla"
          id="fullName"
          type="text"
        />

        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Correo*"
          placeholder="mail@simmmple.com"
          id="email"
          type="text"
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Contraseña*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
        />

        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Regístrate
        </button>
        <div className="mt-4 xl:mb-1.5">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            ¿Ya estás registrado?
          </span>
          <Link
            to="/auth/sign-in"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Inicia sesión aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
