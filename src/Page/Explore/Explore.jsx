import React from "react";
import ColorPalette from "./Components/ColorPalette";

export default function Explore() {
  const data = [
    ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900"],
    ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b"],
    ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a"],
    ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58"],
    ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc"],
    ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634"],
    ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f"],
    ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2"],
    ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951"],
    ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5"],
  ];
  return (
    <section className="w-full min-h-screen px-4 py-6 grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-x-6 ">
      {
        data.map(colors=>{
          return <ColorPalette colors={colors}/>
        })
      }
    </section>
  );
}
