import React from "react";
import CopyIcon from "./CopyIcon";

export default function Palette() {
  return (
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Connect wallet
      </h5>
      <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
        Connect with one of our available wallet providers or create a new one.
      </p>
      <ul class="my-4 space-y-3"></ul>
    </div>
  );
}

function PaletteItem() {
  <li>
    <button class="flex w-full justify-between items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
      <span>MetaMask</span>
      <span>
        <CopyIcon />
      </span>
    </button>
  </li>;
}
