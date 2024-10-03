export default function ImageBanner({ imagePath }: { imagePath: string }) {
  return (
    <div className="relative">
      <img className="absolute blur-3xl" src={imagePath} />

      <img
        className="relative rounded-2xl drop-shadow-2xl"
        src={imagePath}
      />
    </div>
  );
}
