import React, { Component } from "react";

export class Cards extends Component {
  render() {
    return (
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-800 rounded-lg">
                <img
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                ></img>
                <div className="p-6">
                  <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
                    CATEGORY
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-white title-font">
                    GIONALISTA PROFESSIONALE
                  </h1>
                  <p className="mb-3 leading-relaxed">Chè chel mona che sbate la porta, e chiude urlando</p>
                  <div className="flex flex-wrap items-center ">
                    <a className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-500 border-r-2 border-gray-800 lg:ml-auto md:ml-0">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full overflow-hidden border-2 border-gray-800 rounded-lg">
                <img
                  className="object-cover object-center w-full lg:h-48 md:h-36"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                ></img>
                <div className="p-6">
                  <h2 className="mb-1 text-xs font-medium tracking-widest text-gray-500 title-font">
                    CATEGORY
                  </h2>
                  <h1 className="mb-3 text-lg font-medium text-white title-font">
                    CANCARO
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Maometto
                  </p>
                  <div className="flex flex-wrap items-center">
                    <a className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="inline-flex items-center py-1 pr-3 ml-auto mr-3 text-sm leading-none text-gray-500 border-r-2 border-gray-800 lg:ml-auto md:ml-0">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span className="inline-flex items-center text-sm leading-none text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="data:image/jpeg;base64,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"
                  alt="blog"
                ></img>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    CATEGORY
                  </h2>
                  <h1 class="title-font text-lg font-medium text-white mb-3">
                    LEGGENDA
                  </h1>
                  <p class="leading-relaxed mb-3">
                    Si dice che sti ancora insegnando le sue tecniche di Karate.
                  </p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span class="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      1.2K
                    </span>
                    <span class="text-gray-500 inline-flex items-center leading-none text-sm">
                      <svg
                        class="w-4 h-4 mr-1"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                      6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Cards;
