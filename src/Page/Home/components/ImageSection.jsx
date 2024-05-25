import React from "react";
import TV from "../assets/tv.png";
import { Box } from "./Box";
import useIsMobile, { useIsExactTabletWidth, useIsPad, useIsTablet } from "../../../hooks/useIsMobile";
import RedirectButton from "../../../components/RedirectButton";
import CurlyArrow from "../../../components/CurlyArrow";
import GenerateButton from "./Buttons/GenerateButton";
import ExploreButton from "./Buttons/ExploreButton";

export default function ImageSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPad = useIsPad();
  const sm_desk = useIsExactTabletWidth();

  return (
    <div className="lg:mt-0 lg:flex relative">
      {!isMobile && <IllustrativeCurlyArrow />}
      {!isMobile && <IllustrativeButton />}
      
      <div className="relative">
        <img src={TV} alt="mockup" className="z-20 relative" />
        
        {!isMobile && !isPad && !isTablet && !sm_desk && (
          <iframe
            className="z-40 aspect-video absolute top-[13%] left-[7%] w-[71%] h-[65%] rounded-lg"
            src="https://www.youtube.com/embed/Vcd50FB1GVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {!isMobile && !isPad && isTablet && !sm_desk && (
          <iframe
            className="z-40 aspect-video absolute top-[53px] left-[42px] w-[442px] h-[262px] rounded-lg"
            src="https://www.youtube.com/embed/Vcd50FB1GVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {!isMobile && !isPad && !isTablet && sm_desk && (
          <iframe
            className="z-40 aspect-video absolute top-[43px] left-[36px] w-[381px] h-[230px] rounded-lg"
            src="https://www.youtube.com/embed/Vcd50FB1GVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {!isMobile && isPad && !sm_desk && (
          <iframe
            className="z-40 d-block aspect-video absolute top-[13%] left-[6.8%] w-[71%] h-[66%] rounded-lg"
            src="https://www.youtube.com/embed/Vcd50FB1GVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}

        {isMobile && (
          <iframe
            className="z-40 d-block aspect-video absolute top-[13%] left-[6.8%] w-[71%] h-[66%] rounded-lg"
            src="https://www.youtube.com/embed/Vcd50FB1GVw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        )}
      </div>
      
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

const IllustrativeCurlyArrow = () => {
  return (
    <CurlyArrow className="h-32 w-32 z-10 absolute -bottom-10 -left-28" />
  );
};

const IllustrativeButton = () => {
  return (
    <div className="absolute -bottom-8 -left-64 w-36">
      <ExploreButton />
    </div>
  );
};