import React from "react";
import SearchSVG from "./svg/search.svg.component";
import Select from "react-select";
import DropDownI from "./dropdown/dropdown.istituto.component";
import DropDownM from "./dropdown/dropdown.materia.component";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const SearchBox = ({ handleChange }) => (
  <div className="items-center p-4 bg-gray-200 rounded-md md:p-2">
    <div className="flex flex-col-reverse items-center flex-grow md:flex-row md:justify-end">
      <div className="grid grid-cols-2 pt-4 gap-14 sd:gap-10 md:gap-5 md:pt-0">
        <DropDownI />
        <DropDownM />
      </div>
      <div className="flex items-center p-2 bg-white rounded shadow-md md:flex-grow md:ml-5 text-grey">
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
