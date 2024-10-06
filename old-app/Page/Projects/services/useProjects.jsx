import { useQuery } from "@tanstack/react-query";
import fetchProjects from "../utils/fetchProjects";

export default function useProjects() {
  return useQuery({ queryKey: ["projects"], queryFn: fetchProjects });
}
