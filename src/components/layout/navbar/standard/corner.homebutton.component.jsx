import React from "react";
import { Link } from "react-router-dom";

export default function CornerHomeButton() {
  return (
    <h1>
      <Link to="/home">
        <i className="inline-flex items-center lg:mx-auto" />
        <h1 className="inline-flex items-center font-mono text-lg text-white lg:mx-auto">
          Corner's Projects
        </h1>
      </Link>
    </h1>
  );
}
