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
      <a href={link} className="absolute h-96 w-72 opacity-50 hover:opacity-80">
        <Image className="blur-3xl" src={imagePath || ""} alt="" fill={true} />
      </a>

      <div
        className={`pointer-events-none relative flex h-96 w-72 flex-col justify-end self-center rounded-3xl bg-cover bg-center text-white`}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      >
        <div
          className="flex h-full w-full flex-col justify-end rounded-3xl p-5 text-left"
          style={{
            backdropFilter: "blur(10px) saturate(1.1) brightness(1.1)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
          }}
        >
          <p className="text-2xl font-black">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
