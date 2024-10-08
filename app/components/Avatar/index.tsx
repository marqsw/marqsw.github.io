export default function Avatar({ imagePath }: { imagePath: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <div className="relative">
      <img className="absolute blur-3xl opacity-50" src={imagePath}/>
      <img className="relative rounded-full bg-center border-2 border-gray-700 border-2" src={imagePath} alt="" /></div>
  );
}
