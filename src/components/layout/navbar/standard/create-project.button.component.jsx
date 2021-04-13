import React from "react";
import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <Link to="/create-project">
      <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
        Inserisci
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </button>
    </Link>
  );
}
