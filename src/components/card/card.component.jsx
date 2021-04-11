import React from "react";

export const Card = (props) => (
<<<<<<< HEAD
  <div className="flex items-center m-3">
    <div className="max-w-sm overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="w-full"
=======
  <div className="p-4 md:w-1/3">
    <div className="h-full overflow-hidden border-2 border-gray-200 border-opacity-60 rounded-2xl">
      <img
        className="object-cover object-center w-full px-2 py-2 lg:h-48 md:h-36 rounded-2xl"
        alt="project"
>>>>>>> 80a568a80c4fdf67f616e3d030794176172a3987
        src={props.project.image_src}
        alt="Sunset in the mountains"
      />
<<<<<<< HEAD
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
=======
      <div className="p-6">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
          {props.project.titolo}
        </h2>
        <p className="flex flex-wrap items-center">{props.project.descrizione}</p>
>>>>>>> 80a568a80c4fdf67f616e3d030794176172a3987
      </div>
    </div>
  </div>
);

export default Card;
