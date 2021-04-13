import React from "react";
import { Link } from "react-router-dom";

export const ProjectDescription = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-xl">
        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
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
          <div className="flex items-center justify-between">
            <label className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              <div className="flex flex-row items-center justify-center text-base leading-normal">
                Carica immagine
                <svg
                  className="w-4 h-4 ml-1 "
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                </svg>
                <input type="file" className="hidden" />
              </div>
            </label>
            <button
              className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Aggiungi Progetto
            </button>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectDescription;
