"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React, { useContext } from "react";
import { ScrollDisplacementContext } from "./contexts/ScrollDisplacementContextProvider";

export type InternalNavLinkType = {
  name: string;
  href: string;
};

export type ExternalNavLinkType = {
  href: string;
  icon: React.ReactNode;
};

export default function NavBar({
  internalNavLinks = [],
  externalNavLinks = [],
}: Readonly<{
  internalNavLinks: InternalNavLinkType[];
  externalNavLinks: ExternalNavLinkType[];
}>) {
  const scroll = useContext(ScrollDisplacementContext);

  // const activeAnimation: TargetAndTransition = { scale: 1 };
  // const inactiveAnimation: TargetAndTransition = {
  //   scale: 0.5,
  //   translateY: -100,
  //   filter: "blur(0.5em)",
  // };

  return (
    <motion.div
      // animate={scroll <= 0 ? "active" : "inactive"}
      // variants={{
      //   active: activeAnimation,
      //   inactive: inactiveAnimation,
      // }}
      // transition={{ type: "spring", damping: 13, stiffness: 160 }}
      className={`${scroll > 0 && "blur-2xl"}} glassy sticky top-5 z-50 m-5 grid grid-flow-col grid-cols-3 flex-row items-center rounded-xl p-5 drop-shadow-xl duration-400 ease-out`}
    >
      <div className="flex items-center gap-5">
        <Link className="flex gap-5 text-xl font-black" href={"/"}>
          Marquis
        </Link>
      </div>

      <div className="flex justify-center gap-10">
        {internalNavLinks.map(({ name, href }) => (
          <Link key={name} href={href}>
            {name}
          </Link>
        ))}
      </div>

      <div className="flex items-center justify-end gap-5">
        {externalNavLinks.map(({ href, icon }) => (
          <Link key={href} target={"_blank"} href={href}>
            {icon}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
