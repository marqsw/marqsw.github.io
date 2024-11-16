type Props = {
  children: React.ReactNode;
};

export default function Paragraph({ children }: Props) {
  return <div className="py-5 text-base">{children}</div>;
}
