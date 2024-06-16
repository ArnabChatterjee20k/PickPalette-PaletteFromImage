import React from "react";
import TV from "../assets/tv.png";
import useIsMobile, { useIsExactTabletWidth, useIsPad, useIsTablet } from "../../../hooks/useIsMobile";
import CurlyArrow from "../../../components/CurlyArrow";

export default function ImageSection() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isPad = useIsPad();
  const sm_desk = useIsExactTabletWidth();

  return (
    <section className="h-auto py-12 mt-12">
      <div className="w-full flex flex-col gap-3 lg:gap-8 items-center">
        <h1 className="text-2xl text-center lg:text-4xl mb-8 font-bold">Watch out on <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">YouTube</span></h1>
        <CurlyArrow className={"w-[20%] lg:w-[10%] -rotate-45"} />
        <div className="relative">
          <img src={TV} alt="mockup" className="z-20 relative w-[800px]" />
          {!isMobile && !isPad && !isTablet && !sm_desk && (
            <iframe
              className="z-30 aspect-video absolute top-[13%] left-[7%] w-[71%] h-[65%] rounded-lg"
              src="https://www.youtube.com/embed/Vcd50FB1GVw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          {!isMobile && !isPad && isTablet && !sm_desk && (
            <iframe
              className="z-30 aspect-video absolute top-[15%] left-[8%] w-[69%] h-[61%] rounded-lg"
              src="https://www.youtube.com/embed/Vcd50FB1GVw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          {!isMobile && !isPad && !isTablet && sm_desk && (
            <iframe
              className="z-30 aspect-video absolute top-[43px] left-[36px] w-[381px] h-[230px] rounded-lg"
              src="https://www.youtube.com/embed/Vcd50FB1GVw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          {!isMobile && isPad && !sm_desk && (
            <iframe
              className="z-30 d-block aspect-video absolute top-[13%] left-[6.8%] w-[71%] h-[66%] rounded-lg"
              src="https://www.youtube.com/embed/Vcd50FB1GVw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}

          {isMobile && (
            <iframe
              className="z-30 d-block aspect-video absolute top-[13%] left-[6.8%] w-[71%] h-[66%] rounded-lg"
              src="https://www.youtube.com/embed/Vcd50FB1GVw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
