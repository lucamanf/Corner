import React from "react";

export const Description = () => {
  return (
    <div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-semibold text-gray-600"
          for="username"
        >
          Descrizione
        </label>
        <textarea
          rows="4"
          cols="50"
          className="w-full p-1 leading-tight text-gray-700 bg-gray-100 border rounded appearance-none focus:outline-none focus:shadow-outline"
          id="description"
          type="text"
          placeholder="Descrizione progetto..."
        />
      </div>
    </div>
  );
};

export default Description;
