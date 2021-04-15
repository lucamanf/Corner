import React from "react";
import Index from "./dropdown/index.component";
import SearchSVG from "./svg/search.svg.component";

export const SearchBox = ({ handleChange }) => (
  <div className="items-center p-2 bg-gray-200 rounded-md">
    <div className="flex flex-row items-center justify-end">
      <div className="grid grid-cols-2 gap-5">
        <Index />

        <Index />
      </div>
      <div className="flex items-center p-2 ml-5 mr-2 bg-white rounded shadow-md lg:w-11/12 md:w-3/5 w-400 text-grey">
        <SearchSVG />
        <input
          className="w-full p-2 outline-none"
          type="text"
          placeholder="Prova a cercare sto cazzo"
          onChange={handleChange}
        />
        <button className="p-2 pl-4 pr-4 text-white bg-blue-500 rounded hover:bg-blue-700">
          <p className="text-xl font-semibold">Search</p>
        </button>
      </div>
    </div>
  </div>
);
