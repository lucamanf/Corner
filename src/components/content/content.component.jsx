import React from "react";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
          <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
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
        <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-5 sm:row-gap-5 sm:grid-cols-2">
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">
                  Informatica
                </p>
                <p className="text-sm tracking-wide text-gray-300">
                  Gli indirizzi Meccanica e Meccatronica ed Informatica e
                  Telecomunicazioni sono attualmente tenuti presso l'ex istituto
                  Tecnico Tecnologico Enrico Fermi di Venezia, che vede la sua
                  sede nel cinquecentesco palazzo Zane-Collalto nei pressi di
                  S.Polo, rinnovato per accogliere al meglio studentesse e
                  studenti, a soli dieci minuti da Piazzale Roma e dalla
                  Stazione.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
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
                  Il corso fornisce agli studenti, oltre a solide e
                  indispensabili competenze culturali e linguistiche, una
                  preparazione scientifica avanzata, teorica e pratica, e una
                  seria competenza sulle principali applicazioni tecnologiche
                  nel settore del monitoraggio e della tutela ambientale.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                <p className="mb-4 text-lg font-bold text-gray-100">Nautico</p>
                <p className="text-sm tracking-wide text-gray-300">
                  L'Istituto Tecnico Nautico "Sebastiano Venier" di Venezia
                  rappresenta per la Città di Venezia una delle istituzioni
                  scolastiche che vanta una lunga e radicata tradizione e si
                  colloca fra le più importanti del settore a livello nazionale.
                </p>
              </div>
            </div>
          </a>
          <a href="/" aria-label="View Item">
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
                  L'indirizzo "SERVIZI PER LA SANITA' e L'ASSISTENZA SOCIALE" E'
                  UN CORSO DI ISTRUZIONE SUPERIORE DELLA DURATA DI 5 ANNI CHE SI
                  CONCLUDE CON IL RILASCIO DI UN DIPLOMA DI SUPERAMENTO
                  DELL'ESAME DI STATO. SOSTITUISCE IL PRECEDENTE CORSO
                  DENOMINATO "SERVIZI SOCIO-SANITARI" DALL'ANNO SCOLASTICO
                  2017/18.
                </p>
              </div>
            </div>
          </a>
        </div>
        <a href="/" aria-label="View Item" className="mb-4">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg justify-items-center items-centerm hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                Meccatronica
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                L'indirizzo "SERVIZI PER LA SANITA' e L'ASSISTENZA SOCIALE" E'
                UN CORSO DI ISTRUZIONE SUPERIORE DELLA DURATA DI 5 ANNI CHE SI
                CONCLUDE CON IL RILASCIO DI UN DIPLOMA DI SUPERAMENTO DELL'ESAME
                DI STATO. SOSTITUISCE IL PRECEDENTE CORSO DENOMINATO "SERVIZI
                SOCIO-SANITARI" DALL'ANNO SCOLASTICO 2017/18.
              </p>
            </div>
          </div>
        </a>
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
