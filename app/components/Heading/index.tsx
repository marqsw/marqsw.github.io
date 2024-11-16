import { useContext } from "react";
import { LevelContext } from "../Section";

type Props = {
  children: React.ReactNode;
};

const fontSizes = [
  "text-3xl",
  "text-2xl",
  "text-xl",
  "text-lg",
  "text-base",
  "text-sm",
  "text-xs",
];

export default function Heading({ children }: Props) {
  const level = useContext(LevelContext);
  const fontSize = fontSizes.at(level);

  return <div className={`w-full ${fontSize} font-black py-5`}>{children}</div>;
}
