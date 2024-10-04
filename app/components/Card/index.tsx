import Image from "next/image";


export default function Card({
  title,
  subtitle,
  label,
  description,
  imagePath,
  link,
}: {
  title?: string;
  subtitle?: string;
  label?: string;
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
        className={`pointer-events-none relative flex h-96 w-72 flex-col justify-end self-center rounded-3xl border-2 border-gray-800 bg-cover bg-center text-white`}
        style={{
          backgroundImage: `url(${imagePath})`,
        }}
      >

        {label && (
          <div className="flex flex-col items-end">
            <div className="m-3 rounded-xl  p-2 border-2 border-opacity-20 border-gray-800 backdrop-blur-3xl">
              <p className="text-xs">{label}</p>
            </div>
          </div>
        )}

        <div
          className="flex h-full w-full flex-col justify-end rounded-3xl p-5 text-left"
          style={{
            backdropFilter: "blur(10px) saturate(1.1) brightness(1.1)",
            maskImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 85%)",
          }}
        >
          <p>{subtitle}</p>
          <p className="text-2xl font-black">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
