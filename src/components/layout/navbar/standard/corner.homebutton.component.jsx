import React from "react";
import { Link } from "react-router-dom";
import LogoCorner from "../img/logo.component";

export default function CornerHomeButton() {
  return (
    <h1>
      <Link to="/home" className="inline-flex items-center">
        <LogoCorner />
        <h1 className="inline-flex items-center font-mono text-lg text-white lg:mx-auto">
          Corner's Projects
        </h1>
      </Link>
    </h1>
  );
}
