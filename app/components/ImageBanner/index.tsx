export default function ImageBanner({ imagePath }: { imagePath: string }) {
  return (
    <div className="relative">
      <img className="absolute blur-3xl" src={imagePath} />

      <img
        className="rounded-2xl border-2 border-gray-800 drop-shadow-2xl"
        src={imagePath}
      />
    </div>
  );
}
