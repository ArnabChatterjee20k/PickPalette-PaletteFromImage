import React from "react";
import ProjectCards from "./ProjectCards";
import useProjects from "../services/useProjects";
export default function ProjectViewer() {
  const { data, isLoading, isError } = useProjects();
  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>Some error while fetching projects...</h2>;
  return (
    <ul className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {data.map(({ name, id }) => (
        <ProjectCards name={name} id={id}/>
      ))}
    </ul>
  );
}
