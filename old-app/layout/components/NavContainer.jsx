import React from "react";
import { twMerge } from "tailwind-merge";

export default function NavContainer({ children,className }) {
  return (
    <nav className={twMerge("border-b-2 bg-[#060910] text-white border-gray-900 shadow-2xl",className)}>
      {children}
    </nav>
  );
}
