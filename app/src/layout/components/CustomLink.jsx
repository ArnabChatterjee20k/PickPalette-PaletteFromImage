import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function CustomLink({ text, link, Icon }) {
  return (
    <NavLink
      to={link}
      className={({ isActive, isPending }) => {
        return `flex items-center p-2 text-white rounded-lg  hover:bg-gray-700 group ${
          isActive && "bg-gray-700"
        }`;
      }}
    >
      {({ isActive, isPending, isTransitioning }) => (
        <>
          <Icon
            className={`w-5 h-5 transition duration-75  group-hover:text-gray-900 ${
              isActive ? "text-gray-900" : "text-white "
            }`}
          />
          <span className="ms-3">{text}</span>
        </>
      )}
    </NavLink>
  );
}
