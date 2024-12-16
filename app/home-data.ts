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
      date: new Date("7-2024"),
      description: "Master Every Board Game",
      techStack: ["python"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/AI-Chess-Engine",
      availablePlatforms: ["windows", "macos", "linux"],
    },

    {
      name: "Portfolio Website",
      handle: "portfolio-website",
      date: new Date("10-2024"),
      description: "A Warm and Cozy Home for the Projects",
      techStack: ["typescript", "react"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/marqsw.github.io",
      availablePlatforms: ["chrome", "edge", "firefox", "safari"],
    },

    {
      name: "Sensors",
      handle: "sensor-app",
      date: new Date("11-24"),
      description: "Visualise and Record Live Data",
      techStack: ["typescript", "react-native"],
      thumbnail: "",
      projectUrl: "https://github.com/marqsw/Sensors",
      availablePlatforms: ["ios", "android"],
    },

    {
      name: "MultiCam",
      handle: "multicam-app",
      date: undefined,
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
