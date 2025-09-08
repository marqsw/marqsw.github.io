import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({
  className,
  ...props
}: Readonly<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return (
    <button
      className={twMerge(
        "glassy flex cursor-pointer flex-row items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm",
        className,
      )}
      {...props}
    ></button>
  );
}
