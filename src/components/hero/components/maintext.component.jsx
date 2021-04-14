import React from "react";

export default function MainText() {
  return (
    <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2 className="max-w-lg mb-5 font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
        <span className="inline-block mb-1 sm:mb-4">
          POLO TECNICO PROFESSIONALE di Venezia
          <br className="hidden md:block" />
          "VENDRAMIN CORNER."
        </span>
        <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
      </h2>
      <p className="text-gray-700 lg:text-sm lg:max-w-md">
        "Lorem Ipsum icasoicnasiocnbaosn"
      </p>
    </div>
  );
}
