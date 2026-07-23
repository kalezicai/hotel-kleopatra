import type { Metadata } from "next";
import { Amenities } from "@/components/Amenities";
import { Stats } from "@/components/Stats";

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
    </main>
  );
}
