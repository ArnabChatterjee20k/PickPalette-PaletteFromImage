import React from "react";
import useIsMobile, { useIsPad, useIsTablet } from "../../../hooks/useIsMobile"; // Importing useIsPad and useIsTablet
import GenerateButton from "./Buttons/GenerateButton";
import ExploreButton from "./Buttons/ExploreButton";
import Feature from "../../../components/Feature";

export default function HeroText() {
  const isMobile = useIsMobile();
  const isPad = useIsPad(); // Using useIsPad hook
  const isTablet = useIsTablet(); // Using useIsTablet hook

  return (
    <div className="mr-auto mt-20 lg:mt-0 place-self-center z-20">
      <h1 className="text-center md:text-left max-w-2xl mb-4 text-3xl leading-3 font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-[#E8E8E8]">
        Create stunning
      </h1>
      <h1 className="text-center md:text-left max-w-2xl mb-4 text-3xl leading-10 font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-[#E8E8E8]">
        palettes from images
      </h1>
      <p className="max-w-2xl mb-6 text-center md:text-left font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
        Unlock the power of color with our innovative palette generator.
      </p>
      {!isMobile && !isPad && !isTablet && <GenerateButton />} {/* Condition when neither mobile, nor pad, nor tablet */}
      {isMobile && ( // Condition for mobile
        <div className="flex justify-center flex-col gap-3 items-center">
          <GenerateButton />
          <ExploreButton />
          <Feature />
        </div>
      )}
      {!isMobile &&(isPad || isTablet) && ( // Condition for either pad or tablet
        <div className="flex  flex-col gap-3 w-[100%]">
          <GenerateButton style={{width:"100%"}}/>
          <ExploreButton />
          <Feature />
        </div>
      )}
    </div>
  );
}
