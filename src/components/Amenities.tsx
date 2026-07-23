import { Reveal } from "./Reveal";
import { amenities } from "@/lib/data";
import {
  Waves, UtensilsCrossed, Croissant, Sailboat, DoorOpen, Plane,
  SquareParking, Wifi, ConciergeBell, Users, Snowflake, Shirt,
  Wine, Sparkles, MapPinned, Sun,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Waves, UtensilsCrossed, Croissant, Sailboat, DoorOpen, Plane,
  SquareParking, Wifi, ConciergeBell, Users, Snowflake, Shirt,
  Wine, Sparkles, MapPinned, Sun,
};

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-ivory py-20 md:py-28">
      <div className="container-lux">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The Experience</span>
          <h2 className="mt-3 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Every comfort, <span className="text-gradient-gold italic">considered</span>
          </h2>
          <p className="mt-4 font-manrope text-sm text-chocolate/70">
            From the first morning coffee to the last star above the sea, nothing is
            left to chance. This is hospitality that anticipates.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {amenities.map((a, i) => {
            const Icon = iconMap[a.icon] ?? Sparkles;
            return (
              <Reveal key={a.name} delay={(i % 4) * 70}>
                <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-chocolate/8 bg-white px-5 py-6 text-center shadow-[0_18px_40px_-34px_rgba(53,32,26,0.6)] transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-[0_30px_60px_-30px_rgba(185,135,61,0.5)]">
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-sand-soft to-gold/25 text-gold-deep transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <span className="relative mt-4 font-display text-base text-chocolate">
                    {a.name}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
