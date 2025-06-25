import ScrollContextProvider from "./contexts/ScrollDisplacementContextProvider";

export default function ContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ScrollContextProvider>{children}</ScrollContextProvider>;
}
