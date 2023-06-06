import React from "react";
import getCurrentYear from "../utils/getCurrentYear";
import { APP_NAME, FOOTER_LINK } from "../data/data";
import socialLinks from "../data/socialLinks";
import { useLocation } from "react-router-dom";
import useIsMobile from "../hooks/useIsMobile";

export default function Footer() {
  const location = useLocation();
  const isMobile = useIsMobile();
  if (location.pathname === "/" && !isMobile) return null;
  const year = getCurrentYear();
  return (
    <footer class="sticky w-full p-4  border-t  shadow md:flex md:items-center md:justify-between md:p-6 bg-gray-800 border-gray-600">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {year}{" "}
        <a
          href={FOOTER_LINK}
          target="_blank"
          class="hover:underline font-extrabold text-gray-900 dark:text-white"
        >
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            {APP_NAME}™
          </span>
        </a>
        . All Rights Reserved.
      </span>
      <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {socialLinks.map(({ name, link }) => {
          return (
            <li>
              <a
                href={link}
                target="_blank"
                class="mr-4 hover:underline md:mr-6"
              >
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
}
