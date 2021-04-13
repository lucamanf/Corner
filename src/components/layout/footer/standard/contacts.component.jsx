import React from "react";
import { Link } from "react-router-dom";

export default function ContactFooter() {
  return (
    <div className="space-y-2 text-sm">
      <p className="text-base font-bold tracking-wide text-gray-900">
        Contatti
      </p>
      <div className="flex">
        <p className="mr-1 text-gray-800">Telefono:</p>
        <a
          href="tel:041 5225295"
          aria-label="Our phone"
          title="Our phone"
          className="text-purple-400 transition-colors duration-300 hover:text-purple-800"
        >
          041 5225295
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Email:</p>
        <a
          href="mailto:veis00800e@istruzione.it"
          aria-label="Our email"
          title="Our email"
          className="text-purple-400 transition-colors duration-300 hover:text-purple-800"
        >
          veis00800e@istruzione.it
        </a>
      </div>
      <div className="flex">
        <p className="mr-1 text-gray-800">Indirizzo:</p>
        <a
          href="https://www.google.com/maps/place/Calle+Seconda+de+la+Fava,+787%2FA,+30122+Venezia+VE/@45.4308082,12.3564901,17z/data=!3m1!4b1!4m5!3m4!1s0x477eae30d0212ba9:0x798a435cb35414d!8m2!3d45.4308045!4d12.3586788"
          target="Castello 787/A 30122 Venezia"
          rel="noopener noreferrer"
          aria-label="Our address"
          title="Our address"
          className="text-purple-400 transition-colors duration-300 hover:text-purple-800"
        >
          Castello 787/A 30122 Venezia
        </a>
      </div>
    </div>
  );
}
