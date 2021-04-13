import React from "react";
import { Link } from "react-router-dom";

export default function DashboardHamburger() {
  return (
    <Link
      to="/dashboard"
      aria-label="Our product"
      title="Our product"
      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
    >
      Dashboard
    </Link>
  );
}
