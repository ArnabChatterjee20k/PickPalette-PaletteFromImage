import { useQuery } from "@tanstack/react-query";
import fetchSavedPalettes from "../utils/fetchSavedPalettes";
import useUserAccessToken from "../hooks/useUserAccessToken";

export default function useSavePalettes() {
  const userToken = useUserAccessToken();
  const {
    data: savedPalettes,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["saved-palettes", userToken],
    queryFn: () => fetchSavedPalettes(userToken),
    enabled: Boolean(userToken),
    select: (data) => {
      return data?.map((palette) => palette.palette);
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  return { savedPalettes, isLoading, isError };
}