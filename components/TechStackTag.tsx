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
  },
  javascript: {
    name: "JavaScript",
    icon: IconBrandJavascript,
    url: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  typescript: {
    name: "TypeScript",
    icon: IconBrandTypescript,
    url: "https://www.typescriptlang.org/",
  },
  swift: {
    name: "Swift",
    icon: IconBrandSwift,
    url: "https://www.swift.org/",
  },
  react: {
    name: "React",
    icon: IconBrandReact,
    url: "https://react.dev/",
  },
  "react-native": {
    name: "React Native",
    icon: IconBrandReactNative,
    url: "https://reactnative.dev/",
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

  return (
    <Tag url={url}>
      {iconVisible && <Icon className="" />}
      {nameVisible && <p className="text-nowrap text-sm">{name}</p>}
    </Tag>
  );
}
