import React from "react";
import { twMerge } from "tailwind-merge";

export default function HorizontalCard({
  className,
  style,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={twMerge("glassy rounded-3xl", className)}
      style={{ aspectRatio: 7 / 5, ...style }}
      {...props}
    />
  );
}
