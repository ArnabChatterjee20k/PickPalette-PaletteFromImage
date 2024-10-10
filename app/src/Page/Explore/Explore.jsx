import React, { useRef, useCallback } from "react";
import { useLoaderData } from "@remix-run/react";
import {
  useInfiniteQuery,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import ColorPalette from "./Components/ColorPalette";
import ScrollLoader from "../../loaders/ScrollLoader";
import PaletteContextProvider from "./cotext/paletteContext";
import fetchPalettes from "../../utils/fetchPalettes";

export default function Explore({ initialData }) {
  const {
    data: paletteData,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["palettes"],
    queryFn: ({ pageParam = 1 }) => fetchPalettes(pageParam),
    getNextPageParam: ({ page }) => {
      return page < 100 ? page + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    initialData: { pages: [initialData], pageParams: [1] },
    staleTime: Infinity,
  });
  const intObserver = useRef();
  const lastPaletteRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((palettes) => {
        if (palettes[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  return (
    <PaletteContextProvider lastPaletteReference={lastPaletteRef}>
      <section className="flex min-h-screen flex-col items-center mt-16">
        {isLoading && <Loader />}
        <div className="w-fit mb-auto px-4 py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-y-6 gap-x-10">
          {paletteData?.pages.flatMap((page, pageIndex) =>
            page.palettes.map((colors, colorIndex) => {
              const uniqueColors = [...new Set(colors)];
              if (uniqueColors.length >= 2) {
                return (
                  <ColorPalette
                    colors={uniqueColors.slice(0, 7)}
                    key={`${pageIndex}-${colorIndex}`}
                    ref={
                      pageIndex === paletteData.pages.length - 1 &&
                      colorIndex === page.palettes.length - 1
                        ? lastPaletteRef
                        : null
                    }
                  />
                );
              }
              return null;
            })
          )}
        </div>
        {isFetchingNextPage && <Loader />}
      </section>
    </PaletteContextProvider>
  );
}

const Loader = () => (
  <div className="w-full flex flex-col items-center justify-center my-5 pb-10 sm:pb-4">
    <ScrollLoader />
  </div>
);
