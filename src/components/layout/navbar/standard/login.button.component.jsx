import React from "react";
import { Link } from "react-router-dom";
import LoginSVG from "../svg/standard/login.svg";

export default function LoginButton() {
  return (
    <Link to="/login">
      <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-blue-500 rounded hover:-translate-y-1 hover:scale-100 hover:bg-blue-700">
        Login
        <LoginSVG />
      </button>
    </Link>
  );
}
