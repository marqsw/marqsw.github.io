export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="w-full text-3xl font-black">{children}</p>;
}
