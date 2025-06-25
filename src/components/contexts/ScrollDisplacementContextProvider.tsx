"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const ScrollDisplacementContext = createContext<number>(0);

export default function ScrollContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const prevScroll = useRef(0);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY - prevScroll.current);
      prevScroll.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollDisplacementContext.Provider value={scroll}>
      {children}
    </ScrollDisplacementContext.Provider>
  );
}
