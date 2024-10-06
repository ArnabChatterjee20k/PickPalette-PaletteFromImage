import { useInfiniteQuery } from "@tanstack/react-query";
// import { API_MAX_PAGE,PALETTE_API } from "../data/data";
import fetchPalettes from "../utils/fetchPalettes";

export default function useColorPalettes() {
  return useInfiniteQuery({
    queryKey:["palettes"],
    queryFn:({pageParam = 1})=>fetchPalettes(pageParam),
    getNextPageParam:({page})=>{
      return page<100?page+1:undefined
    },
    refetchOnWindowFocus:false,
    refetchOnMount:false
  })
}
