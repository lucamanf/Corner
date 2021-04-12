import React from "react";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="items-center m-5 bg-indigo-100 rounded-md justify-items-center md:container md:mx-auto">
    <div className="md:p-8">
      <div className="flex items-center mt-5 mb-10 ml-10 mr-10 bg-gray-100 rounded-full shadow-xl md:mb-20 md:ml-20 md:mr-20 ">
        <input
          className="w-full px-6 py-0 font-mono text-lg leading-tight text-gray-700 bg-gray-100 rounded-l-full focus:outline-none"
          id="search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
        <div className="p-4">
          <button className="flex items-center justify-center w-12 h-12 p-2 text-white bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none">
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
  </div>
);
