import Image from "next/image";
import ProfilePic from "@/assets/profile-pic.jpeg";

function AboutMe() {
  return (
    <div className="bg-[#151C25] px-5 py-10 md:p-20 flex flex-wrap-reverse justify-center gap-x-28">
      <div className="relative">
        <div className="absolute top-0 left-0 w-[50%] h-[90%] border-t-[10px] border-l-[10px] border-[#55E5A4]"></div>
        <Image
          src={ProfilePic}
          alt="profile-pic"
          className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] mt-[10px] ml-[10px]"
        />
      </div>
      <div className="lg:w-[50%] mb-5">
        <div>
          <p className="text-5xl text-white font-medium">About Me</p>
          <div className="flex ml-14">
            <div className="w-[50px]  bg-[#55E5A4] h-[5px] content-center mt-[10px] mr-3"></div>
            <p className=" text-[#55E5A4] text-lg">Who Am I?</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-[#A9A9A9] leading-[33px] lg:text-xl text-lg">
            I am currently doing my Bachelors from XYZ University, Karachi,
            Pakistan.I have a keen interest in Full Stack development. My goal
            is to use my expertise in building exciting and functional user
            interfaces. Alongside this, I am creating side projects for
            enhancing my skills in the field of development, learning latest
            technologies and applying in making side projects.
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutMe;
