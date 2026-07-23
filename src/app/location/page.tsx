import type { Metadata } from "next";
import { Location } from "@/components/Location";

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
    </main>
  );
}
