import Image from "next/image";
import DevGuy from "@/assets/devguy.gif";

function HeroComponent({ developerName }: { developerName: string }) {
  return (
    <div className="bg-[#151C25] w-full px-5 pt-20 md:pt-32 pb-10 flex flex-wrap justify-center border-b-[1px] border-[#55E5A4]">
      <div className="lg:w-[40%] md:mt-12">
        <p className="text-3xl md:text-5xl text-white">Nice to meet you,</p>
        <p className="text-4xl md:text-6xl mt-3 text-white">
          I'm <span className="text-[#55E5A4] font-bold">{developerName}</span>.
        </p>
        <p className="text-2xl text-[#A9A9A9] mt-6">
          A passionate MERN Stack Developer creating web applications using the
          latest frontend technologies and frameworks to bring your vision to
          life.
        </p>
      </div>
      <div className="lg:w-[40%]">
        <Image src={DevGuy} alt="dev-guy" className="" />
      </div>
    </div>
  );
}
export default HeroComponent;
