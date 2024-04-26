import React, { useState } from "react";
import { APP_NAME } from "../data/data";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { UserDashboardLink, ProductExplorationLinks } from "../data/navLinks";
import NavContainer from "./components/NavContainer";
import Logo from "./components/Logo";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import HamburgerMenu from "../components/HamburgerMenu";
import { useMemberModalContext } from "../context/MemberModalContext";
import { useAuthContext } from "../context/AuthContext";

export default function Navbar() {
  return (
    <>
      <NavContainer className="sticky top-0 left-0 right-0 z-50">
        <div className="flex max-w-[1568px] items-center w-full m-auto px-8 pb-3 pt-5 shadow-sm">
          <Logo />
          <div className="hidden sm:flex items-center gap-2 ml-10">
            {ProductExplorationLinks.map(({ group, links }) => (
              <DesktopMenu group={group} links={links} key={group} />
            ))}
          </div>
          <div className="hidden sm:block ml-auto">
            <ProjectDashboardLink/>
          </div>
          <div className="ml-auto sm:hidden">
            <MobileMenu groupsWithLinks={ProductExplorationLinks} />
          </div>
        </div>
      </NavContainer>
      <Outlet />
    </>
  );
}
const ProjectDashboardLink = () => {
  const nav = useNavigate();
  const { handleModalOpen } = useMemberModalContext();
  const session = useAuthContext();
  function handleClick() {
    if (!session) {
      handleModalOpen();
      return;
    }
    nav(UserDashboardLink.link);
  }
  return (
    <button
      onClick={handleClick}
      className=" text-white font-bold rounded-md text-sm px-3 py-1.5 text-center inline-flex border-[#4a72f7] bg-[#4671ff] hover:bg-blue-600 focus:ring-4 focus:ring-blue-500"
    >
      {UserDashboardLink.label}
    </button>
  );
};

const DesktopMenu = ({ group, links }) => {
  const { pathname } = useLocation();
  const isActive = links.filter(({ link }) => link === pathname).length > 0;
  const [open, setOpen] = useState(false);
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button
          onClick={() => setOpen(true)}
          className={`gap-2 border-gray-700 text-white hover:bg-gray-700 font-bold rounded-md text-sm px-3 py-1.5 text-center inline-flex items-center ${
            isActive || open ? "bg-gray-800" : ""
          }`}
        >
          {group}
          <ChevronDownIcon className="w-4 h-4 " />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="py-2 rounded text-sm font-medium bg-gray-700 text-white max-w-md flex flex-col gap-4 z-50 ml-5"
          sideOffset={6}
        >
          {links.map(({ label, link, Icon }) => {
            return (
              <DropdownMenu.Item asChild>
                <Link
                  to={link}
                  className={`flex items-center px-4 py-2 gap-2 hover:text-blue-300 ${
                    pathname === link ? "bg-gray-800 text-blue-300" : ""
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              </DropdownMenu.Item>
            );
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const MobileMenu = ({ groupsWithLinks }) => {
  const { pathname } = useLocation();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="self-end focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center "
        >
          <HamburgerMenu className="w-6 h-6" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="py-2 rounded text-sm font-medium bg-gray-700 text-white max-w-md flex flex-col gap-4 z-50 mr-8"
          sideOffset={6}
        >
          {groupsWithLinks.map(({ links }) => {
            return (
              <DropdownMenu.Group>
                {links.map(({ label, link, Icon }) => {
                  return (
                    <DropdownMenu.Item asChild>
                      <Link
                        to={link}
                        className={`flex items-center px-4 py-2 gap-2 hover:text-blue-300 ${
                          pathname === link ? "bg-gray-800 text-blue-300" : ""
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        {label}
                      </Link>
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenu.Group>
            );
          })}
          <DropdownMenu.Group>
            <DropdownMenu.Item className="px-2">
              <ProjectDashboardLink />
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
