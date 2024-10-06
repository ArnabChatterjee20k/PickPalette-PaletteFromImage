import React from "react";
import colorPalettes from "../../../data/colorPalettes";
import Palette from "../../../components/Palette";
import Marquee from "react-fast-marquee";
import Arrow from "../../../components/Arrow";
import useIsMobile from "../../../hooks/useIsMobile";

export default function FamousPalettes() {
  const isMobile = useIsMobile();
  return <section className={`${isMobile?"my-10":"my-15"}`}>
    {
      isMobile?<MobilePalette/>:<DesktopPalette/>
    }
  </section>;
}

const DesktopPalette = () => {
  const list = ["-rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
  return <Marquee pauseOnHover gradient={false} speed={80} className={"py-10 w-full"}>
    {colorPalettes.map(({ name, colors }) => {
      const rotate = list[Math.floor(Math.random() * list.length)];
      return (
        <div className={`mx-10 relative ${rotate}`}>
          <Palette paletteTitle={name} colors={colors} />
          <Arrow className="w-20 h-20 absolute top-1/2 -right-20" />
        </div>
      );
    })}
  </Marquee>;
};

const MobilePalette = () => {
  return (
    <div className="flex flex-col gap-4">
      {colorPalettes.map(({ name, colors }) => {
        return (
          <div className={`mx-10 relative`}>
            <Palette paletteTitle={name} colors={colors} />
          </div>
        );
      })}
    </div>
  );
};
