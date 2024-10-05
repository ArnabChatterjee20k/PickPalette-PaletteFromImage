import {
  SwatchIcon,
  Cog8ToothIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";

import linkFactory from "./linkFactory";

export default [
  linkFactory("Palette", "palette", SwatchIcon),
  linkFactory("Settings", "settings", Cog8ToothIcon),
  linkFactory("Usage", "usage", PresentationChartBarIcon),
];
