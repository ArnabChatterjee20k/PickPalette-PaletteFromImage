import { useState } from "react";
import useProjectPalette from "../services/useProjectPalette";
import Palette from "./Palette";
import PaletteSkeleton from "./PaletteSkeleton";

export default function PaletteViewer() {
  const { data, isLoading, isError } = useProjectPalette();
  const gapInREM = isLoading ? 0.5 : 0.5;
  return (
    <div
      className="flex flex-col sm:flex-row"
      style={{ gap: `${gapInREM}rem` }}
    >
      {isLoading && <PalettePlaceholder />}
      {data?.colors?.map((color,idx) => (
        <Palette color={color} idx={idx}/>
      ))}
    </div>
  );
}

function PalettePlaceholder() {
  return Array(5)
    .fill(1)
    .map(() => <PaletteSkeleton />);
}
