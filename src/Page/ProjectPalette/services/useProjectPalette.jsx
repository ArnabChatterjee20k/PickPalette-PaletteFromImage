import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import projectPaletteFetcher from "../utils/projectPaletteFetcher";

export default function useProjectPalette() {
  const { id } = useParams();
  return useQuery({
    queryKey: ["project-palette", id],
    queryFn: () => projectPaletteFetcher(id),
  });
}
