import React from "react";
import { APP_NAME } from "../data/data";
import { Link, Outlet, useLocation } from "react-router-dom";
import MobileNav from "../components/MobileNav";
import useIsMobile from "../hooks/useIsMobile";
import navLinks from "../data/navLinks";
import NavContainer from "./components/NavContainer";
import Logo from "./components/Logo";

export default function Navbar() {
  const isMobile = useIsMobile();
  return (
    <>
      <NavContainer className="sticky top-0 left-0 right-0 z-50">
        <div className="flex justify-between items-center content w-full m-auto px-8 pb-3 pt-5 shadow-sm">
          <Logo />
          {isMobile ? <MobileNav /> : <DesktopNav />}
        </div>
      </NavContainer>
      <Outlet />
    </>
  );
}
{
  /* <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"></span> */
}

const DesktopNav = () => {
  const { pathname } = useLocation();
  const newsletterActivePath = "/subscribe/newsletter";
  const isNewsLetterPath = newsletterActivePath === pathname;
  return (
    <div className="flex gap-5 items-start">
      {navLinks.map(({ name, link }) => {
        const active = link === pathname;
        return (
          <Link
            className={`${
              active
                ? "text-gray-200 bg-slate-800 py-1 px-2 rounded font-bold"
                : "font-semibold "
            }`}
            to={link}
          >
            {name}
          </Link>
        );
      })}
      <div className="relative">
        <Link
          className={`${
            isNewsLetterPath ? "font-extrabold " : "font-semibold"
          } border-t-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-[#EEAB57] to-[#F7C04A]`}
          to={"/subscribe/newsletter"}
        >
          NewsLetter
        </Link>
        <span className="text-2xl absolute -top-2">🎉</span>
      </div>
    </div>
  );
};
