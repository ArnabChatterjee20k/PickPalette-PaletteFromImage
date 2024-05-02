import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardStatus from "./templates/DashboardStatus";

const keys = [
  "text",
  "background",
  "secondary",
  "primary",
  "tertiary",
  "accent",
];
export default function LivePreview() {
  const [params, setParams] = useSearchParams();
  useEffect(() => {
    const root_theme = document.querySelector(":root");
    keys.forEach((color) => {
      if (params.get(color))
        root_theme.style.setProperty(`--${color}`, params.get(color));
    });
  }, []);
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center justify-center">
      <DashboardStatus/>
    </section>
  );
}
