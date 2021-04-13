import React from "react";
import { Link } from "react-router-dom";
import MainText from "./components/maintext.component";
import Meccatronica from "./components/meccatronica.card.component";
import Chimica from "./components/chimica.card.component";
import Nautico from "./components/nautico.card.component";
import Sanita from "./components/sanita.card.component";
import Informatica from "./components/informatica.card.component";

export const Content = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <MainText />
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-5 sm:grid-cols-2">
          <Meccatronica />
          <Chimica />
          <Nautico />
          <Sanita />
        </div>
        <Informatica />
        <div className="text-center">
          <Link
            to="/projects"
            aria-label=""
            className="inline-flex items-center font-semibold text-blue-400 transition-colors duration-200 hover:text-blue-700"
          >
            Vedi tutti i progetti
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Content;
