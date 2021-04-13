import React from "react";
import LoginSVG from "../svg/standard/login.svg";

export default function LogoutButton(logout) {
  return (
    <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-red-500 rounded hover:-translate-y-1 hover:scale-100 hover:bg-red-700">
      Logout
      <LoginSVG />
    </button>
  );
}
