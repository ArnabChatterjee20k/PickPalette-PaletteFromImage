import React from "react";
import CopyIcon from "./CopyIcon";
import useIsMobile from "../hooks/useIsMobile";
import ColorViewer from "../Page/ImageUpload/Components/ColorViewer";
import getContrastingColor from "../utils/getContrastingColor";

export default function Palette({ colors, paletteTitle }) {
  const isMobile = useIsMobile()
  return (
    <div class="w-full lg:min-w-[24rem] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {paletteTitle}
      </h5>
      <PaletteItem className={isMobile ? "flex flex-wrap items-end justify-center gap-2" : ""}>
        {colors.map((color) => {
          if (isMobile) return <MobilePalette color={color} />;
          return <DesktopPalette color={color} />;
        })}
      </PaletteItem>
    </div>
  );
}

function MobilePalette({ color }) {
  return (
    <div>
      <ColorViewer color={color} className={"w-8 h-8"} />
    </div>
  );
}

function DesktopPalette({ color }) {
  const textColor = getContrastingColor(color)
  return (
    <>
      <button
        className={`flex w-full justify-between items-center p-3 text-base font-bold text-gray-900 rounded-lg group hover:shadow`}
        style={{ backgroundColor: color }}
      >
        <span style={{color:textColor}}>{color}</span>
      </button>
    </>
  );
}

function PaletteItem({ children, className }) {
  return (
    <div className={`my-4 space-y-3 ${className}`}>
      {children}
    </div>
  );
}
