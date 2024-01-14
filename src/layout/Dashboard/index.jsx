import React from "react";
import Board from "./components/Board";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar"
export default function index({sidebarLinks}) {
  return (
    <section className="flex">
      <Sidebar sidebarLinks={sidebarLinks}/>
      <Board>
        <Outlet />
      </Board>
    </section>
  );
}
