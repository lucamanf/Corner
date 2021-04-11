import React from "react";

export const Card = (props) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full overflow-hidden border-2 border-gray-200 border-opacity-60 rounded-2xl">
      <img
        className="object-cover object-center w-full px-2 py-2 lg:h-48 md:h-36 rounded-2xl"
        alt="project"
        src={props.project.image_src}
      />
      <div className="p-6">
        <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-400 title-font">
          {props.project.titolo}
        </h2>
        <p className="flex flex-wrap items-center">{props.project.descrizione}</p>
      </div>
    </div>
  </div>
);
