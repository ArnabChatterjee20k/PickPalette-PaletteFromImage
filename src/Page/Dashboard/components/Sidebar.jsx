import React from "react";
import sidebarLinks from "../data/sidebarLinks";
import CustomLink from "./CustomLink";

export default function Sidebar() {
  return (
    <aside
      id="default-sidebar"
      class="z-40 w-52 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full w-full fixed l-0 top-0 px-3 py-4 overflow-y-auto bg-[#09090b] border-r-2 border-[#04041a] shadow-2xl">
        <ul class="space-y-2 font-medium">
          {sidebarLinks.map(({icon,link,name})=><li><CustomLink Icon={icon} link={link} text={name}/></li>)}
        </ul>
      </div>
    </aside>
  );
}