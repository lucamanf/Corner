import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div class="p-8">
    <div class=" bg-gray-100 flex items-center rounded-full shadow-xl mb-20 mr-20 ml-20 mt-5">
      <input
        class="rounded-l-full w-full py-0 px-6 bg-gray-100 text-gray-700 leading-tight focus:outline-none text-lg font-mono"
        id="search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
      <div class="p-4">
        <button class="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
);
