import React from "react";
import ImageSection from "./ImageSection";
import HeroText from "./HeroText";
import BottomBars from "./BottomBars";
import Banner from "./Banner";

export default function Hero() {
  return (
    <>
      <section className="relative">
        <div className="flex flex-col-reverse justify-center lg:flex-row max-w-screen-xl px-4 pb-20 mx-auto overflow-hidden relative">
        <HeroText />
          <ImageSection />
         
        </div>
       <BottomBars/>
       <Banner/>
      </section>
    </>
  );
}
