import React from "react";
import useMediaQuery from "../../../hooks/useMediaQuery";
import ImageSection from "./ImageSection";
import HeroText from "./HeroText";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width:400px)");
  return (
    <>
      <section>
        <div className="flex flex-col-reverse justify-center lg:flex-row max-w-screen-xl px-4 pb-8 mx-auto overflow-hidden">
          <HeroText />
          <ImageSection />
        </div>
      </section>
    </>
  );
}