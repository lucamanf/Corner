import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import ArrowUpSVG from "./svg/arrow.up.component";

export default function DropDownI({ options, prompt }) {
  return (
    <Menu as="div" className="relative lg:w-60">
      {({ open }) => (
        <Fragment>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-md hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-100">
            <span>{prompt}</span>
            <span className="w-5 h-5 ml-2 -mr-1">
              <ArrowUpSVG />
            </span>
          </Menu.Button>
          <Transition
            show={open}
            enter=" transform transition duration-100 ease-in"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-75 ease-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items
              className="absolute left-0 w-56 mt-2.5 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              static
            >
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm 
                ${active ? "bg-blue-500 text-white" : "text-gray-700"} `}
                    >
                      Informatica
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? "bg-blue-500 text-white" : "text-gray-700 "
                      } `}
                    >
                      Biologico
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? "bg-blue-500 text-white" : "text-gray-700 "
                      }`}
                    >
                      Nautico
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? "bg-blue-500 text-white" : "text-gray-700"
                      }  `}
                    >
                      Psicogiampitec
                    </a>
                  )}
                </Menu.Item>
              </div>

              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={`flex items-center px-4 py-2 text-sm ${
                        active ? "bg-blue-500 text-white" : "text-gray-700"
                      } `}
                    >
                      Meccatronica
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Fragment>
      )}
    </Menu>
  );
}
