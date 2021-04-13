import React from "react";
import { Link } from "react-router-dom";
import AllProjectsSVG from "../svg/standard/allproject.svg";

export default function AllProjects() {
  return (
    <Link to="/projects">
      <h1 className="flex flex-row items-center justify-center text-lg text-white">
        All Projects
        <AllProjectsSVG />
      </h1>
    </Link>
  );
}
