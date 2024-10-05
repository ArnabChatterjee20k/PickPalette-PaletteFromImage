import linkFactory from "./linkFactory";
import {
  StarIcon,
  ChartPieIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
  KeyIcon,
} from "@heroicons/react/24/solid";
export default [
  linkFactory("Projects", "projects", ComputerDesktopIcon),
  linkFactory("Favourites", "favourites", StarIcon),
  linkFactory("API Keys", "keys", KeyIcon),
  linkFactory("Docs", "docs", BookOpenIcon),
];
