import React from "react";
import { Link } from "react-router-dom";
import DashboardSVG from "../svg/standard/dashboard.svg";

export default function Dashboard() {
  return (
    <Link to="/dashboard">
      <h1 className="flex flex-row items-center justify-center text-lg text-white">
        Dashboard
        <DashboardSVG />
      </h1>
    </Link>
  );
}
