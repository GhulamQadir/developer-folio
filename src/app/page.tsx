import AboutMe from "@/components/AboutMe";
import HeroComponent from "@/components/HeroComponent";
import Navbar from "@/components/Navbar";

export default function Home() {
  const developerName: string = "Ghulam Qadir";
  return (
    <div>
      <Navbar developerName={developerName} />
      <HeroComponent developerName={developerName} />
      <AboutMe />
    </div>
  );
}
