import Image from "next/image";
import DevGuy from "@/assets/devguy.gif";

interface TProps {
  developerName: string;
  bgColor: string;
  textColor: string;
  headingColor: string;
  iconColor: string;
  borderColor: string;
  headingTwoColor: string;
}
function HeroComponent({
  developerName,
  bgColor,
  textColor,
  headingColor,
  headingTwoColor,
  borderColor,
  iconColor,
}: TProps) {
  return (
    <div
      className={`${bgColor} w-full px-5 pt-20 md:pt-32 pb-10 flex flex-wrap justify-center border-b-[1px] ${borderColor}`}
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
      </div>
      <div className="lg:w-[40%]">
        <Image src={DevGuy} alt="dev-guy" />
      </div>
    </div>
  );
}
export default HeroComponent;
