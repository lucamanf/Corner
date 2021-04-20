import React from "react";

export const Subject = () => {
  return (
    <div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          for="title"
        >
          Materia
        </label>
        <input
          className="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-100 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Nome..."
        />
      </div>
    </div>
  );
};

export default Subject;
