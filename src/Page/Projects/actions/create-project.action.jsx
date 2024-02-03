import { useMutation } from "@tanstack/react-query";
import createProjects from "../utils/createProjects";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function createProjectAction() {
  const { mutate } = useMutation({
    mutationFn: (name, description) => createProjects(name, description),
  });
  const nav = useNavigate();

  function createProject(name, description) {
    mutate(
      { name, description },
      {
        onSuccess: (data) => {
          const id = data?.data?.id;
          nav(`/user/projects/${id}/palette`);
        },
        onError: () => {
          toast.error("Some error occured");
        },
      }
    );
  }
  return { createProject };
}
