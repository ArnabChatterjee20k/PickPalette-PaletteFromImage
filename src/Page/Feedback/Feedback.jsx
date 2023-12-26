import React from "react";
import Hero from "./components/Hero";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackBottomText from "./components/FeedbackBottomText";

export default function Feedback() {
  return (
    <section>
      <div className="flex flex-col max-w-[1024px] items-center m-auto">
        <Hero />
        {/* push this code text to bottom right corner */}
        {/* <FeedbackBottomText /> */}
        {/* <FeedbackForm /> */}
        {/* feedback cards like this https://supabase.com/docs/guides/functions card and you can get them from flowbite */}
      </div>
    </section>
  );
}
