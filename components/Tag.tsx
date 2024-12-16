import Link from "next/link";

type TagProps = {
  tint?: string;
  url: string;
  children: React.ReactNode;
};

export default function Tag({ tint, url, children }: TagProps) {
  console.log(tint ? "bg-" + tint : "");

  return (
    <Link
      href={url}
      className={
        "flex backdrop-blur py-1 px-3 rounded-full w-min flex-nowrap gap-2 items-center"
      }
      style={{
        borderTop: "0.5px solid rgba(211, 211, 211, 0.75)",
        borderBottom: "0.5px solid rgba(169, 169, 169, 0.75)",
      }}
    >
      {children}
    </Link>
  );
}
