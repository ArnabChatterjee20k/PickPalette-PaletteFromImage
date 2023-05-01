import React from "react";
import ColorPalette from "./Components/ColorPalette";
import useColorPalettes from "../../services/useColorPalettes";
import ScrollLoader from "../../loaders/ScrollLoader";
import { useRef ,useCallback} from "react";
import PaletteContextProvider from "./cotext/paletteContext";

export default function Explore() {
  const {
    data: paletteData,
    fetchNextPage,
    hasNextPage,
    isFetched,
    isLoading,
    isFetchingNextPage
  } = useColorPalettes();

  const intObserver = useRef()
  const lastPaletteRef = useCallback(post => {
      if (isFetchingNextPage) return

      if (intObserver.current) intObserver.current.disconnect()

      intObserver.current = new IntersectionObserver(palettes => {
          const [palette] = palettes
          if (palette.isIntersecting && hasNextPage) {
              fetchNextPage()
          }
      })

      if (post) intObserver.current.observe(post)
  }, [isFetchingNextPage, fetchNextPage, hasNextPage])
  
  return (
    <PaletteContextProvider lastPaletteReference={lastPaletteRef} >
      <section className="flex min-h-screen flex-col items-center">
        <div className="w-full mb-auto px-4 py-5 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12">
          {isLoading && <Loader/>}
          {isFetched &&
            paletteData.pages.map(({ palettes }) => {
              return palettes.map((colors, index) => {
                return (
                  <div>
                    <ColorPalette colors={colors} key={index}/>
                  </div>
                );
              });
            })}
        </div>
        {hasNextPage && (
          <Loader/>
        )}
      </section>
    </PaletteContextProvider>
  );
}

const Loader = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pb-10 sm:pb-4">
      <ScrollLoader />
    </div>
  );
};
