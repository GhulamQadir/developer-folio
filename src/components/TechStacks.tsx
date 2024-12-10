import Image from "next/image";

interface TechStackT {
  title: string;
  image: string;
}

function TechStacks({
  stack,
  textColor,
}: {
  stack: TechStackT;
  textColor: string;
}) {
  const { title, image } = stack;
  return (
    <div className="h-20 flex flex-col justify-between items-center ">
      <Image
        src={image}
        width={60}
        height={25}
        className="h-12 w-14"
        alt={title}
      />
      <div>
        <p className={`${textColor} text-sm`}>{stack.title}</p>
      </div>
    </div>
  );
}
export default TechStacks;
