import React from "react";
import { Link } from "react-router-dom";
import DashboardSVG from "../svg/standard/dashboard.svg";

export default function Dashboard() {
  return (
    <Link to="/dashboard/profile">
      <button className="items-center justify-center py-2 pl-2.5 pr-2 border-black font-bold text-white transition duration-300 ease-in-out transform rounded-full hover:-translate-y-1 hover:scale-100 hover:bg-purple-500">
        <h1 className="flex flex-row items-center justify-center text-lg text-white">
          Dashboard
          <DashboardSVG />
        </h1>
      </button>
    </Link>
  );
}
