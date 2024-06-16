import React, { useEffect, useState } from "react";
import NavContainer from "./components/NavContainer";
import Logo from "./components/Logo";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { UserDashboardLink, ProductExplorationLinks } from "../data/navLinks";
import { useMemberModalContext } from "../context/MemberModalContext";
import { useAuthContext } from "../context/AuthContext";
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import GithubIcon from "../components/GithubIcon";
import ProductHuntIcon from "../components/ProductHuntIcon";
import HamburgerMenu from '../components/HamburgerMenu';
import useIsMobile, { useIsPad } from "../hooks/useIsMobile";
import CloseButton from './components/CloseButton';
import Icons from '../components/Icons';

const PRODUCTHUNT_LINK =
    "https://www.producthunt.com/products/pickpalette?utm_source=badge-featured&utm_medium=badge#pickpalette";
const GITHUB_LINK =
    "https://github.com/ArnabChatterjee20k/PickPalette-PaletteFromImage";

function NavBar() {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const isMobile = useIsMobile()
    const isPad = useIsPad()

    return (
        <>
            {
                !isMobile && isMobile || isPad && (
                    <MobileMenu isOpen={isMobileMenu} setIsMobileMenu={setIsMobileMenu} />
                )
            }
            <NavContainer className="sticky w-full top-0 left-0 z-40">
                <div className="flex max-w-[1568px] justify-between sm:px-12 sm:py-4 items-center w-full m-auto px-8 py-4">
                    <Logo />
                    <div className="hidden sm:flex items-center gap-2 ml-10">
                        {
                            ProductExplorationLinks.map(({ group, links }) => {
                                return (
                                    <DesktopMenu group={group} links={links} key={group} />
                                )
                            })
                        }
                        <SocialDropDown />
                    </div>
                    <ProjectDashboardLink />
                    <div className="block w-12 sm:hidden cursor-pointer" onClick={() => { setIsMobileMenu(true) }}>
                        <HamburgerMenu className={"w-12"}/>
                    </div>
                </div>
            </NavContainer>
            <Outlet />
        </>
    )
}

const ProjectDashboardLink = ({ className, isMobile }) => {
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
            className={`${isMobile ? "" : "hidden"} sm:block duration-200 text-[#2A94EB] text-sm px-4 py-2 rounded-lg to-blue-500 font-bold border border-2 border-[#2A94EB] hover:bg-gradient-to-r from-[#2A94EB] to-[#3688F3] hover:text-white ${className}`}
        >
            {UserDashboardLink.label}
        </button>
    );
};

const SocialDropDownItems = () => {
    return (
        <>
            <DropdownMenu.Item asChild>
                <a
                    href={GITHUB_LINK}
                    className={`flex items-center px-4 py-2 gap-2 rounded-md hover:outline-none hover:bg-black mx-2 hover:text-blue-300`}
                >
                    <GithubIcon className="text-white w-4 h-4" />
                    Github
                </a>
            </DropdownMenu.Item>
            <DropdownMenu.Item asChild>
                <a
                    href={PRODUCTHUNT_LINK}
                    className={`flex items-center px-4 py-2 gap-2 rounded-md hover:outline-none hover:bg-black mx-2 hover:text-blue-300`}
                >
                    <ProductHuntIcon className="w-4 h-4 fill-[#DA552F] group-hover:fill-slate-600 dark:group-hover:fill-white" />
                    ProductHunt
                </a>
            </DropdownMenu.Item>
        </>
    );
};

const SocialDropDown = () => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className={`gap-2 outline-none border-gray-700 text-white hover:bg-gray-700 font-medium rounded-md text-sm px-5 py-1.5 text-center inline-flex items-center`}
                >
                    Socials
                    <ChevronDownIcon className="w-4 h-4 " />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="py-2 rounded text-sm font-medium bg-gray-700 text-white max-w-md flex flex-col gap-1 z-50 ml-5"
                    sideOffset={6}
                >
                    <SocialDropDownItems />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
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
                    className={`gap-2 border-gray-700 text-white outline-none hover:bg-gray-700 font-medium rounded-md text-sm px-5 py-1.5 text-center inline-flex items-center ${isActive || open ? "bg-gray-800" : ""
                        }`}
                >
                    {group}
                    <ChevronDownIcon className="w-4 h-4" />
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="py-2 rounded text-sm font-medium bg-gray-700 text-white max-w-md flex flex-col gap-1 z-50 ml-5"
                    sideOffset={6}
                >
                    {links.map(({ label, link, Icon }) => {
                        return (
                            <DropdownMenu.Item asChild>
                                <Link
                                    to={link}
                                    className={`flex items-center rounded-md px-5 py-2 mx-2 gap-2 hover:outline-none hover:bg-black hover:text-blue-300 ${pathname === link ? "bg-gray-800 text-blue-300" : ""
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

const MobileMenu = ({ isOpen, setIsMobileMenu }) => {

    const socialMenuItems = {
        group: "Social",
        links: [
            {
                label: "ProductHunt",
                link: PRODUCTHUNT_LINK
            },
            {
                label: "Github",
                link: GITHUB_LINK
            }
        ]
    }

    const handleClose = () => {
        setIsMobileMenu(false)
    }

    const menuItems = [...ProductExplorationLinks, socialMenuItems]

    return (
        <div className={`${isOpen ? "fixed" : "hidden"} top-0 left-0 w-full py-2 px-4 bg-[#060910] `} style={{ zIndex: "1000", height: "100vh", overflow: "hidden" }}>
            <div className="flex max-w-[1568px] justify-between items-center w-full m-auto px-4 py-4 mb-2">
                <div onClick={handleClose}><Logo /></div>
                <div onClick={handleClose}><CloseButton className={"w-12 cursor-pointer"} /></div>
            </div>
            {
                menuItems.map(({ group, links }) => {
                    return (
                        <div className="px-4 py-1 flex flex-col" key={group}>
                            <p className="font-bold text-[#F7C04A] text-lg">{group}</p>
                            <div className="ps-8 py-2 flex flex-col gap-2">
                                {
                                    links.map(({ label, link }) => {
                                        return (
                                            <Link
                                                key={label}
                                                to={link}
                                                onClick={handleClose}
                                                className={`flex rounded-xl items-center rounded-md px-5 py-2 mx-2 gap-2 hover:outline-none hover:bg-black hover:text-blue-300
                            }`}
                                            >
                                                <Icons name={label} className={"w-6"}/>
                                                {label}
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div onClick={handleClose}><ProjectDashboardLink isMobile={true} className={"w-full mt-2"} /></div>
        </div>
    )
}

export default NavBar;