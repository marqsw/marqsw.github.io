export default function LinkButton({
  link,
  children,
}: {
  link: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={link}
      className="flex flex-row items-center justify-center gap-5 rounded-full border-2 border-gray-700 px-12 py-5 backdrop-blur-3xl hover:shadow-2xl hover:shadow-gray-700"
    >
      {children}
    </a>
  );
}
