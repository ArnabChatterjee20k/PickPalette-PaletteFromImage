import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import projectPaletteFetcher from "../utils/projectPaletteFetcher";
import { useAuthContext } from "../../../context/AuthContext";

export default function useProjectPalette() {
  const { id } = useParams();
  const session = useAuthContext();
  const userToken = session?.access_token;
  return useQuery({
    queryKey: ["project-palette", id],
    queryFn: () => projectPaletteFetcher(id, userToken),
    enabled: Boolean(session),
  });
}
