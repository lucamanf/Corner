import React from "react";

export const Card = (props) => (
  <div className="flex items-center justify-center mb-4 lg:m-4">
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg md:max-w-lg">
      <img
        className="object-cover object-top w-full h-48"
        src={props.project.image_src}
        alt="Profile image"
      />
      <div className="px-6 py-4">
        <h4 className="mb-2 text-xl font-bold truncate">
          {props.project.titolo}
        </h4>
        <p className="text-base text-gray-700 truncate">
          {props.project.descrizione}
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{props.project.materia.materia}
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{props.project.materia.sede}
        </span>
        <span className="inline-block px-3 py-1 my-3 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #{props.project.created_by.nome}
        </span>
      </div>
    </div>
  </div>
);

export default Card;
