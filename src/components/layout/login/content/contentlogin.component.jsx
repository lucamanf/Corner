import React from "react";
import { Link } from "react-router-dom";

export default function ContentLogin() {
  return (
    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
        Esegui il login <br className="hidden md:block" />e inserisci nuovi
        progetti 🤪
      </h2>
      <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
        Solo i professori possono accedere e modificare i progetti Per ritornare
        alla pagina dei progetti usa il link sottostante
      </p>
      <Link
        to="/profiles"
        aria-label=""
        className="inline-flex items-center font-semibold tracking-wider text-white transition-colors duration-200 hover:text-yellow-400 text-teal-accent-400 hover:text-teal-accent-700"
      >
        Progetti 💪🏻
        <svg
          className="inline-block w-3 ml-2"
          fill="currentColor"
          viewBox="0 0 12 12"
        >
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
        </svg>
      </Link>
    </div>
  );
}
