import React from "react";
import DropdownIstituto from "./dropdown/dropdown.istituto.component";

export const SearchBox = ({ handleChange }) => (
  <div className="items-center m-5 bg-gray-200 rounded-md justify-items-center md:container md:mx-auto">
    <div className="grid gap-2 p-4 md:grid-cols-3">
      <h1 className="justify-center text-3xl text-center md:hidden">SUCA</h1>
      <span className="hidden md:block">
        <DropdownIstituto />
      </span>
      <span className="hidden md:block">
        <DropdownIstituto />
      </span>
      <span className="flex items-center justify-end w-auto p-2 bg-white rounded shadow-md text-grey">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        <input
          className="w-full p-2 outline-none"
          type="text"
          placeholder="Try 'Los Angeles'"
          onChange={handleChange}
        />
        <button className="p-2 pl-4 pr-4 text-white bg-blue-500 rounded hover:bg-blue-700">
          <p className="text-xl font-semibold">Search</p>
        </button>
      </span>
      <div className="grid grid-cols-2 gap-4 md:hidden">
        <DropdownIstituto />
        <DropdownIstituto />
      </div>
    </div>
  </div>
);
