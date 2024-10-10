import React from 'react';
import useIsMobile from "../../../hooks/useIsMobile";
import getContrastingColor from "../../../utils/getContrastingColor";
import { usePaletteConext } from "../cotext/paletteContext";
import useColorClipboard from "../../../hooks/useColorClipboard";
import styles from "./styles.module.css";
import { LikeButton, LivePreviewButton, UsePaletteInProject } from "./Buttons";

export default function ColorPalette({ colors }) {
  const { lastPaletteReference, isVisible } = usePaletteConext();

  return (
    <div
      ref={lastPaletteReference}
      className="flex flex-col w-full overflow-hidden bg-neutral-800/50 rounded-xl p-4 border-2 transition-all duration-150 ease-in-out border-neutral-800 shadow-sm"
    >
      <ul className="flex gap-2 w-full mb-4 overflow-x-scroll sm:overflow-hidden">
        {colors.map((color, index) => (
          color ? (
            <PaletteItem
              key={`${color + index}`}
              className="rounded-lg"
              color={color}
              totalPalettes={colors.length}
            />
          ) : null
        ))}
      </ul>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <UsePaletteInProject />
          <LivePreviewButton palettes={colors} />
        </div>
        <LikeButton palettes={colors} />
      </div>
    </div>
  );
}

const PaletteItem = ({ className, color, totalPalettes }) => {
  const isMobile = useIsMobile();
  const { defaultText, clickHandler } = useColorClipboard(color, "copied");
  const contrastColor = getContrastingColor(color);
  const width = `${100 / totalPalettes}%`;
  const hoverWidth = `${100 / totalPalettes + 10}%`;

  return (
    <li 
      className={`h-14 sm:h-16 flex justify-center items-center cursor-pointer transition-all duration-100 ease-in-out w-[${width}] ${className} ${styles.paletteItem}`}
      style={{ 
        backgroundColor: color, 
        // @ts-ignore
        '--hover-width': hoverWidth,
      }}
      onClick={() => clickHandler(color)}
    >
      <span 
        className="text-xs sm:text-sm font-bold opacity-0 transition-opacity duration-500 ease-in-out"
        style={{ color: contrastColor }}
      >
        {defaultText}
      </span>
    </li>
  );
};