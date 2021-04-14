import React from "react";
import { Link } from "react-router-dom";
import AllProjectsSVG from "../svg/standard/allproject.svg";

export default function AllProjects() {
  return (
    <Link to="/projects">
      <button className="items-center justify-center py-2 pl-2.5 font-bold text-white transition duration-300 ease-in-out transform rounded-full hover:-translate-y-1 hover:scale-100 hover:bg-purple-500">
        <h1 className="flex flex-row items-center justify-center text-lg text-white">
          All Projects
          <AllProjectsSVG />
        </h1>
      </button>
    </Link>
  );
}
