import {
  TbBrandCSharp,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandLaravel,
  TbBrandMysql,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandPrisma,
  TbBrandPython,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandSwift,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVisualStudio,
  TbHtml,
} from "react-icons/tb";
import Tag from "@/components/Tag";
import {
  SiElectron,
  SiGodotengine,
  SiNumpy,
  SiPytorch,
  SiRemix,
  SiShopify,
} from "react-icons/si";
import { splitIntoNChunks } from "@/app/Helper";
import { LiaJava } from "react-icons/lia";

const tagList = [
  { icon: <TbBrandPython />, name: "Python" },
  { icon: <SiNumpy />, name: "NumPy" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <TbHtml />, name: "HTML" },
  { icon: <TbBrandCss3 />, name: "CSS" },
  { icon: <TbBrandJavascript />, name: "JavaScript" },
  { icon: <TbBrandTypescript />, name: "TypeScript" },
  { icon: <TbBrandNodejs />, name: "Node.js" },
  { icon: <TbBrandTailwind />, name: "Tailwind" },
  { icon: <TbBrandReact />, name: "React" },
  { icon: <TbBrandReactNative />, name: "React Native" },
  { icon: <TbBrandNextjs />, name: "Next.js" },
  { icon: <SiRemix />, name: "Remix" },
  { icon: <SiElectron />, name: "Electron" },
  { icon: <TbBrandPhp />, name: "PHP" },
  { icon: <TbBrandLaravel />, name: "Laravel" },
  { icon: <TbBrandMysql />, name: "MySQL" },
  { icon: <LiaJava />, name: "Java" },
  { icon: <TbBrandPrisma />, name: "Prisma" },
  { icon: <SiShopify />, name: "Shopify" },
  { icon: <TbBrandCSharp />, name: "C#" },
  { icon: <SiGodotengine />, name: "Godot Engine" },
  { icon: <TbBrandVisualStudio />, name: "Visual Basic" },
  { icon: <TbBrandSwift />, name: "Swift" },
];

const tagListChunks = splitIntoNChunks(tagList, 3);

export default function TagList() {
  return (
    <div className={"bg-glow flex w-full max-w-3xl flex-col gap-5"}>
      {tagListChunks.map((chunk, index) => {
        return (
          <div
            key={"tag-list-" + index}
            className={"w-full overflow-hidden"}
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
            }}
          >
            <div
              className={
                index % 2 ? "animate-carousel-right" : "animate-carousel-left"
              }
            >
              {Array.from({ length: 2 }).map(() =>
                chunk.map((tag) => (
                  <div key={tag.name}>
                    <Tag className={"backdrop-blur-none"}>
                      {tag.icon} <span>{tag.name}</span>
                    </Tag>
                  </div>
                )),
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
