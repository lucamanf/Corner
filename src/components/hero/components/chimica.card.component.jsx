import React from "react";
import { Link } from "react-router-dom";

export default function Chimica() {
  return (
    <Link to="/chimica" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">
            Chimica, Materiali E Biotecnologie
          </p>
          <p className="text-sm tracking-wide text-gray-300">
            Il corso fornisce agli studenti, oltre a solide e indispensabili
            competenze culturali e linguistiche, una preparazione scientifica
            avanzata, teorica e pratica, e una seria competenza sulle principali
            applicazioni tecnologiche nel settore del monitoraggio e della
            tutela ambientale.
          </p>
        </div>
      </div>
    </Link>
  );
}
