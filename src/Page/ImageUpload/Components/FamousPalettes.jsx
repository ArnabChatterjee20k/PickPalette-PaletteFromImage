import React from "react";
import colorPalettes from "../../../data/colorPalettes";
import Palette from "../../../components/Palette";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Marquee from "react-fast-marquee";
import useMediaQuery  from "../../../hooks/useMediaQuery";

export default function FamousPalettes() {
  const list = ["-rotate-1", "-rotate-1", "rotate-2", "-rotate-2"];
  const media = useMediaQuery("(max-width:400px)")
  console.log(media);
  return (
    <section className="mt-20">
      <Marquee play={false} gradient={false} speed={80} className={"py-10 w-full"}>
      {colorPalettes.map(({ name, colors }) => {
        const rotate = list[Math.floor(Math.random() * list.length)];
        return (
          <div className={`mx-10 ${rotate}`}>
            <Palette paletteTitle={name} colors={colors} />
          </div>
        );
    })}
    </Marquee>
    </section>
  );
}
