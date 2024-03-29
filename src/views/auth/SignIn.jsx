import { useState } from 'react'
import InputField from "components/fields/InputField";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from 'hooks/useAuth';

export default function SignIn() {

  const { setUserAuth } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false)
  const navigate = useNavigate();


  const handleButtonClick = (event) => {
    event.preventDefault();
    setError(false);

    if (email === 'admin@admin.com' && password === 'admin123') {
      setError(false);
      setUserAuth({ email, password });
      navigate("/admin/", { replace: true });
    } else {
      setError(true)
    }
  }

  return (
    <div className="mt-16 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-3.5 lg:items-center lg:justify-start 2xl:mt-0">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px] 2xl:mt-[5vh]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Iniciar Sesión
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          ¡Ingresa con tu cuenta de Google o con tu correo y contraseña!
        </p>
        <div className="mb-6 flex h-[50px] w-full items-center justify-center gap-2 rounded-xl bg-lightPrimary hover:cursor-pointer dark:bg-navy-800">
          <div className="rounded-full text-xl">
            <FcGoogle />
          </div>
          <h5 className="text-sm font-medium text-navy-700 dark:text-white">
            Inicia sesión con Google
          </h5>
        </div>

        <div className="mb-6 flex items-center  gap-3">
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
          <p className="text-base text-gray-600 dark:text-white"> or </p>
          <div className="h-px w-full bg-gray-200 dark:bg-navy-700" />
        </div>
        {error && <p className='text-xs font-bold text-center text-red-800'>Email or password incorrect</p>}
        {/* Email */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Correo*"
          placeholder="admin@admin.com"
          id="email"
          type="text"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        {/* Password */}
        <InputField
          variant="auth"
          extra="mb-3"
          label="Contraseña*"
          placeholder="Min. 8 characters"
          id="password"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        {/* Checkbox */}
        <div className="mb-4 flex items-center justify-start px-2">
          <a
            className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            href=" "
          >
            ¿Olvidó su contraseña?
          </a>
        </div>
        <button
          onClick={handleButtonClick}
          className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
        >
          Iniciar Sesión
        </button>
        <div className="mt-4">
          <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
            ¿No estas registrado todavía?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Crear una cuenta
          </Link>
        </div>
      </div>
    </div>
  );
}
