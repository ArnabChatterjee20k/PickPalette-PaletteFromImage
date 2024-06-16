import React from "react";
import Bars from "./Bars";
import ExploreButton from './Buttons/ExploreButton'
import GenerateButton from './Buttons/GenerateButton'

export default function Hero() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center w-full max-w-screen-xl px-4 pt-20 pb-12 mx-auto">
            <h1 className="font-bold text-2xl sm:text-5xl">Create stunning <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"> palettes</span> </h1>
            <h1 className="font-bold text-2xl my-2 sm:my-4 sm:text-5xl">from images</h1>
            <p className="text-center my-3 text-slate-400">Unlock the power of color with our innovative palette generator.</p>
        </div>
        <div className="flex flex-col gap-4 w-full justify-center sm:flex-row px-8">
            <GenerateButton/>
            <ExploreButton/>
        </div>
        <Bars/>
      </section>
    </>
  );
}