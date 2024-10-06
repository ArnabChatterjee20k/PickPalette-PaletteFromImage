import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import DashboardStatus from "./templates/DashboardStatus";
import ColorBar from "./components/ColorBar";

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
  const { search } = useLocation();
  useEffect(() => {
    const root_theme = document.querySelector(":root");
    keys.forEach((color) => {
      if (params.get(color)) {
        let timeoutId;
        timeoutId = setTimeout(() => {
          root_theme.style.setProperty(`--${color}`, params.get(color));
          if (timeoutId) clearImmediate(timeoutId);
        }, 200);
      }
    });
  }, [search]);
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center justify-evenly">
      <DashboardStatus />
      <ColorBar keys={keys} />
    </section>
  );
}
