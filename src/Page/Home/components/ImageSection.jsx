import React from "react";
import TV from "../assets/tv.png";
import { Box } from "./Box";
import useIsMobile from "../../../hooks/useIsMobile";
import RedirectButton from "../../../components/RedirectButton";
import CurlyArrow from "../../../components/CurlyArrow"
import GenerateButton from "./Buttons/GenerateButton";
import ExploreButton from "./Buttons/ExploreButton";


export default function ImageSection() {
  const isMobile = useIsMobile();
  return (
    <div className="lg:mt-0 lg:flex relative">
      {!isMobile && <IllustrativeCurlyArrow/>}
      {!isMobile && <IllustrativeButton />}
      {/* relative tag in the image to do the overlay */}
      <img src={TV} alt="mockup" className="z-20 relative" />
      {isMobile ? <MobileBoxes /> : null}
    </div>
  );
}

const MobileBoxes = () => {
  return (
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
  );
};

const IllustrativeCurlyArrow = ()=>{
  return <CurlyArrow className="h-32 w-32 z-10 absolute -bottom-10 -left-28" />
}
const IllustrativeButton = () => {
  return (
    <div className="absolute -bottom-8 -left-64 w-36">
      <ExploreButton/>
    </div>
  );
};
