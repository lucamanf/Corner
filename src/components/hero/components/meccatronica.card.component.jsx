import React from "react";
import { Link } from "react-router-dom";

export default function Meccatronica() {
  return (
    <Link to="/meccatronica" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">Meccatronica</p>
          <p className="text-sm tracking-wide text-gray-300">
            Gli indirizzi Meccanica e Meccatronica e Telecomunicazioni sono
            attualmente tenuti presso l'ex istituto Tecnico Tecnologico Enrico
            Fermi di Venezia, che vede la sua sede nel cinquecentesco palazzo
            Zane-Collalto nei pressi di S.Polo, rinnovato per accogliere al
            meglio studentesse e studenti, a soli dieci minuti da Piazzale Roma
            e dalla Stazione.
          </p>
        </div>
      </div>
    </Link>
  );
}
