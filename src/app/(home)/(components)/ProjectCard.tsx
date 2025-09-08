import VerticalCard from "@/components/VerticalCard";
import React from "react";
import { IconType } from "react-icons";
import Tag from "@/components/Tag";
import Button from "@/components/Button";
import { TbArrowNarrowRight } from "react-icons/tb";
import clsx from "clsx";

export default function ProjectCard({
  date,
  title,
  description,
  tag,
  coverSrc,
}: Readonly<{
  date: string;
  title: string;
  description: string;
  tag?: { icon: IconType; name: string };
  coverSrc?: string;
}>) {
  return (
    <VerticalCard
      className={clsx(
        "flex items-end bg-cover p-5",
        coverSrc && "glassy-neutral",
      )}
      style={
        coverSrc
          ? {
              backgroundImage: `url(${coverSrc})`,
            }
          : {}
      }
    >
      <div className={"flex h-full w-full flex-col justify-between"}>
        {tag ? (
          <div className={"self-end"}>
            <Tag className={clsx(coverSrc && "glassy-neutral")}>
              {tag.icon({})}
              <span className={"text-xs"}>{tag.name}</span>
            </Tag>
          </div>
        ) : (
          <div></div>
        )}
        {coverSrc && (
          <div
            className={
              "absolute bottom-0 left-0 h-3/4 w-full rounded-b-3xl saturate-130 backdrop-blur-md"
            }
            style={{
              maskImage:
                "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        )}
        <div className={"flex flex-col gap-2"}>
          <h3 className={"text-sm font-black text-neutral-300"}>{date}</h3>
          <h2 className={"text-xl font-black opacity-80"}>{title}</h2>
          <p className={"text-sm opacity-90"}>{description}</p>
          <Button className={clsx("mt-2", coverSrc && "glassy-neutral")}>
            Tell me more <TbArrowNarrowRight />
          </Button>
        </div>
      </div>
    </VerticalCard>
  );
}
