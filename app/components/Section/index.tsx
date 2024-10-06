export default function Section({ children }: { children: React.ReactNode }) {
  return <div className="flex w-full flex-col gap-5">{children}</div>;
}
