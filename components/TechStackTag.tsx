import {
  IconBrandJavascript,
  IconBrandPython,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandSwift,
  IconBrandTypescript,
} from "@tabler/icons-react";
import Tag from "./Tag";

export type TechStack =
  | "python"
  | "javascript"
  | "typescript"
  | "swift"
  | "react"
  | "react-native";

export type TechStackTagProps = {
  techStack: TechStack;
  nameVisible?: boolean;
  iconVisible?: boolean;
};

const techStackNameAndIcon = {
  python: {
    name: "Python",
    icon: IconBrandPython,
    url: "https://www.python.org/",
    colour: "#f5de70",
  },
  javascript: {
    name: "JavaScript",
    icon: IconBrandJavascript,
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
    colour: "#e8db69",
  },
  typescript: {
    name: "TypeScript",
    icon: IconBrandTypescript,
    url: "https://www.typescriptlang.org/",
    colour: "#5178c0",
  },
  swift: {
    name: "Swift",
    icon: IconBrandSwift,
    url: "https://www.swift.org/",
    colour: "#d45c44",
  },
  react: {
    name: "React",
    icon: IconBrandReact,
    url: "https://react.dev/",
    colour: "#6b97b3",
  },
  "react-native": {
    name: "React Native",
    icon: IconBrandReactNative,
    url: "https://reactnative.dev/",
    colour: "#6b97b3",
  },
};

export default function TechStackTag({
  techStack,
  nameVisible = true,
  iconVisible = true,
}: TechStackTagProps) {
  const Icon = techStackNameAndIcon[techStack].icon;
  const name = techStackNameAndIcon[techStack].name;
  const url = techStackNameAndIcon[techStack].url;
  const colour = techStackNameAndIcon[techStack].colour;

  return (
    <Tag url={url} tint={colour}>
      {iconVisible && <Icon className="" />}
      {nameVisible && <p className="text-nowrap text-sm">{name}</p>}
    </Tag>
  );
}
