import { useQuery } from "@tanstack/react-query";
import fetchFeedback from "../utils/fetchFeedback";

export default function useFeedbacks() {
  return useQuery({
    queryKey: ["feedback"],
    queryFn: () => fetchFeedback(),
    options: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
    staleTime: Infinity,
  });
}
