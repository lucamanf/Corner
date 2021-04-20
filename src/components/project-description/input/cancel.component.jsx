import React from "react";
import { Link } from "react-router-dom";

export const Cancel = () => {
  return (
    <button
      className="px-4 py-2 font-bold text-white bg-gray-300 rounded hover:bg-red-500 focus:outline-none focus:shadow-outline"
      type="button"
    >
      <Link
        to="/home"
        className="inline-block text-sm font-bold text-white align-baseline "
      >
        Cancella
      </Link>
    </button>
  );
};

export default Cancel;
