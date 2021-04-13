import React from "react";
import { Link } from "react-router-dom";

export default function CreateProjetHamburger() {
  return (
    <Link
      to="/create-project"
      aria-label="create-project"
      title="create-project"
    >
      <button className="inline-flex items-center justify-center w-full h-12 font-medium tracking-wide text-white transition duration-200 bg-purple-400 rounded shadow-md hover:bg-purple-700 focus:shadow-outline focus:outline-none">
        Inserisci
      </button>
    </Link>
  );
}
