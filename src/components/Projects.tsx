import { projects } from "@/data/data";
import { nanoid } from "nanoid";
import Image from "next/image";

interface TProps {
  textColor: string;
  headingColor: string;
  borderColor: string;
  headingTwoColor: string;
  containerColor: string;
}
function Projects({
  textColor,
  headingColor,
  borderColor,
  headingTwoColor,
  containerColor,
}: TProps) {
  return (
    <div className="lg:mx-28 px-2 py-12 text-center border-2 font">
      <p className={`md:text-5xl text-3xl ${headingTwoColor} font-medium`}>
        Projects
      </p>
      <div className="flex flex-wrap justify-center gap-x-7 mt-10">
        {projects.map((proj) => {
          const { title, image, aboutInfo, hostedLink, github, techStack } =
            proj;
          return (
            <div
              key={nanoid()}
              className={`h-96 border-[1px] shadow-lg rounded-lg w-96`}
            >
              <Image
                src={image}
                width={200}
                height={150}
                alt={title}
                className="h-44 w-full rounded-lg"
              />
              <div className="px-1 border-2 py-1 mt-2">
                <p className={`${headingTwoColor} text-2xl font-roboto`}>
                  {title}
                </p>
                <div className="mt-1 h-24 border-2">
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Projects;
