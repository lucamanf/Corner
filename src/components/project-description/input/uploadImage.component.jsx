import React from "react";

export const UploadImage = () => {
  return (
    <label className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
      <div className="flex flex-row items-center justify-center text-base leading-normal">
        Carica immagine
        <svg
          className="w-4 h-4 ml-1 "
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <input type="file" className="hidden" accept="image/*" />
      </div>
    </label>
  );
};

export default UploadImage;
