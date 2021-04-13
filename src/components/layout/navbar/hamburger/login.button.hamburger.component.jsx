import React from "react";
import { Link } from "react-router-dom";

export default function LoginButtonHamburger() {
  return (
    <Link to="/login" aria-label="login" title="login">
      <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-purple-400 rounded shadow-md hover:bg-purple-700 focus:shadow-outline focus:outline-none">
        Login
      </button>
    </Link>
  );
}
