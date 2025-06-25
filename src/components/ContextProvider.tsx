import ScrollContextProvider from "./contexts/ScrollContextProvider";

export default function ContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ScrollContextProvider>{children}</ScrollContextProvider>;
}
