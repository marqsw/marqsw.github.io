import React from "react";
import HorizontalCard from "@/components/HorizontalCard";

export default function VerticalCard({
  style,
  ...props
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  return <HorizontalCard style={{ aspectRatio: 5 / 7, ...style }} {...props} />;
}
