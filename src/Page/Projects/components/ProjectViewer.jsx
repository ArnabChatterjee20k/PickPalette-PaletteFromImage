import React from "react";
import ProjectCards from "./ProjectCards";
const dummy = [{ name: "", id: "" }, {}];
export default function ProjectViewer() {
  return (
    <ul className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      <ProjectCards />
      <ProjectCards />
      <ProjectCards />
    </ul>
  );
}
