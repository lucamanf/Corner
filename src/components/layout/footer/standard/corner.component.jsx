import React from "react";
import { Link } from "react-router-dom";
import CornerFooterSVG from "../svg/Corner.svg";

export default function CornerComponent() {
  return (
    <Link
      to="/profiles"
      aria-label="Go home"
      title="Company"
      className="inline-flex items-center"
    >
      <CornerFooterSVG />
      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
        Vendramin Corner
      </span>
    </Link>
  );
}
