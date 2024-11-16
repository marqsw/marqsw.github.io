export default function ImageBanner({ imagePath, className }: { imagePath: string, className?: string }) {
  return (
    <div className="relative">
      <img className={`absolute blur-3xl ${className}`} src={imagePath} />

      <img
        className={`relative rounded-2xl border-2 border-gray-900 ${className}`}
        src={imagePath}
      />
    </div>
  );
}
