import React from "react";
import { Link } from "react-router-dom";

export default function CornerHamburgerButton() {
  return (
    <div>
      <Link
        to="/home"
        aria-label="home"
        title="home"
        class="inline-flex items-center"
      >
        <svg
          class="w-8 text-deep-purple-accent-400"
          viewBox="0 0 24 24"
          strokeLinejoin="round"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          stroke="currentColor"
          fill="none"
        >
          <rect x="3" y="1" width="7" height="12" />
          <rect x="3" y="17" width="7" height="6" />
          <rect x="14" y="1" width="7" height="6" />
          <rect x="14" y="11" width="7" height="12" />
        </svg>
        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
          Corner
        </span>
      </Link>
    </div>
  );
}
