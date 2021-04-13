import React from "react";

export default function SocialComponent() {
  return (
    <div>
      <span className="flex flex-row items-center text-base font-bold tracking-wide text-gray-900">
        Facebook
        <div className="ml-2 space-x-3 ">
          <a
            href="https://www.facebook.com/vendramin.corner.77"
            className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
      </span>
      <p className="mt-4 text-sm text-gray-500">
        Segui le ultime novità sulla nostra pagina Facebook ufficiale.
      </p>
    </div>
  );
}
