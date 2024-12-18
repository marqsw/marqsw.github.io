"use client";

import ContactTag, { ContactTagProps } from "@/components/ContactTag";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { indexData } from "./home-data";

export default function Home() {
  return (
    <div className="flex max-w-screen-sm flex-col items-center gap-10">
      <div className="flex justify-center gap-2">
        {indexData.contacts.map((contact: ContactTagProps) => (
          <ContactTag key={contact.platform} {...contact} />
        ))}
      </div>

      <div className="flex h-96 items-center justify-center">
        <p className="text-3xl font-black">My Projects</p>
      </div>

      <div className="relative flex overflow-scroll border-2 border-red-500 p-10">
        {indexData.projects.map((project: ProjectCardProps, index: number) => (
          <div
            key={project.handle}
            className="fixed"
            style={{ left: `${10 * index}%`, top: `${10 * index}%` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
