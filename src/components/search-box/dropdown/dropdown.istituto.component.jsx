import React, { useRef } from "react";
import "./styles.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";

export default function DropdownIstituto() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="container">
      <div className="relative flex items-center justify-center">
        <button
          onClick={onClick}
          className="flex items-center justify-between w-auto px-6 py-4 align-middle transition ease-in-out bg-white border-0 shadow-md cursor-pointer rounded-xl"
        >
          <span>User</span>
          <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          />
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
