import React from "react";
import { Outlet } from "react-router-dom";
import NavContainer from "./components/NavContainer";
import Logo from "./components/Logo";
export default function DashboardNavbar() {
  return (
    <>
      <NavContainer className="bg-[#09090b]">
        <div className="w-full m-auto px-4 py-5">
          <Logo className="text-xl" />
        </div>
      </NavContainer>
      <Outlet />
    </>
  );
}
