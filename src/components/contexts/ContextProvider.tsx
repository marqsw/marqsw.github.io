import ScrollContextProvider from "./ScrollDisplacementContextProvider";

export default function ContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ScrollContextProvider>{children}</ScrollContextProvider>;
}
