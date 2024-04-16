import React from "react";
import ProjectCards from "./ProjectCards";
import useProjects from "../services/useProjects";
import NewProjectButton from "./NewProjectButton";
import { useSearchParams } from "react-router-dom";
import ProjectCreateModal from "./ProjectCreateModal";

export default function ProjectViewer() {
  const [query, setQuery] = useSearchParams();
  const { data, isLoading, isError,error } = useProjects();
  if(isError)console.log(error)
  if (isLoading) return <h2>Loading....</h2>;
  if (isError) return <h2>Some error while fetching projects...</h2>;
  
  return (
    <section className="space-y-4">
      <ProjectCreateModal/>
      {/* {query.get("action") === "create" && <ProjectCreateModal />} */}
      <NewProjectButton />
      <ul className="grid mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data.map(({ name, id }) => (
          <ProjectCards name={name} id={id} />
        ))}
      </ul>
    </section>
  );
}
