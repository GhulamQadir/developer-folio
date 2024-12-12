"use client";
import { useState } from "react";
import { Drawer } from "antd";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { developerName } from "@/data/data";
interface TProps {
  theme: boolean;
  bgColor: string;
  headingColor: string;
  iconColor: string;
  setTheme: (theme: boolean) => void;
}
function Navbar({ theme, setTheme, bgColor, headingColor, iconColor }: TProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <div
      className={`${bgColor} flex justify-between px-1 md:px-2 py-4 sticky z-10 top-0 !scroll-smooth`}
    >
      <div className="lg:w-[20%] text-center content-center">
        <p
          className={`text-2xl md:text-[28px] ${headingColor} font-edu font-medium}`}
        >
          {developerName}
        </p>
      </div>
      <div className="lg:w-[60%] flex lg:justify-between justify-end items-center lg:px-5 px-2">
        <div className={`hidden lg:block ${headingColor}`}>
          <Link
            href={"#aboutDiv"}
            className="w-20 rounded-md py-[5px] mr-7 text-xl"
          >
            About
          </Link>
          <Link
            href={"#projects"}
            className="w-20 rounded-md py-[5px] mr-7 text-xl"
          >
            Projects
          </Link>
          <Link href={""} className=" w-20 rounded-md py-[5px] mr-7 text-xl">
            Resume
          </Link>
          <Link
            href={"#contact"}
            className="w-20 rounded-md py-[5px] mr-7 text-xl"
          >
            Contact
          </Link>
        </div>
        <div className="lg:mr-12 flex gap-x-7">
          <button className="" onClick={changeTheme}>
            <MdOutlineDarkMode color={iconColor} size={30} />
          </button>
          <button className="lg:hidden" onClick={showDrawer}>
            <GiHamburgerMenu color={iconColor} size={24} />
          </button>
        </div>
      </div>

      <Drawer
        title="Basic Drawer"
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        width={300}
        key={"left"}
      >
        <button onClick={onClose} className="bg-red-500 p-3 text-white">
          close drawer
        </button>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}
export default Navbar;
