import React, { useState } from "react";
const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between w-full bg-white border border-gray-300 rounded cursor-pointer dark:bg-gray-800 dark:border-gray-700"
        onClick={() => setShow(!show)}
      >
        <p className="py-3 pl-3 text-sm font-normal leading-3 tracking-normal text-gray-600 dark:text-gray-400">
          Basic Options
        </p>
        <div className="mr-3 text-gray-600 cursor-pointer dark:text-gray-400">
          {show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" icon icon-tabler icon-tabler-chevron-up"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 9 12 15 18 9" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-up"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="6 15 12 9 18 15" />
            </svg>
          )}
        </div>
      </div>
      {show && (
        <ul className="absolute visible w-48 py-1 mt-2 transition duration-300 bg-white rounded shadow opacity-100 dark:bg-gray-800">
          <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
            Interface Settings
          </li>
          <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
            Notifications
          </li>
          <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
            Account Data
          </li>
          <li className="px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
            Sign Out
          </li>
        </ul>
      )}
    </div>
  );
};
export default Index;
