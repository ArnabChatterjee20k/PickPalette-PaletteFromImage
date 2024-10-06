import React from "react";
import Quote from "./Quote";

export default function Divider({children}) {
  return (
    <div class="inline-flex items-center justify-center w-full">
      <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
      <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
        {children?children:<Quote/>}
      </div>
    </div>
  );
}
