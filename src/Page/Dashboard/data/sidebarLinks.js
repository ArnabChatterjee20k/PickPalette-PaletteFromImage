import {
  StarIcon,
  ChartPieIcon,
  BookOpenIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
export default [
  linkFactory("Projects", "projects", ComputerDesktopIcon),
  linkFactory("Favourites", "favourites", StarIcon),
  linkFactory("Docs", "docs", BookOpenIcon),
];

function linkFactory(name, link, icon) {
  return {
    name,
    link,
    icon,
  };
}
