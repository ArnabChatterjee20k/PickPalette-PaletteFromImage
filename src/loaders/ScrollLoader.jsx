import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function ScrollLoader() {
  return (
    <div className="w-full justify-center py-6">
      <ThreeCircles
        height="100"
        width="100"
        color="#FFC107"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
