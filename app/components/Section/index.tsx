import React, { createContext, useContext } from "react";

type Props = {
  children: React.ReactNode;
};

export const LevelContext = createContext(-1);

export default function Section({ children }: Props) {
  const level = useContext(LevelContext);
  return (
    <section className="w-full">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
