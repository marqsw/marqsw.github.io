import Link from "next/link";

// const links = [
//   { name: "About me", href: "./aboutme" },
//   { name: "Programming", href: "./programming" },
//   { name: "Engineering", href: "/engineering" },
//   { name: "Photography", href: "/photography" },
//   { name: "CGI", href: "/cgi" },
// ];

export default function Header() {
  

  const softEdgePerecentage = 40
  
  return (

    <div
      className="h-48 sticky top-0 z-50 flex w-full flex-row flex-wrap justify-center backdrop-blur-3xl"
      style={{
        maskImage:
          `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) ${softEdgePerecentage}%)`,
      }}
    >
      <div
      className="flex items-center"
      style={{
        height: `${100 - softEdgePerecentage}%`
      }}>
        <Link key="Home" href="/" className="text-3xl font-black">
          Marquis
        </Link>
        {/* <ul className="flex flex-row space-x-7 self-center">
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul> */}
      </div>
    </div>
  );
}
