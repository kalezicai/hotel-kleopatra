import Image from "next/image";
import { Reveal } from "./Reveal";
const img = (name: string) => `/images/${name.replace(/\.jpg$/, ".webp")}`;
import { Leaf, ChefHat, Wine, Sunrise, UtensilsCrossed } from "lucide-react";

const pillars = [
  { icon: Sunrise, title: "Breakfast Buffet", text: "Sunrise spreads of fresh pastries, local fruit and strong coffee." },
  { icon: ChefHat, title: "Mediterranean Cuisine", text: "Grilled catch, olive oil and herbs straight from the coast." },
  { icon: Leaf, title: "Local & Seasonal", text: "Produce from Montenegrin farms and the morning markets." },
  { icon: Wine, title: "Al Fresco Evenings", text: "Dine beneath string lights as the sky turns gold." },
];

export function Restaurant() {
  return (
    <section id="restaurant" className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <div className="container-lux grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1">
          <Reveal>
            <span className="eyebrow">Dining</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
              A table with a <span className="text-gradient-gold italic">view to remember</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 font-manrope text-[1.02rem] leading-relaxed text-chocolate/75">
              Our restaurant is the heart of Hotel Kleopatra — a place where the day&apos;s
              freshest ingredients become simple, beautiful meals. Traditional Montenegrin
              recipes meet the flavours of the wider Mediterranean, served on a terrace
              where the sea stretches endlessly before you.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90}>
                <div className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sand-soft to-gold/25 text-gold-deep">
                    <p.icon size={20} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-chocolate">{p.title}</h3>
                    <p className="mt-1 font-manrope text-sm leading-relaxed text-chocolate/65">
                      {p.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <a href="#booking" className="btn-gold mt-9">
              <UtensilsCrossed size={16} /> Reserve a Table
            </a>
          </Reveal>
        </div>

        {/* Imagery */}
        <Reveal className="order-1 lg:order-2">
          <div className="relative grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] shadow-2xl">
              <Image
                src={img("h_kleopatra_1690483365_3156325697890199049_3594665146.jpg")}
                alt="Dining area at Hotel Kleopatra"
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="mt-10 flex flex-col gap-4">
              <div className="relative aspect-square overflow-hidden rounded-[1.75rem] shadow-2xl">
                <Image
                  src="/images/rooms/General/img_473728764.webp"
                  alt="Dining at Hotel Kleopatra"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] shadow-2xl">
                <Image
                  src="/images/rooms/General/img_475501701.webp"
                  alt="Hotel Kleopatra ambiance"
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
