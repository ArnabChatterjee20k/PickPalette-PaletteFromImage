import React from "react";

export default function NavContainer({ children }) {
  return (
    <nav className="border-b-2 bg-[#060910] text-white border-gray-900 shadow-2xl sticky top-0 left-0 right-0 z-50">
      {children}
    </nav>
  );
}
