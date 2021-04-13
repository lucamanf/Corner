import React from "react";
import { Link } from "react-router-dom";
import CreateProjetSVG from "../svg/standard/create-project.svh";

export default function CreateButton() {
  return (
    <Link to="/create-project">
      <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Inserisci
        <CreateProjetSVG />
      </button>
    </Link>
  );
}
