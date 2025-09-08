import TagList from "@/app/(home)/(components)/TagList";
import Hero from "@/app/(home)/(components)/Hero";
import CardGrid from "@/app/(home)/(components)/CardGrid";

export default function Home() {
  return (
    <div className={"flex flex-col items-center gap-20"}>
      <Hero />
      <TagList />
      <CardGrid />
    </div>
  );
}
