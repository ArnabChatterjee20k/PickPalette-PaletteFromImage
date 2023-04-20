import React from "react";
import CopyIcon from "./CopyIcon";
import useMediaQuery from "../hooks/useMediaQuery";
import ColorViewer from "./ColorViewer";

export default function Palette({ colors, paletteTitle }) {
  const isMobile = useMediaQuery("(max-width:400px)");
  return (
    <div class="w-full lg:min-w-[24rem] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        {paletteTitle}
      </h5>
      <PaletteItem className={isMobile ? "flex gap-12 flex-wrap w-sm" : ""}>
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
    <>
      <ColorViewer color={color} className={"w-5 h-5"} />
    </>
  );
}

function DesktopPalette({ color }) {
  return (
    <>
      <button
        className={`flex w-full justify-between items-center p-3 text-base font-bold text-gray-900 rounded-lg group hover:shadow`}
        style={{ backgroundColor: color }}
      >
        <span>MetaMask</span>
        <span>
          <CopyIcon />
        </span>
      </button>
    </>
  );
}

function PaletteItem({ children, className }) {
  return (
    <ul className={`my-4 space-y-3 ${className}`}>
      {children}
    </ul>
  );
}
