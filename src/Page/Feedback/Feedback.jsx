import React from "react";
import Hero from "./components/Hero";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackBottomText from "./components/FeedbackBottomText";
import FeedbackSection from "./components/FeedbackSection";

export default function Feedback() {
  return (
    <section>
      <div className="flex flex-col w-full items-center m-auto">
        <Hero />
        {/* push this code text to bottom right corner */}
        <div className="max-w-[1400px] fixed bottom-0 right-0 left-0 flex justify-end">
          <FeedbackBottomText />
        </div>

        <FeedbackForm />
        <div className="max-w-[1300px]">
          <FeedbackSection />
        </div>
        {/* feedback cards like this https://supabase.com/docs/guides/functions card and you can get them from flowbite */}
      </div>
    </section>
  );
}
