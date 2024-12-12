import { projects } from "@/data/data";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";

interface TProps {
  textColor: string;
  headingColor: string;
  borderColor: string;
  headingTwoColor: string;
  containerColor: string;
  btnTextColor: string;
}
function Projects({
  textColor,
  headingColor,
  borderColor,
  headingTwoColor,
  containerColor,
  btnTextColor,
}: TProps) {
  return (
    <div
      id="projects"
      className={`lg:px-28 px-2 py-12 text-center font border-b-[1px] ${borderColor}`}
    >
      <p className={`md:text-5xl text-3xl ${headingTwoColor} font-medium`}>
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-x-7 gap-y-4 mt-10">
        {projects.map((proj) => {
          const { title, image, aboutInfo, hostedLink, github, techStack } =
            proj;
          return (
            <div
              key={nanoid()}
              className={`h-[440px] lg:h-[415px] border-[1px] shadow-lg rounded-lg w-96`}
            >
              <Image
                src={image}
                width={200}
                height={150}
                alt={title}
                className="h-44 w-full rounded-lg"
              />
              <div className="px-1 py-1 mt-2">
                <p className={`${headingTwoColor} text-2xl font-roboto`}>
                  {title}
                </p>
                <div className="mt-1 lg:h-24 h-[120px]">
                  <p className={`${textColor}`}>{aboutInfo}</p>
                </div>
                <div className="flex gap-x-3 items-center px-1 mt-2">
                  <p className={`text-lg ${headingTwoColor}`}>Tech Stack:</p>
                  <div className="flex gap-x-2">
                    {techStack.map((stack) => {
                      return (
                        <div key={nanoid()}>
                          <Image
                            src={stack}
                            width={60}
                            height={25}
                            className="h-6 w-8"
                            alt="tech-stack"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex mt-3 justify-center gap-x-2">
                  <button className={`${containerColor} px-3 py-1`}>
                    <Link
                      target="blank"
                      href={hostedLink}
                      className={`${btnTextColor}`}
                    >
                      Visit Site
                    </Link>
                  </button>
                  <button className={`border-[1px] ${borderColor} px-3 py-1`}>
                    <Link
                      target="blank"
                      href={github}
                      className={`${headingTwoColor}`}
                    >
                      View Code
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
