import React from "react";
import Sidebar from "./components/Sidebar";
import Board from "./components/Board";
import { Outlet } from "react-router-dom";
export default function index() {
  return (
    <section className="flex">
      <Sidebar />
      <Board>
        <Outlet />
      </Board>
    </section>
  );
}
