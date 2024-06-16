import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../layout/components/Logo";
import Icons from './Icons';
import { ProductExplorationLinks } from '../data/navLinks';
import { APP_NAME, FOOTER_LINK } from "../data/data";
import getCurrentYear from "../utils/getCurrentYear";

const PRODUCTHUNT_LINK =
    "https://www.producthunt.com/products/pickpalette?utm_source=badge-featured&utm_medium=badge#pickpalette";
const GITHUB_LINK =
    "https://github.com/ArnabChatterjee20k/PickPalette-PaletteFromImage";

export default function Footer() {
    const year = getCurrentYear();
    return (
        <footer className="bg-[#060910] flex flex-col items-center border-t-2 pt-12 border-gray-900 shadow-2xl">
            <div className="w-full px-4 pb-12 lg:px-8 bg-[#060910] flex flex-col gap-12 lg:gap-8 lg:flex-row lg:justify-around">
                <Logo />
                <div className="flex gap-24 w-full lg:w-fit justify-center lg:justify-center">
                    {
                        ProductExplorationLinks.map(({ group, links }) => {
                            return (
                                <div className="flex flex-col gap-2" key={group}>
                                    <p className="font-bold text-lg text-[#F7C04A]">{group}</p>
                                    {
                                        links.map(({ label, link }) => {
                                            return (
                                                <Link to={link} className="text-white hover:text-[#2A95EB]">{label}</Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col gap-4 w-full lg:w-fit items-center lg:items-start">
                    <p className="font-bold text-lg text-[#F7C04A]">Follow Us On</p>
                    <GitHubBadge to={GITHUB_LINK} />
                    <ProductHuntBadge to={PRODUCTHUNT_LINK} />
                </div>
            </div>
            <span class="text-sm text-white font-medium sm:text-center dark:text-white pb-8">
                © {year}{" "}
                <a
                    href={FOOTER_LINK}
                    target="_blank"
                    class="hover:underline font-extrabold text-gray-900 dark:text-white"
                >
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                        {APP_NAME}™
                    </span>
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    )
}

const GitHubBadge = ({ to }) => {
    return (
        <Link to={to}>
            <div className="flex w-[200px] items-center px-4 gap-4 py-2 bg-[#221D21] rounded-xl">
                <Icons name={"Github"} fill={"#fff"} />
                <div>
                    <p className="text-white text-[10px] font-medium">STAR US ON</p>
                    <p className="text-white text-sm mt-1 font-bold">Github</p>
                </div>
            </div>
        </Link>
    )
}

const ProductHuntBadge = ({ to }) => {
    return (
        <Link to={to}>
            <div className="flex w-[200px] items-center px-4 gap-4 py-2 bg-[#221D21] rounded-xl">
                <Icons name={"ProductHunt"} fill={"#fff"} />
                <div>
                    <p className="text-white text-[10px] font-medium">FOLLOW US ON</p>
                    <p className="text-white text-sm mt-1 font-bold">Product Hunt</p>
                </div>
            </div>
        </Link>
    )
}