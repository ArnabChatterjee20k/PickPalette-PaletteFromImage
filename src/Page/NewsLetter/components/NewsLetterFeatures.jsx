import React from "react";
import CalendarDaysIcon from "../../../components/CalendarDaysIcon";
import HandRaisedIcon from "../../../components/HandRaisedIcon";

export default function NewsLetterFeatures() {
  return (
    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
          <CalendarDaysIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <dt className="mt-4 font-semibold text-white">Weekly Updates</dt>
        <dd className="mt-2 leading-7 text-gray-400">
        our weekly updates provide you with a concise summary of the most important happenings and advancements in our world.
        </dd>
      </div>
      <div className="flex flex-col items-start">
        <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
          <HandRaisedIcon className="h-6 w-6 text-white" aria-hidden="true" />
        </div>
        <dt className="mt-4 font-semibold text-white">No spam</dt>
        <dd className="mt-2 leading-7 text-gray-400">
        We respect your inbox and will only deliver meaningful updates, useful information, and exclusive offers that are relevant to your interests.
        </dd>
      </div>
    </dl>
  );
}
