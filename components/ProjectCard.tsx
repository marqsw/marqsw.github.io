import Link from "next/link";
import PlatformTag, { UserPlatform } from "./PlatformTag";
import Tag from "./Tag";
import TechStackTag, { TechStack } from "./TechStackTag";
import { useState } from "react";

export type ProjectCardProps = {
  name: string;
  handle: string;
  date: Date | undefined;
  description: string;
  techStack: TechStack[];
  thumbnail: string;
  projectUrl: string;
  availablePlatforms: UserPlatform[];
  coverImage?: string;
};

export default function ProjectCard(project: ProjectCardProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className="relative aspect-square h-96 overflow-hidden rounded-3xl bg-cover bg-center text-left"
      // onClick={() => setFocused((prev) => !prev)}
      style={{
        pointerEvents: "fill",
        borderTop: "0.5px solid rgba(211, 211, 211, 0.75)",
        borderLeft: "0.5px solid rgba(169, 169, 169, 0.75)",
        backgroundImage: `url(${project.coverImage})`,
      }}
      // disabled={focused}
    >
      {project.coverImage ? (
        <div
          className="pointer-events-none absolute h-full w-full"
          style={{
            backdropFilter: "blur(15px) saturate(1.1) brightness(1.1)",
            maskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 60%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 60%)",
          }}
        />
      ) : (
        <div className="pointer-events-none absolute h-full w-full backdrop-blur-2xl" />
      )}
      <div
        className="flex h-full w-full flex-col justify-between gap-2 p-7"
        // style={{
        //   pointerEvents: focused ? "all" : "none",
        // }}
      >
        <div className="flex flex-col gap-2">
          <Tag url="">
            <p className="text-nowrap text-sm">
              {project.date
                ? `${project.date > new Date() ? "Coming in " : ""}${project.date.toLocaleDateString("en-GB", { year: "numeric", month: "long" })}${project.date > new Date() ? "..." : ""}`
                : "Upcoming..."}
            </p>
          </Tag>

          <p className="text-3xl font-black opacity-90">{project.name}</p>
          <p className="text font-extrabold opacity-75">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((techStack: TechStack) => (
              <TechStackTag
                key={techStack}
                techStack={techStack}
                nameVisible={true}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          {project.availablePlatforms.map((platform: UserPlatform) => (
            <PlatformTag
              key={platform}
              platform={platform}
              nameVisible={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
