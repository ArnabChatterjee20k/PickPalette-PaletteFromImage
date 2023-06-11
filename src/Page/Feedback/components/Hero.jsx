import React from "react";
import HeroText from "./HeroText";
import FeedbackForm from "./FeedbackForm";

export default function Hero() {
  return (
    <div className="flex flex-col items-center">
      <HeroText />
      <FeedbackForm/>
    </div>
  );
}
