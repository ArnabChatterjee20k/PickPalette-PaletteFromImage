import { twMerge } from "tailwind-merge";
import { APP_NAME } from "../../data/data";
import { Link } from "react-router-dom";

export default function Logo({className,link}) {
  return (
    <Link
      to={link||"/"}
      className="font-extrabold text-gray-900 text-xl md:text-2xl"
    >
      <span class={twMerge("text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500",className)}>
        {APP_NAME}
      </span>
    </Link>
  );
}
