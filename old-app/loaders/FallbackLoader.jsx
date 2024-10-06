import React from "react";
import { Circles } from "react-loader-spinner";
export default function FallbackLoader() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen">
      <Circles
        height="80"
        width="80"
        color=" #FFC107 "
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
}
