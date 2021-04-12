import React from "react";

export const Card = (props) => (
  <div className="flex items-center justify-center m-4">
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg sm:max-w-xl">
      <img
        className="w-full"
        src={props.project.image_src}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{props.project.titolo}</div>
        <p className="text-base text-gray-700">{props.project.descrizione}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #photography
        </span>
        <span className="inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #travel
        </span>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          #winter
        </span>
      </div>
    </div>
  </div>
);

export default Card;
