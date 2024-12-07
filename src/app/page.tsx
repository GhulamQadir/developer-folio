"use client";
import { useState, useEffect } from "react";
import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [theme, setTheme] = useState(true);
  const [bgColor, setBgColor] = useState("bg-[#151C25]");
  const [textColor, setTextColor] = useState("text-[#A9A9A9]");
  const [headingColor, setHeadingColor] = useState("text-[#55E5A4]");
  const [headingTwoColor, setHeadingTwoColor] = useState("text-[#FFFFFF]");
  const [iconColor, setIconColor] = useState("white");
  const [borderColor, setBorderColor] = useState("border-[#55E5A4]");
  const [containerColor, setContColor] = useState("bg-[#55E5A4]");

  useEffect(() => {
    if (theme) {
      setBgColor("bg-[#151C25]");
      setTextColor("text-[#A9A9A9]");
      setHeadingColor("text-[#55E5A4]");
      setIconColor("white");
      setHeadingTwoColor("text-[#FFFFFF]");
      setBorderColor("border-[#55E5A4]");
      setContColor("bg-[#55E5A4]");
    } else {
      setBgColor("bg-[#f2f0f2]");
      setTextColor("text-[#26313F]");
      setHeadingColor("text-[#26313F]");
      setIconColor("#26313F");
      setHeadingTwoColor("text-[#26313F]");
      setBorderColor("border-[#26313F]");
      setContColor("bg-[#26313F]");
    }
    console.log(theme);
  }, [theme]);
  const developerName: string = "Ghulam Qadir";
  return (
    <html className="scroll-smooth">
      <body>
        <div>
          <Navbar
            developerName={developerName}
            theme={theme}
            setTheme={setTheme}
            bgColor={bgColor}
            textColor={textColor}
            headingColor={headingColor}
            iconColor={iconColor}
          />
          <HeroComponent
            developerName={developerName}
            bgColor={bgColor}
            textColor={textColor}
            headingColor={headingColor}
            headingTwoColor={headingTwoColor}
            iconColor={iconColor}
            borderColor={borderColor}
          />
          <AboutMe
            bgColor={bgColor}
            textColor={textColor}
            headingColor={headingColor}
            iconColor={iconColor}
            borderColor={borderColor}
            headingTwoColor={headingTwoColor}
            containerColor={containerColor}
          />
        </div>
      </body>
    </html>
  );
}
