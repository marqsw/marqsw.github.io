import { NodeNextRequest } from "next/dist/server/base-http/node";
import Image from "next/image";

export default function Card({
  title,
  description,
  imagePath,
  link,
}: {
  title?: string;
  description?: string;
  imagePath?: string;
  link?: string;
}) {
  return (
    <div className="">
      <div className="absolute h-96 w-72 opacity-0 hover:opacity-100">
        <Image className="blur-3xl" src={imagePath || ""} alt="" fill={true} />
      </div>

      <a
        className={`pointer-events-none relative flex h-96 w-72 flex-col justify-end self-center rounded-3xl bg-cover bg-center text-white`}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
        href={link}
      >
        <div
          className="flex h-full w-full flex-col justify-end rounded-bl-3xl rounded-br-3xl p-5 text-left"
          style={{
            backdropFilter: "blur(10px) saturate(1.1) brightness(1.1)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
          }}
        >
          <p className="text-2xl font-black">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </a>
    </div>
  );
}
