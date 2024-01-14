import React from "react";
import Board from "./components/Board";
import { Outlet } from "react-router-dom";
import Sidebar from "../../layout/Sidebar";
import sidebarLinks from "./data/sidebarLinks";
export default function index() {
  return (
    <section className="flex">
      <Sidebar sidebarLinks={sidebarLinks}/>
      <Board>
        <Outlet />
      </Board>
    </section>
  );
}
