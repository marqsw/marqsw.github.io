"use client";

import ContactIcon, { ContactIconProps } from "@/components/ContactIcon";
import ProjectCard, { ProjectCardProps } from "@/components/ProjectCard";
import { indexData } from "./home-data";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url("test-background-2.jpg")`,
      }}
    >
      <div className="flex justify-center gap-2">
        {indexData.contacts.map((contact: ContactIconProps) => (
          <ContactIcon key={contact.platform} {...contact} />
        ))}
      </div>

      {indexData.projects.map((project: ProjectCardProps) => (
        <ProjectCard key={project.handle} {...project} />
      ))}
    </div>
  );
}
