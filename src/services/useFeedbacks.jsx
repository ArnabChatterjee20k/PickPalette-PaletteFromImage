import { useQuery } from "@tanstack/react-query";
import fetchFeedback from "../utils/fetchFeedback";

export default function useFeedbacks() {
  return useQuery(["feedback"], () => fetchFeedback(), {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
