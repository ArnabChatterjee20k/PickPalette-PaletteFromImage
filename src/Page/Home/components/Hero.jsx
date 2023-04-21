import React from "react";
import ImageSection from "./ImageSection";
import HeroText from "./HeroText";

export default function Hero() {
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