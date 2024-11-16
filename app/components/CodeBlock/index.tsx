"use client";

import { Code } from "@geist-ui/core";

type Props = {
  children: React.ReactNode;
};

export default function CodeBlock({ children }: Props) {
  return (
    <div className="border-2 border-gray-700 rounded-xl p-4 my-5">
      <Code>{children}</Code>
    </div>
  );
}
