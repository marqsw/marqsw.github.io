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

      <div className="h-96" />

      <div className="relative flex overflow-scroll">
        {indexData.projects.map((project: ProjectCardProps, index: number) => (
          <div
            key={project.handle}
            className="fixed"
            style={{ left: `${20 * index}%` }}
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
