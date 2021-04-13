import React from "react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link to="/login">
      <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:-translate-y-1 hover:scale-100 hover:bg-blue-700">
        Login
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 ml-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
      </button>
    </Link>
  );
}
