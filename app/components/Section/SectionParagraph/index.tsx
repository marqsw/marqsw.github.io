export default function SectionParagraph({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-left">{children}</p>;
}
