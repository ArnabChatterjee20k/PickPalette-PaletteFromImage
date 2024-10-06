import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function ScrollLoader() {
  return (
    <>
      <ThreeCircles
        height={30}
        width={30}
        color="#FFC107"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </>
  );
}
