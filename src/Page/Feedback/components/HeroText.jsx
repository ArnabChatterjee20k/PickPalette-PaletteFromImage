import React from "react";

export default function HeroText() {
  return (
    <div className="flex flex-col items-center gap-4 mx-auto py-6">
      <h2 className="text-4xl text-white font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">
        Join the Conversation
      </h2>
      <p className="text-2xl font-bold leading-none tracking-tight text-gray-300">
        Share Your{" "}
        <span className="underline underline-offset-4 decoration-4 decoration-blue-400 dark:decoration-blue-600">
          Feedback!
        </span>
      </p>
    </div>
  );
}
