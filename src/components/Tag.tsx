import React, { ButtonHTMLAttributes } from "react";
import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";

export default function Tag({
  className,
  ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <Button
      {...props}
      className={twMerge(
        "flex-nowrap rounded-full px-4 text-nowrap",
        className,
      )}
    />
  );
}
