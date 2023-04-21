import React from "react";
import TV from "../assets/tv.png";
import { Box } from "./Box";
import useIsMobile from "../../../hooks/useIsMobile";

export default function ImageSection() {
    const isMobile = useIsMobile();
    return (
    <div className="lg:mt-0 lg:flex relative">
      {/* relative tag in the image to do the overlay */}
      <img src={TV} alt="mockup" className="z-20 relative" />
      {isMobile && (
        <>
          <Box
            id="topbox"
            className="w-64 bg-[#EEAB57] absolute -bottom-7 -right-32 z-10"
          />
          <Box
            id="bottombox"
            className="w-44 bg-[#DC5214] absolute -bottom-24 -left-32 z-10"
          />
        </>
      )}
    </div>
  );
}
