import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.jpeg";
import { techStacks } from "@/data/data";
import TechStacks from "./TechStacks";
import { nanoid } from "nanoid";
import Link from "next/link";
import { developerAboutInfo } from "@/data/data";
interface TProps {
  textColor: string;
  headingColor: string;
  borderColor: string;
  headingTwoColor: string;
  containerColor: string;
}
function AboutMe({
  textColor,
  headingColor,
  borderColor,
  headingTwoColor,
  containerColor,
}: TProps) {
  return (
    <div
      id="aboutDiv"
      className={`px-5 py-10 md:py-14 md:px-20 flex flex-wrap-reverse justify-center gap-x-28 scroll-smooth`}
    >
      <div className="relative">
        <div
          className={`absolute top-0 left-0 w-[50%] h-[80%] border-t-[10px] border-l-[10px] ${borderColor}`}
        ></div>
        <Image
          src={ProfilePic}
          alt="profile-pic"
          className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] mt-[10px] ml-[10px]"
        />
      </div>
      <div className="lg:w-[50%] mb-7">
        <div>
          <p className={`md:text-5xl text-3xl ${headingTwoColor} font-medium`}>
            About Me
          </p>
          <div className="flex ml-14">
            <div
              className={`w-[45px]  ${containerColor} h-[5px] content-center mt-[10px] mr-3`}
            ></div>
            <p className={`${headingColor} text-lg`}>Who Am I?</p>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <p className={`${textColor} leading-[30px] lg:text-lg text-md`}>
            {developerAboutInfo}
          </p>
          <div className="flex flex-wrap justify-center gap-x-5 items-center gap-y-4 mt-4 mb-5">
            {techStacks.map((stack) => {
              return (
                <TechStacks
                  key={nanoid()}
                  stack={stack}
                  textColor={textColor}
                />
              );
            })}
          </div>

          <Link href={"/resume.pdf"} download="Resume.pdf">
            <button
              className={`border-[1px] ${borderColor} px-3 py-1 ${headingTwoColor}`}
            >
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
