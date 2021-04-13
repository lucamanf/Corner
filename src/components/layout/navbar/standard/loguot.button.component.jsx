import React from "react";
import LoginSVG from "../svg/standard/login.svg";

export default function LogoutButton(logout) {
  return (
    <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
      Logout
      <LoginSVG />
    </button>
  );
}
