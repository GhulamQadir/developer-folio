"use client";
import { useState } from "react";
import { Drawer } from "antd";
import { MdOutlineDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { developerName } from "@/data/data";
import { RxCross2 } from "react-icons/rx";

interface TProps {
  theme: boolean;
  bgColor: string;
  headingColor: string;
  iconColor: string;
  drawerBgColor: string;
  textColor: string;
  setTheme: (theme: boolean) => void;
}
function Navbar({
  theme,
  setTheme,
  bgColor,
  headingColor,
  iconColor,
  drawerBgColor,
  textColor,
}: TProps) {
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
      className={`${bgColor} flex justify-between px-1 md:px-2 py-4 sticky z-10 top-0`}
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
          <Link
            href={"#resume"}
            className="w-20 rounded-md py-[5px] mr-7 text-xl"
          >
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
          <button onClick={changeTheme}>
            <MdOutlineDarkMode color={iconColor} size={30} />
          </button>
          <button className="lg:hidden" onClick={showDrawer}>
            <GiHamburgerMenu color={iconColor} size={24} />
          </button>
        </div>
      </div>

      <Drawer
        placement={"left"}
        closable={false}
        onClose={onClose}
        open={open}
        width={300}
        key={"left"}
        style={{ backgroundColor: drawerBgColor }}
      >
        <div className="flex justify-between">
          <p
            className={`text-2xl md:text-[28px] ${headingColor} font-edu font-medium}`}
          >
            {developerName}
          </p>
          <button onClick={onClose} className={`${textColor}`}>
            <RxCross2 size={23} />
          </button>
        </div>
        <ul className={`flex flex-col ${headingColor} gap-y-7 mt-10`}>
          <li>
            <Link
              href={"#aboutDiv"}
              onClick={onClose}
              className="w-20 rounded-md py-[5px] mr-7 text-xl"
            >
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={onClose}
              href={"#projects"}
              className="w-20 rounded-md py-[5px] mr-7 text-xl"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={onClose}
              href={"#resume"}
              className="w-20 rounded-md py-[5px] mr-7 text-xl"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              onClick={onClose}
              href={"#contact"}
              className="w-20 rounded-md py-[5px] mr-7 text-xl"
            >
              Contact
            </Link>
          </li>
          <li>
            <button onClick={changeTheme}>
              <MdOutlineDarkMode color={iconColor} size={30} />
            </button>
          </li>
        </ul>
      </Drawer>
    </div>
  );
}
export default Navbar;
