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
    <div className="lg:px-10 px-2 py-12 text-center">
      <p className={`text-5xl ${headingTwoColor} font-medium`}>Projects</p>
    </div>
  );
}
export default Projects;
