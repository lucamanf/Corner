import React from "react";
import { Link } from "react-router-dom";

export default function AllProjectsHamburger() {
  return (
    <Link
      to="/projects"
      aria-label="Our product"
      title="Our product"
      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
    >
      All projects
    </Link>
  );
}
