import Card from "./Card";

interface CardProps {
  title?: string;
  subtitle?: string;
  label?: string;
  description?: string;
  imagePath?: string;
  link?: string;
}

export default function CardGrid({ cardProps }: { cardProps: CardProps[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {cardProps.map((card) => {
        return (
          <div key={card.title}>
            <Card {...card} />
          </div>
        );
      })}
    </div>
  );
}
