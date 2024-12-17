"use client";

import ContactTag, { ContactTagProps } from "@/components/ContactTag";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { indexData } from "./home-data";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex justify-center gap-2">
        {indexData.contacts.map((contact: ContactTagProps) => (
          <ContactTag key={contact.platform} {...contact} />
        ))}
      </div>

      {indexData.projects.map((project: ProjectCardProps) => (
        <ProjectCard key={project.handle} {...project} />
      ))}
    </div>
  );
}
