import { ContactTagProps } from "@/components/ContactTag";
import { ProjectCardProps } from "@/components/ProjectCard";

export type IndexData = {
  contacts: ContactTagProps[];
  projects: ProjectCardProps[];
};

export const indexData: IndexData = {
  contacts: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/marquis-wong-80217b2ba/",
    },
    {
      platform: "github",
      url: "https://github.com/marqsw",
    },
    {
      platform: "email",
      url: "mailto:marqswong@gmail.com",
    },
  ],

  projects: [
    {
      name: "AI Chess Engine",
      handle: "ai-chess-engine",
      date: new Date(2024, 6),
      description: "Master Any Board Game",
      techStack: ["python"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/AI-Chess-Engine",
      availablePlatforms: ["windows", "macos", "linux"],
      coverImage: "ai-chess-engine-cover.png",
    },

    {
      name: "Portfolio Website",
      handle: "portfolio-website",
      date: new Date(2024, 9),
      description: "A Warm and Cozy Home for the Projects",
      techStack: ["html", "css", "typescript", "react"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/marqsw.github.io",
      availablePlatforms: ["chrome", "edge", "firefox", "safari"],
      coverImage: "portfolio-website-cover.png",
    },

    {
      name: "Sensors",
      handle: "sensor-app",
      date: new Date(2024, 10),
      description: "Visualise and Record Live Data",
      techStack: ["css", "typescript", "react-native"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/Sensors",
      availablePlatforms: ["ios", "android"],
      coverImage: "sensors-app-cover.gif",
    },

    {
      name: "MultiCam",
      handle: "multicam-app",
      date: new Date(2024, 12),
      description: "The Power of a Studio, in the Palm of Your Hands",
      techStack: ["swift"],
      thumbnail: "",
      projectUrl: "",
      availablePlatforms: ["ios"],
    },

    {
      name: "Finance",
      handle: "finance-app",
      date: undefined,
      description: "Summarise and Manage Your Transactions",
      techStack: ["typescript", "react-native"],
      thumbnail: "",
      projectUrl: "",
      availablePlatforms: ["ios", "android"],
    },
  ],
};
