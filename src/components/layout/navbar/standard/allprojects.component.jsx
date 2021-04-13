import React from "react";
import { Link } from "react-router-dom";

export default function AllProjects() {
  return (
    <Link to="/projects">
      <h1 className="flex flex-row items-center justify-center text-lg text-white">
        All Projects
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mx-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </h1>
    </Link>
  );
}
