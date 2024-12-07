import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.jpeg";
import { techStacks } from "@/data/data";
interface TProps {
  bgColor: string;
  textColor: string;
  headingColor: string;
  iconColor: string;
  borderColor: string;
  headingTwoColor: string;
  containerColor: string;
}
function AboutMe({
  bgColor,
  textColor,
  headingColor,
  borderColor,
  headingTwoColor,
  containerColor,
  iconColor,
}: TProps) {
  return (
    <div
      id="aboutDiv"
      className={`${bgColor} px-5 py-10 md:p-20 flex flex-wrap-reverse justify-center gap-x-28 scroll-smooth`}
    >
      <div className="relative">
        <div
          className={`absolute top-0 left-0 w-[50%] h-[90%] border-t-[10px] border-l-[10px] ${borderColor}`}
        ></div>
        <Image
          src={ProfilePic}
          alt="profile-pic"
          className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] mt-[10px] ml-[10px]"
        />
      </div>
      <div className="lg:w-[50%] mb-5">
        <div>
          <p className={`text-5xl ${headingTwoColor} font-medium`}>About Me</p>
          <div className="flex ml-14">
            <div
              className={`w-[45px]  ${containerColor} h-[5px] content-center mt-[10px] mr-3`}
            ></div>
            <p className={`${headingColor} text-lg`}>Who Am I?</p>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <p className={`${textColor} leading-[30px] lg:text-xl text-lg`}>
            I am currently doing my Bachelors from XYZ University, Karachi,
            Pakistan.I have a keen interest in Full Stack development. My goal
            is to use my expertise in building exciting and functional user
            interfaces. Alongside this, I am creating side projects for
            enhancing my skills in the field of development, learning latest
            technologies and applying in making side projects. The following are
            tech stacks that I use regularly:
          </p>
          {/* <Image
            src={"/tech-stacks/tailwind.png"}
            width={200}
            height={100}
            alt="htmlImage"
          /> */}
          {techStacks.map((stack, index) => {
            return (
              <div key={stack.title}>
                <Image
                  src={stack.image}
                  width={200}
                  height={100}
                  alt={stack.title}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
