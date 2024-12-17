import PlatformTag, { UserPlatform } from "./PlatformTag";
import Tag from "./Tag";
import TechStackTag, { TechStack } from "./TechStackTag";

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
  return (
    <div
      className="relative flex aspect-square h-96 overflow-hidden rounded-3xl bg-cover bg-center"
      style={{
        borderTop: "0.5px solid rgba(211, 211, 211, 0.75)",
        borderBottom: "0.5px solid rgba(169, 169, 169, 0.75)",
        backgroundImage: `url(${project.coverImage})`,
      }}
    >
      <div
        className="absolute h-full w-full"
        style={{
          // backdropFilter: "blur(10px) saturate(1.1) brightness(1.1)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
        }}
      />

      <div className="flex h-full w-full flex-col justify-between gap-2 p-7">
        <div className="flex justify-end">
          <Tag url="">
            <p className="text-nowrap text-sm">
              {project.date
                ? `${project.date > new Date() ? "Coming in " : ""}${project.date.toLocaleDateString("en-GB", { year: "numeric", month: "short" })}${project.date > new Date() ? "..." : ""}`
                : "Upcoming..."}
            </p>
          </Tag>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {project.availablePlatforms.map((platform: UserPlatform) => (
              <PlatformTag
                key={platform}
                platform={platform}
                nameVisible={false}
              />
            ))}
          </div>

          <p className="text-3xl font-black">{project.name}</p>
          <p className="text font-extrabold text-gray-300">
            {project.description}
          </p>
          <div className="flex gap-2">
            {project.techStack.map((techStack: TechStack) => (
              <TechStackTag key={techStack} techStack={techStack} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
