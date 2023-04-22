import React from "react";
import { APP_NAME } from "../data/data";

export default function Navbar() {
  return (
    <nav className="flex content m-auto px-8 pb-3 pt-5">
      <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
          {APP_NAME}
        </span>
      </h1>
    </nav>
  );
}
{
  /* <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> */
}
