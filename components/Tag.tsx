import Link from "next/link";

type TagProps = {
  tint?: string;
  url: string;
  children: React.ReactNode;
};

export default function Tag({ tint = "#808080", url, children }: TagProps) {
  return (
    <div className="relative">
      <Link
        href={url}
        className="absolute h-full w-full rounded-full opacity-15 transition-all duration-300 ease-out hover:opacity-40 hover:blur"
        style={{
          backgroundColor: tint,
        }}
      />
      <div
        className={
          "pointer-events-none relative flex w-min flex-nowrap items-center gap-2 rounded-full px-4 py-2 backdrop-blur"
        }
        style={{
          borderTop: "0.5px solid rgba(211, 211, 211, 0.75)",
          borderBottom: "0.5px solid rgba(169, 169, 169, 0.75)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
