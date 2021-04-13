import React from "react";
import { Link } from "react-router-dom";

export default function Sanita() {
  return (
    <Link to="/chimica" aria-label="View Item">
      <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
        <img
          className="object-cover w-full h-56 md:h-64 xl:h-80"
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
        <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
          <p className="mb-4 text-lg font-bold text-gray-100">
            Sevizi per la Sanità e Assistenza Sociale
          </p>
          <p className="text-sm tracking-wide text-gray-300">
            L'indirizzo "SERVIZI PER LA SANITA' e L'ASSISTENZA SOCIALE" E' UN
            CORSO DI ISTRUZIONE SUPERIORE DELLA DURATA DI 5 ANNI CHE SI CONCLUDE
            CON IL RILASCIO DI UN DIPLOMA DI SUPERAMENTO DELL'ESAME DI STATO.
            SOSTITUISCE IL PRECEDENTE CORSO DENOMINATO "SERVIZI SOCIO-SANITARI"
            DALL'ANNO SCOLASTICO 2017/18.
          </p>
        </div>
      </div>
    </Link>
  );
}
