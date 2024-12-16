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
};

export default function ProjectCard(project: ProjectCardProps) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="font-black">{project.name}</h1>
        <div className="flex gap-2">
          {project.techStack.map((techStack: TechStack) => (
            <TechStackTag key={techStack} techStack={techStack} />
          ))}
        </div>
        <div className="flex gap-2">
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
