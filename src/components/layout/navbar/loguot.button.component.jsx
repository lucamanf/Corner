import React from "react";

export default function LogoutButton(logout) {
  return (
    <button className="flex flex-row items-center justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
      Logout
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 ml-1.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </button>
  );
}
