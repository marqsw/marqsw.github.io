"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useContext } from "react";
import {
  TbBrandGithub,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbMail,
} from "react-icons/tb";
import { ScrollDisplacementContext } from "./contexts/ScrollContextProvider";

export default function NavBar() {
  const scroll = useContext(ScrollDisplacementContext);

  return (
    <motion.div
      animate={scroll <= 0 ? "active" : "inactive"}
      variants={{
        active: { scale: 1 },
        inactive: { scale: 0.5, translateY: -100 },
      }}
      transition={{ type: "spring", damping: 13, stiffness: 200 }}
      className={`${"blur-2xl"}} glassy sticky top-5 z-50 m-5 grid grid-flow-col grid-cols-3 flex-row items-center rounded-xl p-5 drop-shadow-2xl duration-400 ease-out`}
    >
      <div className="flex items-center gap-5">
        <Link className="flex gap-5 text-xl font-black" href={"/"}>
          Marquis
        </Link>
      </div>
      <div className="flex justify-center gap-10">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/blogs"}>Blogs</Link>
        <Link href={"/experience"}>Experience</Link>
      </div>

      <div className="flex items-center justify-end gap-5">
        <Link href={"https://github.com/marqsw/"}>
          <TbBrandGithub />
        </Link>
        <Link href={"https://www.linkedin.com/in/marquis-wong-80217b2ba"}>
          <TbBrandLinkedin />
        </Link>
        <Link href={""}>
          <TbBrandInstagram />
        </Link>

        <Link href={"mail:marqsw@gmail.com"}>
          <TbMail />
        </Link>
      </div>
    </motion.div>
  );
}
