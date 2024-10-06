import { useInfiniteQuery } from "@tanstack/react-query";
// import { API_MAX_PAGE,PALETTE_API } from "../data/data";
import fetchPalettes from "../utils/fetchPalettes";

export default function useColorPalettes({ startPage }) {
  return useInfiniteQuery({
    queryKey: ["palettes"],
    queryFn: ({ pageParam = startPage }) => fetchPalettes(pageParam),
    getNextPageParam: ({ page }) => {
      return page < 100 ? page + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}
