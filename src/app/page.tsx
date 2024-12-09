"use client";
import { useState, useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
    } else {
      setBgColor("bg-[#f2f0f2]");
      setTextColor("text-[#26313F]");
      setHeadingColor("text-[#26313F]");
      setIconColor("#26313F");
      setHeadingTwoColor("text-[#26313F]");
      setBorderColor("border-[#26313F]");
      setContColor("bg-[#26313F]");
      setBtnTextColor("text-white");
    }
  }, [theme]);
  const developerName: string = "Ghulam Qadir";
  return (
    <html className="scroll-smooth">
      <body>
        <div className={`${bgColor}`}>
          <Navbar
            developerName={developerName}
            theme={theme}
            setTheme={setTheme}
            headingColor={headingColor}
            iconColor={iconColor}
            bgColor={bgColor}
          />
          <HeroComponent
            developerName={developerName}
            textColor={textColor}
            headingColor={headingColor}
            headingTwoColor={headingTwoColor}
            borderColor={borderColor}
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
            headingColor={headingColor}
            borderColor={borderColor}
            headingTwoColor={headingTwoColor}
            containerColor={containerColor}
          />
        </div>
      </body>
    </html>
  );
}
