import React from "react";
import { Outlet } from "react-router-dom";
import useProjects from "./services/useProjects";

export default function index() {
  return <Outlet />;
}