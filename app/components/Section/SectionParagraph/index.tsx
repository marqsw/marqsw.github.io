export default function SectionParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="w-full text-left">{children}</p>;
}
