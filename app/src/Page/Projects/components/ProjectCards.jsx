import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  InformationCircleIcon,
  PauseCircleIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function ProjectCards({ name, id }) {
  return (
    <li>
      <Link to={`/user/projects/${id}/palette`}>
        <div className="flex flex-col justify-between bg-[#111625] h-44 p-5 rounded-lg border border-[#2b2f3c]  hover:bg-[#202431] transition-all ease-in relative group">
          <ProjectInfo name={name} />
          <ProjectStatus active={true} />
        </div>
      </Link>
    </li>
  );
}

function ProjectInfo({ name }) {
  return (
    <div className="flex w-full justify-between">
      <h5 className="font-semibold text-sm text-gray-100">{name}</h5>
      <div className="relative group">
        <ChevronRightIcon className="w-4 h-4 text-gray-400 absolute left-[-1rem] transform transition-all ease-out origin-center group-hover:text-white group-hover:scale-110 group-hover:-left-[0.80rem]" />
      </div>
    </div>
  );
}

function ProjectStatus({ active }) {
  const StatusIcon = active ? RocketLaunchIcon : PauseCircleIcon;
  const statusText = active ? "running" : "paused";
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-1">
        <StatusIcon className="w-4 h-4 text-gray-400" />
        <h6 className="text-xs font-medium text-gray-200">
          Project is {statusText}
        </h6>
      </div>
      <InformationCircleIcon className="w-4 h-4 text-gray-400" />
    </div>
  );
}
