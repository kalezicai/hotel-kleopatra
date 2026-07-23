import type { Metadata } from "next";
import { Location } from "@/components/Location";
import { Car, Plane, Ship, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Location",
  description:
    "Find Hotel Kleopatra on the Adriatic coast of Ulcinj, Montenegro — minutes from the Old Town, Velika Plaza beach and the Bojana river. Free parking available.",
  openGraph: {
    title: "Location · Hotel Kleopatra",
    description:
      "Perched above the Adriatic in Ulcinj, Montenegro — close to Old Town, beaches and the Bojana river delta.",
  },
};

const attractions = [
  { name: "Ulcinj Old Town", dist: "3.5 km · 8 min drive", desc: "Walled medieval town with narrow streets, fortress and sea views." },
  { name: "Velika Plaza Beach", dist: "3 km · 6 min drive", desc: "Montenegro's longest sandy beach — 12 km of golden sand." },
  { name: "Ada Bojana Island", dist: "7 km · 12 min drive", desc: "River island with pristine beaches, seafood restaurants and kite surfing." },
  { name: "Bojana River", dist: "6 km · 10 min drive", desc: "Beautiful river delta perfect for boat trips, fishing and bird watching." },
  { name: "Lake Skadar", dist: "35 km · 40 min drive", desc: "National park with stunning lake scenery, monasteries and wine routes." },
  { name: "Bar & Budva", dist: "30–50 km", desc: "Coastal towns with Roman ruins, luxury marinas and vibrant nightlife." },
];

const distances = [
  { from: "Tivat Airport (TIV)", time: "75 km · 1 h 15 min" },
  { from: "Podgorica Airport (TGD)", time: "75 km · 1 h 15 min" },
  { from: "Dubrovnik Airport (DBV)", time: "80 km · 1 h 30 min" },
  { from: "Bar Ferry Port", time: "30 km · 30 min" },
  { from: "Ulcinj Bus Station", time: "2 km · 5 min" },
];

export default function LocationPage() {
  return (
    <main id="main-content">
      <div className="pt-28" />
      <section className="bg-cream py-24 md:py-32">
        <div className="container-lux text-center">
          <span className="eyebrow">Find us</span>
          <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate md:text-5xl">
            Above the Adriatic, close to{" "}
            <span className="text-gradient-gold italic">everything</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-manrope text-chocolate/70">
            Hotel Kleopatra sits on the hillside of Ulcinjs Riviera, offering panoramic
            sea views while being minutes from the Old Town, Velika Plaza beach and the
            Bojana river estuary.
          </p>
        </div>
      </section>
      <Location />

      {/* Nearby attractions */}
      <section className="bg-ivory py-20 md:py-28" id="nearby">
        <div className="container-lux">
          <span className="eyebrow">Explore Ulcinj</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            What to see and do <span className="text-gradient-gold italic">nearby</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {attractions.map((a) => (
              <div key={a.name} className="rounded-2xl border border-chocolate/8 bg-white px-6 py-6 shadow-sm">
                <MapPin size={18} className="text-gold-deep" />
                <div className="mt-3 font-display text-lg text-chocolate">{a.name}</div>
                <div className="mt-1 font-sans text-xs font-semibold uppercase tracking-wider text-gold-deep">{a.dist}</div>
                <p className="mt-2 font-manrope text-sm leading-relaxed text-chocolate/65">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting here */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container-lux">
          <span className="eyebrow">Getting here</span>
          <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate md:text-4xl">
            Your journey to{" "}
            <span className="text-gradient-gold italic">Hotel Kleopatra</span>
          </h2>
          <div className="mt-10 space-y-4">
            {distances.map((d) => (
              <div key={d.from} className="flex items-center justify-between rounded-2xl border border-chocolate/8 bg-white px-6 py-4 shadow-sm">
                <span className="font-manrope font-medium text-chocolate">{d.from}</span>
                <span className="font-manrope text-sm text-chocolate/60">{d.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 font-manrope text-sm text-chocolate/60">
            Free on-site parking is available for all guests. We can also arrange airport
            transfers upon request — just let us know your arrival time.
          </p>
        </div>
      </section>
    </main>
  );
}
