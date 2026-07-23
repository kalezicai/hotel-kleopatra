"use client";

interface Card {
  imgUrl: string;
  alt?: string;
  linkUrl?: string;
}

interface InfiniteCarouselProps {
  cards: Card[];
}

export default function InfiniteCarousel({ cards }: InfiniteCarouselProps) {
  if (!cards || cards.length === 0) return null;

  const mid = Math.ceil(cards.length / 2);
  const topRow = cards.slice(0, mid);
  const bottomRow = cards.slice(mid);
  const duration = cards.length * 3.5;

  const renderRow = (rowCards: Card[], dir: "left" | "right") => {
    const doubled = [...rowCards, ...rowCards];
    const animName = dir === "left" ? "marquee-left" : "marquee-right";
    return (
      <div className="flex overflow-hidden select-none">
        <div
          className="flex flex-shrink-0 gap-3 md:gap-4"
          style={{
            animation: `${animName} ${duration}s linear infinite`,
          }}
        >
          {doubled.map((card, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-40 h-36 md:w-56 md:h-48 lg:w-72 lg:h-56 overflow-hidden rounded-xl md:rounded-2xl bg-chocolate/5"
            >
              <img
                src={card.imgUrl}
                alt={card.alt || ""}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4 py-6 md:py-10 overflow-hidden">
      {renderRow(topRow, "left")}
      {renderRow(bottomRow, "right")}

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
