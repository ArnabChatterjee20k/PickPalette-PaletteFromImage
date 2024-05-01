import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DashboardStatus from "./templates/DashboardStatus";

export default function LivePreview() {
    const [params,setParams] = useSearchParams()
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center justify-center">
      <DashboardStatus accent={params.get("accent")} background={params.get("background")} secondary={params.get("secondary")} primary={params.get("primary")} text={params.get("text")}/>
    </section>
  );
}