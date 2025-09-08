import ProjectCard from "@/app/(home)/(components)/ProjectCard";
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb";
import { SiPytorch } from "react-icons/si";

export default function CardGrid() {
  return (
    <div className={"grid w-full grid-cols-3 gap-5"}>
      <ProjectCard
        date={"September 2025"}
        title={"Portfolio website v2"}
        description={"Learned a lot since then, time to revamp the website"}
        tag={{ icon: TbBrandNextjs, name: "Next.js" }}
      />
      <ProjectCard
        date={"November 2024"}
        title={"Sensors"}
        description={"A sensor app with neumorphic design"}
        tag={{ icon: TbBrandReactNative, name: "React Native" }}
        coverSrc={"/home/sensors-cover.png"}
      />
      <ProjectCard
        date={"October 2024"}
        title={"Portfolio website v1"}
        description={"My very first step into web development"}
        tag={{ icon: TbBrandNextjs, name: "Next.js" }}
      />
      <ProjectCard
        date={"June 2024"}
        title={"AI Chess Engine"}
        description={"A chess engine that learns to play chess on its own"}
        tag={{ icon: SiPytorch, name: "PyTorch" }}
        coverSrc={"/home/chess-engine-cover.png"}
      />
    </div>
  );
}
