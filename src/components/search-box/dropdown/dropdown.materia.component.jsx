import React, { Fragment } from "react";
import { Menu } from "@headlessui/react";
import ArrowUpSVG from "./svg/arrow.up.component";

export default function DropDownM() {
  return (
    <Menu as="div" className="relative lg:w-60">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-gray-100">
        Matematica
        <span className="w-5 h-5 ml-2 -mr-1">
          <ArrowUpSVG />
        </span>
      </Menu.Button>

      <Menu.Items className="absolute right-0 w-56 mt-2.5 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-blue-500 hover:text-white"
            >
              Meccatronica
            </a>
          </Menu.Item>
        </div>

        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-blue-500 hover:text-white"
            >
              Biologico
            </a>
          </Menu.Item>
        </div>

        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-blue-500 hover:text-white"
            >
              Nautico
            </a>
          </Menu.Item>
        </div>

        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-blue-500 hover:text-white"
            >
              Psicogiampitec
            </a>
          </Menu.Item>
        </div>

        <div className="py-1">
          <Menu.Item>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-sm text-gray-700 group hover:bg-blue-500 hover:text-white"
            >
              Monella
            </a>
          </Menu.Item>
        </div>
      </Menu.Items>
    </Menu>
  );
}
