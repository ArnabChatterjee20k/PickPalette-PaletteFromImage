import React from "react";
import { APP_NAME } from "../data/data";

export default function Navbar() {
  return (
    <nav className="flex w-full p-8">
      <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-4xl">
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
