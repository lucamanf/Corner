import React from "react";
import { Link } from "react-router-dom";

export default function CreateProjetHamburger() {
  return (
    <Link
      to="/create-project"
      aria-label="create-project"
      title="create-project"
    >
      <button className="inline-flex items-center justify-center h-12 px-6 mr-4 font-medium tracking-wide text-white transition duration-200 bg-blue-400 rounded shadow-md hover:bg-blue-700 focus:shadow-outline focus:outline-none">
        Inserisci
      </button>
    </Link>
  );
}
