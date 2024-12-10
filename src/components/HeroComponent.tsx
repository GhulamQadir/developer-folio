import Image from "next/image";
import DevGuy from "@/assets/devguy.gif";
import Link from "next/link";

interface TProps {
  developerName: string;
  textColor: string;
  headingColor: string;
  borderColor: string;
  headingTwoColor: string;
  containerColor: string;
  btnTextColor: string;
}
function HeroComponent({
  developerName,
  textColor,
  headingColor,
  headingTwoColor,
  borderColor,
  containerColor,
  btnTextColor,
}: TProps) {
  return (
    <div
      className={`w-full px-5 pt-20 md:pt-32 pb-10 flex flex-wrap justify-center border-b-[1px] ${borderColor}`}
    >
      <div className="lg:w-[40%] md:mt-12">
        <p className={`text-3xl md:text-5xl ${headingTwoColor}`}>
          Nice to meet you,
        </p>
        <p className={`text-4xl md:text-6xl mt-3 ${headingTwoColor}`}>
          I'm{" "}
          <span className={`${headingColor} font-bold`}>{developerName}</span>.
        </p>
        <p className={`text-2xl ${textColor} mt-6`}>
          A passionate MERN Stack Developer creating web applications using the
          latest frontend technologies and frameworks to bring your vision to
          life.
        </p>
        <div className="flex md:mt-5 mt-3 items-center gap-x-10">
          <button className={`${containerColor} px-3 py-1 rounded-md text-lg`}>
            <Link href={"#contact"} className={`${btnTextColor}`}>
              Get in Touch
            </Link>
          </button>
          <button className={`${textColor} flex items-center gap-x-2`}>
            <div className="w-3 h-3 bg-[#55E5A4] rounded-full pr-2"></div>
            <Link href={"#contact"}>Available now</Link>
          </button>{" "}
        </div>
      </div>
      <div className="lg:w-[40%]">
        <Image src={DevGuy} alt="dev-guy" />
      </div>
    </div>
  );
}
export default HeroComponent;
