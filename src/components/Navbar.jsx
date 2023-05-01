import React from "react";
import { APP_NAME } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import MobileNav from "./MobileNav";
import useIsMobile from "../hooks/useIsMobile";
import navLinks from "../data/navLinks";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <nav className="border-b-2 bg-[#060910] text-white border-gray-900 shadow-2xl sticky top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center content w-full m-auto px-8 pb-3 pt-5 shadow-sm">
        <Link
          to="/"
          className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-3xl"
        >
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            {APP_NAME}
          </span>
        </Link>
        {isMobile ? <MobileNav /> : <DesktopNav />}
      </div>
    </nav>
  );
}
{
  /* <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> */
}

const DesktopNav = () => {
  const {pathname} = useLocation()
  return (
    <div className="flex gap-5 items-start">
      {navLinks.map(({ name, link }) => {
        const active = link === pathname;
        return (
          <Link className={`${active ? "text-gray-200 bg-slate-800 py-1 px-2 rounded font-bold" : "font-semibold "}`} to={link}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};
