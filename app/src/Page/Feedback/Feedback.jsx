import React from "react";
import Hero from "./components/Hero";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackBottomText from "./components/FeedbackBottomText";
import FeedbackSection, {
  SkeletonFeedbackSection,
} from "./components/FeedbackSection";
import { ClientOnly } from "remix-utils/client-only";

export default function Feedback({ reviews, isLoading }) {
  return (
    <section className="mt-20">
      <div className="flex flex-col w-full items-center m-auto">
        <Hero />
        {/* push this code text to bottom right corner */}
        <div className="max-w-[1400px] fixed bottom-0 right-0 left-0 flex justify-end">
          {isLoading ? null : <FeedbackBottomText />}
        </div>
        {isLoading ? (
          <div className="min-w-[14rem] w-[90%] h-16 sm:w-44 rounded-md bg-gray-600  animate-pulse transition-all duration-700 ease-in-out" />
        ) : (
          <ClientOnly>{() => <FeedbackForm />}</ClientOnly>
        )}
        <div className="max-w-[1300px]">
          {isLoading ? (
            <SkeletonFeedbackSection />
          ) : (
            <FeedbackSection reviews={reviews} />
          )}
        </div>
        {/* feedback cards like this https://supabase.com/docs/guides/functions card and you can get them from flowbite */}
      </div>
    </section>
  );
}
