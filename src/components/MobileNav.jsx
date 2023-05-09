import { Menu } from "@headlessui/react";
import HamburgerMenu from "./HamburgerMenu";
import { Link, useLocation } from "react-router-dom";
import navLinks from "../data/navLinks";

export default function MobileNav() {
  const { pathname } = useLocation();
  return (
    <div className="shadow-md w-36 flex flex-col z-30 absolute right-6 top-[1.4rem]">
      <Menu>
        <Menu.Button className="self-end focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center ">
          <HamburgerMenu className="w-6 h-6" />
        </Menu.Button>
        <Menu.Items className="py-2 rounded text-sm font-medium bg-gray-700 text-white">
          {navLinks.map(({ name, link }) => {
            const active = link === pathname;
            return (
              <Item>
                <Link className={active ? "text-gray-500" : ""} to={link}>
                  {name}
                </Link>
              </Item>
            );
          })}
          <Item className="border-t font-extrabold border-t-gray-500 text-transparent bg-clip-text bg-gradient-to-r from-[#EEAB57] to-[#F7C04A]">
            <Link to="/subscribe/newsletter">
              NewsLetter
            </Link>
          </Item>
        </Menu.Items>
      </Menu>
    </div>
  );
}

const Item = ({ children, className}) => {
  return (
    <Menu.Item className={`block px-4 py-2 ${className}`}>{children}</Menu.Item>
  );
};
