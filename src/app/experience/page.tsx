import type { Metadata } from "next";
import { Amenities } from "@/components/Amenities";
import { Stats } from "@/components/Stats";
import { Clock, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Experience & Amenities",
  description:
    "Discover the Hotel Kleopatra experience — outdoor pool, sea-view terrace, traditional breakfast buffet, free parking, airport shuttle and family-friendly atmosphere in Ulcinj.",
  openGraph: {
    title: "Experience & Amenities · Hotel Kleopatra",
    description:
      "Outdoor pool, seaside dining, free parking, family rooms and warm Montenegrin hospitality at Hotel Kleopatra.",
  },
};

const services = [
  { name: "Reception", hours: "07:00 - 23:00", note: "Late arrival? Let us know — we will wait up for you." },
  { name: "Breakfast", hours: "07:30 - 10:00", note: "Buffet style with fresh local produce and made-to-order eggs." },
  { name: "Restaurant", hours: "12:00 - 22:00", note: "Lunch and dinner served on the sea-view terrace." },
  { name: "Pool", hours: "08:00 - 20:00", note: "Outdoor freshwater pool with sun loungers and umbrellas." },
];

export default function ExperiencePage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lux text-center">
          <span className="eyebrow">The Hotel Kleopatra Experience</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Everything you need for an{" "}
            <span className="text-gradient-gold italic">unforgettable stay</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-manrope text-chocolate/70">
            From the moment you arrive, every detail is designed for your comfort — whether
            you are here to relax by the pool, explore Ulcinj Old Town, or simply unwind
            with a sea view.
          </p>
        </div>
      </section>

      <Amenities />
      <Stats />

      {/* Hours of operation */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="container-lux">
          <div className="mx-auto max-w-3xl">
            <span className="eyebrow">Hours & Info</span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
              Plan your <span className="text-gradient-gold italic">day</span>
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.name} className="rounded-2xl border border-chocolate/8 bg-white px-6 py-5 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gold-deep" />
                    <span className="font-display text-lg text-chocolate">{s.name}</span>
                  </div>
                  <div className="mt-2 font-manrope font-semibold text-chocolate">{s.hours}</div>
                  <p className="mt-1 font-manrope text-sm text-chocolate/60">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location note */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux text-center">
          <MapPin size={24} className="mx-auto text-gold-deep" />
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Perfectly placed on the{" "}
            <span className="text-gradient-gold italic">Ulcinj Riviera</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-manrope text-chocolate/70">
            Hotel Kleopatra sits on the hillside above Ulcinj, offering sweeping views of
            the Adriatic and the Old Town. Velika Plaza beach is 3 km away, the Old Town is
            a 10-minute drive, and Ada Bojana is 7 km south.
          </p>
        </div>
      </section>
    </main>
  );
}
