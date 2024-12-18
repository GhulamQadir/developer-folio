"use client";
import { useState, useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function Home() {
  const [theme, setTheme] = useState(true);
  const [bgColor, setBgColor] = useState("bg-[#151C25]");
  const [textColor, setTextColor] = useState("text-[#A9A9A9]");
  const [headingColor, setHeadingColor] = useState("text-[#55E5A4]");
  const [headingTwoColor, setHeadingTwoColor] = useState("text-[#FFFFFF]");
  const [iconColor, setIconColor] = useState("white");
  const [borderColor, setBorderColor] = useState("border-[#55E5A4]");
  const [containerColor, setContColor] = useState("bg-[#55E5A4]");
  const [btnTextColor, setBtnTextColor] = useState("text-[#26313F]");
  const [drawerBgColor, setDrawerBgColor] = useState("#151C25");

  useEffect(() => {
    if (theme) {
      setBgColor("bg-[#151C25]");
      setTextColor("text-[#A9A9A9]");
      setHeadingColor("text-[#55E5A4]");
      setIconColor("white");
      setHeadingTwoColor("text-[#FFFFFF]");
      setBorderColor("border-[#55E5A4]");
      setContColor("bg-[#55E5A4]");
      setBtnTextColor("text-[#26313F]");
      setDrawerBgColor("#151C25");
    } else {
      setBgColor("bg-[#f2f0f2]");
      setDrawerBgColor("#f2f0f2");
      setTextColor("text-[#26313F]");
      setHeadingColor("text-[#26313F]");
      setIconColor("#26313F");
      setHeadingTwoColor("text-[#26313F]");
      setBorderColor("border-[#26313F]");
      setContColor("bg-[#26313F]");
      setBtnTextColor("text-white");
    }
  }, [theme]);
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }
  const btnRef = useRef<HTMLButtonElement>(null);
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      if (btnRef.current) {
        btnRef.current.style.display = "block";
      }
    } else {
      if (btnRef.current) {
        btnRef.current.style.display = "none";
      }
    }
  };

  const backToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={`${bgColor}`}>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        headingColor={headingColor}
        iconColor={iconColor}
        bgColor={bgColor}
        drawerBgColor={drawerBgColor}
        textColor={textColor}
      />
      <HeroComponent
        textColor={textColor}
        headingColor={headingColor}
        headingTwoColor={headingTwoColor}
        containerColor={containerColor}
        btnTextColor={btnTextColor}
      />
      <AboutMe
        textColor={textColor}
        headingColor={headingColor}
        borderColor={borderColor}
        headingTwoColor={headingTwoColor}
        containerColor={containerColor}
      />
      <Projects
        textColor={textColor}
        borderColor={borderColor}
        headingTwoColor={headingTwoColor}
        containerColor={containerColor}
        btnTextColor={btnTextColor}
        theme={theme}
      />
      <Contact headingTwoColor={headingTwoColor} />
      <Footer textColor={textColor} />
      <button
        onClick={backToTop}
        ref={btnRef}
        className="fixed bottom-5 right-4 text-white bg-slate-600 px-2 py-2 rounded-md hidden"
      >
        <IoIosArrowUp />
      </button>
    </div>
  );
}
