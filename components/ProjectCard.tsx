import PlatformTag, { UserPlatform } from "./PlatformTag";
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
      className="relative flex aspect-video h-72 overflow-hidden rounded-3xl bg-cover bg-center"
      style={{
        borderTop: "0.5px solid rgba(211, 211, 211, 0.75)",
        borderBottom: "0.5px solid rgba(169, 169, 169, 0.75)",
        backgroundImage: `url(${project.coverImage})`,
      }}
    >
      <div
        className="absolute h-full w-full"
        style={{
          backdropFilter: "blur(10px) saturate(1.1) brightness(1.1)",
          maskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
        }}
      />

      <div className="flex h-full w-full flex-col justify-between gap-2 p-7">
        <div className="flex gap-2">
          {project.availablePlatforms.map((platform: UserPlatform) => (
            <PlatformTag
              key={platform}
              platform={platform}
              nameVisible={false}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-3xl font-black opacity-85">{project.name}</p>
          <p className="text font-extrabold opacity-70">
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
