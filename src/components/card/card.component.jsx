import React from "react";

export const Card = (props) => (
  <div class="p-4 md:w-1/3 ">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
      <img
        class="lg:h-48 md:h-36 w-full object-cover object-center px-2 py-2 rounded-2xl"
        alt="project"
        src={props.project.image_src}
      />
      <div class="p-6">
        <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {props.project.titolo}
        </h2>
        <p class="flex items-center flex-wrap">{props.project.descrizione}</p>
      </div>
    </div>
  </div>
);
